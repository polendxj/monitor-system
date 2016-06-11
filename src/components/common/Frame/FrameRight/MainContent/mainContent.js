/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var Jquery = require("jquery");
var ToolBar = require("../../../ToolBar/ToolBar");
var MenuTool = require("../headNav/menuTool");
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var DropdownButton = require("react-bootstrap/lib/DropdownButton");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var Button = require("react-bootstrap/lib/Button");
var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");
var Table = require("react-bootstrap/lib/Table");

var MainContent = React.createClass({
    render: function () {

        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <MenuTool />
                </div>
                <div style={{height:"47px"}}>
                    <Timestamp />
                    <Form />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});

var Form = React.createClass({
    render: function () {
        return (
            <div className="col-sm-12 col-md-7 col-lg-7" style={{height:"47px",textAlign:"right"}}>
                <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>
                <ToolBar.DropdownList key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>
                <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>
            </div>
        )
    }
});

var Timestamp = React.createClass({
    render: function () {
        return (
            <div className="col-sm-12 col-md-5 col-lg-5" style={{height:"47px",paddingLeft:"5px",marginTop:"-7px"}}>
                <ButtonGroup>
                    <ToolBar.DropdownList noCaret={true} key={"bar0"} prefixText={"时间段 : "}
                                          defaultText={"时间段 : 今日 (2016-5-21 21:00 至 2016-5-21 22:30)"}/>
                </ButtonGroup>
            </div>
        )
    }
});

var Content = React.createClass({
    getInitialState: function () {
        return {
            key: 1
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
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
            <div style={{padding:"0 10px 0 10px"}}>
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                      style={{padding:"0"}}>
                    <Tab eventKey={1} title="常规状态" style={{padding:"0"}}>
                        <Table responsive style={{margin:"0"}}>
                            <thead>
                            <tr>
                                <th>监控项目</th>
                                <th>摘要</th>
                                <th>监控类型</th>
                                <th>监控频率</th>
                                <th>可用率</th>
                                <th>平均响应时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Maxent Fraud Library</td>
                                <td>http://www.maxent-inc.com</td>
                                <td>http</td>
                                <td>15分钟</td>
                                <td>100%</td>
                                <td>47.32 ms</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Maxent Fraud Library</td>
                                <td>http://www.maxent-inc.com</td>
                                <td>http</td>
                                <td>15分钟</td>
                                <td>100%</td>
                                <td>47.32 ms</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Maxent Fraud Library</td>
                                <td>http://www.maxent-inc.com</td>
                                <td>http</td>
                                <td>15分钟</td>
                                <td>100%</td>
                                <td>47.32 ms</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Maxent Fraud Library</td>
                                <td>http://www.maxent-inc.com</td>
                                <td>http</td>
                                <td>15分钟</td>
                                <td>100%</td>
                                <td>47.32 ms</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey={2} title="网卡流量">网卡流量</Tab>
                    <Tab eventKey={3} title="CPU">CPU</Tab>
                    <Tab eventKey={4} title="内存">内存</Tab>
                    <Tab eventKey={6} title="负载">负载</Tab>
                    <Tab eventKey={7} title="磁盘利用率">磁盘利用率</Tab>
                    <Tab eventKey={8} title="磁盘I/O">磁盘I/O</Tab>
                    <Tab eventKey={9} title="系统进程数">系统进程数</Tab>
                </Tabs>
            </div>
        )
    }
});

module.exports = MainContent;