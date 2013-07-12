Ext.define('SampleApp.view.FormPanel03', {
    extend: 'Ext.form.Panel',
    xtype: 'my-formpanel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.DatePicker'
    ],
    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'selectfield',
                label: 'エリア',
                name: 'areaname',
                options: [
                    {text: '東京都',  value: '東京都'},
                    {text: '神奈川県',  value: '神奈川県'},
                    {text: '千葉県',  value: '千葉県'},
                    {text: '埼玉県',  value: '埼玉県'}
                ]
            }, {
                xtype: 'datepickerfield',
                label: '開始日',
                dateFormat: 'Y-m-d',
                name: 'startdate',
                value: Ext.Date.add(new Date(), Ext.Date.DAY, -6)
            }, {
                xtype: 'datepickerfield',
                label: '終了日',
                dateFormat: 'Y-m-d',
                name: 'enddate',
                value: new Date()
            }]
        }, {
            xtype: 'button',
            text: 'OK',
            itemId: 'okbtn',
            ui: 'action',
            width: 100,
            margin: "0 auto"
        }],
        control: {
            '#okbtn': {
                tap: function(){
                    this.fireEvent('dosearch', this.getValues());
                }
            }
        }
    }
});
