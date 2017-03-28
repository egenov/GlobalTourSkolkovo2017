namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	public class SkTaskTrackerData
	{
		/// <summary>
		/// Ключ задачи
		/// </summary>
		public string Id
		{
			get; set;
		}
		/// <summary>
		/// Тип
		/// </summary>
		public string Type
		{
			get; set;
		}
		/// <summary>
		/// Ответственный
		/// </summary>
		public string Owner
		{
			get; set;
		}
		/// <summary>
		/// Заголовок
		/// </summary>
		public string Title
		{
			get; set;
		}
		/// <summary>
		/// Описание
		/// </summary>
		public string Description
		{
			get; set;
		}
		/// <summary>
		/// Оценка
		/// </summary>
		public decimal Estimate
		{
			get; set;
		}
	}
}