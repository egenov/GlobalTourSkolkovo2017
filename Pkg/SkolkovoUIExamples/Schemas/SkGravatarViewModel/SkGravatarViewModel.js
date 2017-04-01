require(["SkMD5", "BaseSectionGridRowViewModel"], function() {
	Ext.define("Terrasoft.Skolkovo2017.GravatarViewModel", {
		alternateClassName: "Terrasoft.GravatarViewModel",
		extend: "Terrasoft.BaseSectionGridRowViewModel",
		urlPattern: "https://ru.gravatar.com/avatar/{0}",
		constructor: function() {
			this.callParent(arguments);
			this.entitySchema.primaryImageColumnName = "Email";
		},
		invite: function() {
			alert(this.get("Name"));
		},
		getSchemaImageUrl: function() {
			var email = this.get(this.primaryImageColumnName);
			var hash = md5(email);
			return String.format(this.urlPattern, hash);
		}
	});
});
