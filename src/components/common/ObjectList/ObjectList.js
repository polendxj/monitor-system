/**
 * Created by jingpeng on 16/6/11.
 */
var React = require("react");
var ReactDOM = require("react-dom");
var browserHistory = require('react-router').browserHistory;
var Tabs = require("react-bootstrap/lib/Tabs");
var Jquery = require('jquery');
var Tab = require("react-bootstrap/lib/Tab");
var ProgressBar = require("react-bootstrap/lib/ProgressBar");
var Table = require("react-bootstrap/lib/Table");
var ToolBar = require("../ToolBar/ToolBar");
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");
var DatabasesAction = require("../../../actions/DatabasesAction");
var DatabaseStore = require("../../../stores/DatabaseStore");
var AppServiceAction = require("../../../actions/AppServiceAction");
var AppServiceStore = require("../../../stores/AppServiceStore");
var AlarmAction = require("../../../actions/AlarmAction");
var AlarmStore = require("../../../stores/AlarmStore");
var UsersAction = require("../../../actions/UsersAction");
var UsersStore = require("../../../stores/UsersStore");
var WebSiteAction = require("../../../actions/WebSiteAction");
var WebSiteStore = require("../../../stores/WebSiteStore");
var Pagination = require("../Paganation");
var Loading = require("../CommonComponent").Loading;
var GlobalUtils = require("../../../utils/GlobalUtils");
var NoData = require("../CommonComponent").NoData;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');

var VCenterList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: []
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeVCenterList, this._changeListData);
        setTimeout(function () {
            VirtualMonitorAction.getVCenterList();

        }, 1);
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeVCenterList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: VirtualMonitorStore.getVCenterListData()});
        this.setState({isLoading: false});
    },
    _delete: function (index) {
        var id = this.state.listData[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            VirtualMonitorAction.deleteVCenter(id);
        }
    },
    _edit: function (index) {
        MenuAction.changeBreadcrumb(4, {id: 30001, name: "编辑"});
        VirtualMonitorStore.setEditVcenterData(this.state.listData[index]);
        browserHistory.push("/updateVCenter");
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.length > 0) {

                var analysisData = GlobalUtils.en2Cn_item(this.state.listData[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                    thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{val2.lastvalue}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                     style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                            {val1.status == 0 ? "已停用" : "运行中"}
                        </td>);
                        tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                     style={{textAlign:"center"}}>
                            <button type="button" className="btn btn-xs btn-info btn-rad btn-trans"
                                    onClick={that._edit.bind(that,key1)}>编辑
                            </button>
                            <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                    onClick={that._delete.bind(that,key1)}>删除
                            </button>
                        </td>);
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }


                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何VCenter信息"}/>
                )
            }
        }

    }
});

var HypervisorList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeHypervisiorList, this._changeListData);
        setTimeout(function () {
            VirtualMonitorAction.getHypervisorList(0, "", "");

        }, 1);
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeHypervisiorList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: VirtualMonitorStore.getHypervisorListData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        VirtualMonitorAction.getHypervisorList(page, VirtualMonitorStore.getFilter().vcenterFilter, VirtualMonitorStore.getFilter().hypervisorFilter);
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }


                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Hypervisor信息"}/>
                )
            }

        }
    }
});

var VMSList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeVmList, this._changeListData);
        setTimeout(function () {
            VirtualMonitorAction.getVmList(0, "", "");

        }, 1);
    },
    componentWillUnmount: function () {
        VirtualMonitorStore.removeChangeListener(VirtualMonitorStore.events.ChangeVmList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: VirtualMonitorStore.getVmData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        VirtualMonitorAction.getVmList(page, VirtualMonitorStore.getFilter().hypervisorFilter, VirtualMonitorStore.getFilter().vmsFilter);
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }


                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何VMS信息"}/>
                )
            }
        }
    }
});

var MysqlList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        DatabaseStore.addChangeListener(DatabaseStore.events.ChangeMysqlList, this._changeListData);
        setTimeout(function () {
            DatabasesAction.getMysqlList("", "mysql", 0);

        }, 1);
    },
    componentWillUnmount: function () {
        DatabaseStore.removeChangeListener(DatabaseStore.events.ChangeMysqlList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: DatabaseStore.getMysqListData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        DatabasesAction.getMysqlList(DatabaseStore.getFilter().mysqlFilter, "mysql", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            DatabasesAction.deleteDatabase(id, 'mysql', 0);
        }
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.host}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                        onClick={that._delete.bind(that,key1)}>删除
                                </button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }


                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Mysql信息"}/>
                )
            }
        }
    }
});

var SqlserverList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        DatabaseStore.addChangeListener(DatabaseStore.events.ChangeSqlserverList, this._changeListData);
        setTimeout(function () {
            DatabasesAction.getSqlserverList("","sqlserver", 0);
        }, 1);
    },
    componentWillUnmount: function () {
        DatabaseStore.removeChangeListener(DatabaseStore.events.ChangeSqlserverList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: DatabaseStore.getSqlserverListData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        DatabasesAction.getSqlserverList("","sqlserver", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            DatabasesAction.deleteDatabase(id, 'sqlserver', 0);
        }
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                        onClick={that._delete.bind(that,key1)}>删除
                                </button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }

                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Sqlserver信息"}/>
                )
            }
        }
    }
});

var ApacheList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        AppServiceStore.addChangeListener(AppServiceStore.events.ChangeApacheList, this._changeListData);
        setTimeout(function () {
            AppServiceAction.getApacheList("apache", 0);
        }, 1);
    },
    componentWillUnmount: function () {
        DatabaseStore.removeChangeListener(AppServiceStore.events.ChangeApacheList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: AppServiceStore.getApacheListData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        AppServiceAction.getApacheList("apache", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            AppServiceAction.deleteAppService(id, 'apache', 0);
        }
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                        onClick={that._delete.bind(that,key1)}>删除
                                </button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }

                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Apache信息"}/>
                )
            }
        }
    }
});

var NginxList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        AppServiceStore.addChangeListener(AppServiceStore.events.ChangeNginxList, this._changeListData);
        setTimeout(function () {
            AppServiceAction.getNginxList("nginx", 0);
        }, 1);
    },
    componentWillUnmount: function () {
        DatabaseStore.removeChangeListener(AppServiceStore.events.ChangeNginxList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: AppServiceStore.getNginxListData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        AppServiceAction.getNginxList("nginx", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            AppServiceAction.deleteAppService(id, 'nginx', 0);
        }
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                        onClick={that._delete.bind(that,key1)}>删除
                                </button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }

                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Nginx信息"}/>
                )
            }
        }
    }
});

var HttpWebList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            listData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        WebSiteStore.addChangeListener(WebSiteStore.events.ChangeHttpList, this._changeListData);
        setTimeout(function () {
            WebSiteAction.getHttpList("", 0);
        }, 1);
    },
    componentWillUnmount: function () {
        WebSiteStore.removeChangeListener(WebSiteStore.events.ChangeHttpList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({listData: WebSiteStore.getHttpData(), pages: this.state.listData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        WebSiteAction.getHttpList("", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            AppServiceAction.deleteAppService(id, 'nginx', 0);
        }
    },
    render: function () {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        } else {
            if (this.state.listData.content.length > 0) {
                var analysisData = GlobalUtils.en2Cn_item(this.state.listData.content[0].items);
                var tabs = [];
                var that = this;
                var tabIndex = 1;
                for (tab in analysisData) {
                    /*生成了title*/
                    var thead = [];
                    thead.push(<th key={tab+"thead"+"-1"} style={{textAlign:"left"}}>{"监控项目"}</th>);   //生成项目监控title
                    analysisData[tab].forEach(function (val1, key1) {
                        thead.push(<th key={tab+"thead"+key1} style={{textAlign:val1.position}}>{val1.name_cn}</th>);
                    });
                    if (tabIndex == 1) {
                        thead.push(<th key={tab+"thead"+"-3"} style={{textAlign:"center"}}>{"状态"}</th>);   //生成状态title
                        thead.push(<th key={tab+"thead"+"-2"} style={{textAlign:"center"}}>{"操作"}</th>);   //生成操作title
                    }
                    /*生成了tr*/
                    //
                    var tr = [];
                    var tbody = "";
                    that.state.listData.content.forEach(function (val1, key1) {
                        var tds = [<td key={tab+"tr"+key1+"td"+"-1"}
                                       style={{textAlign:"left"}}>{val1.name}</td>];
                        var tempTds = [];
                        val1.items.forEach(function (val2, key2) {
                            analysisData[tab].forEach(function (val3, key3) {
                                if (val2.key_ == val3.key) {
                                    tempTds.push({
                                        data: <td key={tab+"tr"+key1+"td"+key2}
                                                  style={{textAlign:val3.position}}>{GlobalUtils.type2Style(val3.type, val2.lastvalue)}</td>,
                                        priority: key3
                                    });

                                }
                            });
                        });
                        tempTds.sort(GlobalUtils.arrSort("priority"));
                        tempTds.forEach(function (o, k) {
                            tds.push(o.data);
                        });
                        if (tabIndex == 1) {
                            tds.push(<td key={tab+"tr"+key1+"td"+"-3"}
                                         style={{textAlign:"center",color:val1.status==0?"red":"green"}}>
                                {val1.status == 0 ? "已停用" : "运行中"}
                            </td>);
                            tds.push(<td key={tab+"tr"+key1+"td"+"-2"}
                                         style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-xs btn-info btn-rad btn-trans">实时</button>
                                <button type="button" className="btn btn-xs btn-danger btn-rad btn-trans"
                                        onClick={that._delete.bind(that,key1)}>删除
                                </button>
                            </td>);
                        }
                        tr.push(<tr key={tab+"tr"+key1}>{tds}</tr>);
                    });
                    tbody = <tbody key={tab+"tbody"}>{tr}</tbody>;
                    tabs.push(
                        <Tab key={"tab"+tabIndex} eventKey={tabIndex} title={tab} style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    {thead}
                                </tr>
                                </thead>
                                {tbody}
                            </Table>
                        </Tab>);
                    tabIndex++;
                }

                return (
                    <div>
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                              style={{padding:"0"}}>
                            {tabs}
                        </Tabs>
                        <Pagination pages={this.state.pages} _changePage={this._changePage}/>

                    </div>

                )
            } else {
                return (
                    <NoData text={"未查找到任何Http信息"}/>
                )
            }
        }
    }
});

var UsersList = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            usersData: [],
            pages: 0
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {
        UsersStore.addChangeListener(UsersStore.events.ChangeUsersList, this._changeListData);
        setTimeout(function () {
            UsersAction.getUsersList("", 0);
        }, 1);
    },
    componentWillUnmount: function () {
        UsersStore.removeChangeListener(UsersStore.events.ChangeUsersList, this._changeListData);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    _changeListData: function () {
        this.setState({usersData: UsersStore.getUsersData(), pages: this.state.usersData.totalPages});
        this.setState({isLoading: false});
    },
    _changePage: function (page) {
        UsersAction.getUsersList("", page);
    },
    _delete: function (index) {
        var id = this.state.listData.content[index].hostid;
        if (confirm("确定要删除该数据吗?")) {
            AppServiceAction.deleteAppService(id, 'nginx', 0);
        }
    },
    render: function () {
        if (!this.state.isLoading) {
            var rs = [];
            if (this.state.usersData.content.length > 0) {
                this.state.usersData.content.forEach(function (val, key) {
                    rs.push(
                        <tr key={"user"+key}>
                            <td style={{textAlign:"left"}}>{val.name}</td>
                            <td style={{textAlign:"center"}}>{val.type == 2 ? "管理员" : "超级管理员"}</td>
                            <td style={{textAlign:"center"}}>

                            </td>
                        </tr>
                    );
                });
            } else {
                rs = [<tr key={"user"+0}>
                    <td colSpan="5"><NoData /></td>
                </tr>];
            }
            return (
                <div>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                          style={{padding:"0"}}>
                        <Tab eventKey={1} title="用户列表" style={{padding:"0"}}>
                            <Table responsive style={{margin:"0"}}>
                                <thead>
                                <tr>
                                    <th style={{textAlign:"left"}}>用户名</th>
                                    <th style={{textAlign:"center"}}>类型</th>
                                    <th style={{textAlign:"center"}}>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rs}
                                </tbody>
                            </Table>
                        </Tab>

                    </Tabs>
                    <Pagination pages={this.state.pages} _changePage={this._changePage}/>
                </div>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
});

var HypervisorConfig = React.createClass({
    getInitialState: function () {
        return {
            key: 1
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    componentDidMount: function () {

    },
    saveMonitorRefresh: function (itemid, key) {
        VirtualMonitorAction.saveConfigDataOfMonitorItemRefresh(itemid, $("#delay" + key).val());
    },
    saveAlarmLine: function (tplTriggerId, params, status, idx) {
        var obj = {};
        var count = 0;
        if (params) {
            for (param in JSON.parse(params)) {
                obj[param] = $("#alarm" + idx + "sub" + (count++)).val();
            }
        }
        VirtualMonitorAction.saveAlarmLine(tplTriggerId, obj, status);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    render: function () {
        if (this.props.configData.length == 2) {
            var alarmSubCount = 0;
            var refreshData = [];
            var alarmConfig = [];
            if (this.props.configData[0].length > 0) {
                this.props.configData[0].forEach(function (val, key) {
                    refreshData.push(
                        <tr key={"refresh"+key}>
                            <td style={{textAlign:"center"}}>{key + 1}</td>
                            <td>{GlobalUtils.getMonitorItemByKey(val.key_)}</td>
                            <td>
                                <ToolBar.TextOfNoTips idx={"delay"+key} value={val.delay}/>
                            </td>
                            <td style={{textAlign:"center"}}>
                                <button onClick={this.saveMonitorRefresh.bind(this,val.itemid,key)} type="button"
                                        className="btn btn-xs btn-success btn-rad btn-trans"
                                        disabled={false}>保存
                                </button>
                            </td>
                        </tr>
                    );
                }.bind(this));
            } else {
                refreshData = <tr>
                    <td colSpan="5"><NoData text={"不存在任何监控项"}/></td>
                </tr>
            }
            if (this.props.configData[1].length > 0) {
                this.props.configData[1].forEach(function (val, key) {
                    var defaultsValue = [];
                    var dv = "";
                    if (val.defaultValues) {
                        dv = JSON.parse(val.defaultValues);
                        for (item in dv) {
                            defaultsValue.push(dv[item]);
                        }
                    }
                    alarmSubCount = 0;
                    alarmConfig.push(
                        <tr key={"alarm"+key}>
                            <td style={{textAlign:"center"}}>{key + 1}</td>
                            <td>
                                {GlobalUtils.analysisAlarmLine(val.description).split("").map(function (str, idx) {
                                    if (str != "*") {
                                        return str;
                                    } else {
                                        return <ToolBar.TextOfNoTips value={defaultsValue[alarmSubCount]}
                                                                     key={"alarm"+key+"sub"+key}
                                                                     idx={"alarm"+key+"sub"+(alarmSubCount++)}/>;
                                    }
                                })}
                            </td>
                            <td>{GlobalUtils.analysisAlarmParams(val.params)}</td>
                            <td style={{textAlign:"center",color:val.status==0?"red":"green"}}>{val.status == 0 ? "已禁用" : "监控中"}</td>
                            <td style={{textAlign:"center"}}>
                                {val.params ? <button type="button" className="btn btn-xs btn-success btn-rad btn-trans"
                                                      disabled={false}
                                                      onClick={this.saveAlarmLine.bind(this,val.tplTriggerId,val.params,val.status,key)}>
                                    保存
                                </button> : ""}
                                {val.status == 0 ?
                                    <button onClick={this.saveAlarmLine.bind(this,val.tplTriggerId,val.params,1,key)}
                                            type="button" className="btn btn-xs btn-success btn-rad btn-trans">
                                        启用</button> :
                                    <button onClick={this.saveAlarmLine.bind(this,val.tplTriggerId,val.params,0,key)}
                                            type="button" className="btn btn-xs btn-danger btn-rad btn-trans">
                                        禁用</button>}
                            </td>
                        </tr>
                    );
                }.bind(this));
            } else {
                alarmConfig = <tr>
                    <td colSpan="5"><NoData text={"不存在任何告警阈值设置项"}/></td>
                </tr>
            }
            return (
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                      style={{padding:"0"}}>
                    <Tab eventKey={1} title="刷新频率" style={{padding:"0"}}>
                        <Table responsive style={{margin:"0"}}>
                            <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>编号</th>
                                <th>监控项</th>
                                <th>监控频率 (单位:秒)</th>
                                <th style={{textAlign:"center"}}>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {refreshData}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey={2} title="告警阈值" style={{padding:"0"}}>
                        <Table responsive style={{margin:"0"}}>
                            <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>编号</th>
                                <th>告警线</th>
                                <th>描述</th>
                                <th style={{textAlign:"center"}}>状态</th>
                                <th style={{textAlign:"center"}}>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {alarmConfig}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            )
        } else {
            return (
                <Loading />
            )
        }

    }
});

var AlarmOfMessage = React.createClass({
    getInitialState: function () {
        return {
            key: 1,
            isLoading: true,
            alarmMessageData: []
        };
    },
    handleSelect(key) {
        this.setState({key});
    },
    changeAlarmMessageList: function () {
        this.setState({isLoading: false, alarmMessageData: AlarmStore.getAlarmMessageData()});
    },
    componentDidMount: function () {
        AlarmStore.addChangeListener(AlarmStore.events.ChangeAlarmMessageList, this.changeAlarmMessageList);
        setTimeout(function () {
            AlarmAction.getAlarmMessageList();

        }, 1);
    },
    componentWillUnmount: function () {
        AlarmStore.removeChangeListener(AlarmStore.events.ChangeAlarmMessageList, this.changeAlarmMessageList);
    },
    componentDidUpdate: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    render: function () {
        if (!this.state.isLoading) {
            var rs = [];
            if (this.state.alarmMessageData.length > 0) {
                this.state.alarmMessageData.forEach(function (val, key) {
                    rs.push(
                        <tr key={"alarm"+key}>
                            <td>{val.servername}</td>
                            <td style={{textAlign:"center"}}>{GlobalUtils.timestampToTimeText(val.createTime)}</td>
                            <td style={{textAlign:"center",color:GlobalUtils.alarmLevelColor(val.severity)}}>{val.severity}</td>
                            <td>{val.issue}</td>
                        </tr>
                    );
                });
            } else {
                rs = [<tr>
                    <td colSpan="5"><NoData /></td>
                </tr>];
            }
            return (
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example"
                      style={{padding:"0"}}>
                    <Tab eventKey={1} title="告警消息" style={{padding:"0"}}>
                        <Table responsive style={{margin:"0"}}>
                            <thead>
                            <tr>
                                <th>监控项目</th>
                                <th style={{textAlign:"center"}}>告警时间</th>
                                <th style={{textAlign:"center"}}>告警级别</th>
                                <th >消息内容</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rs}
                            </tbody>
                        </Table>
                    </Tab>

                </Tabs>
            )
        } else {
            return (
                <Loading />
            )
        }

    }
});

module.exports = {
    VCenterList,
    HypervisorList,
    VMSList,
    MysqlList,
    SqlserverList,
    HypervisorConfig,
    ApacheList,
    NginxList,
    AlarmOfMessage,
    HttpWebList,
    UsersList
};