/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');
var ResourceUtils = require('../../../stores/ResourceUtils.js');
var ChartsTitle = require('./ChartTitle');
var ChartDataView = require('./ChartDataView');
var MenuStore = require("../../../stores/MenuStore");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var GlobalUtils = require("../../../utils/GlobalUtils");
require("../../../utils/monitor_item");

/*Highcharts.setOptions({
 global: {
 useUTC: false
 }
 });*/
var LineCharts = React.createClass({
    getInitialState: function () {
        return ({
            historyDataList: [],
            selectedTime: [],
            isLoading: true,
            currentTimeFlag:false,
            chart:""
        })
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeHistoryDataList, this._changeHistoryListData);
        $(".highcharts-container").css("marginLeft", "-2px");
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeHistoryDataList, this._changeHistoryListData);
    },
    _changeHistoryListData: function () {
  /*      var i = this.props.lineChartsArray.indexOf(this.props.index);
        console.log(i);
        this.setState({historyDataList: VirtualMonitorStore.getHistoryData()[i]?VirtualMonitorStore.getHistoryData()[i]:[]});*/
        var hisDataList = VirtualMonitorStore.getHistoryData();
        var items = this.props.items;
        if (hisDataList&&hisDataList.length>0) {
            hisDataList.forEach(function (hisData) {
                if(hisData){
                    if (items.indexOf(hisData[0].key) > -1) {
                        this.setState({historyDataList: hisData});
                    }
                }
            }.bind(this))
        } else {
            this.setState({historyDataList: []});
        }
    },
    _trashClick: function () {
        console.log("trash");
    },
    _detailClick: function () {
        console.log(this.props._checkBoxClick);
    },
    _checkBoxClick: function () {
        var ref="chart"+this.props.index;
        console.log(this.refs[ref].getChart());
        var endTime,startTime,body,date;
        if(this.state.currentTimeFlag){
            var selectedTime = GlobalUtils.getTimes();
            startTime = parseInt(selectedTime[0].key / 1000);
            endTime = parseInt(selectedTime[1].key / 1000);
            body = {keys: JSON.parse(this.props.items), startTime: startTime, endTime: endTime, type: 3};
            ResourceUtils.HISTORYDATA_LIST.POST2(this.props.id, body, "", function (json) {
                this.setState({historyDataList:json,chart:this.refs[ref].getChart(),currentTimeFlag:!this.state.currentTimeFlag});
            }.bind(this));
        }else{
            date = new Date();
            endTime = parseInt(date.getTime() / 1000);
            startTime = endTime - 3600;
            body = {keys: JSON.parse(this.props.items), startTime: startTime, endTime: endTime, type: 3};
            ResourceUtils.HISTORYDATA_LIST.POST2(this.props.id, body, "", function (json) {
                this.setState({historyDataList:json,chart:this.refs[ref].getChart(),currentTimeFlag:!this.state.currentTimeFlag});
            }.bind(this));
        }
    },
    render: function () {
        var lineChartData = {
            chart: {
                height: 330,
                events: {}
            },
            credits: {
                enabled: false
            },
            title: {
                text: '',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
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
                labels: {
                    formatter: function () {
                        return this.value + ' ';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {},
            series: [{}],
            lang: {
                noData: "暂无数据"
            },
            noData: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: '#303030'
                }
            }
        };
        var that = this;
        var noDataFlag=true;
        var chartViewData = new Array();
        var interval;
        lineChartData.title.text = that.props.dataTitle;
        console.log(that.props.dataTitle);
        console.log(that.state.historyDataList);
        console.log(that.state.chart);
        console.log(that.state.currentTimeFlag);
        if (typeof(that.state.historyDataList) != "undefined" && that.state.historyDataList.length > 0) {
            lineChartData.series = new Array();
            var convertDataType = "";
            var items = [];
            if (typeof(monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle]) != "undefined") {
                convertDataType = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].convertDataType;
                items = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].items;
            }
            var unitName = "单位:";
            if (convertDataType.indexOf('M') > -1) {
                unitName += 'M';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + 'M'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(M)', avg: '平均值(M)', max: '最大值(M)'};
            } else if (convertDataType.indexOf('G') > -1) {
                unitName += 'G';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + 'G'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(G)', avg: '平均值(G)', max: '最大值(G)'};
            } else if (convertDataType.indexOf('number') > -1) {
                unitName += '个';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + '个'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(个)', avg: '平均值(个)', max: '最大值(个)'};
            } else if (convertDataType.indexOf('K') > -1) {
                unitName += 'K';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + 'K'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(K)', avg: '平均值(K)', max: '最大值(K)'};
            } else if (convertDataType.indexOf('second') > -1) {
                unitName += '秒';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + 's'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(秒)', avg: '平均值(秒)', max: '最大值(秒)'};
            }else if (convertDataType.indexOf('percent') > -1) {
                unitName += '%';
                lineChartData.tooltip = {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + '%'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(%)', avg: '平均值(%)', max: '最大值(%)'};
            }
            lineChartData.yAxis.title.text = unitName;
            that.state.historyDataList.forEach(function (historyData, index) {
                var dataList = historyData['data'];
                var dataArr = new Array();
                var key = historyData.key;
                var idx = GlobalUtils.getIndexByKey(key,items);
                if (dataList.length > 0) {
                    noDataFlag=false;
                    if (typeof (dataList[0].clock) == "number" && typeof (dataList[dataList.length - 1].clock) == "number") {
                        var timeDifference = Math.round((dataList[dataList.length - 1].clock - dataList[0].clock));
                        lineChartData.xAxis.tickInterval = GlobalUtils.getTickInterval(timeDifference);
                    }
                    for (var j = 0; j < dataList.length; j++) {
                        var x = GlobalUtils.toDateUTC(dataList[j].clock);
                        var y = GlobalUtils.convertGraphData(convertDataType, dataList[j].value);
                        var data = [x, y];
                        dataArr[j] = data;
                    }
                }
                var name = "";
                var seriesType = "";
                if (typeof(monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle]) != "undefined") {
                    name = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].name[idx];
                    seriesType = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].seriesType[idx];
                }
                lineChartData.series[idx] = $.extend({}, {
                    type: seriesType,
                    zIndex: 10 - idx,
                    name: name,
                    data: dataArr
                });
                chartViewData[index + 1] = {
                    name: name,
                    min: GlobalUtils.convertGraphData(historyData['metricData'] ? convertDataType : -1, historyData['metricData'] ? historyData['metricData'].min : 0),
                    avg: GlobalUtils.convertGraphData(historyData['metricData'] ? convertDataType : -1, historyData['metricData'] ? historyData['metricData'].avg : 0),
                    max: GlobalUtils.convertGraphData(historyData['metricData'] ? convertDataType : -1, historyData['metricData'] ? historyData['metricData'].max : 0)
                };
            });
        } else {
            lineChartData.series[0] = {data: []};
            noDataFlag=true;
        }
        if(that.state.currentTimeFlag){
            var endTime,startTime,body,date;
            interval = setInterval(function () {
            date = new Date();
            endTime = parseInt(date.getTime() / 1000);
            startTime = endTime - 600;
            body = {keys: JSON.parse(that.props.items), startTime: startTime, endTime: endTime, type: 3};
                ResourceUtils.HISTORYDATA_LIST.POST2(that.props.id, body, "", function (json) {
                    if(typeof(json) != "undefined" && json.length > 0){
                        json.forEach(function (jsonData) {
                            /*if(typeof(jsonData.data) != "undefined"&&jsonData.data.length>0){
                                console.log(jsonData);
                            }*/
                            var dataList = jsonData['data'];
                            var dataArr = new Array();
                            var key = jsonData.key;
                            var idx = GlobalUtils.getIndexByKey(key,items);
                            if (dataList.length > 0) {
                                noDataFlag=false;
                                if (typeof (dataList[0].clock) == "number" && typeof (dataList[dataList.length - 1].clock) == "number") {
                                    var timeDifference = Math.round((dataList[dataList.length - 1].clock - dataList[0].clock));
                                    lineChartData.xAxis.tickInterval = GlobalUtils.getTickInterval(timeDifference);
                                }
                                for (var j = 0; j < dataList.length; j++) {
                                    var x = GlobalUtils.toDateUTC(dataList[j].clock);
                                    var y = GlobalUtils.convertGraphData(convertDataType, dataList[j].value);
                                    var data = [x, y];
                                    dataArr[j] = data;
                                }
                            }
                            that.state.chart.series[0].addPoint(dataArr);
                        })
                    }
                });
            }.bind(this), 30*1000);
        }else{
            clearInterval(interval);
        }
        return (
            <div className="col-sm-12 col-md-12 col-lg-12"
                 style={{border:"thin lightgray solid",padding:"3px",marginTop:"5px",marginLeft:"-1px"}}>
                <ChartsTitle index={this.props.index} title={this.props.title} _trashClick={this._trashClick}
                             _detailClick={this._detailClick} _checkBoxClick={this._checkBoxClick}
                             checkBox={true}/>
                {noDataFlag?<div className="col-sm-6 col-md-7 col-lg-8"
                                             style={{textAlign:"center",fontWeight:"bold",fontSize:"24px",lineHeight:"384px",height:"384px",paddingLeft:"0",paddingTop:"5px",borderRight:"thin lightgray solid"}}>
                暂无数据</div>:<ReactHighcharts id={"lineChart"+this.props.index} ref={"chart"+this.props.index} className="col-sm-6 col-md-7 col-lg-8"
                                        config={lineChartData}
                                        style={{paddingLeft:"0",paddingTop:"5px",borderRight:"thin lightgray solid"}}>
                </ReactHighcharts>}
                <ChartDataView viewData={chartViewData} dataTitle={this.props.dataTitle}/>
            </div>
        )
    }
});
module.exports = LineCharts;