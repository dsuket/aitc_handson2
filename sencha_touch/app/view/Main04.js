Ext.define('SampleApp.view.Main04', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            xtype: 'my-jmalist'
        }]
    }
});
