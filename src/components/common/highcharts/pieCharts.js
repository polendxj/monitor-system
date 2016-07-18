/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');
var ChartsTitle = require('./ChartTitle');
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");
var MenuStore = require("../../../stores/MenuStore");
var GlobalUtils = require("../../../utils/GlobalUtils");

var PieCharts = React.createClass({
    getInitialState: function () {
        return ({
            historyDataList: [],
            selectedTime: []
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
        /*var i = this.props.pieChartsArray.indexOf(this.props.index);
         console.log("pie"+i);*/
        //this.setState({historyDataList: VirtualMonitorStore.getHistoryData()[i]?VirtualMonitorStore.getHistoryData()[i]:[]});
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
        console.log(this.refs.pieChart.getChart());
    },
    render: function () {
        var pieChartData =
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
                text: ""
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
                data: []

            }],
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
        var noDataFlag = true;
        pieChartData.title.text = that.props.dataTitle;
        console.log("pie");
        console.log(that.state.historyDataList);
        console.log(that.state.historyDataList.length);
        if (typeof(that.state.historyDataList) != "undefined" && that.state.historyDataList.length > 0) {
            noDataFlag = false;
            var convertDataType = "";
            var dataArr = [];
            var items = [];
            var keepGoing = true;
            if (typeof(monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle]) != "undefined") {
                convertDataType = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].convertDataType;
                items = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].items;
            }
            that.state.historyDataList.forEach(function (historyData, index) {
                if (keepGoing) {
                    var dataList = historyData['data'];
                    var key = historyData.key;
                    var idx = GlobalUtils.getIndexByKey(key, items);
                    var name = "";
                    if (typeof(monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle]) != "undefined") {
                        name = monitorItems[MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()][that.props.dataTitle].name[idx];
                    }
                    if (dataList.length > 0) {
                        var val = GlobalUtils.convertGraphData(convertDataType, dataList[dataList.length - 1].value);
                        dataArr[index] = [name, val];
                    } else {
                        dataArr = [];
                        keepGoing = false;
                    }
                }
            });
            pieChartData.series[0].data = dataArr;
        } else {
            pieChartData.series[0].data = [];
            noDataFlag = true;
        }
        return (
            <div className="col-sm-12 col-md-6 col-lg-6"
                 style={{border:"thin lightgray solid",padding:"3px",marginTop:"5px",marginLeft:"-1px"}}>
                <ChartsTitle index={this.props.index} title={this.props.title} _trashClick={this._trashClick}
                             _detailClick={this._detailClick} _checkBoxClick={this._checkBoxClick}
                             checkBox={true}/>
                {noDataFlag ? <div className="col-sm-6 col-md-7 col-lg-8"
                                   style={{textAlign:"center",fontWeight:"bold",fontSize:"24px",lineHeight:"384px",height:"384px",paddingLeft:"0",paddingTop:"5px",borderRight:"thin lightgray solid"}}>
                    暂无数据</div> :
                    <ReactHighcharts className="col-sm-12 col-md-12 col-lg-12" config={pieChartData} ref="pieChart"
                                     style={{paddingLeft:"0",paddingTop:"5px"}}></ReactHighcharts>}


            </div>
        )
    }
});
module.exports = PieCharts;