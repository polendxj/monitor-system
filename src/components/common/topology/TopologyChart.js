/**
 * Created by Captain on 2016/6/15.
 */
var React = require("react");
require('d3/d3.js');
require("../../../css/myCss/myCss.css");
require("../../../../dndTree.js");

var TopologyChart = React.createClass({

    render: function () {

        return (
            <div id="tree-container"></div>
        )
    }
});

module.exports = TopologyChart;