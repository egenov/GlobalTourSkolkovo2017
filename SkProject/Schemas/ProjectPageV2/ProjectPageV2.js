define("ProjectPageV2", [], function() {
	return {
		entitySchemaName: "Project",
		details: /**SCHEMA_DETAILS*/{
	"SkSchema2Detail58983061": {
		"schemaName": "SkSchema2Detail",
		"entitySchemaName": "SkProjectTaskTracking",
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
		"operation": "insert",
		"name": "SkJiraQueryFilter33e43ffa-0c8f-4c51-bd46-f8b4cac51ba8",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 2,
				"layoutName": "Header"
			},
			"labelConfig": {},
			"enabled": true,
			"bindTo": "SkJiraQueryFilter"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 3
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
		"name": "Type",
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
		"name": "IsAutoCalcCompletion",
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
		"operation": "move",
		"name": "IsAutoCalcCompletion",
		"parentName": "GeneralInfoBlock",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "merge",
		"name": "StartDate",
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
		"operation": "move",
		"name": "StartDate",
		"parentName": "GeneralInfoBlock",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "merge",
		"name": "getDurationByMask",
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
		"operation": "move",
		"name": "getDurationByMask",
		"parentName": "GeneralInfoBlock",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "merge",
		"name": "EndDate",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 4
			}
		}
	},
	{
		"operation": "move",
		"name": "EndDate",
		"parentName": "GeneralInfoBlock",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "merge",
		"name": "Deadline",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 4
			}
		}
	},
	{
		"operation": "merge",
		"name": "Opportunity",
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
		"name": "Opportunity",
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
		"name": "SkSchema2Detail58983061",
		"values": {
			"itemType": 2,
			"markerValue": "added-detail"
		},
		"parentName": "HistoryTab",
		"propertyName": "items",
		"index": 0
	}
]/**SCHEMA_DIFF*/,
		methods: {},
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/
	};
});
