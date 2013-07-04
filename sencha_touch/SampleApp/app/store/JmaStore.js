Ext.define('SampleApp.store.JmaStore', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'SampleApp.model.JmaData',
	    pageSize: 20,
	    params: null
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
