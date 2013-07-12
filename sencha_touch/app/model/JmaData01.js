Ext.define('SampleApp.model.JmaData01', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'title',    type: 'string'},
            {name: 'datetime', type: 'date'},
            {name: 'headline', type: 'auto'}
        ]
    }
});
