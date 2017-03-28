namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	public class SkTaskTrackerData
	{
		/// <summary>
		/// ���� ������
		/// </summary>
		public string Id
		{
			get; set;
		}
		/// <summary>
		/// ���
		/// </summary>
		public string Type
		{
			get; set;
		}
		/// <summary>
		/// �������������
		/// </summary>
		public string Owner
		{
			get; set;
		}
		/// <summary>
		/// ���������
		/// </summary>
		public string Title
		{
			get; set;
		}
		/// <summary>
		/// ��������
		/// </summary>
		public string Description
		{
			get; set;
		}
		/// <summary>
		/// ������
		/// </summary>
		public decimal Estimate
		{
			get; set;
		}
	}
}