Ext.define('SampleApp.view.JmaList03', {
    extend: 'Ext.dataview.List',
    xtype: 'my-jmalist',
    config: {
        title: '一覧',
        cls: 'jma-list',
        store: 'jmaStore', 
	    itemTpl: [
            '<div class="jma-item">',
                '<div class="datetime">{datetime:date("Y.m.d H:i:s")}</div>',
                '<div class="title">{title}</div>',
            '</div>'
        ],
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts){
                this.fireEvent('selectitem', record);
            }
        }
    }

});
