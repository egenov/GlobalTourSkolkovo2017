namespace Terrasoft.Configuration.Skolkovo
{
	using System;
	using System.Collections.Generic;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web;
	using Core;
	using Core.DB;
	using Core.Factories;
	using Quartz;
	using Quartz.Impl.Triggers;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class SkProjectJiraService
	{
		#region Properties: Private

		private UserConnection _userConnection;
		private UserConnection UserConnection
		{
			get
			{
				return _userConnection ?? (_userConnection = HttpContext.Current.Session["UserConnection"] as UserConnection);
			}
		}

		private readonly IAppSchedulerWraper _schedulerWraper = ClassFactory.Get<IAppSchedulerWraper>();

		#endregion

		#region Methods: Public

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "Sync", BodyStyle = WebMessageBodyStyle.Wrapped,
		RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void Sync(Guid projectId) {
			if (projectId == Guid.Empty) {
				throw new ArgumentException("projectId is undefined.");
			}
			var factoryItem = ClassFactory.Get<SkProjectJiraSync>(
				new ConstructorArgument("userConnection", UserConnection),
				new ConstructorArgument("projectId", projectId));
			factoryItem.Sync();
		}

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "DelaySync", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void DelaySync(Guid projectId, int durationMin) {
			if (projectId == Guid.Empty) {
				throw new ArgumentException("projectId is undefined.");
			}

			//TODO: duraion = 0, 3 options 
			IScheduler scheduler = _schedulerWraper.Instance;
			Type jobType = typeof(SkProjectJiraJob);
			IJobDetail job = _schedulerWraper.CreateClassJob(jobType.FullName, "JiraSync",
				UserConnection.Workspace.Name, UserConnection.CurrentUser.Name,
				new Dictionary<string, object>
				{
					{ "ProjectId", projectId }
				}, true);
			string jobName = jobType.Name + "_" + projectId.ToString() + "_JobTrigger";
			var trigger = new CronTriggerImpl(jobName, "JiraSync", 
				string.Format("0 0/{0} * 1/1 * ? *", durationMin));
			scheduler.ScheduleJob(job, trigger);
		}

		#endregion
	}
}
