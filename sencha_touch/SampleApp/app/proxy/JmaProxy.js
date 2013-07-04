Ext.define('SampleApp.proxy.JmaProxy', {
    extend: 'Ext.data.proxy.Ajax',
    xtype: 'jmaproxy',
    config: {
    	type: "ajax",
    	url : "http://cloud.projectla.jp/jmaxmldb/search",
	    startParam: 'offset',    	
        pageParam: false,
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }

});
