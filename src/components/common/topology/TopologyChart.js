/**
 * Created by Captain on 2016/6/15.
 */
var React = require("react");
require('d3/d3.js');
require("../../../css/myCss/myCss.css");
require("../../../../dndTree.js");

/*node.append("svg:image")
    .attr("class", "circle")
    .attr("xlink:href", function(d){
        //根据类型来使用图片
        switch (d.imgType){
            case 0:
                return "/imgs/topology/cloud_ok.png";
                break;
            case 1:
            case 2:
            case 3:
                return "/imgs/topology/server_ok.png";
                break;
        }
    })
    .attr("x", "-16px")
    .attr("y", "-16px")
    .attr("width", "32px")
    .attr("height", "32px");*/
var TopologyChart = React.createClass({

    render: function () {

        return (
            <div id="tree-container"></div>
        )
    }
});

module.exports = TopologyChart;