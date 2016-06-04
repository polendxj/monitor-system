/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var ToolBar=require("../../../ToolBar/ToolBar");


var MenuTool = React.createClass({
    render: function () {
        return (
            <div style={{height:"47px"}}>
                <Title />

                <Form />

                <Operator />

            </div>
        )
    }
});

var Title = React.createClass({
    render: function () {
        return (
            <div className="col-sm-12 col-md-12 col-lg-1"
                 style={{height:"30px",marginTop:"9px",fontSize:"18px",padding:"2px 0 0 6px",borderRight:"thin lightgray dotted"}}>
                VCenter
            </div>
        )

    }

});

var Form=React.createClass({
    render: function () {
        return (
            <div className="col-sm-8 col-md-9 col-lg-9" style={{height:"47px"}}>
                <ToolBar.DropdownList />
                <ToolBar.DropdownList />
                <ToolBar.Text />
            </div>
        )
    }
});

var Operator=React.createClass({
    render: function () {
        return (
            <div className="col-sm-4 col-md-3 col-lg-2" style={{height:"30px",borderLeft:"this lightgray dotted",marginTop:"9px"}}>
                <ToolBar.Button />
                <ToolBar.Button />
            </div>
        )
    }
});


module.exports = MenuTool;