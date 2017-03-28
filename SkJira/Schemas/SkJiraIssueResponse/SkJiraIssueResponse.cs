namespace Terrasoft.Configuration.Jira
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json;

	public class JiraIssueResponse
	{
		[JsonProperty("total")]
		public int Total
		{
			get;
			set;
		}
		[JsonProperty("issues")]
		public JiraIssureResponseItem[] Issues
		{
			get;
			set;
		}
	}

	public class JiraIssureResponseItem
	{
		[JsonProperty("key")]
		public string Key
		{
			get;
			set;
		}
		[JsonProperty("fields")]
		public JiraIssureResponseItemField Fields
		{
			get;
			set;
		}
	}

	public class JiraIssureResponseItemField
	{
		[JsonProperty("summary")]
		public string Summary
		{
			get;
			set;
		}
		[JsonProperty("description")]
		public string Description
		{
			get;
			set;
		}
		[JsonProperty("issuetype")]
		public JiraIssureResponseItemLookup IssueType
		{
			get;
			set;
		}
		[JsonProperty("customfield_10008")]
		public decimal Estimate
		{
			get;
			set;
		}
		[JsonProperty("assignee")]
		public JiraIssureResponseItemLookup Assignee
		{
			get;
			set;
		}
	}

	public class JiraIssureResponseItemLookup
	{
		[JsonProperty("id")]
		public int Id
		{
			get;
			set;
		}
		[JsonProperty("name")]
		public string Name
		{
			get;
			set;
		}
		[JsonProperty("key")]
		public string Key
		{
			get;
			set;
		}
	}
}