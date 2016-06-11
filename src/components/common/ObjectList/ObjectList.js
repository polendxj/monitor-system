/**
 * Created by jingpeng on 16/6/11.
 */
var React = require("react");
var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");
var ProgressBar = require("react-bootstrap/lib/ProgressBar");
var Table = require("react-bootstrap/lib/Table");

var VCenterList = React.createClass({
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
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                  style={{padding:"0"}}>
                <Tab eventKey={1} title="常规状态" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th>版本</th>
                            <th style={{textAlign:"center"}}>Hypervisor数量 (单位:个)</th>
                            <th style={{textAlign:"center"}}>VMS数量 (单位:个)</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}><a href="#">47</a></td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.171</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}><a href="#">20</a></td>
                            <td style={{textAlign:"center"}}><a href="#">36</a></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        )
    }
});

var HypervisorList = React.createClass({
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
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                  style={{padding:"0"}}>
                <Tab eventKey={1} title="常规状态" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th>vmware版本</th>
                            <th style={{textAlign:"center"}}>运行时间 (单位: 小时)</th>
                            <th style={{textAlign:"center"}}>VM数量 (单位:个)</th>
                            <th>硬件类型</th>
                            <th>集群名称</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}>10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td>集成虚拟机</td>
                            <td>Cloud Servers</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}>10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td>集成虚拟机</td>
                            <td>Cloud Servers</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={2} title="CPU" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th>型号</th>
                            <th style={{textAlign:"center"}}>线程数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>频率 (单位:赫兹)</th>
                            <th style={{textAlign:"center"}}>核心数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>使用率</th>
                            <th style={{textAlign:"center"}}>负载</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>酷睿i7</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={80} label={`${80}%`} />
                            </td>
                            <td>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>酷睿i7</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td>
                                <ProgressBar active bsStyle="danger" now={92} label={`${92}%`} />
                            </td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={70} label={`${70}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={3} title="内存" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>平均使用率</th>
                            <th style={{textAlign:"center"}}>最大使用率</th>
                            <th style={{textAlign:"center"}}>最小使用率</th>
                            <th style={{textAlign:"center"}}>当前使用率</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>
                                34.4%
                            </td>
                            <td style={{textAlign:"center"}}>
                                92%
                            </td >
                            <td style={{textAlign:"center"}}>
                                10%
                            </td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={4} title="磁盘" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>总空间 (单位: G)</th>
                            <th style={{textAlign:"center"}}>使用空间 (单位: G)</th>
                            <th style={{textAlign:"center"}}>使用率</th>
                            <th style={{textAlign:"center"}}>写入(平均字节速率/最大字节速率/每秒次数)</th>
                            <th style={{textAlign:"center"}}>读取(平均字节速率/最大字节速率/每秒次数)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={50} label={`${50}%`} />
                            </td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={50} label={`${50}%`} />
                            </td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={5} title="网络流量" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>流入字节速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>流出字节速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>位速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>总流量 (单位: byte/秒)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>2048</td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>2048</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        )
    }
});

var VMSList = React.createClass({
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
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                  style={{padding:"0"}}>
                <Tab eventKey={1} title="常规状态" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th>vmware版本</th>
                            <th style={{textAlign:"center"}}>运行时间 (单位: 小时)</th>
                            <th style={{textAlign:"center"}}>VM数量 (单位:个)</th>
                            <th>硬件类型</th>
                            <th>集群名称</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vm:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}>10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td>集成虚拟机</td>
                            <td>Cloud Servers</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>vm:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}>10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td>集成虚拟机</td>
                            <td>Cloud Servers</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={2} title="CPU" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th>型号</th>
                            <th style={{textAlign:"center"}}>线程数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>频率 (单位:赫兹)</th>
                            <th style={{textAlign:"center"}}>核心数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>使用率</th>
                            <th style={{textAlign:"center"}}>负载</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>酷睿i7</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={80} label={`${80}%`} />
                            </td>
                            <td>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>酷睿i7</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td>
                                <ProgressBar active bsStyle="danger" now={92} label={`${92}%`} />
                            </td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={70} label={`${70}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={3} title="内存" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>平均使用率</th>
                            <th style={{textAlign:"center"}}>最大使用率</th>
                            <th style={{textAlign:"center"}}>最小使用率</th>
                            <th style={{textAlign:"center"}}>当前使用率</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>
                                34.4%
                            </td>
                            <td style={{textAlign:"center"}}>
                                92%
                            </td >
                            <td style={{textAlign:"center"}}>
                                10%
                            </td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={4} title="磁盘" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>总空间 (单位: G)</th>
                            <th style={{textAlign:"center"}}>使用空间 (单位: G)</th>
                            <th style={{textAlign:"center"}}>使用率</th>
                            <th style={{textAlign:"center"}}>写入(平均字节速率/最大字节速率/每秒次数)</th>
                            <th style={{textAlign:"center"}}>读取(平均字节速率/最大字节速率/每秒次数)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={50} label={`${50}%`} />
                            </td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={50} label={`${50}%`} />
                            </td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={5} title="网络流量" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>流入字节速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>流出字节速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>位速率 (单位: byte/秒)</th>
                            <th style={{textAlign:"center"}}>总流量 (单位: byte/秒)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>2048</td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>2048</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        )
    }
});

module.exports = {
    VCenterList,
    HypervisorList,
    VMSList
};