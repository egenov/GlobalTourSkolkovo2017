namespace Terrasoft.Configuration.Skolkovo.Jira
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Net;
	using System.Reflection;
	using System.Text;
	using Core;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;
	using TaskTracker;

	public class TaskTrackerJiraConnector : ITaskTrackerConnector
	{
		#region Constructors: Public

		public TaskTrackerJiraConnector(UserConnection userConnection) {
			_userConnection = userConnection;
			Parser = new JiraTaskTrackerParser();
		}

		#endregion

		#region Constants: Private

		private const string jiraApiPath = "rest/api/2";
		private const string jiraSearchQueryPath = "search?jql=";

		#endregion

		#region Properties: Private

		private readonly UserConnection _userConnection;
		private string _url;
		private string _login;
		private string _password;

		#endregion

		#region Properties: Public

		public ITaskTrackerParser Parser
		{
			get; set;
		}

		public string Url
		{
			get
			{
				return _url ?? (string)SystemSettings.GetValue(_userConnection, "JiraUrl");
			}
			set
			{
				_url = value;
			}
		}

		public string Login
		{
			get
			{
				return _login ?? (string)SystemSettings.GetValue(_userConnection, "JiraLogin");
			}
			set
			{
				_login = value;
			}
		}

		public string Password
		{
			get
			{
				return _password ?? (string)SystemSettings.GetValue(_userConnection, "JiraPassword");
			}
			set
			{
				_password = value;
			}
		}

		#endregion

		#region Methods: Private

		private string GetAuthHeaderValue() {
			string loginAndPassword = Login + ":" + Password;
			var bytesValue = Encoding.UTF8.GetBytes(loginAndPassword);
			return "Basic " + Convert.ToBase64String(bytesValue);
		}

		private Uri MakeQueryUri(string query, string fields) {
			// Example: 
			// TODO: params description
			// http://jirademo.teamlead.ru/rest/api/2/search?jql=filter=10122&fields=issuetype,summary,customfield_10008,assignee

			return new Uri(Url + "/" + jiraApiPath + "/" + jiraSearchQueryPath +
				query + "&fields=" + fields);
		}

		private string MakeSearchColumnsQuery<T>() {
			string columnsQuery = string.Empty;
			foreach (PropertyInfo prop in typeof(T).GetProperties().Where(p => p.CanRead && p.CanWrite)) {
				TaskTrackerColumnAttribute att = prop.GetCustomAttributes(true).OfType<TaskTrackerColumnAttribute>().FirstOrDefault();
				if (att != null) {
					columnsQuery += att.ColumnName + ",";
				}
			}
			return string.IsNullOrEmpty(columnsQuery) ? string.Empty : columnsQuery.Substring(0, columnsQuery.Length - 1);
		}

		private string SendGetQuery(Uri query) {
			var client = new WebClient();
			client.Encoding = Encoding.UTF8;
			client.Headers.Add("Authorization", GetAuthHeaderValue());
			return client.DownloadString(query);
		}
		
		#endregion

		#region Methods: Public

		/// <summary>
		/// Get tasks from Jira 
		/// </summary>
		/// <param name="searchCriteria">jql query</param>
		/// <returns>Task items</returns>
		public List<T> GetTasks<T>(string searchCriteria) {
			if (string.IsNullOrEmpty(searchCriteria)) {
				throw new ArgumentException("query is undefined.");
			}
			string columnsQuery = MakeSearchColumnsQuery<T>();
			Uri queryUri = MakeQueryUri(searchCriteria, columnsQuery);
			var json = SendGetQuery(queryUri);
			return Parser.Parse<T>(json);
		}

		#endregion
	}
}