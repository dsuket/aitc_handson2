Ext.define('SampleApp.view.Detail01', {
    extend: 'Ext.Panel',
    xtype: 'my-detail',
    config: {
        title: '詳細',
        tpl: [
            '<div class="detail-contents">',
                '<h2 class="title">{title}</h2>',
                '<div class="datetime">{datetime:date("Y.m.d H:i:s")}</div>',
                '<ul class="headlines">',
                    '<tpl for="headline">',
                        '<li class="text">{.}</li>',
                    '</tpl>',
                '</ul>',
            '</div>',
        ]
    }

});
