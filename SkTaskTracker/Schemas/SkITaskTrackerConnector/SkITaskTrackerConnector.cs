namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public interface ITaskTrackerConnector
	{
		ITaskTrackerParser Parser { get; set; }
		List<T> GetTasks<T>(string searchCriteria);
	}
}