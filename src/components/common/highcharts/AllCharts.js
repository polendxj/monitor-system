/**
 * Created by Captain on 2016/6/5.
 */
var React = require("react");
var LineCharts = require("./lineCharts");
var PieCharts = require("./PieCharts");
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');

var percent = 30;
var pieChartsData = [
    {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height:330
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        title: {
            text: "磁盘使用情况"
        },
        colors: [
            '#FF00FF',
            '#0000FF',
            '#D8DDE3'
        ],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '值',
            data: [
                ['空闲', 20],
                ['已使用', 40],
                ['交换空间', 40]
            ]
        }]
    }
];
var lineChartsData = [
    {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            height:330,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random() * 100;
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: "CPU使用率动态曲线图"
        },
        xAxis: {
            title: {
                text: "时间"
            },
            type: 'datetime',
            //坐标间隔
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: "CPU使用率（%）"
            },
            tickPositions: [0, 20, 40, 60, 80, 100],
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [
            {
                name: 'CPU使用率',
                data: (function () {
                    // 初始化数据
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.round(Math.random() * 1000) / 10
                        });
                    }
                    return data;
                })()
            }
        ]
    },
    {
        chart: {
            animation: Highcharts.svg, // don't animate in old IE
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: "内存使用率动态曲线图"
        },
        xAxis: {
            text: '时间',
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: '内存使用率'
            },
            tickPositions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            pointInterval: 1000,
            pointStart: (new Date()).getTime(),
            data: (function () {
                // 初始化数据
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i++) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            })()
        }]
    },
    {
        chart:{
            height:330
        },
        title: {
            text: '服务器使用率',
            x: -20 //center
        },
        xAxis: {
            categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
                '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
        },
        yAxis: {
            title: {
                text: "使用率（%）"
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        series: [{
            name: 'CPU Usage',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Disk Usage',
            data: [22, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Memory Usage',
            data: [0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }]
    }
];
var AllCharts = React.createClass({
    render: function () {
        var showChart="";
        var charts=[
            {
                name:"VCenter",
                chart:[]
            },
            {
                name:"vcModel",
                chart:[]
            }
        ];
        charts[0].chart.push(<LineCharts data={lineChartsData[0]} title={"localhost:127.0.0.1"}/>);
        charts[0].chart.push(<PieCharts data={pieChartsData[0]} title={"hypervisor:184.2.10.16"} />);
        charts[0].chart.push(<PieCharts data={pieChartsData[0]} title={"hypervisor:184.2.10.11"} />);
        charts[0].chart.push(<LineCharts data={lineChartsData[1]} title={"mysql:127.0.0.1"}/>);
        charts[1].chart.push(<LineCharts data={lineChartsData[2]} title={"vm:127.0.0.1"}/>);
        charts.forEach(function (chart) {
            if(chart.name==this.props.name){
                showChart=chart.chart;
            }
        }.bind(this));
        return (
            <div>
                {showChart}
            </div>
        )
    }
});

module.exports = AllCharts;