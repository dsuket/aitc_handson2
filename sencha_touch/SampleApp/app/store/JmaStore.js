Ext.define('SampleApp.store.JmaStore', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'SampleApp.model.JmaData',
	    pageSize: 20,
	    params: null
	},

    /**
     * 初期化
     * totalの初期化
     */
    initialize: function() {
        this.callParent(arguments);
        this.on('load', function(store, records){
        	var total = Ext.isEmpty(records) ? 0 : undefined;
        	store.setTotalCount(records);
        });
    },

    /**
     * パラメータを付けてロード
     */
    load: function(options, scope) {
        options = options || {};
        if (Ext.isObject(options)) {            
            options.params = Ext.apply(options.params || {}, this.getParams());
        }
        this.callParent([options, scope]);
    }

});
