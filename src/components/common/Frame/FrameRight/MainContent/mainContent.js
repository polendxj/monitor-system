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
            groupItems: [{id: 1, text: "zabbix server"}],
            serviceItems: [{id: 1, text: "vcenter"}, {id: 2, text: "hypervisor"}]
        })
    },
    onChange: function (key, value) {

    },
    render: function () {
        return (
            <div className="col-sm-12 col-md-7 col-lg-7" style={{height:"47px",textAlign:"right"}}>
                <ToolBar.DropdownList onChange={this.onChange} items={this.state.groupItems} key={"bar0"} prefixText={"组 : "}
                                      defaultText={"请选择组"} appendText={""} />
                <ToolBar.DropdownList onChange={this.onChange} items={this.state.serviceItems} key={"bar2"} prefixText={"服务 : "}
                                      defaultText={"请选择应用服务"} appendText={""} />
                <ToolBar.Text onChange={this.onChange} key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"} appendText={""} />
            </div>
        )
    }
});

var Timestamp = React.createClass({
    getInitialState: function () {
        return ({
            timeItems: [{id: 1, text: "今日"}, {id: 2, text: "昨日"}, {id: 3, text: "7日内"}, {id: 4, text: "自定义"}],
            visible: true,
            oldSelectedItem: "今日"
        })
    },
    onChange: function (key, value) {
        if (value == "自定义") {
            this.setState({visible: false});
        } else {
            this.setState({visible: true})
        }
        this.setState({oldSelectedItem: value});
    },
    hideDatePicker: function (param) {
        this.setState({visible: true});
    },
    render: function () {
        var result = "";
        var display = "时间段 : " + this.state.oldSelectedItem + "(2016-5-21 21:00 至 2016-5-21 22:30)";
        if (this.state.visible) {
            result = <div><ToolBar.DropdownList onChange={this.onChange} items={this.state.timeItems} noCaret={true}
                                                key={"bar0"} prefixText={"时间段 : "}
                                                appendText={"(2016-5-21 21:00 至 2016-5-21 22:30)"}
                                                defaultText={display}/></div>;
        } else {
            result = <div><ToolBar.MyDatePicker hideDatePicker={this.hideDatePicker}/></div>;
        }
        return (
            <div className="col-sm-12 col-md-5 col-lg-5" style={{height:"47px",paddingLeft:"5px",marginTop:"-7px"}}>
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
            viewData:"",
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
        if (this.state.breadcrumbDataList.length<4) {
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

        }else{
            if (this.state.breadcrumbDataList[3].breadcrumbID == 3 && !this.state.viewData) {
                div = <div>
                    {"此处应该显示图表"}
                </div>;
            }else if(this.state.viewData=="VCenter"){
                div =<div>
                    <AllCharts />
                    <div style={{clear:"both"}}></div>
                </div>;
            }
        }

        return (
            <div style={{padding:"0 10px 0 10px"}}>
                {div}
            </div>
        )
    }
});

module.exports = MainContent;