Ext.define('SampleApp.store.JmaStore02', {
    extend: 'Ext.data.Store',
    config: {
        model: 'SampleApp.model.JmaData02',
        storeId: 'jmaStore',
        pageSize: 20,
        params: null
    },

    /**
     * パラメータをセットしてロード
     */
    loadByParams: function(params, options, scope) {
        var me = this;
        me.setParams(params);
        me.load(options, scope);
    },

    /**
     * パラメータを付けてロード
     */
    load: function(options, scope) {
        var me = this;
        options = options || {};
        if (Ext.isObject(options)) {            
            options.params = Ext.apply(options.params || {}, me.getParams());
        }
        me.callParent([options, scope]);
    }

});
