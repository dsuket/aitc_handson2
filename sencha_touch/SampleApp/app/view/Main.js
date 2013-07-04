Ext.define('SampleApp.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            xtype: 'my-formpanel',
            title: '防災情報 速報'
        }]
    }
});
