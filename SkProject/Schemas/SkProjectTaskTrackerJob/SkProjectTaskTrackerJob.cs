namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Core;
	using Core.Factories;
	using Terrasoft.Core.Scheduler;

	public class SkProjectTaskTrackerJob : IJobExecutor
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
			SkProjectTaskTrackerModule tracker = ClassFactory.Get<SkProjectTaskTrackerModule>(
				new ConstructorArgument("userConnection", userConnection),
				new ConstructorArgument("projectId", projectId));
			tracker.Sync();
		}

		#endregion
	}
}
