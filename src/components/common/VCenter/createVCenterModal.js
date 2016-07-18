/**
 * Created by Captain on 2016/6/5.
 */
var React = require("react");
var ReactDOM = require("react-dom");
require("jquery");
var browserHistory = require('react-router').browserHistory;
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var Macro = require("./macros");
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");

var leftList = ["192.168.0.106", "Linux servers", "HyperVisors", "Templates", "Zabbix servers"];
var rightList = ["VCenter"];
var CreateVCenterModal = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbDataList: MenuStore.getBreadcrumbData()
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
 /*   _moveListItem: function (direction) {
        if (direction == "left") {
            $(".leftSelect option:selected").each(function () {
                var index = rightList.indexOf($(this).val());
                leftList.push($(this).val());
                leftList.sort();
                rightList.splice(index, 1);
            });
            this.setState({leftList: leftList});
        } else {
            $(".rightSelect option:selected").each(function () {
                var index = leftList.indexOf($(this).val());
                rightList.push($(this).val());
                rightList.sort();
                leftList.splice(index, 1);
            });
            this.setState({rightList: rightList});
        }
    },*/
    _click: function () {
        var vcenter={};
        var hostName=ReactDOM.findDOMNode(this.refs.hostName).value;
        var ip=ReactDOM.findDOMNode(this.refs.ip).value;
        var username=ReactDOM.findDOMNode(this.refs.username).value;
        var password=ReactDOM.findDOMNode(this.refs.password).value;
        vcenter['name']=hostName;
        vcenter['ip']=ip;
        vcenter['macros']=[{"macro": "{$PASSWORD}", "value": username},{"macro": "{$PASSWORD}", "value": password}];
        console.log(vcenter);
        VirtualMonitorAction.createVCenter(vcenter);
    },
    _redirect: function (idx) {
        if (idx == 0 || idx == 1) {
            MenuAction.changeBreadcrumb(4, "");
            browserHistory.push("/list");
        } else if (idx == 3 || idx == 2) {
            MenuAction.changeBreadcrumb(idx + 2, "");
            browserHistory.push("/list");
        }
    },
    render: function () {
        var breadcrumbs = [];
        var length = this.state.breadcrumbDataList.length - 1;
        this.state.breadcrumbDataList.forEach(function (breadcrumbData, idx) {
            if (idx < length) {
                breadcrumbs.push(
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#">
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            } else {
                breadcrumbs.push(
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#"
                                     active>
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            }
        }.bind(this));
       /* if (this.state.leftList.length > 0) {
            leftOptions = this.state.leftList.map(function (leftItem) {
                return (
                    <option key={leftItem} value={leftItem}>{leftItem}</option>
                )
            })
        }
        if (this.state.rightList.length > 0) {
            rightOptions = this.state.rightList.map(function (rightItem) {
                return (
                    <option key={rightItem} value={rightItem}>{rightItem}</option>
                )
            })
        }*/
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
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            主机名
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="hostName" controlId="hostName"/>
                        </Col>
                    </FormGroup>
                    {/*<FormGroup controlId="formControlsSelectMultiple">
                        <Col componentClass={ControlLabel} sm={3}>
                            Groups In groups
                        </Col>
                    </FormGroup>*/
                    /*<FormGroup controlId="formControlsSelectMultiple">
                        <Col sm={2}>
                        </Col>
                        <Col sm={3}>
                            <FormControl controlId="select1" className="rightSelect" componentClass="select" multiple
                                         size="8">
                                {leftOptions}
                            </FormControl>
                        </Col>
                        <Col style={{width: "30px",float: "left",paddingTop: "35px"}}>
                            <button type="button" className="btn btn-default btn-sm"
                                    onClick={this._moveListItem.bind(this,"right")}><i
                                className="fa fa-caret-right"></i></button>
                            <button type="button" className="btn btn-default btn-sm"
                                    onClick={this._moveListItem.bind(this,"left")}><i className="fa fa-caret-left"></i>
                            </button>
                        </Col>
                        <Col sm={3}>
                            <FormControl controlId="select2" className="leftSelect" componentClass="select" multiple
                                         size="8">
                                {rightOptions}
                            </FormControl>
                        </Col>
                    </FormGroup>*/}
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            IP地址
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="ip" controlId="ipAddress"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            用户名
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="username" controlId="username"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            密码
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="password" controlId="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this._click} style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>保存</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
});

module.exports = CreateVCenterModal;