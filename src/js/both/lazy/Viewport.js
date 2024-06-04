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
    items:[
        {
            xtype: 'panel',
            html: 'chart'
            //xtype: 'tualo_documentscanner',
            
        }            
    ]
});

