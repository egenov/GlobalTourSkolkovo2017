namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Core;
	using Core.DB;
	using Core.Entities;
	using Jira;

	public class SkProjectTaskTrackerModule
	{
		public SkProjectTaskTrackerModule(UserConnection userConnection, Guid projectId) {
			_userConnection = userConnection;
			_projectId = projectId;
		}

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

		#endregion

		#region Methods: Public

		public virtual List<SkTaskTrackerData> Get(string searchCriteria) {
			SkITaskTrackerConnector connector = new SkJiraConnector(_userConnection);
			SkITaskTrackerParser parser = new SkJiraParser();
			SkTaskTracker tracker = new SkTaskTracker(connector, parser);
			return tracker.GetData(searchCriteria, null);
		}

		public virtual void Save(List<SkTaskTrackerData> data) {
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

		public virtual void Sync() {
			var searchCriteria = GetSearchCriteriaFromProject();
			if (string.IsNullOrEmpty(searchCriteria)) {
				throw new ArgumentException("searchCriteria is undefined.");
			}
			var data = Get(searchCriteria);
			Save(data);
			CalculateTotalPlanValue();
		}

		#endregion
	}
}
