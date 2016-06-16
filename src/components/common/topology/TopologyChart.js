/**
 * Created by Captain on 2016/6/15.
 */
var React = require("react");
require('d3/d3.js');
require("../../../css/myCss/myCss.css");

var TopologyChart = React.createClass({
    componentDidMount: function () {
        var diameter = 760;

        var tree = d3.layout.tree()
            .size([360, diameter / 2 - 120])
            .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

        var diagonal = d3.svg.diagonal.radial()
            .projection(function(d) { return [d.y, d.x]; });
            /*.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });*/

        var svg = d3.select(".chart").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g")
            .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

        d3.json("flare", function(error, root) {
            if (error) throw error;

            var nodes = tree.nodes(root),
                links = tree.links(nodes);

            var link = svg.selectAll(".link")
                .data(links)
                .enter().append("path")
                .attr("class", "link")
                .attr("d", diagonal);

            var node = svg.selectAll(".node")
                .data(nodes)
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "rotate(" + (d.x-180) + ")translate(" + d.y + ")"; })

            /*node.append("circle")
                .attr("r", 4.5)
                .style("fill", function (d) {
                    if(d.size<2000||d.responseTime>1000){
                        return "red";
                    }
                });*/
            node.append("svg:image")
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
                .attr("x", "-32px")
                .attr("y", "-32px")
                .attr("width", "64px")
                .attr("height", "64px");

            node.append("text")
                .attr("dy", ".31em")
                .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
                .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
                .text(function(d) { return d.name; });
        });

        d3.select(self.frameElement).style("height", diameter - 150 + "px");

    },
    render: function () {

        return (
            <div className="chart"></div>
        )
    }
});

module.exports = TopologyChart;