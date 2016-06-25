/**
 * Created by Captain on 2016/6/26.
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
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');
var DatabasesAction = require("../../../actions/DatabasesAction");

var CreateMysql = React.createClass({
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
    _click: function () {
        var mysqlData={};
        var applicationName=ReactDOM.findDOMNode(this.refs.applicationName).value;
        var ip=ReactDOM.findDOMNode(this.refs.ip).value;
        mysqlData['applicationName']=applicationName;
        mysqlData['ip']=ip;
        console.log(mysqlData);
        DatabasesAction.createDatabase(mysqlData);
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
                        <Col componentClass={ControlLabel} sm={1}>
                            数据库名称
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="applicationName" controlId="applicationName"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={1}>
                            IP地址
                        </Col>
                        <Col sm={2}>
                            <FormControl ref="ip" controlId="ipAddress"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={1}>
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

module.exports = CreateMysql;