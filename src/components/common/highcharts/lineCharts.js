/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');

var LineCharts = React.createClass({
    render: function () {
        return (
            <ReactHighcharts className="col-sm-12 col-md-9" config={this.props.data} style={{paddingLeft:"0px"}}></ReactHighcharts>
        )
    }
});
module.exports = LineCharts;