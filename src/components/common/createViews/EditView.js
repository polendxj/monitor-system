/**
 * Created by jingpeng on 16/6/15.
 */
var React = require("react");
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var HelpBlock = require("react-bootstrap").HelpBlock;

var EditView = React.createClass({
    getInitialState: function () {
        return ({
            helpState: false,
            succTip: false,
            viewName: "VCenter",
            viewDesc: "version 5.5"
        })
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
        console.log(this.state.viewName);
    },
    _deleteView: function () {
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
            background: "#EEFFEE 15px 15px no-repeat"
        };
        return (
            <div style={{padding: "23px 0 5px 20px",backgroundColor:"white"}}>
                <div
                    style={{fontSize: "13px",fontWeight: "bold",color: "#434343",borderBottom: "1px solid #cdcdcd"}}>
                    自定义视图
                    <span style={{fontSize:"9px",padding:"0 4px",fontWeight: "normal"}}>{"> >"}</span>
                    创建自定义视图
                </div>
                <div style={{background:"#F5F6F9",margin:"10px 0",height:"32px",lineHeight:"32px",padding:"0 18px"}}>
                    自定义视图名称
                </div>
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
                <div style={succTipStyle}><b>自定义视图删除成功！</b></div>
            </div>
        )
    }
});

module.exports = EditView;