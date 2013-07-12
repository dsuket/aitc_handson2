Ext.define('SampleApp.controller.Main02', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main: 'main',
			form: 'my-formpanel',
			list: {
				selector: 'main my-jmalist',
				xtype: 'my-jmalist',
				autoCreate: true
			},
			detail: {
				selector: 'main my-detail',
				xtype: 'my-detail',
				autoCreate: true
			}
		},
		control: {
			form: {
				dosearch: 'doSearch'
			},
			list: {
				selectitem: 'showDetail'
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
	},

	/**
	 * 詳細表示
	 */
	showDetail: function(record) {
		console.log("showDetail",record);
		var me = this,
			detail = me.getDetail();

		detail.setData(record.getData());
		this.getMain().push(detail);
	}

});