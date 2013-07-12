Ext.define('SampleApp.model.JmaData02', {
    extend: 'Ext.data.Model',
    requires: [
    	'SampleApp.proxy.JmaProxy'
    ],
    config: {
        fields: [
            {name: 'title',    type: 'string'},
            {name: 'datetime', type: 'date'},
            {name: 'headline', type: 'auto'}
        ],

	    proxy: {
	    	xtype: 'jmaproxy',
	    }
    }
});
