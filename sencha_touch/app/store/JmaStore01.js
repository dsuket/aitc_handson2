Ext.define('SampleApp.store.JmaStore01', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'SampleApp.model.JmaData01',
	    storeId: 'jmaStore',

        data: [{
            datetime: new Date(),
            title: 'サンプル１',
            headline: ['詳細情報 1-1', '詳細情報 1-2']
        }, {
            datetime: new Date(),
            title: 'サンプル2',
            headline: ['詳細情報 2-1']
        }, {
            datetime: new Date(),
            title: 'サンプル3',
            headline: ['詳細情報 3-1']
        }]
	}

});
