[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "SkProjectTaskTracker",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionSkProjectTaskTracker_caption": "Лента",
				"primaryColumnSetSkProjectTaskTracker_caption": "Основная информация"
			},
			"settingsType": "RecordPage",
			"operation": "insert"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionSkProjectTaskTracker_caption",
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
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "SkProjectTaskTracker",
			"caption": "primaryColumnSetSkProjectTaskTracker_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "3bbaf8ff-84e9-42bc-94c6-c86307a12b99",
		"values": {
			"row": 0,
			"content": "Проект",
			"columnName": "SkProject",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "4d213e56-325f-43f1-bc0c-edab78c2679d",
		"values": {
			"row": 1,
			"content": "Заголовок",
			"columnName": "SkTitle",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	}
]