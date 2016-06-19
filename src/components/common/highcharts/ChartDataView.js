/**
 * Created by Captain on 2016/6/19.
 */
var React = require("react");
var Jquery = require("jquery");
var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");
var Table = require("react-bootstrap/lib/Table");

var ChartDataView = React.createClass({
    render: function () {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3" style={{backgroundColor:"white"}}>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});

var Content = React.createClass({
    componentDidMount: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    render: function () {
        return (
            <div>
                <Table responsive style={{margin:"0"}}>
                    <thead>
                    <tr>
                        <th style={{textAlign:"center",fontWeight:"bold"}}></th>
                        <th style={{textAlign:"center",fontWeight:"bold"}}>最小值</th>
                        <th style={{textAlign:"center",fontWeight:"bold"}}>平均值</th>
                        <th style={{textAlign:"center",fontWeight:"bold"}}>最大值</th>
                    </tr>
                    </thead>
                    <tbody style={{textAlign:"center"}}>
                    <tr>
                        <td>CPU Usage</td>
                        <td>5.0</td>
                        <td>12.7</td>
                        <td>44.3</td>
                    </tr>
                    <tr>
                        <td>Disk Usage</td>
                        <td>3.2</td>
                        <td>10.7</td>
                        <td>33.2</td>
                    </tr>
                    <tr>
                        <td>Memory Usage</td>
                        <td>6.7</td>
                        <td>13.1</td>
                        <td>39.8</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
});

module.exports = ChartDataView;