Ext.define('SampleApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            items: {
                docked: 'top',
                xtype: 'titlebar',
                title: '防災情報 速報',
            },

            html: 'Hello Sencha Touch'
        }]
    }
});
