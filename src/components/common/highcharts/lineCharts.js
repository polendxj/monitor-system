/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');
var ChartsTitle=require('./ChartTitle');

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
            <div className="col-sm-12 col-md-6 col-lg-6" style={{border:"thin lightgray solid",padding:"3px",marginTop:"5px",marginLeft:"-1px"}}>
                <ChartsTitle title={this.props.title} _trashClick={this._trashClick} _detailClick={this._detailClick} />
                <ReactHighcharts className="col-sm-12 col-md-12 col-lg-12" config={this.props.data}
                                 style={{paddingLeft:"0",paddingTop:"5px"}}>
                </ReactHighcharts>
            </div>
        )
    }
});
module.exports = LineCharts;