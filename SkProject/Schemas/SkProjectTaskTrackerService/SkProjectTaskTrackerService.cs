namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web;
	using Core;
	using Core.DB;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class SkProjectTaskTrackerService
	{
		#region Properties: Private

		/// <summary>
		/// Пользовательское подключение
		/// </summary>
		private UserConnection _userConnection;
		private UserConnection UserConnection
		{
			get
			{
				return _userConnection ?? (_userConnection = HttpContext.Current.Session["UserConnection"] as UserConnection);
			}
		}

		#endregion

		#region Methods: Private

		private void UpdateWorkResourceElementPlan(Guid projectId) {
			using (var dbExecutor = UserConnection.EnsureDBConnection()) {
				new Update(UserConnection, "WorkResourceElement")
					.Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
					.Set("PlanningWork", new Select(UserConnection)
						.Column(Func.Sum("SkEstimate"))
						.From("SkProjectTaskTracker")
						.Where("SkProjectId").In(Column.Parameters(projectId))
					)
					.Where("ProjectId").IsEqual(Column.Parameter(projectId))
					.Execute(dbExecutor);
			}
		}

		#endregion

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "CalculateTotalPlanValue", BodyStyle = WebMessageBodyStyle.Wrapped,
		RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void CalculateTotalPlanValue(Guid projectId) {
			UpdateWorkResourceElementPlan(projectId);
		}
	}
}