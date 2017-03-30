namespace Terrasoft.Configuration.Skolkovo.TaskTracker
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;

	public class JsonPathConverter : JsonConverter
	{
		#region Methods: Public

		public override object ReadJson(JsonReader reader, Type objectType,
									object existingValue, JsonSerializer serializer) {
			JObject jo = JObject.Load(reader);
			object targetObj = Activator.CreateInstance(objectType);
			foreach (PropertyInfo prop in objectType.GetProperties().Where(p => p.CanRead && p.CanWrite)) {
				JsonPropertyAttribute att = prop.GetCustomAttributes(true).OfType<JsonPropertyAttribute>().FirstOrDefault();
				string jsonPath = (att != null ? att.PropertyName : prop.Name);
				JToken token = jo.SelectToken(jsonPath);
				if (token != null && token.Type != JTokenType.Null) {
					object value;
					using (JTokenReader jsonReader = new JTokenReader(token)) {
						value = serializer.Deserialize(jsonReader, prop.PropertyType);
					}
					prop.SetValue(targetObj, value, null);
				}
			}
			return targetObj;
		}

		public override bool CanConvert(Type objectType) {
			return true;
		}

		public override bool CanWrite
		{
			get
			{
				return false;
			}
		}

		public override void WriteJson(JsonWriter writer, object value,
									   JsonSerializer serializer) {
			throw new NotImplementedException();
		}

		#endregion
	}
}