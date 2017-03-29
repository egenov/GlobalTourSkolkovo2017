Terrasoft.sdk.Module.addFilter("Project", Ext.create("Terrasoft.Filter", {
	type: Terrasoft.FilterTypes.Group,
	subfilters: [
		{
			property: "ParentProject",
			isNot: true,
			compareType: Terrasoft.ComparisonTypes.Equal,
			value: null
		}
	]
}));
