Terrasoft.sdk.Module.addFilter("Project", Ext.create("Terrasoft.Filter", {
	type: Terrasoft.FilterTypes.Group,
	subfilters: [
		{
			property: "ParentProject",
			isNot: false,
			compareType: Terrasoft.ComparisonTypes.NotEqual,
			value: null
		}
	]
}));
