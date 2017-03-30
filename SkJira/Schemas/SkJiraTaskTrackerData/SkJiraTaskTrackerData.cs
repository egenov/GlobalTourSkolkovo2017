namespace Terrasoft.Configuration.Skolkovo
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json;
	using TaskTracker;

	[JsonConverter(typeof(JsonPathConverter))]
	public class JiraTaskTrackerData : TaskTrackerData
	{
		[JsonProperty("key"), TaskTrackerColumn("key")]
		public override string Id
		{
			get; set;
		}
		[JsonProperty("fields.issuetype.name"), TaskTrackerColumn("issuetype")]
		public override string Type
		{
			get; set;
		}
		[JsonProperty("fields.assignee.name"), TaskTrackerColumn("assignee")]
		public override string Owner
		{
			get; set;
		}
		[JsonProperty("fields.summary"), TaskTrackerColumn("summary")]
		public override string Title
		{
			get; set;
		}
		[JsonProperty("fields.description"), TaskTrackerColumn("description")]
		public override string Description
		{
			get; set;
		}
		[JsonProperty("fields.customfield_10117"), TaskTrackerColumn("customfield_10117")]
		public override decimal Estimate
		{
			get; set;
		}
	}
}