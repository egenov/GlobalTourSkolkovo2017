namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;
	
	public class TaskTrackerParser : ITaskTrackerParser
	{
		public T Parse<T>(string json) {
			if (string.IsNullOrEmpty(json)) {
				throw new ArgumentException("json is undefined.");
			}
			try {
				return Terrasoft.Common.Json.Json.Deserialize<T>(json);
			} catch (Exception ex) {
				throw new Exception("Parsing error: " + ex.Message);
			}
		}
	}
}