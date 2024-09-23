Ext.create('Tualo.D3Chart.chart.Heatmap', {
    extends: 'Ext.panel.Panel', 
    alias: 'widget.tualo-d3-heatmap',
    title: 'Heatmap Chart',
    layout: 'fit',
    items: [
        {
            xtype: 'd3-heatmap',
            padding: {
                top: 20,
                right: 30,
                bottom: 20,
                left: 80
            },

            xAxis: {
                axis: {
                    ticks: 'd3.timeDay',
                    tickFormat: "d3.timeFormat('%b %d')",
                    orient: 'bottom'
                },
                scale: {
                    type: 'time'
                },
                title: {
                    text: 'Date'
                },
                field: 'date',
                step: 24 * 60 * 60 * 1000
            },

            yAxis: {
                axis: {
                    orient: 'left',
                    tickFormat: "d3.format('$d')"
                },
                scale: {
                    type: 'linear'
                },
                title: {
                    text: 'Total'
                },
                field: 'bucket',
                step: 100
            },

            colorAxis: {
                scale: {
                    type: 'linear',
                    range: ['white', 'orange']
                },
                field: 'count',
                minimum: 0
            },

            tiles: {
                attr: {
                    'stroke': 'black',
                    'stroke-width': 1
                }
            },

            store: {
                fields: [
                    {name: 'date', type: 'date', dateFormat: 'Y-m-d'},
                    'bucket',
                    'count'
                ],
                data: [
                    { date: '2012-07-20', bucket: 800,  count: 119 },
                    { date: '2012-07-20', bucket: 900,  count: 123 },
                    { date: '2012-07-20', bucket: 1000, count: 173 },
                    { date: '2012-07-20', bucket: 1100, count: 226 },
                    { date: '2012-07-20', bucket: 1200, count: 284 },
                    { date: '2012-07-21', bucket: 800,  count: 123 },
                    { date: '2012-07-21', bucket: 900,  count: 165 },
                    { date: '2012-07-21', bucket: 1000, count: 237 },
                    { date: '2012-07-21', bucket: 1100, count: 278 },
                    { date: '2012-07-21', bucket: 1200, count: 338 },
                    { date: '2012-07-22', bucket: 900,  count: 154 },
                    { date: '2012-07-22', bucket: 1000, count: 241 },
                    { date: '2012-07-22', bucket: 1100, count: 246 },
                    { date: '2012-07-22', bucket: 1200, count: 300 },
                    { date: '2012-07-22', bucket: 1300, count: 305 },
                    { date: '2012-07-23', bucket: 800,  count: 120 },
                    { date: '2012-07-23', bucket: 900,  count: 156 },
                    { date: '2012-07-23', bucket: 1000, count: 209 },
                    { date: '2012-07-23', bucket: 1100, count: 267 },
                    { date: '2012-07-23', bucket: 1200, count: 299 },
                    { date: '2012-07-23', bucket: 1300, count: 316 },
                    { date: '2012-07-24', bucket: 800,  count: 105 },
                    { date: '2012-07-24', bucket: 900,  count: 156 },
                    { date: '2012-07-24', bucket: 1000, count: 220 },
                    { date: '2012-07-24', bucket: 1100, count: 255 },
                    { date: '2012-07-24', bucket: 1200, count: 308 },
                    { date: '2012-07-25', bucket: 800,  count: 104 },
                    { date: '2012-07-25', bucket: 900,  count: 191 },
                    { date: '2012-07-25', bucket: 1000, count: 201 },
                    { date: '2012-07-25', bucket: 1100, count: 238 },
                    { date: '2012-07-25', bucket: 1200, count: 223 },
                    { date: '2012-07-26', bucket: 1300, count: 132 },
                    { date: '2012-07-26', bucket: 1400, count: 117 },
                    { date: '2012-07-26', bucket: 1500, count: 124 },
                    { date: '2012-07-26', bucket: 1600, count: 154 },
                    { date: '2012-07-26', bucket: 1700, count: 167 }
                ]
            }
        }
    ]
});
