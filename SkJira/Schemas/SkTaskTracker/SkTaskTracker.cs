namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	public class SkTaskTracker
	{
		#region Constructors: Public

		public SkTaskTracker(SkITaskTrackerConnector connector, SkITaskTrackerParser parser) {
			_connector = connector;
			_parser = parser;
		}

		#endregion

		#region Fields: Private

		private readonly SkITaskTrackerConnector _connector;
		private readonly SkITaskTrackerParser _parser;

		#endregion

		#region Methods: Public

		public List<SkTaskTrackerData> GetData(string searchCriteria, string fields) {
			var response = _connector.ExecuteQuery(searchCriteria, fields);
			return _parser.Parse(response);
		}

		#endregion
	}
}