define("ContactPageV2", [],
function() {
	return {

		methods: {
			startGlobalTour: function() {
				this.showInformationDialog("Welcome from page!");
			}
		},

		details: /**SCHEMA_DETAILS*/{
		}/**SCHEMA_DETAILS*/,

		diff: /**SCHEMA_DIFF*/[
			// BUTTON
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsContainer1",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"caption": "Skolkovo 2017",
					"click": {"bindTo": "startGlobalTour"}
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsContainer2",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.RED,
					"caption": "Skolkovo 2018",
					"click": {"bindTo": "startGlobalTour"}
				}
			},
			{
				"operation": "merge",
				"name": "PhotoTimeZoneContainer",
				"values": {
					"visible": false
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
