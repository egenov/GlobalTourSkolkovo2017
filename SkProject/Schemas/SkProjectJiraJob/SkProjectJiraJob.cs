namespace Terrasoft.Configuration.Skolkovo
{
	using System;
	using System.Collections.Generic;
	using Core;
	using Core.Factories;
	using Terrasoft.Core.Scheduler;

	public class SkProjectJiraJob : IJobExecutor
	{
		#region Methods: Public

		public void Execute(UserConnection userConnection, IDictionary<string, object> parameters) {
			if (parameters == null) {
				return;
			}
			object projectId;
			if (!parameters.TryGetValue("ProjectId", out projectId)) {
				return;
			}
			var factoryItem = ClassFactory.Get<SkProjectJiraSync>(
				new ConstructorArgument("userConnection", userConnection),
				new ConstructorArgument("projectId", projectId));
			factoryItem.Sync();
		}

		#endregion
	}
}
