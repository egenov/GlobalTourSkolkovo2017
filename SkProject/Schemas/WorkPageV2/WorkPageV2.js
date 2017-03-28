define("WorkPageV2", [], function() {
	return {
		entitySchemaName: "Project",
		details: /**SCHEMA_DETAILS*/{
	"SkSchema1Detail60487f20": {
		"schemaName": "SkSchema1Detail",
		"entitySchemaName": "SkProjectTaskTracker",
		"filter": {
			"detailColumn": "SkProject",
			"masterColumn": "Id"
		}
	}
}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
	{
		"operation": "merge",
		"name": "Name",
		"values": {
			"layout": {
				"colSpan": 24,
				"rowSpan": 1,
				"column": 0,
				"row": 0
			}
		}
	},
	{
		"operation": "merge",
		"name": "Status",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1
			}
		}
	},
	{
		"operation": "merge",
		"name": "Owner",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 1
			}
		}
	},
	{
		"operation": "merge",
		"name": "Account",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0
			}
		}
	},
	{
		"operation": "merge",
		"name": "Contact",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 0
			}
		}
	},
	{
		"operation": "merge",
		"name": "ActualCompletion",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1
			}
		}
	},
	{
		"operation": "merge",
		"name": "IsAutoCalcCompletion",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 1
			}
		}
	},
	{
		"operation": "merge",
		"name": "StartDate",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 2
			}
		}
	},
	{
		"operation": "merge",
		"name": "getDurationByMask",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 2
			}
		}
	},
	{
		"operation": "merge",
		"name": "EndDate",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 3
			}
		}
	},
	{
		"operation": "merge",
		"name": "Deadline",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 3
			}
		}
	},
	{
		"operation": "merge",
		"name": "ParentProject",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0
			}
		}
	},
	{
		"operation": "move",
		"name": "ParentProject",
		"parentName": "LinksControlBlock",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "merge",
		"name": "Supplier",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 0
			}
		}
	},
	{
		"operation": "insert",
		"name": "HistoryTabGroupaed0f9c0",
		"values": {
			"caption": {
				"bindTo": "Resources.Strings.HistoryTabGroupaed0f9c0GroupCaption"
			},
			"itemType": 15,
			"markerValue": "added-group",
			"items": []
		},
		"parentName": "HistoryTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "HistoryTabGridLayout9ac5b7da",
		"values": {
			"itemType": 0,
			"items": []
		},
		"parentName": "HistoryTabGroupaed0f9c0",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "SkJiraQueryFilter9a580f70-d17d-4abb-b71a-bdef65b54d60",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "HistoryTabGridLayout9ac5b7da"
			},
			"bindTo": "SkJiraQueryFilter"
		},
		"parentName": "HistoryTabGridLayout9ac5b7da",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "SkSchema1Detail60487f20",
		"values": {
			"itemType": 2,
			"markerValue": "added-detail"
		},
		"parentName": "HistoryTab",
		"propertyName": "items",
		"index": 1
	}
]/**SCHEMA_DIFF*/,
		methods: {},
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/
	};
});
