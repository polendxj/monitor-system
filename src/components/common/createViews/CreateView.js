/**
 * Created by Captain on 2016/6/14.
 */
var React = require("react");
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var HelpBlock = require("react-bootstrap").HelpBlock;

var CreateView = React.createClass({
    getInitialState: function () {
        return ({
            helpState: false,
            viewName: "",
            viewDesc: ""
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
    _createView: function () {
        if (this.state.viewName == "") {
            this.setState({helpState: true});
        } else {
            this.setState({helpState: false});
        }
        console.log(this.state.viewName);
    },
    render: function () {
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
                <Form horizontal>
                    <FormGroup controlId="formHostName" validationState={this.state.helpState?"error":""}>
                        <Col componentClass={ControlLabel} sm={1}>
                            名称
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="viewName" value={this.state.viewName}
                                         onChange={this._handleViewName}/>
                        </Col>
                        <Col sm={3}>
                            <HelpBlock style={{display:this.state.helpState?"block":"none"}}>请填写自定义视图名称</HelpBlock>
                        </Col>
                    </FormGroup>

                    <div style={{color:"#888888",lineHeight:"24px",clear:"both",margin:"-10px 0 0 140px"}}><i
                        className="fa fa-info-circle" style={{fontSize:"14px"}}></i>&nbsp;给自定义视图起一个名字，随后您可以将 widget
                        加入这个视图。
                    </div>
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
                        <Col sm={1}>
                            <Button onClick={this._createView} style={{backgroundColor:"#54ADE9"}}>创建</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
});

module.exports = CreateView;