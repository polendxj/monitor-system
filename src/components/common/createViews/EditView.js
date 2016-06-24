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
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");

var EditView = React.createClass({
    render: function () {
        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <MenuTool />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});
var Content = React.createClass({
    getInitialState: function () {
        return ({
            helpState: false,
            succTip: false,
            viewName: MenuStore.getEditGraphData().name,
            editGraphData:MenuStore.getEditGraphData()
        })
    },
    _handleViewName: function (e) {
        var value = e.target.value;
        this.setState({viewName: value});
    },
    _editView: function () {
        var id=this.state.editGraphData.id;
        var viewData={name:this.state.viewName,type:this.state.editGraphData.type};
        if(this.state.viewName!=""){
            VirtualMonitorAction.updateGraphTemplate(id,viewData);
        }
    },
    _deleteView: function () {
        VirtualMonitorAction.deleteGraphTemplate(this.state.editGraphData.id);
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
    render: function () {
        var succTipStyle = {
            display: this.state.succTip ? "block" : "none",
            padding: "30px 0 30px 80px",
            border: "1px solid #95DD95",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight:"bold",
            background: "#EEFFEE 15px 15px no-repeat"
        };
        return (
            <div>
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
                                    类型
                                </Col>
                                <Col sm={2}>
                                    <FormControl controlId="viewDesc" value={this.state.editGraphData.type}
                                                 readOnly/>
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
                    <div style={succTipStyle}>自定义视图删除成功!</div>
                </div>
            </div>
        )
    }
});

module.exports = EditView;