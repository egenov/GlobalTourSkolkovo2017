define("SkSchema2Detail", [], function() {
	return {
		entitySchemaName: "SkProjectTaskTracking",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
				/**
				 * Adds menu items to tools button menu items collection.
				 * @protected
				 * @virtual
				 * @param {Terrasoft.BaseViewModelCollection} toolsButtonMenu Tools button menu items collection.
				 */
				addToolsButtonMenuItems: function(toolsButtonMenu) {
					toolsButtonMenu.addItem(this.getButtonMenuItem({
						"Caption": {"bindTo": "Resources.Strings.LoadFromTaskTrackerCaption"},
						"Click": {"bindTo": "loadFromTaskTracker"}
					}));
					toolsButtonMenu.addItem(this.getButtonMenuSeparator());
					this.callParent(arguments);
				},
				/**
				 * Call process to load from TaskTracker system
				 * @protected
				 * @virtual
				 * @return {[type]} [description]
				 */
				loadFromTaskTracker: function() {
					var recordId = this.get("MasterRecordId");
					Terrasoft.ProcessModuleUtilities.runProcess(
						"SkSyncTaskTrackerProcess",
						{
							ProjectId: recordId
						},
						function() {
							this.reloadGridData();
							this.hideBodyMask();
						}, this);
				}
		}
	};
});
