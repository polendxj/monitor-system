/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');
var ChartsTitle=require('./ChartTitle');
var ChartDataView=require('./ChartDataView');

var LineCharts = React.createClass({
    _trashClick: function () {
        console.log("trash");
    },
    _detailClick: function () {
        console.log("detail");
    },
    componentDidMount: function () {
        $(".highcharts-container").css("marginLeft", "-2px");
    },
    render: function () {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12" style={{border:"thin lightgray solid",padding:"3px",marginTop:"5px",marginLeft:"-1px"}}>
                <ChartsTitle title={this.props.title} _trashClick={this._trashClick} _detailClick={this._detailClick} />
                <ReactHighcharts className="col-sm-6 col-md-7 col-lg-8" config={this.props.data}
                                 style={{paddingLeft:"0",paddingTop:"5px"}}>
                </ReactHighcharts>
                <ChartDataView viewData={this.props.viewData} dataTitle={this.props.dataTitle}/>
            </div>
        )
    }
});
module.exports = LineCharts;