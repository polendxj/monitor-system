/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var Jquery = require("jquery");
var ToolBar = require("../../../ToolBar/ToolBar");
var MenuTool = require("../headNav/menuTool");
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var DropdownButton = require("react-bootstrap/lib/DropdownButton");
var ReactButton = require("react-bootstrap/lib/Button");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var Button = require("react-bootstrap/lib/Button");
var ObjectList = require("../../../ObjectList/ObjectList");
var GlobalUtils = require("../../../../../utils/GlobalUtils");

var MenuAction = require('../../../../../actions/MenuAction');
var MenuStore = require('../../../../../stores/MenuStore');

var AllCharts = require('../../../highcharts/AllCharts');


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
    getInitialState: function () {
        return ({
            groupItems: [{id: 1, text: "cpu使用率"}, {id: 2, text: "内存使用率"}, {id: 3, text: "磁盘使用率"}], // TODO 此处要替换成根据面包屑获取监控项
            serviceItems: [{id: 1, text: "vcenter"}, {id: 2, text: "hypervisor"}],
            breadcrumbData: MenuStore.getBreadcrumbData()
        })
    },
    onChange: function (key, value) {

    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    render: function () {
        var formGroup = "";
        if (this.state.breadcrumbData.length == 3) {
            switch (this.state.breadcrumbData[2].breadcrumbID) {
                case 221:
                    formGroup = <div>
                        <ToolBar.Text onChange={this.onChange} key={"bar1"} placeholder={"VCenter IP或别名"}
                                      tip={"请输入VCenter IP或名称"} appendText={""}/>
                    </div>;
                    break;
                case 222:
                    formGroup = <div>
                        <ToolBar.Text onChange={this.onChange} key={"bar2"} placeholder={"Hypervisor IP或别名"}
                                      tip={"请输入Hypervisor IP或名称"} appendText={""}/>
                    </div>;
                    break;
                case 223:
                    formGroup = <div>
                        <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"VM IP或别名"}
                                      tip={"请输入VM IP或名称"} appendText={""}/>
                    </div>;
                    break;
                case 224:
                    formGroup = <div>
                        <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"Docker IP或别名"}
                                      tip={"请输入Docker IP或名称"} appendText={""}/>
                    </div>;
                    break;
            }
        } else if (this.state.breadcrumbData.length == 4) {
            switch (this.state.breadcrumbData[2].breadcrumbID) {
                case 221:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                            </div>;
                            break;
                    }
                    break;
                case 222:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar2"} placeholder={"Hypervisor IP或别名"}
                                              tip={"请输入Hypervisor IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
                case 223:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"VM IP或别名"}
                                              tip={"请输入VM IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
                case 224:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"Docker IP或别名"}
                                              tip={"请输入Docker IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
            }
        } else if (this.state.breadcrumbData.length == 5) {
            switch (this.state.breadcrumbData[2].breadcrumbID) {
                case 221:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar1"} placeholder={"VCenter IP或别名"}
                                              appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
                case 222:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar2"} placeholder={"Hypervisor IP或别名"}
                                              tip={"请输入Hypervisor IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
                case 223:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"VM IP或别名"}
                                              tip={"请输入VM IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
                case 224:
                    switch (this.state.breadcrumbData[3].breadcrumbID) {
                        case 3:
                            formGroup = <div>
                                <ToolBar.Text onChange={this.onChange} key={"bar3"} placeholder={"Docker IP或别名"}
                                              tip={"请输入Docker IP或名称"} appendText={""}/>
                            </div>;
                            break;
                    }
                    break;
            }
        }
        return (
            <div className="col-sm-12 col-md-7 col-lg-7" style={{height:"47px",textAlign:"right"}}>
                {formGroup}
            </div>
        )
    }
});

var Timestamp = React.createClass({
    getInitialState: function () {
        return ({
            timeItems: [{id: 1, text: "今日"}, {id: 2, text: "昨日"}, {id: 3, text: "7日内"}, {id: 4, text: "自定义"}],
            visible: true,
            oldSelectedItem: "今日",
            timeText: GlobalUtils.text2Time("今日"),
            breadcrumbData: MenuStore.getBreadcrumbData()
        })
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    onChange: function (key, value) {
        if (value == "自定义") {
            this.setState({visible: false});
        } else {
            this.setState({visible: true})
        }
        this.setState({oldSelectedItem: value});
        this.setState({timeText: GlobalUtils.text2Time(value)});
    },
    hideDatePicker: function (param) {
        this.setState({visible: true});
    },
    render: function () {
        var result = "";
        if ((this.state.breadcrumbData.length == 4 || this.state.breadcrumbData.length == 5) && this.state.breadcrumbData[3].breadcrumbID == 3){
            var display = "时间段 : " + this.state.oldSelectedItem + "(" + this.state.timeText[0].value + " 至 " + this.state.timeText[1].value + ")";
            if (this.state.visible) {
                result = <div><ToolBar.DropdownList onChange={this.onChange} items={this.state.timeItems} noCaret={true}
                                                    key={"bar0"} prefixText={"时间段 : "}
                                                    appendText={"("+this.state.timeText[0].value+" 至 "+ this.state.timeText[1].value +")"}
                                                    defaultText={display}/></div>;
            } else {
                result = <div><ToolBar.MyDatePicker hideDatePicker={this.hideDatePicker}/></div>;
            }
        }
        return (
            <div className="col-sm-12 col-md-5 col-lg-5" style={{height:"47px",paddingLeft:"5px",marginTop:"3px"}}>
                <ButtonGroup>
                    {result}
                </ButtonGroup>
            </div>
        )
    }
});

var Content = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbDataList: MenuStore.getBreadcrumbData(),
            viewData: "",
            flag: false
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
        MenuStore.addChangeListener(MenuStore.events.change_views, this._changeViews);

    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
        MenuStore.removeChangeListener(MenuStore.events.change_views, this._changeViews);
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _changeViews(){
        this.setState({viewData: MenuStore.getViewData()});
    },
    render: function () {
        var div = "";
        if (this.state.breadcrumbDataList.length == 3) {
            switch (this.state.breadcrumbDataList[2].breadcrumbID) {
                case 221:
                    div = <div>
                        <ObjectList.VCenterList />
                    </div>;
                    break;
                case 222:
                    div = <div>
                        <ObjectList.HypervisorList />
                    </div>;
                    break;
                case 223:
                    div = <div>
                        <ObjectList.VMSList />
                    </div>;
                    break;
                case 232:
                    div = <div>
                        <ObjectList.MysqlList />
                    </div>;
                    break;
            }

        } else if (this.state.breadcrumbDataList.length >= 4) {
            if (this.state.breadcrumbDataList[3].breadcrumbID == 3 && !this.state.viewData) {
                div = <div>

                </div>;
            } else if (this.state.viewData == "VCenter") {
                div = <div>
                    <AllCharts />

                    <div style={{clear:"both"}}></div>
                </div>;
            }
        }

        return (
            <div style={{padding:"0 10px 0 10px",marginTop:"10px"}}>
                {div}
            </div>
        )
    }
});

module.exports = MainContent;