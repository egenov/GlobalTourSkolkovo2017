namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public class TaskTrackerColumnAttribute : Attribute
	{
		#region Constructors: Public

		public TaskTrackerColumnAttribute() {

		}
		public TaskTrackerColumnAttribute(string columnName) {
			ColumnName = columnName;
		}

		#endregion

		#region Properties: Public

		public string ColumnName
		{
			get; set;
		}

		#endregion
	}
}