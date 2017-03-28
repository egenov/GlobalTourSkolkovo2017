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
		#region Methods: Public

		public void UpdateWorkResourceElementPlan(Guid projectId, UserConnection userConnection) {
			using (var dbExecutor = userConnection.EnsureDBConnection()) {
				new Update(userConnection, "WorkResourceElement")
					.Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
					.Set("PlanningWork", new Select(userConnection)
						.Column(Func.Sum("SkEstimate"))
						.From("SkProjectTaskTracker")
						.Where("SkProjectId").In(Column.Parameters(projectId))
					)
					.Where("ProjectId").IsEqual(Column.Parameter(projectId))
					.Execute(dbExecutor);
			}
		}
		
		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "CalculateTotalPlanValue", BodyStyle = WebMessageBodyStyle.Wrapped,
		RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void CalculateTotalPlanValue(Guid projectId) {
			if (projectId == Guid.Empty) {
				throw new ArgumentException("projectId is undefined.");
			}
			var userConnection = HttpContext.Current.Session["UserConnection"] as UserConnection;
			UpdateWorkResourceElementPlan(projectId, userConnection);
		}

		#endregion
	}
}