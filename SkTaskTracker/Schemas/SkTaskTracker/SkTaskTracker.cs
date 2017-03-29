namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public class TaskTracker
	{
		#region Constructors: Public

		public TaskTracker(ITaskTrackerConnector connector) {
			_connector = connector;
		}

		#endregion

		#region Fields: Private

		private readonly ITaskTrackerConnector _connector;

		#endregion

		#region Methods: Public

		public List<T> GetTasks<T>(string searchCriteria) {
			return _connector.GetTasks<T>(searchCriteria);
		}

		#endregion
	}
}