define("SkSkProjectTaskTracker1Page", [], function() {
	return {
		entitySchemaName: "SkProjectTaskTracker",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
	{
		"operation": "insert",
		"name": "SkTitleb25838d4-8044-48c1-8e47-003fe879885f",
		"values": {
			"layout": {
				"colSpan": 24,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "Header"
			},
			"bindTo": "SkTitle"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "SkKeya2b91d8a-da72-4af8-ab86-a14c3e599110",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1,
				"layoutName": "Header"
			},
			"bindTo": "SkKey"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "SkOwner7a9c4fbe-8ebc-4707-8d77-98ab761eadbf",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 1,
				"layoutName": "Header"
			},
			"bindTo": "SkOwner"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "SkType162cf85e-c538-4253-926d-18030c4f4228",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 2,
				"layoutName": "Header"
			},
			"bindTo": "SkType"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "SkEstimate22a5f8b2-5d5e-4f2e-b1ff-24f89626c8f8",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 2,
				"layoutName": "Header"
			},
			"bindTo": "SkEstimate"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "SkDescriptionabe6e247-38c6-4ebd-a27d-f269248ab001",
		"values": {
			"layout": {
				"colSpan": 24,
				"rowSpan": 3,
				"column": 0,
				"row": 3,
				"layoutName": "Header"
			},
			"bindTo": "SkDescription",
			"labelConfig": {},
			"enabled": true,
			"contentType": 0
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 5
	}
]/**SCHEMA_DIFF*/,
		methods: {},
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
	"SkEstimate": {
		"fe740014-5662-4e92-a098-fb99f56bf33a": {
			"uId": "fe740014-5662-4e92-a098-fb99f56bf33a",
			"enabled": true,
			"removed": false,
			"ruleType": 0,
			"property": 2,
			"logical": 0,
			"conditions": [
				{
					"comparisonType": 2,
					"leftExpression": {
						"type": 1,
						"attribute": "SkOwner"
					}
				}
			]
		}
	}
}/**SCHEMA_BUSINESS_RULES*/
	};
});
