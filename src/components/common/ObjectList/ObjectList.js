/**
 * Created by jingpeng on 16/6/11.
 */
var React = require("react");
var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");
var ProgressBar = require("react-bootstrap/lib/ProgressBar");
var Table = require("react-bootstrap/lib/Table");
var ToolBar = require("../ToolBar/ToolBar");

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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}><a href="#">47</a></td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.171</td>
                            <td>1.0.0</td>
                            <td style={{textAlign:"center"}}><a href="#">20</a></td>
                            <td style={{textAlign:"center"}}><a href="#">36</a></td>
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
                            <th>版本</th>
                            <th>品牌</th>
                            <th>机器型号</th>
                            <th>集群名称</th>
                            <th>BIOS编号</th>
                            <th style={{textAlign:"center"}}>启动时间</th>
                            <th style={{textAlign:"center"}}>VM数量 (单位:个)</th>
                            <th style={{textAlign:"center"}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td>IBeats</td>
                            <td>New Washton</td>
                            <td>SK II</td>
                            <td>387987654</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>
                        </tr>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td>1.0.0</td>
                            <td>IBeats</td>
                            <td>New Washton</td>
                            <td>SK II</td>
                            <td>387987654</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td style={{textAlign:"center"}}><a href="#">24</a></td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>
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
                            <th style={{textAlign:"center"}}>主频 (单位:赫兹)</th>
                            <th style={{textAlign:"center"}}>核心数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>使用率</th>
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
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={3} title="内存" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>总内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>膨胀内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>使用内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>当前使用率</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td >
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={4} title="DataStore" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>读延迟</th>
                            <th style={{textAlign:"center"}}>写延迟</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                            <td style={{textAlign:"center"}}>50(byte/秒) / 100(byte/秒) / 120次</td>
                        </tr>
                        <tr>
                            <td>VCenter:10.9.0.170</td>
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
                            <th>宿主机</th>
                            <th>宿主机内存使用率</th>
                            <th>集群名称</th>
                            <th>电源状态</th>
                            <th style={{textAlign:"center"}}>启动时间</th>
                            <th style={{textAlign:"center"}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vms:10.9.0.96</td>
                            <td>hypervisor:10.1.1.1</td>
                            <td>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                            <td>New Washton</td>
                            <td>正常</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>
                        </tr>
                        <tr>
                            <td>vms:10.9.0.96</td>
                            <td>hypervisor:10.1.1.1</td>
                            <td>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                            <td>New Washton</td>
                            <td>正常</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={2} title="CPU" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>CPU个数 (单位:个)</th>
                            <th style={{textAlign:"center"}}>CPU Ready</th>
                            <th style={{textAlign:"center"}}>使用率</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hypervisor:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={80} label={`${80}%`} />
                            </td>
                        </tr>
                        <tr>
                            <td>vms:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>4</td>
                            <td style={{textAlign:"center"}}>5.0</td>
                            <td>
                                <ProgressBar active bsStyle="warning" now={80} label={`${80}%`} />
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
                            <th style={{textAlign:"center"}}>总内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>膨胀内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>压缩内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>私有内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>共享内存 (单位:M)</th>
                            <th style={{textAlign:"center"}}>使用率</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vms:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td >
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                1024
                            </td>
                            <td style={{textAlign:"center"}}>
                                <ProgressBar active bsStyle="info" now={40} label={`${40}%`} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={6} title="DataStore" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>提交存储空间</th>
                            <th style={{textAlign:"center"}}>未提交存储空间</th>
                            <th style={{textAlign:"center"}}>未共享的存储空间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vms:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                        </tr>
                        <tr>
                            <td>vms:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={4} title="磁盘" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>磁盘读取bps</th>
                            <th style={{textAlign:"center"}}>磁盘写取bps</th>
                            <th style={{textAlign:"center"}}>磁盘读取ops</th>
                            <th style={{textAlign:"center"}}>磁盘写取ops</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vms:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                        </tr>
                        <tr>
                            <td>vms:10.9.0.170</td>
                            <td style={{textAlign:"center"}}>100</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                            <td style={{textAlign:"center"}}>50</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        )
    }
});

var MysqlList = React.createClass({
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
                            <th style={{textAlign:"center"}}>启动时间</th>
                            <th>状态</th>
                            <th style={{textAlign:"center"}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>mysql:10.9.0.96</td>
                            <td>5.0</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td>正常</td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>

                        </tr>
                        <tr>
                            <td>mysql:10.9.0.96</td>
                            <td>5.0</td>
                            <td style={{textAlign:"center"}}>2016-6-5 21:30:10</td>
                            <td>正常</td>
                            <td style={{textAlign:"center"}}><button type="button" className="btn btn-xs btn-info btn-rad btn-trans">详情</button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={2} title="操作统计" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>慢查询</th>
                            <th style={{textAlign:"center"}}>Begin (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Commit (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Delete (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Insert (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Query (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Rollback (单位:次/秒)</th>
                            <th style={{textAlign:"center"}}>Select (单位:次/秒)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mysql:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>是</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                        </tr>
                        <tr>
                            <td>Mysql:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>是</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                            <td style={{textAlign:"center"}}>5</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={3} title="网络流量" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项目</th>
                            <th style={{textAlign:"center"}}>接收字节 (单位:秒)</th>
                            <th style={{textAlign:"center"}}>发送字节 (单位:秒)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mysql:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                        </tr>
                        <tr>
                            <td>Mysql:10.9.0.96</td>
                            <td style={{textAlign:"center"}}>1024</td>
                            <td style={{textAlign:"center"}}>1024</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        )
    }
});

var HypervisorConfig=React.createClass({
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
                <Tab eventKey={1} title="刷新频率" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项</th>
                            <th>监控频率 (单位:秒)</th>
                            <th style={{textAlign:"center"}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>cpu使用率</td>
                            <td>
                                <ToolBar.TextOfNoTips tip={"cpu使用率监控频率"}/>
                            </td>
                            <td style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-success btn-rad btn-trans" disabled={false}>保存</button>
                            </td>
                        </tr>
                        <tr>
                            <td>cpu使用率</td>
                            <td>
                                <ToolBar.TextOfNoTips tip={"cpu使用率监控频率"}/>
                            </td>
                            <td style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-success btn-rad btn-trans" disabled={false}>保存</button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={2} title="告警阈值" style={{padding:"0"}}>
                    <Table responsive style={{margin:"0"}}>
                        <thead>
                        <tr>
                            <th>监控项</th>
                            <th>告警线</th>
                            <th style={{textAlign:"center"}}>状态</th>
                            <th style={{textAlign:"center"}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>cpu使用率</td>
                            <td>
                                当cpu负载大于<ToolBar.TextOfNoTips />,小于<ToolBar.TextOfNoTips />的时候进行告警
                            </td>
                            <td style={{textAlign:"center",color:"green"}}>监控中</td>
                            <td style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-success btn-rad btn-trans" disabled={false}>保存</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans">禁用</button>
                            </td>

                        </tr>
                        <tr>
                            <td>cpu使用率</td>
                            <td>
                                当cpu负载大于<ToolBar.TextOfNoTips />,小于<ToolBar.TextOfNoTips />的时候进行告警
                            </td>
                            <td style={{textAlign:"center",color:"gray"}}>
                                未监控
                            </td>
                            <td style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-success btn-rad btn-trans" disabled={true}>保存</button>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">启用</button>
                            </td>

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
    VMSList,
    MysqlList,
    HypervisorConfig
};