Ext.define('SampleApp.view.Main03', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            xtype: 'my-formpanel',
            title: '防災くん'
        }]
    }
});
