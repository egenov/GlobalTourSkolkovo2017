define("ProjectStructureDetailV2", ["css!SkProjectPageV2CSS", "SkGantComponent"],
	function() {
		return {
			attributes: {

				"IsDiagramMode": { dataValueType: Terrasoft.DataValueType.BOOLEAN },

				"ProjectStructure": { dataValueType: Terrasoft.DataValueType.COLLECTION }

			},
			methods: {

				constructor: function() {
					this.callParent(arguments);
					this.set("ProjectStructure", Ext.create("Terrasoft.BaseViewModelCollection"));
				},

				changeView: function() {
					var select = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "Project"
					});
					select.addColumn("Id");
					select.addColumn("EndDate");
					select.addColumn("Name");
					select.addColumn("ParentProject");
					var orderColumn = select.addColumn("StartDate");
					orderColumn.orderPosition = 0;
					orderColumn.orderDirection = this.Terrasoft.OrderDirection.ASC;
					var visible = this.get("IsDiagramMode");
					this.set("IsDiagramMode", !visible);
					select.getEntityCollection(function(response) {
						var responseCollection = response.collection;
						if (responseCollection.getCount() > 0) {
							var collection = this.get("ProjectStructure");
							collection.loadAll(responseCollection);
						}
					}, this);
				}

			},
			diff: /**SCHEMA_DIFF*/[
				// GRID
				{
					"operation": "merge",
					"name": "DataGrid",
					"values": {
						"visible": {
							bindTo: "IsDiagramMode",
							bindConfig: {
								converter: function(value) {
									return !value;
								}
							}
						}
					}
				},
				// BUTTON
				{
					"operation": "insert",
					"name": "GanttButton",
					"parentName": "Detail",
					"propertyName": "tools",
					"index": 5,
					"values": {
						"itemType": Terrasoft.ViewItemType.BUTTON,
						"click": {"bindTo": "changeView"},
						"caption": "Timeline"
					}
				},
				// CONTAINER
				{
					"operation": "insert",
					"name": "GanttContainer",
					"parentName": "Detail",
					"propertyName": "items",
					"index": 5,
					"values": {
						"id": "GanttDiagramContainer",
						"itemType": Terrasoft.ViewItemType.CONTAINER,
						"items": []
					}
				},
				// GANTT
				{
					"operation": "insert",
					"name": "GantComponent",
					"parentName": "GanttContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.COMPONENT,
						"className": "Terrasoft.Gantt",
						"collection": { "bindTo": "ProjectStructure" },
						"visible": {"bindTo": "IsDiagramMode"}
					}
				}
			]/**SCHEMA_DIFF*/
		};
	}
);
