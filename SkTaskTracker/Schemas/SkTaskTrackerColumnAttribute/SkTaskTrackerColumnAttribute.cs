namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public class TaskTrackerColumnAttribute : Attribute
	{
		public TaskTrackerColumnAttribute() {
		
		}
		public TaskTrackerColumnAttribute(string columnName) {
			ColumnName = columnName;
		}

		public string ColumnName
		{
			get; set;
		}
	}
}