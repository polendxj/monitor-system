/**
 * Created by Captain on 2016/6/5.
 */
/**
 * Created by Captain on 2016/6/5.
 */
var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');

var PieCharts = React.createClass({
    render: function () {
        return (
            <ReactHighcharts className="col-sm-12 col-md-6 col-lg-6" config={this.props.data} ref="chart" style={{paddingLeft:"5px"}}></ReactHighcharts>
        )
    }
});
module.exports = PieCharts;