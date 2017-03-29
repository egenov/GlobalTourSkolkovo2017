namespace Terrasoft.Configuration.Skolkovo.Jira
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using TaskTracker;

	public class JiraTaskTrackerParser : ITaskTrackerParser
	{
		public List<T> Parse<T>(string json) {
			if (string.IsNullOrEmpty(json)) {
				throw new ArgumentException("json is undefined.");
			}
			JiraIssueResponse<T> jiraIssueItem = null;
			try
			{
			//	jiraIssueItem = Newtonsoft.Json.JsonConvert.DeserializeObject<JiraIssueResponse<T>>(json);
				
				jiraIssueItem = Terrasoft.Common.Json.Json.Deserialize<JiraIssueResponse<T>>(json);
			} catch (Exception ex) {
				//TODO: write to log
			}
			return jiraIssueItem.Issues.ToList();
		}
	}
}