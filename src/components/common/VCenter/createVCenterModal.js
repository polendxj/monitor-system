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
            console.log($("#select2 option:selected").val());
            $("#select2 option:selected").each(function () {
                leftList.push($(this).val());
            });
            this.setState({leftList:leftList});
        }else{
            $("#select1 option:selected").each(function () {
                rightList.push($(this).val());
            });
            this.setState({rightList:rightList});
        }
    },
    render: function () {
        var leftOptions=[];
        var rightOptions=[];
        if(this.state.leftList.length>0){
            leftOptions=this.state.leftList.map(function (leftItem) {
                return (
                    <option value={leftItem}>{leftItem}</option>
                )
            })
        }
        if(this.state.rightList.length>0){
            rightOptions=this.state.rightList.map(function (rightItem) {
                return (
                    <option value={rightItem}>{rightItem}</option>
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
                                <FormControl  />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formVisibleName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Visible name
                            </Col>
                            <Col sm={4}>
                                <FormControl />
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
                                <FormControl controlId="select1" id="select1" componentClass="select" multiple size="8" >
                                    {leftOptions}
                                </FormControl>
                            </Col>
                            <Col style={{width: "30px",float: "left",paddingTop: "35px"}}>
                                <button type="button" className="btn btn-default btn-sm" onClick={this._moveListItem.bind(this,"right")}><i className="fa fa-caret-right"></i></button>
                                <button type="button" className="btn btn-default btn-sm" onClick={this._moveListItem.bind(this,"left")}><i className="fa fa-caret-left"></i></button>
                            </Col>
                            <Col sm={3}>
                                <FormControl controlId="select2"  id="select2" componentClass="select" multiple size="8">
                                    {rightOptions}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formNewGroup">
                            <Col componentClass={ControlLabel} sm={2}>
                                新建group
                            </Col>
                            <Col sm={4}>
                                <FormControl />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formIPAddress">
                            <Col componentClass={ControlLabel} sm={2} >
                                IP地址
                            </Col>
                            <Col sm={4}>
                                <FormControl />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formIPAddress">
                            <Col sm={2}>
                            </Col>
                            <Col componentClass={ControlLabel} sm={3} style={{textAlign:"left"}}>
                                MACRO
                            </Col>
                            <Col componentClass={ControlLabel} sm={3} style={{paddingLeft:"26px",textAlign:"left"}}>
                                ֵ
                            </Col>
                        </FormGroup>
                        <Macro />
                        <Macro />
                        <Macro />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = CreateVCenterModal;