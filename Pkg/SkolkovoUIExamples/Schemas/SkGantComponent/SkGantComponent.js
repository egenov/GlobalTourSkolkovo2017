require(["SkGantSource"], function() {
	Ext.define("Terrasoft.Skolkovo2017.Gantt", {

		alternateClassName: "Terrasoft.Gantt",

		extend: "Terrasoft.Component",

		containerId: null,

		render: function(container) {
			this.containerId = container && container.dom ? container.dom.id : null;
			this.show();
		},

		reRender: function(index, container) {
			this.containerId = container && container.dom ? container.dom.id : null;
			this.show();
		},

		show: function() {
			if (!window.hasOwnProperty("gantt")) {
				return;
			}
			if (!this.containerId) {
				return;
			}
			if (!this.collection) {
				return;
			}
			gantt.init(this.containerId);
			gantt.config.columns = [
				{name: "text", label: "Task name",  tree: true, width: "*", resize: true},
				{name: "start_date", label: "Date", align: "center"},
				{name: "duration", label: "Duration", align: "center"}
			];
			gantt.config.readonly = true;
			var items = this.getItemsConfig(this.collection);
			gantt.parse(items);
		},

		getItemsConfig: function(collection) {
			var ganttItems = {
				data: [],
				links: []
			};
			collection.each(function(item, index) {
				var startDate = item.get("StartDate");
				var endDate = item.get("EndDate"); //EndDate
				var ganntItem = {
					id: item.get("Id"),
					text: item.get("Name"),
					start_date: startDate,
					order: index
				};
				ganntItem.duration = Terrasoft.dateDiffDays(startDate, endDate);
				var parentId = item.get("ParentProject") && item.get("ParentProject").value;
				if (parentId) {
					ganntItem.parent = parentId;
					ganttItems.links.push({
						id: Terrasoft.generateGUID(),
						source: parentId,
						target: item.get("Id"),
						type: "1"
					});
				}
				ganntItem.color = "#C2C4C5"; // Scheduled = 00a7ff
				ganttItems.data.push(ganntItem);
			}, this);
			return ganttItems;
		},

		getBindConfig: function() {
			var bindConfig = this.callParent(arguments);
			var gridBindConfig = {
				collection: {
					changeMethod: "onCollectionDataLoaded"
				}
			};
			Ext.apply(gridBindConfig, bindConfig);
			return gridBindConfig;
		},

		onCollectionDataLoaded: function(collection, newItems, settings) {
			this.collection = this.collection || collection;
			this.show();
		},

		subscribeForCollectionEvents: function(binding, property, model) {
			this.callParent(arguments);
			var collection = model.get(binding.modelItem);
			collection.on("dataLoaded", this.onCollectionDataLoaded, this);
			collection.on("add", Terrasoft.EmptyFn, this);
			collection.on("remove", Terrasoft.EmptyFn, this);
			collection.on("itemChanged", Terrasoft.EmptyFn, this);
			collection.on("clear", Terrasoft.EmptyFn, this);
			collection.on("replace", Terrasoft.EmptyFn, this);
		}

	});
});
