Ext.define('SampleApp.view.JmaList02', {
    extend: 'Ext.dataview.List',
    xtype: 'my-jmalist',
    config: {
        title: '一覧',
        cls: 'jma-list',
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
        },
        data: [{
            datetime: new Date(),
            title: 'サンプル１',
            headline: ['詳細情報 1-1', '詳細情報 1-2']
        }, {
            datetime: new Date(),
            title: 'サンプル2',
            headline: ['詳細情報 2-1']
        }, {
            datetime: new Date(),
            title: 'サンプル3',
            headline: ['詳細情報 3-1']
        }]
    },

});
