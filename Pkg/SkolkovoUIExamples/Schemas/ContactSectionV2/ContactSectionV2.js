define("ContactSectionV2", ["ContactSectionV2Resources", "SkGravatarViewModel", "css!SkCSS"], 
	function(resources) {
	return {

		// MENU DYNAMIC
		attributes: {
			"Days": {
				"dataValueType": this.Terrasoft.DataValueType.COLLECTION
			}
		},

		methods: {
			// BUTTON
			startGlobalTour: function() {
				var message = resources.localizableStrings.StartTourMessage;
				//var message = this.get("Resources.Strings.StartTourMessage");
				this.showInformationDialog(message);
			},
			// MENU
			showProgram: function(day) {
				this.showInformationDialog(String.format("<{0}>", day));
			},
			// GRAVATAR
			getGridRowViewModelClassName: function() { return "Terrasoft.GravatarViewModel"; },
			// ACTION ITEM
			getSectionActions: function() {
				var menuItems = this.callParent(arguments);
				var menuItem = this.getButtonMenuItem({
					"Click": {"bindTo": "openContacts"},
					"Caption": resources.localizableStrings.OpenLookupCaption,
					"Enabled": {"bindTo": "isAnySelected"}
				});
				menuItems.addItem(menuItem);
				return menuItems;
			},
			// ACTION EXECUTE
			openContacts: function() {
				var lookupConfig = {
					entitySchemaName: "City"
				};
				this.openLookup(lookupConfig, Terrasoft.emptyFn, this);
			},
			// MENU DYNAMIC
			constructor: function() {
				this.callParent(arguments);
				var days = this.Ext.create("Terrasoft.BaseViewModelCollection");
				var dayCaptionPattern = resources.localizableStrings.DayCaptionPattern;
				for (var i = 1; i <= 5; i++) {
					var day = this.getButtonMenuItem({
						"Click": {"bindTo": "showProgram"},
						"Caption": String.format(dayCaptionPattern, i),
						"Tag": i
					});
					days.addItem(day);
				}
				this.set("Days", days);
			},
			//ACTIVE ROW ACTION
			onActiveRowAction: function(buttonTag, primaryColumnValue) {
				this.callParent(arguments);
				if (buttonTag === "invite") {
					this.invite(primaryColumnValue);
				}
			},
			//ACTIVE ROW ACTION EXECUTE
			invite: function(contactId) {
				//his.showInformationDialog(contactId);
				var activeRow = this.getActiveRow();
				activeRow.set("Invited", true);
				activeRow.customStyle = { "background": "aqua"};
				var gridData = this.getGridData();
				var cloneData = gridData.clone();
				gridData.clear();
				gridData.loadAll(cloneData);
				this.set("ActiveRow", null);
			},
			// GRID ROW COLOR
			prepareResponseCollectionItem: function(item) {
				this.callParent(arguments);
				item.customStyle = { "background": "pink"};
			}
		},
		diff: /**SCHEMA_DIFF*/[
			// BUTTON + MENU
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.RED,
					"caption": resources.localizableStrings.DemoButtonCaption,
					"hint": resources.localizableStrings.DemoButtonHint,
					"click": {"bindTo": "startGlobalTour"},
					"menu": {
						// "items": [{
						// 	"caption": resources.localizableStrings.Day1,
						// 	"click": {"bindTo": "showProgram"},
						// 	"tag": "1"
						// }, {
						// 	"caption": resources.localizableStrings.Day2,
						// 	"click": {"bindTo": "showProgram"},
						// 	"tag": "2"
						// }]
						"items": {"bindTo": "Days"}
					}
				}
			},
			// HYPERLINK
			{
				"operation": "insert",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"name": "Skolkovo2017Link",
				"values": {
					"itemType": Terrasoft.ViewItemType.HYPERLINK,
					"caption": "WEB",
					"href": "https://www.bpmonline.com",
					"classes": {"hyperlinkClass": ["hyperlink-header"]}
				}
			},
			// ACTIVE ROW ACTION
			{
				"operation": "insert",
				"name": "DataGridActiveRowOpenAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.RED,
					"caption": resources.localizableStrings.InviteCaption,
					"tag": "invite",
					
					// "click": {
					// 	"bindTo": "invite"
					// },
					// "visible": {
					// 	"bindTo": "Invited",
					// 	"bindConfig": {
					// 		"converter": function(value) {
					// 			return !value;
					// 		}
					// 	}
					// }
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
