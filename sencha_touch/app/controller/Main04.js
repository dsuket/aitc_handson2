Ext.define('SampleApp.controller.Main04', {
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
				selectitem: 'showDetail',
				reload: 'reload'
			}
		}
	},

	/**
	 * 検索
	 */
	doSearch: function(opt) {
		var me = this,
			list = me.getList(),
			store = list.getStore();

		list.setTitle(opt.areaname + " 防災情報");
		this.getMain().push(list);
    	store.currentPage = 1;
		store.loadByParams({
			areaname: opt.areaname,
			datetime: [
				Ext.Date.format(opt.startdate, 'Y-m-d') + " 00:00:00",
				Ext.Date.format(opt.enddate,   'Y-m-d') + " 00:00:00",
			]
		});
	},

	/**
	 * 再読み込み
	 */
	reload: function() {
		var me = this,
			list = me.getList(),
			store = list.getStore();
    	store.currentPage = 1;
    	store.load();
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