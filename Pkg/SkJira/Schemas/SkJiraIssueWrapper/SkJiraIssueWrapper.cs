namespace Terrasoft.Configuration.Skolkovo.Jira
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json;

	public class JiraIssueWrapper<T>
	{
		[JsonProperty("total")]
		public int Total
		{
			get;
			set;
		}
		
		[JsonProperty("issues")]
		public T[] Issues
		{
			get;
			set;
		}
	}
}