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
    tooltip: {

    },
    series: []
};
/*Highcharts.setOptions({
 global: {
 useUTC: false
 }
 });*/
var LineCharts = React.createClass({
    getInitialState: function () {
        return ({
            historyDataList: [],
            chartViewData: [],
            lineChartList: [],
            hypervisorID: "",
            selectedTime: []
        })
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeHistoryDataList, this._changeHistoryListData);

        $(".highcharts-container").css("marginLeft", "-2px");
        if(this.props.id!=""){
            VirtualMonitorAction.getHistoryDataList(this.props.id, this.props.bodyArr);
        }
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeHistoryDataList, this._changeHistoryListData);

    },
    /*    _startChartsRender: function () {
     var hypervisorID=VirtualMonitorStore.getHypervisorID();
     var selectedTime=GlobalUtils.getTimes();
     this.setState({hypervisorID:hypervisorID});
     this.setState({selectedTime:selectedTime});
     for(var i=0;i<this.state.lineChartsArray.length;i++){
     var startTime=selectedTime[0].key;
     var endTime=selectedTime[1].key;
     }
     VirtualMonitorAction.getHistoryDataList(hypervisorID, this.props.bodyArr);
     },*/
    _changeHistoryListData: function () {
        var i = this.props.lineChartsArray.indexOf(this.props.index);
        this.setState({historyDataList: VirtualMonitorStore.getHistoryData()[i]});
        /*var that = this;
         setTimeout(function () {
         if (typeof(that.state.historyDataList)!="undefined"&&that.state.historyDataList.length>0) {
         console.log(that.state.historyDataList);
         var charViewDataList = [];
         var chartViewData = new Array();
         var lineChartList = new Array();
         lineChartData.series = new Array();
         var convertDataType=monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].convertDataType;
         var unitName="单位:";
         if(convertDataType.indexOf('M')>-1){
         unitName+='M';
         chartViewData[0] = {name: '', min: '最小值(M)', avg: '平均值(M)', max: '最大值(M)'};
         }else if(convertDataType.indexOf('G')>-1){
         unitName+='G';
         chartViewData[0] = {name: '', min: '最小值(G)', avg: '平均值(G)', max: '最大值(G)'};
         }
         lineChartData.yAxis.title.text=unitName;
         that.state.historyDataList.forEach(function (historyData, index) {
         //var convertDataType=monitorItems[that.props.viewData.type][graphItem.name].convertDataType;
         //console.log(convertDataType);
         /!*                for(var i=0;i<historyDataArr.length;i++){
         var historyData=historyDataArr[i];*!/
         var dataList = historyData['data'];
         var dataArr=new Array();
         if(dataList.length>0){
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
         var name=monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].name[index];
         var seriesType=monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].seriesType[index];
         lineChartData.series[index] = $.extend({}, {type:seriesType,zIndex:10-index,name: name, data: dataArr});
         chartViewData[index + 1] = {
         name: name,
         min: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].min),
         avg: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].avg),
         max: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].max)
         };
         lineChartData.title.text = that.props.dataTitle;
         });
         that.setState({chartViewData:chartViewData});
         }
         },10);*/
    },
    _trashClick: function () {
        console.log("trash");
    },
    _detailClick: function () {
        console.log(this.props._checkBoxClick);
    },
    _checkBoxClick: function () {
        var that = this;
        var lineChartsArr = this.props.lineChartsArray;
        var setIntervalList = new Array();
        var bodyArr = new Array();
        for (var i = 0; i < lineChartsArr.length; i++) {
            if ($("#checkBox" + lineChartsArr[i]).is(':checked')) {
                var date = new Date();
                var endTime = parseInt(date.getTime() / 1000);
                var startTime = endTime - 3600;
                var body = {keys: that.props.body.keys, startTime: startTime, endTime: endTime, type: 3};
                bodyArr.push(body);
            } else {
                var startTime = 1466431457;
                var endTime = 1466641498;
                var body = {keys: that.props.body.keys, startTime: startTime, endTime: endTime, type: 3};
                bodyArr.push(body);
            }
        }
        for (var i = 0; i < lineChartsArr.length; i++) {
            if ($("#checkBox" + lineChartsArr[i]).is(':checked')) {
                VirtualMonitorAction.getHistoryDataList(that.props.id, bodyArr);
                /*lineChartData.chart.events = {
                 load: function () {*/
                var flag = true;
                var load_this = this;
                setIntervalList[i] = setInterval(function () {
                    date = new Date();
                    endTime = parseInt(date.getTime() / 1000);
                    startTime = endTime - 30;
                    body = {keys: that.props.body.keys, startTime: startTime, endTime: endTime, type: 3};
                    ResourceUtils.HISTORYDATA_LIST.POST2(that.props.id, body, "", function (json) {
                        json.forEach(function (jsonData, idx) {
                            console.log(jsonData);
                            if (jsonData.data.length > 0) {
                                var points = jsonData.data;
                                for (var j = 0; j < points.length; j++) {
                                    var x = GlobalUtils.toDateUTC(points[j].clock);
                                    var y = GlobalUtils.convertGraphData("memory", points[j].value);
                                    load_this.series[idx].addPoint([x, y], true, true);
                                }
                            }
                        }.bind(this));
                    }, function (resp) {
                        console.log(resp);
                        if (resp.status == 200) {

                        } else if (resp.status >= 300) {
                            alert(resp.responseJSON.message);
                        }
                    });
                }.bind(this), 1000);
                /* }
                 }*/
            } else {
                clearInterval(setIntervalList[i]);
            }
        }
    },
    render: function () {
        var that = this;
        var chartViewData = new Array();
        lineChartData.title.text = that.props.dataTitle;
        console.log(that.props.dataTitle);
        console.log(that.props.dataTitle);
        if (typeof(that.state.historyDataList) != "undefined" && that.state.historyDataList.length > 0) {
            console.log(MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase());
            lineChartData.series = new Array();
            var convertDataType = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].convertDataType;
            var unitName = "单位:";
            if (convertDataType.indexOf('M') > -1) {
                unitName += 'M';
                lineChartData.tooltip= {
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
                lineChartData.tooltip= {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + 'G'
                    }
                };
                chartViewData[0] = {name: '', min: '最小值(G)', avg: '平均值(G)', max: '最大值(G)'};
            }else if(convertDataType.indexOf('number') > -1){
                lineChartData.tooltip= {
                    formatter: function () {
                        return '<b>'
                            + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',
                                this.x) + '</b><br/>'
                            + this.series.name + ': ' + this.y + '个'
                    }
                };
            }
            lineChartData.yAxis.title.text = unitName;
            that.state.historyDataList.forEach(function (historyData, index) {
                var dataList = historyData['data'];
                var dataArr = new Array();
                if (dataList.length > 0) {
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
                var name = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].name[index];
                var seriesType = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].seriesType[index];
                lineChartData.series[index] = $.extend({}, {
                    type: seriesType,
                    zIndex: 10 - index,
                    name: name,
                    data: dataArr
                });
                chartViewData[index + 1] = {
                    name: name,
                    min: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].min),
                    avg: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].avg),
                    max: GlobalUtils.convertGraphData(convertDataType, historyData['metricData'].max)
                };
            });
        }
        return (
            <div className="col-sm-12 col-md-12 col-lg-12"
                 style={{border:"thin lightgray solid",padding:"3px",marginTop:"5px",marginLeft:"-1px"}}>
                <ChartsTitle index={this.props.index} title={this.props.title} _trashClick={this._trashClick}
                             _detailClick={this._detailClick} _checkBoxClick={this._checkBoxClick}
                             checkBox={true}/>
                <ReactHighcharts id={"lineChart"+this.props.index} className="col-sm-6 col-md-7 col-lg-8"
                                 config={lineChartData}
                                 style={{paddingLeft:"0",paddingTop:"5px",borderRight:"thin lightgray solid"}}>
                </ReactHighcharts>
                <ChartDataView viewData={chartViewData} dataTitle={this.props.dataTitle}/>
            </div>
        )
    }
});
module.exports = LineCharts;