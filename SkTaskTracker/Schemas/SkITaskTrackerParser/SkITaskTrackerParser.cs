namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;

	public interface ITaskTrackerParser
	{
		List<T> Parse<T>(string json);
	}
}