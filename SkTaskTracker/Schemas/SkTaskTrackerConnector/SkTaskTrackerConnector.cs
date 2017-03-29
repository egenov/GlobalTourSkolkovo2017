namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public abstract class TaskTrackerConnector
	{
		public TaskTrackerConnector() {
			_parser = new TaskTrackerParser();
		}
		public TaskTrackerConnector(ITaskTrackerParser parser) {
			_parser = parser;
		}
		private readonly ITaskTrackerParser _parser;

		public abstract T GetTasks<T>(string searchCriteria);

		public T Parse<T>(string json) {
			return _parser.Parse<T>(json);
		}
	}
}