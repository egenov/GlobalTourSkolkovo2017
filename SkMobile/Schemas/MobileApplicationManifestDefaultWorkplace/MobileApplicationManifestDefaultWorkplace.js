{
	"SyncOptions": {
		"SysSettingsImportConfig": [
			"ProjectStateDef"
		],
		"ModelDataImportConfig": [
			{
				"Name": "Project",
				"SyncColumns": [
					"Name",
					"Account",
					"ProjectEntryType",
					"Owner",
					"Status"
				]
			},
			{
				"Name": "Account",
				"SyncColumns": []
			},
			{
				"Name": "ProjectEntryType",
				"SyncColumns": []
			},
			{
				"Name": "Contact",
				"SyncColumns": []
			},
			{
				"Name": "ProjectStatus",
				"SyncColumns": []
			},
			{
				"Name": "SocialMessage",
				"SyncColumns": [
					"EntityId"
				]
			},
			{
				"Name": "SkProjectTaskTracker",
				"SyncColumns": [
					"SkProject",
					"Id",
					"SkTitle"
				]
			}
		]
	},
	"Modules": {
		"Project": {
			"Group": "main",
			"Model": "Project",
			"Position": 4,
			"isStartPage": false,
			"Title": "ProjectSectionTitle",
			"Hidden": false
		}
	},
	"Models": {
		"Project": {
			"RequiredModels": [
				"Project",
				"Account",
				"ProjectEntryType",
				"Contact",
				"ProjectStatus",
				"SocialMessage",
				"SkProjectTaskTracker"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"SkMobileProjectActionsSettingsDefaultWorkplace",
				"SkMobileProjectGridPageSettingsDefaultWorkplace",
				"SkMobileProjectRecordPageSettingsDefaultWorkplace",
				"SkMobileProjectModuleConfig"
			]
		},
		"SocialMessage": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": [
				"SkMobileSocialMessageActionsSettingsDefaultWorkplace"
			]
		},
		"SkProjectTaskTracker": {
			"RequiredModels": [
				"SkProjectTaskTracker",
				"Project",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"SkMobileSkProjectTaskTrackerActionsSettingsDefaultWorkplace",
				"SkMobileSkProjectTaskTrackerGridPageSettingsDefaultWorkplace",
				"SkMobileSkProjectTaskTrackerRecordPageSettingsDefaultWorkplace",
				"SkMobileSkProjectTaskTrackerModuleConfig"
			]
		}
	}
}