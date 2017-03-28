namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	public interface SkITaskTrackerConnector
	{
		string ExecuteQuery(string searchCriteria);
		string ExecuteQuery(string searchCriteria, string fields);
	}
}