Ext.define('SampleApp.view.Main01', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Hello'
        }, {
            html: 'Hello Sencha Touch!'
        }]
    }
});
