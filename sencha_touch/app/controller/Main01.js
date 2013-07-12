Ext.define('SampleApp.controller.Main01', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main: 'main',
			form: 'my-formpanel',
			list: {
				selector: 'main my-jmalist',
				xtype: 'my-jmalist',
				autoCreate: true
			}
		},
		control: {
			form: {
				dosearch: 'doSearch'
			}
		}
	},

	/**
	 * 検索
	 */
	doSearch: function(opt) {
		var me = this,
			list = me.getList();

		console.log("doSearch", opt);
		list.setTitle(opt.areaname + " 防災情報");
		this.getMain().push(list);
	}

});