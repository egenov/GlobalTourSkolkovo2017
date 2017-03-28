namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	public interface SkITaskTrackerParser
	{
		List<SkTaskTrackerData> Parse(string response);
	}
}