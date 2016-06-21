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
var MenuTool = require("../Frame/FrameRight/headNav/menuTool");
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");

var CreateView = React.createClass({
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
            viewName: "",
            viewType: MenuStore.getBreadcrumbData()[2].breadcrumbName.toLowerCase()
        })
    },
    _handleViewName: function (e) {
        var value = e.target.value;
        this.setState({viewName: value});
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
    _createView: function () {
        var viewTemplate={name:this.state.viewName,type:this.state.viewType};
        if(!this.state.helpState){
            VirtualMonitorAction.createGraphTemplate(viewTemplate);
            this.setState({succTip: true});
        }
    },
    render: function () {
        var succTipStyle = {
            display: this.state.succTip ? "block" : "none",
            padding: "30px 0 30px 80px",
            border: "1px solid #95DD95",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "bold",
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
                                    <HelpBlock
                                        style={{display:this.state.helpState?"block":"none"}}>请填写自定义视图名称</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={1}>
                                </Col>
                                <Col sm={4}>
                                    <div style={{color:"#888888",lineHeight:"24px",clear:"both",marginTop:"-10px"}}><i
                                        className="fa fa-info-circle" style={{fontSize:"14px"}}></i>&nbsp;
                                        给自定义视图起一个名字，随后您可以将
                                        widget
                                        加入这个视图。
                                    </div>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={1}>
                                    类型
                                </Col>
                                <Col sm={2}>
                                    <FormControl controlId="viewType"
                                                 value={this.state.viewType}
                                                 readOnly/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={1}>
                                </Col>
                                <Col sm={2}>
                                    <Button onClick={this._createView}
                                            style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>创建</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div style={succTipStyle}>自定义视图添加成功！</div>
                </div>
            </div>
        )
    }
});

module.exports = CreateView;