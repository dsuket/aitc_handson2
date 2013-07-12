Ext.define('SampleApp.view.JmaList01', {
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
        data: [{
            datetime: new Date(),
            title: 'サンプル１'
        }, {
            datetime: new Date(),
            title: 'サンプル2'
        }, {
            datetime: new Date(),
            title: 'サンプル3'
        }]
    },

});
