Ext.define('SampleApp.view.JmaList', {
    extend: 'Ext.dataview.List',
    xtype: 'my-jmalist',
    requires: [
    	'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        title: '一覧',
    	store: 'JmaStore', 
        cls: 'jma-list',
	    itemTpl: [
            '<div class="jma-item">',
                '<div class="datetime">{datetime:date("Y.m.d H:i:s")}</div>',
                '<div class="title">{title}</div>',
            '</div>'
        ],
	    plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }, {
            xclass: 'Ext.plugin.PullRefresh',
            fetchLatest: function() {
                this.getList().search();
            }
	    }],
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts){
                this.fireEvent('selectitem', record);
            }
        }
    },

    /**
     * 検索
     */
    search: function(params) {
        // <debug>
        console.log("search", params);
        // </debug>
    	var store = this.getStore();
    	params && store.setParams(params);
    	store.currentPage = 1;
    	store.load();
    }

});
