namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;
	
	public abstract class TaskTrackerData
	{
		public abstract string Id
		{
			get; set;
		}
		public abstract string Type
		{
			get; set;
		}
		public abstract string Owner
		{
			get; set;
		}
		public abstract string Title
		{
			get; set;
		}
		public abstract string Description
		{
			get; set;
		}
		public abstract decimal Estimate
		{
			get; set;
		}
	}
}