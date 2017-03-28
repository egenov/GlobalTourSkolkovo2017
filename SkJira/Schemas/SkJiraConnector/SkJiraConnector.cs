namespace Terrasoft.Configuration.Jira
{
	using System;
	using System.Collections.Generic;
	using System.Net;
	using System.Text;
	using Core;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	public class SkJiraConnector : SkITaskTrackerConnector
	{
		#region Constructors: Public

		public SkJiraConnector(UserConnection userConnection) {
			_userConnection = userConnection;
			_url = (string)SystemSettings.GetValue(_userConnection, "JiraUrl");
			_login = (string)SystemSettings.GetValue(_userConnection, "JiraLogin");
			_password = (string)SystemSettings.GetValue(_userConnection, "JiraPassword");
		}

		#endregion

		#region Constants: Private

		private const string jiraApiPath = "rest/api/2";
		private const string jiraSearchQueryPath = "search?jql=";
		private const string jiraSearchFields = "issuetype,summary,description,customfield_10008,assignee";

		#endregion

		#region Properties: Private

		private readonly UserConnection _userConnection;
		private readonly string _url;
		private readonly string _login;
		private readonly string _password;

		#endregion

		#region Methods: Private

		private string GetAuthHeaderValue() {
			string loginAndPassword = _login + ":" + _password;
			var bytesValue = Encoding.UTF8.GetBytes(loginAndPassword);
			return "Basic " + Convert.ToBase64String(bytesValue);
		}

		private Uri GetQueryUri(string query, string fields) {
			// Example: 
			// http://jirademo.teamlead.ru/rest/api/2/search?jql=filter=10122&fields=issuetype,summary,customfield_10008,assignee

			var fieldsValue = string.IsNullOrEmpty(fields) ? jiraSearchFields : fields;
			return new Uri(_url + "/" + jiraApiPath + "/" + jiraSearchQueryPath +
				query + "&fields=" + fieldsValue);
		}

		private string GetQueryRequest(Uri query) {
			var client = new WebClient();
			client.Encoding = Encoding.UTF8;
			client.Headers.Add("Authorization", GetAuthHeaderValue());
			return client.DownloadString(query);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Отправка запроса поиска в Jira
		/// </summary>
		/// <param name="searchCriteria">Запрос jql</param>
		/// <returns>JSON-ответ</returns>
		public string ExecuteQuery(string searchCriteria) {
			return ExecuteQuery(searchCriteria, null);
		}

		/// <summary>
		/// Отправка запроса поиска в Jira 
		/// </summary>
		/// <param name="searchCriteria">Запрос jql</param>
		/// <param name="fields">Список полей в ответе</param>
		/// <returns>JSON-ответ</returns>
		public string ExecuteQuery(string searchCriteria, string fields) {
			if (string.IsNullOrEmpty(searchCriteria)) {
				throw new ArgumentException("query is undefined.");
			}
			Uri queryUri = GetQueryUri(searchCriteria, fields);
			return GetQueryRequest(queryUri);
		}

		#endregion
	}
}