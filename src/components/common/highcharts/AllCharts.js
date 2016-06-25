/**
 * Created by Captain on 2016/6/5.
 */
var React = require("react");
var LineCharts = require("./lineCharts");
var PieCharts = require("./PieCharts");
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');
var Table = require('material-ui/lib/table/table');
var TableHeader = require('material-ui/lib/table/table-header');
var TableRow = require('material-ui/lib/table/table-row');
var TableHeaderColumn = require('material-ui/lib/table/table-header-column');
var TableBody = require('material-ui/lib/table/table-body');
var TableRowColumn = require('material-ui/lib/table/table-row-column');
var MenuStore = require("../../../stores/MenuStore");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var GlobalUtils = require("../../../utils/GlobalUtils");

require("../../../utils/monitor_item");

var percent = 30;
var pieChartsData = [
    {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 330
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
            height: 330,
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
            height: 330,
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
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
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
                for (i = 0; i <= 19; i++) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            })()
        }]
    },

];
/*var chartViewData = [
 {
 name: '',
 last: '最近',
 min: '最小值',
 avg: '平均值',
 max: '最大值'
 }
 ];*/
var lineChartData = {
    chart: {
        height: 330,
        events: {}
    },
    title: {
        text: '',
        x: -20 //center
    },
    plotOptions: {
        series: {
            marker: {
                enabled: true
            }
        }
    },
    xAxis: {
        type: 'datetime',
        tickInterval: 1000 * 30,
        dateTimeLabelFormats: {
            day: '%Y-%m-%d',
            week: '%Y-%m-%d',
            month: '%Y-%m-%d',
            year: '%Y-%m-%d',
            hour: '%H:%M',
            minute: '%H:%M',
            second: '%H:%M:%S'
        }
    },
    yAxis: {
        title: {
            text: ""
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>'
                + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                    this.x) + '</b><br/>'
                + this.series.name + ': ' + this.y
        }
    },
    series: []
};
var AllCharts = React.createClass({
    getInitialState: function () {
        return ({
            graphItemList: [],
            historyDataList: []
        })
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeGraphItemList, this._changeListData);
        VirtualMonitorStore.getGraphItemList(this.props.viewData.id + "/graphs");
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeGraphItemList, this._changeListData);
    },
    _changeListData: function () {
        this.setState({graphItemList: VirtualMonitorStore.getGraphItemListData()});
        /*setTimeout(function () {
            var bodyArr = [];
            var id = 10163;
            var startTime = 1466431457;
            var endTime = 1466641498;
            this.state.graphItemList.forEach(function (graphItem) {
                var obj = {keys: JSON.parse(graphItem.items), startTime: startTime, endTime: endTime, type: 3};
                bodyArr.push(obj);
            });
            VirtualMonitorAction.getHistoryDataList(id, bodyArr);
        }.bind(this), 1000);*/
    },
    _clickAddItems: function () {
        $("#monitorItemsPanel").slideToggle();
    },
/*    _checkBoxClick: function (index) {
        console.log($("#checkBox" + index).is(':checked'));
        if ($("#checkBox" + index).is(':checked')) {
            var bodyArr = [];
            var id = 10163;
            var startTime = 1466431457;
            var endTime = 1466641498;
            this.state.graphItemList.forEach(function (graphItem, idx) {
                var obj;
                if (index == idx) {
                    var date = new Date();
                    var endTime1 = parseInt(date.getTime() / 1000);
                    var startTime1 = endTime1 - 3600;
                    console.log(startTime1);
                    obj = {keys: JSON.parse(graphItem.items), startTime: startTime1, endTime: endTime1, type: 3};
                    bodyArr.push(obj);
                } else {
                    obj = {keys: JSON.parse(graphItem.items), startTime: startTime, endTime: endTime, type: 3};
                    bodyArr.push(obj);
                }
            });
            VirtualMonitorAction.getHistoryDataList(id, bodyArr);
        }
    },*/
    _addItems: function (obj) {
        var graph = {
            templateId: this.props.viewData.id,
            name: obj.name,
            items: JSON.stringify(obj.items),
            graphType: obj.graphType,
            dataType: 3
        };
        VirtualMonitorAction.createGraphItem(graph);
    },
    render: function () {
        var that = this;
        var showChart = "";
        var lineChartsGraph = [];
        var lineChartList = new Array();
        var pieCharts = [];
        var lineChartsArray=[];
        var bodyArr = new Array();
        if (this.state.graphItemList.length > 0) {
            this.state.graphItemList.forEach(function (graphItem, index){
                if(graphItem.graphType==1){
                    lineChartsArray.push(index);
                    var startTime = 1466431457;
                    var endTime = 1466641498;
                    var body = {keys: JSON.parse(graphItem.items), startTime: startTime, endTime: endTime, type: 3};
                    bodyArr.push(body);
                }
            });
            this.state.graphItemList.forEach(function (graphItem, index) {
                switch (graphItem.graphType) {
                    case 0://pie
                        pieCharts.push(<PieCharts key={index} data={pieChartsData[0]}
                                                  title={"hypervisor:184.2.10.16"}/>);
                        break;
                    case 1://line
                        //var convertDataType=monitorItems[that.props.viewData.type][graphItem.name].convertDataType;
                        //console.log(convertDataType);
                        //var convertAndSeriesType=monitorItems[that.props.viewData.type][graphItem.name].seriesType;
                        var id = 10163;
                        var startTime = 1466431457;
                        var endTime = 1466641498;
                        var body = {keys: JSON.parse(graphItem.items), startTime: startTime, endTime: endTime, type: 3};
                            lineChartList[index] = $.extend({},lineChartData);
                            lineChartsGraph.push(<LineCharts index={index}
                                                             key={index}
                                                             data={lineChartList[index]} title={"vm:127.0.0.1"}
                                                             dataTitle={graphItem.name } lineChartsArray={lineChartsArray}
                                                             items={graphItem.items} id={id} bodyArr={bodyArr}/>);

                        break;
                }
            });
        }
        if (this.state.graphItemList.length == 0) {
            showChart = <div className="col-sm-12 col-md-12 col-lg-12"
                             style={{height:"200px",textAlign:"center",backgroundColor:"white"}}>
                <div style={{height:"47px"}}>
                </div>
                您没有添加监控项，请在右上角点击
                <a href="#" onClick={this._clickAddItems}>&nbsp;增减视图</a>&nbsp;按钮添加监控项
            </div>
        } else {
            showChart = <div>
                {lineChartsGraph}
                {pieCharts}
            </div>;
        }
        return (
            <div style={{marginTop:"10px"}}>
                <MonitorItemsEdit addItem={this._addItems} graphItemList={this.state.graphItemList}/>
                {showChart}
            </div>
        )
    }
});

var MonitorItemsEdit = React.createClass({
    getInitialState: function () {
        return ({
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '',
            showFlags:[]
        })
    },
    _addItems: function (row) {
        this.props.addItem(row);
    },
    _deleteItems: function (row) {
        var id = "";
        var templateId = "";
        this.props.graphItemList.forEach(function (graphItem) {
            if (row.name == graphItem.name) {
                id = graphItem.id;
                templateId = graphItem.templateId;
                return;
            }
        });
        VirtualMonitorAction.deleteGraphItem(id, templateId);
    },
    _isExist: function (row) {
        this.props.graphItemList.forEach(function (graphItem) {
            if (row.name == graphItem.name) {
                console.log(row.name==graphItem.name);
                return true;
            }
        });
        return false;
    },
    render: function () {
        var that = this;
        var graphType = MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase();
        var tableData = [];
        var i = 0;
        for (var key in monitorItems[graphType]) {
            tableData[i] = {
                name: key,
                graphType: monitorItems[graphType][key].graphType,
                items: monitorItems[graphType][key].items
            };
            i++;
        }
        return (
            <div id="monitorItemsPanel" style={{display:"none"}}>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                        >
                        <TableRow style={{height:"30px"}}>
                            <TableHeaderColumn colSpan="3" style={{textAlign: 'center',height:"30px"}}>
                                Hypervisor 监控项
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                        >
                        {tableData.map((row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn style={{width:"5%"}}>{index + 1}</TableRowColumn>
                                <TableRowColumn style={{width:"80%"}}>{row.name}</TableRowColumn>
                                <TableRowColumn style={{width:"15%",textAlign:"center"}}>
                                    {that._isExist(row) ?
                                        <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                                onClick={that._deleteItems.bind(that,row)}>禁用
                                        </button> :
                                        <button type="button" className="btn btn-xs btn-info btn-rad btn-trans"
                                                onClick={that._addItems.bind(that,row)}>添加
                                        </button>}
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )

    }
});
module.exports = AllCharts;