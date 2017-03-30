define("SkSchema1Detail", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "SkProjectTaskTracker",
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
			 */
			loadFromTaskTracker: function() {
				var recordId = this.get("MasterRecordId");
				var scope = this;
				this.delaySyncTaskTrackerService(recordId, 1, function() {
					scope.reloadGridData();
					scope.hideBodyMask(); 
				});
			},
			syncTaskTrackerProcess: function(projectId, callback) {
				Terrasoft.ProcessModuleUtilities.runProcess(
					"SkSyncTaskTrackerProcess", { ProjectId: projectId }, callback, this);
			},
			syncTaskTrackerService: function(projectId, callback) {
				ServiceHelper.callService({
					serviceName: "SkProjectTaskTrackerService",
					methodName: "Sync",
					data: {
						projectId: projectId
					},
					callback: callback
				})
			},
			delaySyncTaskTrackerService: function(projectId, duration, callback) {
				ServiceHelper.callService({
					serviceName: "SkProjectTaskTrackerService",
					methodName: "DelaySync",
					data: {
						projectId: projectId,
						durationMin: duration
					},
					callback: callback
				})
			}
		}
	};
});
