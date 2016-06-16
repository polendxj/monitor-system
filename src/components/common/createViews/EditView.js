/**
 * Created by jingpeng on 16/6/15.
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
var MenuTool = require("../Frame/FrameRight/headNav/menuTool");

var EditView = React.createClass({
    getInitialState: function () {
        return ({
            helpState: false,
            succTip: false,
            succTipText: "",
            viewName: "VCenter",
            viewDesc: "version 5.5",
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
        this.setState({succTip: false});
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _handleViewName: function (e) {
        var value = e.target.value;
        this.setState({viewName: value});
    },
    _handleViewDesc: function (e) {
        var value = e.target.value;
        this.setState({viewDesc: value});
    },
    _editView: function () {
        if (this.state.viewName == "") {
            this.setState({helpState: true});
        } else {
            this.setState({helpState: false});
        }
        this.setState({succTipText: "自定义视图修改成功！"});
        this.setState({succTip: true});
        console.log(this.state.viewName);
    },
    _deleteView: function () {
        this.setState({succTipText: "自定义视图删除成功！"});
        this.setState({succTip: true});
    },
    _blur: function (e) {
        var value = e.target.value;
        this.setState({viewName: value});
        if (this.state.viewName == "") {
            this.setState({helpState: true});
        } else {
            this.setState({helpState: false});
        }
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
        var breadcrumbs=[];
        var length=this.state.breadcrumbDataList.length-1;
        var succTipStyle = {
            display: this.state.succTip ? "block" : "none",
            padding: "30px 0 30px 80px",
            border: "1px solid #95DD95",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight:"bold",
            background: "#EEFFEE 15px 15px no-repeat"
        };
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
                <div>
                    <div style={{display:this.state.succTip?"none":"block"}}>
                        <Form horizontal>
                            <FormGroup controlId="formHostName" validationState={this.state.helpState?"error":""}>
                                <Col componentClass={ControlLabel} sm={1}>
                                    名称
                                </Col>
                                <Col sm={2}>
                                    <FormControl controlId="viewName" value={this.state.viewName}
                                                 onChange={this._handleViewName} onBlur={this._blur}/>
                                </Col>
                                <Col sm={3}>
                                    <HelpBlock style={{display:this.state.helpState?"block":"none"}}>请填写自定义视图名称</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formVisibleName">
                                <Col sm={1}>
                                </Col>
                                <Col sm={4}>
                                    <div style={{color:"#888888",lineHeight:"24px",clear:"both",marginTop:"-10px"}}><i
                                        className="fa fa-info-circle" style={{fontSize:"14px"}}></i>&nbsp;给自定义视图起一个名字，随后您可以将
                                        widget
                                        加入这个视图。
                                    </div>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formVisibleName">
                                <Col componentClass={ControlLabel} sm={1}>
                                    描述
                                </Col>
                                <Col sm={2}>
                                    <FormControl componentClass="textarea" controlId="viewDesc" value={this.state.viewDesc}
                                                 onChange={this._handleViewDesc}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formVisibleName">
                                <Col sm={1}>
                                </Col>
                                <Col sm={2}>
                                    <Button onClick={this._deleteView} style={{float:"right"}}>删除</Button>
                                    <Button onClick={this._editView}
                                            style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>修改</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div style={succTipStyle}>{this.state.succTipText}</div>
                </div>
            </div>
        )
    }
});

module.exports = EditView;