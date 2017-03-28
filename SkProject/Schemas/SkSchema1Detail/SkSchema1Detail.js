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
				Terrasoft.chain(
					function(next) {
						this.syncTaskTrackerProcess(recordId, function() {
							next();
						});
					},
					function(next) {
						this.calculateTotalPlanValue(recordId, function() {
							next();
						});
					},
					function() {
						this.reloadGridData();
						this.hideBodyMask(); 
					},
					this
				);
			},
			/**
			 * Call process SkSyncTaskTrackerProcess
			 * @private
			 * @param  {Guid}   projectId 
			 * @param  {Function} callback
			 */
			syncTaskTrackerProcess: function(projectId, callback) {
				Terrasoft.ProcessModuleUtilities.runProcess(
					"SkSyncTaskTrackerProcess", { projectId: projectId }, callback, this);
			},
			/**
			 * Call SkProjectTaskTrackerService.CalculateTotalPlanValue
			 * @private
			 * @param  {Guid}   projectId 
			 * @param  {Function} callback 
			 */
			calculateTotalPlanValue: function(projectId, callback) {
				ServiceHelper.callService({
					serviceName: "SkProjectTaskTrackerService",
					methodName: "CalculateTotalPlanValue",
					data: {
						projectId: projectId
					},
					scope: this,
					callback: callback
				});
			}
		}
	};
});
