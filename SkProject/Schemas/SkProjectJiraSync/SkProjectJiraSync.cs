namespace Terrasoft.Configuration.Skolkovo
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Core;
	using Core.DB;
	using Core.Entities;
	using Skolkovo.Jira;
	using Skolkovo.TaskTracker;

	public class SkProjectJiraSync
	{
		#region Constructors: Public

		public SkProjectJiraSync(UserConnection userConnection, Guid projectId) {
			_userConnection = userConnection;
			_projectId = projectId;
		}

		#endregion

		#region Properties: Private

		private readonly UserConnection _userConnection;
		private readonly Guid _projectId;

		#endregion

		#region Methods: Private

		private string GetSearchCriteriaFromProject() {
			Select select = new Select(_userConnection)
				.Column("SkJiraQueryFilter")
				.From("Project")
				.Where("Id").IsEqual(Column.Const(_projectId)) as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				using (var dataReader = select.ExecuteReader(dbExecutor)) {
					if (dataReader.Read()) {
						return (string)dataReader["SkJiraQueryFilter"];
					}
				}
			}
			return string.Empty;
		}

		private void CalculateTotalPlanValue() {
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				new Update(_userConnection, "WorkResourceElement")
					.Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
					.Set("PlanningWork", new Select(_userConnection)
						.Column(Func.Sum("SkEstimate"))
						.From("SkProjectTaskTracker")
						.Where("SkProjectId").In(Column.Parameters(_projectId))
					)
					.Where("ProjectId").IsEqual(Column.Parameter(_projectId))
					.Execute(dbExecutor);
			}
		}

		private void Save(List<JiraTaskTrackerData> data) {
			var schema = _userConnection.EntitySchemaManager.GetInstanceByName("SkProjectTaskTracker");
			var esq = new EntitySchemaQuery(schema);
			esq.AddAllSchemaColumns();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				"SkProject", _projectId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				"SkKey", data.Select(x => x.Id).Cast<object>()));
			var entityCollection = esq.GetEntityCollection(_userConnection);
			List<string> foundKeys = new List<string>();
			foreach (var entityCollectionItem in entityCollection) {
				var key = entityCollectionItem.GetTypedColumnValue<string>("SkKey");
				foundKeys.Add(key);
				var trackerData = data.Where(x => x.Id == key).FirstOrDefault();
				if (trackerData != null) {
					entityCollectionItem.SetColumnValue("SkTitle", trackerData.Title);
					entityCollectionItem.SetColumnValue("SkType", trackerData.Type);
					entityCollectionItem.SetColumnValue("SkOwner", trackerData.Owner);
					entityCollectionItem.SetColumnValue("SkDescription", trackerData.Description);
					entityCollectionItem.SetColumnValue("SkEstimate", trackerData.Estimate);
				}
				entityCollectionItem.Save();
			}

			foreach (var item in data.Where(x => !foundKeys.Contains(x.Id))) {
				var entity = schema.CreateEntity(_userConnection);
				entity.SetDefColumnValues();
				entity.SetColumnValue("SkProjectId", _projectId);
				entity.SetColumnValue("SkKey", item.Id);
				entity.SetColumnValue("SkTitle", item.Title);
				entity.SetColumnValue("SkType", item.Type);
				entity.SetColumnValue("SkOwner", item.Owner);
				entity.SetColumnValue("SkDescription", item.Description);
				entity.SetColumnValue("SkEstimate", item.Estimate);
				entity.Save();
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Synchronization Jira Tasks
		/// </summary>
		public virtual void Sync() {
			// Get search criteria from project
			var searchCriteria = GetSearchCriteriaFromProject();
			if (string.IsNullOrEmpty(searchCriteria)) {
				throw new ArgumentException("searchCriteria is undefined.");
			}
			// Get Tasks from Jira
			var jiraConnector = new TaskTrackerJiraConnector(_userConnection);
			var tracker = new TaskTracker.TaskTracker(jiraConnector);
			var tasks = tracker.GetTasks<JiraTaskTrackerData>(searchCriteria);
			// Save tasks 
			Save(tasks);
			// Calculate total estimation
			CalculateTotalPlanValue();
		}

		#endregion
	}
}
