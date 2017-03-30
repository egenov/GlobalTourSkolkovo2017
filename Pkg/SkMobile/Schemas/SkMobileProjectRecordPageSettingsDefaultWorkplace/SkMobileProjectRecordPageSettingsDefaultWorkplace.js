[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "Project",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionProject_caption": "Лента",
				"primaryColumnSetProject_caption": "Основная информация",
				"SkSchema1DetailStandardDetailProject_caption": "Задачи команды разработки"
			},
			"settingsType": "RecordPage",
			"operation": "insert"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionProject_caption",
			"entitySchemaName": "SocialMessage",
			"showForVisibleModule": true,
			"filter": {
				"detailColumn": "EntityId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "SkSchema1DetailStandardDetail",
		"values": {
			"caption": "SkSchema1DetailStandardDetailProject_caption",
			"entitySchemaName": "SkProjectTaskTracker",
			"filter": {
				"detailColumn": "SkProject",
				"masterColumn": "Id"
			},
			"detailSchemaName": "SkSchema1Detail",
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Project",
			"caption": "primaryColumnSetProject_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "2d87acb5-5ca4-4fcd-a1ba-66e493b61e12",
		"values": {
			"row": 0,
			"content": "Название",
			"columnName": "Name",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "a0e409ec-c651-4c59-87fd-5273c4c7082c",
		"values": {
			"row": 1,
			"content": "Тип записи проекта",
			"columnName": "ProjectEntryType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "1699a570-49e6-4943-863b-6fe503a4e61e",
		"values": {
			"row": 2,
			"content": "Ответственный",
			"columnName": "Owner",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "704fd8c6-26b6-494c-8322-3e30626b126c",
		"values": {
			"row": 3,
			"content": "Состояние",
			"columnName": "Status",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 3
	}
]