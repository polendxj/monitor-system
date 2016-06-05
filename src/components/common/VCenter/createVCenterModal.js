/**
 * Created by Captain on 2016/6/5.
 */
var React = require("react");
require("jquery");
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var Macro = require("./macros");

var leftList = ["192.168.0.106","Linux servers","HyperVisors","Templates","Zabbix servers"];
var rightList = ["VCenter"];
var CreateVCenterModal = React.createClass({
    getInitialState: function () {
        return ({
            leftList: leftList,
            rightList: rightList
        })
    },
    _moveListItem: function (direction) {
        if(direction=="left"){
            $(".leftSelect option:selected").each(function () {
                var index = rightList.indexOf($(this).val());
                leftList.push($(this).val());
                leftList.sort();
                rightList.splice(index,1);
            });
            this.setState({leftList:leftList});
        }else{
            $(".rightSelect option:selected").each(function () {
                var index = leftList.indexOf($(this).val());
                rightList.push($(this).val());
                rightList.sort();
                leftList.splice(index,1);
            });
            this.setState({rightList:rightList});
        }
    },
    _onHide: function (param) {
        this.props.onHide(param);
    },
    render: function () {
        var leftOptions=[];
        var rightOptions=[];
        if(this.state.leftList.length>0){
            leftOptions=this.state.leftList.map(function (leftItem) {
                return (
                    <option key={leftItem} value={leftItem}>{leftItem}</option>
                )
            })
        }
        if(this.state.rightList.length>0){
            rightOptions=this.state.rightList.map(function (rightItem) {
                return (
                    <option key={rightItem} value={rightItem}>{rightItem}</option>
                )
            })
        }
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" backdrop={"static"}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">创建VCenter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formHostName">
                            <Col componentClass={ControlLabel} sm={2}>
                                主机名
                            </Col>
                            <Col sm={4}>
                                <FormControl controlId="hostName" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formVisibleName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Visible name
                            </Col>
                            <Col sm={4}>
                                <FormControl controlId="visibleName"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formControlsSelectMultiple">
                            <Col componentClass={ControlLabel} sm={3}>
                                Groups In groups
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formControlsSelectMultiple">
                            <Col sm={2}>
                            </Col>
                            <Col sm={3}>
                                <FormControl controlId="select1" className="rightSelect" componentClass="select" multiple size="8" >
                                    {leftOptions}
                                </FormControl>
                            </Col>
                            <Col style={{width: "30px",float: "left",paddingTop: "35px"}}>
                                <button type="button" className="btn btn-default btn-sm" onClick={this._moveListItem.bind(this,"right")}><i className="fa fa-caret-right"></i></button>
                                <button type="button" className="btn btn-default btn-sm" onClick={this._moveListItem.bind(this,"left")}><i className="fa fa-caret-left"></i></button>
                            </Col>
                            <Col sm={3}>
                                <FormControl controlId="select2"  className="leftSelect" componentClass="select" multiple size="8">
                                    {rightOptions}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formNewGroup">
                            <Col componentClass={ControlLabel} sm={2}>
                                新建group
                            </Col>
                            <Col sm={4}>
                                <FormControl controlId="newGroup"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formIPAddress">
                            <Col componentClass={ControlLabel} sm={2} >
                                IP地址
                            </Col>
                            <Col sm={4}>
                                <FormControl controlId="ipAddress"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formIPAddress">
                            <Col sm={2}>
                            </Col>
                            <Col componentClass={ControlLabel} sm={3} style={{textAlign:"left"}}>
                                MACRO
                            </Col>
                            <Col componentClass={ControlLabel} sm={3} style={{paddingLeft:"26px",textAlign:"left"}}>
                                值
                            </Col>
                        </FormGroup>
                        <Macro macroControlId="macro1" valueControlId="macroValue1"/>
                        <Macro macroControlId="macro2" valueControlId="macroValue2"/>
                        <Macro macroControlId="macro3" valueControlId="macroValue2"/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this._onHide.bind(this,"save")}>保存</Button>
                    <Button onClick={this._onHide.bind(this,"close")}>关闭</Button>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = CreateVCenterModal;