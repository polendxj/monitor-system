/**
 * Created by Captain on 2016/6/14.
 */
var React = require("react");
var browserHistory = require('react-router').browserHistory;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var HelpBlock = require("react-bootstrap").HelpBlock;
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');
var ObjectList = require("../ObjectList/ObjectList");
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");


var ConfigurationPage = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbDataList: MenuStore.getBreadcrumbData(),
            configData:[]
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
        VirtualMonitorStore.addChangeListener(VirtualMonitorStore.events.ChangeConfigData,this._changeConfigData);
        var breads = MenuStore.getBreadcrumbData();
        if (breads.length == 3) {
            switch (breads[2].breadcrumbID) {
                case 221:
                    break;
                case 222:
                    break;
                case 223:
                    break;
                case 224:
                    break;
            }
        } else if (breads.length == 4) {
            switch (breads[2].breadcrumbID) {
                case 221:
                    break;
                case 222:
                    VirtualMonitorAction.getConfigData("hypervisor");
                    break;
                case 223:
                    VirtualMonitorAction.getConfigData("vms");
                    break;
                case 232:
                    VirtualMonitorAction.getConfigData("mysql");
                    break;
                case 233:
                    VirtualMonitorAction.getConfigData("sqlserver");
                    break;
                case 241:
                    VirtualMonitorAction.getConfigData("apache");
                    break;
                case 243:
                    VirtualMonitorAction.getConfigData("nginx");
                    break;
                case 224:
                    break;
                case 251:
                    VirtualMonitorAction.getConfigData("web");
                    break;
                case 212:
                    VirtualMonitorAction.getConfigData("linux");
                    break;
            }
        } else if (breads.length == 5) {
            switch (breads[2].breadcrumbID) {
                case 221:
                    break;
                case 222:
                    VirtualMonitorAction.getConfigData("hypervisor");
                    break;
                case 223:
                    VirtualMonitorAction.getConfigData("vms");
                    break;
                case 232:
                    VirtualMonitorAction.getConfigData("mysql");
                    break;
                case 233:
                    VirtualMonitorAction.getConfigData("sqlserver");
                    break;
                case 241:
                    VirtualMonitorAction.getConfigData("apache");
                    break;
                case 224:
                    break;
                case 251:
                    VirtualMonitorAction.getConfigData("web");
                    break;
                case 243:
                    VirtualMonitorAction.getConfigData("nginx");
                    break;
                case 212:
                    VirtualMonitorAction.getConfigData("linux");
                    break;
            }
        }

    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _changeConfigData: function () {
        this.setState({configData:VirtualMonitorStore.getConfigData()});
    },
    _redirect: function (idx) {
        if(idx==0||idx==1){
            MenuAction.changeBreadcrumb(4,"");
            browserHistory.push("/list");
        }else if(idx==3||idx==2) {
            MenuAction.changeBreadcrumb(idx+2,"");
            browserHistory.push("/list");
        }
    },
    render: function () {
        var breadcrumbs = [];
        var length=this.state.breadcrumbDataList.length-1;
        this.state.breadcrumbDataList.forEach(function (breadcrumbData, idx) {
            if (idx < length) {
                breadcrumbs.push (
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#">
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            } else {
                breadcrumbs.push (
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#" active>
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            }
        }.bind(this));


        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <div className="col-sm-7 col-md-7 col-lg-7"
                         style={{height:"30px",marginTop:"2px",fontSize:"12px",padding:"2px 0 0 6px"}}>
                        <div style={{display:"inline-block",paddingRight:"20px"}}>
                            <Breadcrumb>
                                {breadcrumbs}
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                <div style={{padding:"0 10px 0 10px"}}>
                    <ObjectList.HypervisorConfig configData={this.state.configData}/>
                </div>
            </div>

        )
    }
});

module.exports = ConfigurationPage;
