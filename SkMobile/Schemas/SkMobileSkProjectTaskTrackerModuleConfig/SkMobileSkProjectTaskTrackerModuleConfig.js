Terrasoft.sdk.GridPage.setPrimaryColumn("SkProjectTaskTracker", "SkTitle");
Terrasoft.sdk.GridPage.setSecondaryColumn("SkProjectTaskTracker", "SkEstimate");


Terrasoft.sdk.RecordPage.addColumn("SkProjectTaskTracker", {
	name: "SkDescription"
}, "primaryColumnSet");

Terrasoft.sdk.RecordPage.addColumn("SkProjectTaskTracker", {
	name: "SkEstimate"
}, "primaryColumnSet");

Terrasoft.sdk.RecordPage.addColumn("SkProjectTaskTracker", {
	name: "SkOwner"
}, "primaryColumnSet");

Terrasoft.sdk.RecordPage.addColumn("SkProjectTaskTracker", {
	name: "SkKey"
}, "primaryColumnSet");

Terrasoft.sdk.RecordPage.addColumn("SkProjectTaskTracker", {
	name: "SkType"
}, "primaryColumnSet");