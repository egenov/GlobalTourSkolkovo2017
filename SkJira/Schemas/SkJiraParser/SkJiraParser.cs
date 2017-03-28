namespace Terrasoft.Configuration.Jira
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json;
	using Terrasoft.Configuration;

	public class SkJiraParser : SkITaskTrackerParser
	{
		private JiraIssueResponse ParseJiraResponse(string jiraResponse) {
			if (string.IsNullOrEmpty(jiraResponse)) {
				throw new ArgumentException("jiraResponse is undefined.");
			}
			JiraIssueResponse jiraIssueItem = null;
			try {
				jiraIssueItem = JsonConvert.DeserializeObject<JiraIssueResponse>(jiraResponse);
			} catch (Exception ex) {
				//TODO: write to log
			}
			return jiraIssueItem;
		}

		public List<SkTaskTrackerData> Parse(string response) {
			List<SkTaskTrackerData> result = new List<SkTaskTrackerData>();
			var jiraResponse = ParseJiraResponse(response);
			if (jiraResponse == null) {
				return result;
			}
			foreach (var jiraIssureResponseItem in jiraResponse.Issues) {
				var trackerItem =
					new SkTaskTrackerData() {
						Id = jiraIssureResponseItem.Key,
						Type = jiraIssureResponseItem.Fields.IssueType.Name,
						Title = jiraIssureResponseItem.Fields.Summary,
						Description = jiraIssureResponseItem.Fields.Description,
						Estimate = jiraIssureResponseItem.Fields.Estimate
					};
				if (jiraIssureResponseItem.Fields.Assignee != null) {
					trackerItem.Owner = jiraIssureResponseItem.Fields.Assignee.Name;
				}
				result.Add(trackerItem);
			}
			return result;
		}
	}
}