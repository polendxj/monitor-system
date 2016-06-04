/**
 * Created by Captain on 2016/6/4.
 */
var React = require("react");

var VCenterData=[{
    name:"VCenter1",
    CPUSize:4,
    memorySize:64,
    diskSize:2048,
    CPUUsage:0.4,
    memoryUsage:0.6,
    diskUsage:0.73
}];
var VCenterCss = {
    height:"50px",
    padding:"0px",
    marginBottom:"0px",
    backgroundColor:"White",
    marginBottom:"3px",
    borderRadius:"3px 0px 0px 3px"
};
var VCenterChildrenCss = {height:"30px",lineHeight:"30px",left:"20px",top:"10px",padding:"0px",borderRight:"1px solid gray"};
var VCenter = React.createClass({

    render: function () {
        return (
            /*<div className="alert alert-info alert-white-alt rounded">
                <div className="icon"><i className="fa fa-circle"></i></div>
            </div>*/
            <div className="header" style={VCenterCss}>
                <div className="col-md-1" style={VCenterChildrenCss}>
                    <i className="fa fa-circle" style={{fontSize:"18px",color:"lightGreen"}}></i><span style={{paddingLeft:"10px",fontSize:"14px"}}>VCenter1</span>
                </div>
                <div className="col-md-2" style={VCenterChildrenCss}>

                </div>
                <div className="col-md-2" style={VCenterChildrenCss}>

                </div>
                <div className="col-md-2" style={VCenterChildrenCss}>

                </div>
                <div className="col-md-1" style={VCenterChildrenCss}>

                </div>
                <div className="col-md-2" style={VCenterChildrenCss}>

                </div>
                <div className="col-md-1" style={{height:"40px",top:"5px",padding:"0px"}}>

                </div>
            </div>
        )
    }
});

module.exports = VCenter;