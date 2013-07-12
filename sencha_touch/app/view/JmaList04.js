Ext.define('SampleApp.view.JmaList04', {
    extend: 'Ext.dataview.List',
    xtype: 'my-jmalist',
    requires: [
    	'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        title: '一覧',
        store: 'jmaStore', 
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
                this.getList().fireEvent('reload');
            }
	    }],
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts){
                this.fireEvent('selectitem', record);
            }
        }
    }

});
