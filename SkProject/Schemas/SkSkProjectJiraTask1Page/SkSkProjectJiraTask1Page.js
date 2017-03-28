define("SkSkProjectJiraTask1Page", [], function() {
	return {
		entitySchemaName: "SkProjectJiraTask",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
	{
		"operation": "insert",
		"name": "SkTaskb707b2ea-00d5-4380-ae60-ce728f0fd3e3",
		"values": {
			"layout": {
				"colSpan": 24,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "Header"
			},
			"bindTo": "SkTask"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "SkEstimate0827e6af-eca0-47b0-b9a3-949928adcac5",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1,
				"layoutName": "Header"
			},
			"labelConfig": {},
			"enabled": true,
			"bindTo": "SkEstimate"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "SkOwner9a65e0eb-b57a-40aa-acc7-aa11a977036c",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 1,
				"layoutName": "Header"
			},
			"labelConfig": {},
			"enabled": true,
			"contentType": 5,
			"bindTo": "SkOwner"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 2
	}
]/**SCHEMA_DIFF*/,
		methods: {},
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/
	};
});
