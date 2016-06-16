var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
var Button = require('react-bootstrap/lib/Button');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
var Tooltip = require('react-bootstrap/lib/Tooltip');
var TopologyChart = require('./common/topology/TopologyChart');


var Dashboard = React.createClass({
    render: function () {
        return (
            <div className="cl-mcont" style={{padding:"10px 0px"}}>
                <div style={{padding:"0px 0px 0px 6px"}}>

                    <Row style={{marginTop:"-15px",marginRight:"-3px"}}>
                        <Col xs={12} md={9} className="block-flat">
                            <div className="header" style={{fontSize:"20px"}}>资源监控统计</div>
                            <div className="content">
                                <Row>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-blue"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>服务器监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Windows</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>

                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/windows.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>

                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="12"><strong>Linux</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/linux.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Unix</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/unix.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>IBM服务器</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>IBM</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>HP服务器</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>HP</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>DELL服务器</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{textAlign:"center",fontSize:"14px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>DELL</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-purple"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>虚拟化监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>VCenter</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/vcenter.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Hypervisor</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/hypervisor.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>VM</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/vms.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Docker</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Docker</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-lemon"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>数据库监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Oracle</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Oracle</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>MySql</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/mysql.png"
                                                                         style={{width:"24px",height:"24px",marginTop:"9px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>SqlServer</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/sqlserver.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>MongoDB</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/mongodb.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>DB2</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>DB2</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Sysbase</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Sybase</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>PostgreSQL</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <img src="imgs/icons/postgresql.png"
                                                                         style={{width:"16px",height:"16px",marginTop:"14px"}}/>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-red"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>应用监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Apache</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Apache</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Microsoft IIS</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>IIS</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Nginx</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Nginx</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Lighttbd</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Lighttbd</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>Tomcat</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>Tomcat</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-orange"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>网站监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa"
                                                                   style={{marginTop:"15px"}}>Http</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa"
                                                                   style={{marginTop:"15px"}}>Ping</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>TCP</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>UDP</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa"
                                                                   style={{marginTop:"15px"}}>SMTP</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>FTP</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>

                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-green"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>设备监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>交换机</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>路由器</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa" style={{marginTop:"15px"}}>防火墙</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                            <div
                                                                style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                <i className="fa"
                                                                   style={{marginTop:"15px"}}>负载均衡</i>
                                                            </div>
                                                            <div
                                                                style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                    告警 : 0
                                                                </div>
                                                                <div
                                                                    style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                    事件 : 10
                                                                </div>
                                                            </div>
                                                        </Col>


                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} md={6}>
                                        <div className="fd-tile detail tile-concrete"
                                             style={{marginBottom:"0",height:"160px"}}>
                                            <Row style={{margin:"0"}}>
                                                <Col xs={3} md={3}>
                                                    <div className="content">
                                                        <h1 className="text-left">170</h1>

                                                        <p>存储监控</p>

                                                    </div>
                                                </Col>
                                                <Col xs={3} md={9} style={{padding:"0"}}>
                                                    <Row style={{margin:"5px 0 0 0"}}>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>EMC</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>EMC</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>IBM</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>IBM</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>HP</strong></Tooltip>}>
                                                            <Col xs={6} md={4}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa" style={{marginTop:"15px"}}>HP</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>NetApp</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>NetApp</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"
                                                                        overlay={<Tooltip id="11"><strong>SasRaid</strong></Tooltip>}>
                                                            <Col xs={6} md={4} style={{marginTop:"3px"}}>
                                                                <div
                                                                    style={{overflow:"hidden",textAlign:"center",fontSize:"10px",border:"2px lightgray solid",float:"left",width:"47px",height:"47px",color:"black",background:"White",borderRadius:"50%",marginTop:"1px",marginLeft:"1px"}}>
                                                                    <i className="fa"
                                                                       style={{marginTop:"15px"}}>SasRaid</i>
                                                                </div>
                                                                <div
                                                                    style={{width:"100%",height:"47px",position:"absolute",paddingLeft:"50px"}}>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"8px"}}>
                                                                        告警 : 0
                                                                    </div>
                                                                    <div
                                                                        style={{height:"23px",fontSize:"8px",marginTop:"-7px"}}>
                                                                        事件 : 10
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </OverlayTrigger>
                                                    </Row>


                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                        <Col xs={12} md={3} className="block-flat" style={{fontSize:"20px",height:"804px"}}>

                            <div className="header">最新通告</div>

                            <div className="content" style={{height:"510px",overflow:"hidden"}}>
                                <ul className="list-group">
                                    <li className="list-group-item">1.Cras justo odio <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">2.Dapibus ac facilisis in <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">3.Morbi leo risus <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">4.Porta ac consectetur ac <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">5.Vestibulum at eros <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">6.Vestibulum at eros <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">7.Vestibulum at eros <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">8.Vestibulum at eros <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                    <li className="list-group-item">9.Vestibulum at eros <span
                                        style={{float:"right",color:"lightgray"}}>2016-6-14</span></li>
                                </ul>
                            </div>
                            <div className="header">快速创建</div>
                            <div className="content">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat" style={{"color":"white"}}>创建VCenter</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat"
                                                    style={{"color":"white"}}>创建Mysql</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat" style={{"color":"white"}}>创建VCenter</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat"
                                                    style={{"color":"white"}}>创建Mysql</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat"
                                                    style={{"color":"white"}}>创建Apache</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ButtonGroup vertical block>
                                            <Button className="btn btn-info btn-flat"
                                                    style={{"color":"white"}}>创建应用服务</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"-15px",marginRight:"-3px"}}>
                        <Col xs={12} md={12} className="block-flat">
                            <div className="header" style={{fontSize:"20px"}}>资源监控拓扑图</div>
                            <div className="content" style={{textAlign:"center"}}>
                                <TopologyChart />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )

    }
});


module.exports = Dashboard;
