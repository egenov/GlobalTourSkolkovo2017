namespace Terrasoft.Configuration.Skolkovo
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json;
	using TaskTracker;

	[JsonConverter(typeof(JsonPathConverter))]
	public class JiraTaskTrackerData
	{
		[JsonProperty("key"), TaskTrackerColumn("key")]
		public string Id
		{
			get; set;
		}
		[JsonProperty("fields.issuetype.name"), TaskTrackerColumn("issuetype")]
		public string Type
		{
			get; set;
		}
		[JsonProperty("fields.assignee.name"), TaskTrackerColumn("assignee")]
		public string Owner
		{
			get; set;
		}
		[JsonProperty("fields.summary"), TaskTrackerColumn("summary")]
		public string Title
		{
			get; set;
		}
		[JsonProperty("fields.description"), TaskTrackerColumn("description")]
		public string Description
		{
			get; set;
		}
		[JsonProperty("fields.customfield_10117"), TaskTrackerColumn("customfield_10117")]
		public decimal Estimate
		{
			get; set;
		}
	}
}