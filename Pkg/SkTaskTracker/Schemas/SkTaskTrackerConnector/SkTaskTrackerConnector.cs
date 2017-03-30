namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public abstract class TaskTrackerConnector
	{
		#region Constructors: Public

		public TaskTrackerConnector() {
			_parser = new TaskTrackerParser();
		}
		public TaskTrackerConnector(ITaskTrackerParser parser) {
			_parser = parser;
		}

		#endregion

		#region Properties: Private

		private readonly ITaskTrackerParser _parser;

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Parse json to TaskTracker mapper 
		/// </summary>
		/// <typeparam name="T">TaskTracker mapper</typeparam>
		/// <param name="json">json structure</param>
		/// <returns>TaskTracker mapper</returns>
		protected T Parse<T>(string json) {
			return _parser.Parse<T>(json);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Get Tasks from TaskTracker system
		/// </summary>
		/// <typeparam name="T">TaskTracker mapper</typeparam>
		/// <param name="searchCriteria">Search criteria</param>
		/// <returns>TaskTracker mapper</returns>
		public abstract T GetTasks<T>(string searchCriteria);

		#endregion
	}
}