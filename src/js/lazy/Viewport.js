Ext.define('Tualo.D3Chart.Viewport', {
    extend: 'Ext.panel.Panel',
    requires: [
        /*
        'Tualo.Documentscanner.field.Input',
        'Tualo.Documentscanner.field.Camera'
        */
    ],
    layout: 'fit',
    bodyPadding: 10,
    listeners: {
        afterrender: function(){
            console.log('afterrender');
            
            let c = Ext.create('Tualo.D3Chart.chart.Heatmap');
            this.add(c);
            
        }
    },
    items:[
        {
            xtype: 'panel',
            html: 'chart'
            //xtype: 'tualo_documentscanner',
            
        }            
    ]
});

