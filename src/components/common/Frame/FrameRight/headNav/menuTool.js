/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var ToolBar=require("../../../ToolBar/ToolBar");
var AppStore=require('../../../../../stores/AppStore');
var AppAction=require('../../../../../actions/AppAction');


var MenuTool = React.createClass({
    getInitialState: function () {
        return ({
            toolItems:[]
        })
    },
    componentDidMount: function () {
        AppStore.addChangeListener(AppStore.events.change_toolbar,this._changeToolBar);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(AppStore.events.change_toolbar,this._changeToolBar);
    },
    _changeToolBar: function () {
        this.setState({toolItems:AppStore.getCurrentToolBar()})
    },
    render: function () {
        return (
            <div style={{height:"47px"}}>
                <Title />

                <Form toolItems={this.state.toolItems} />

                <Operator />

            </div>
        )
    }
});

var Title = React.createClass({
    render: function () {
        return (
            <div className="col-sm-12 col-md-12 col-lg-1"
                 style={{height:"30px",marginTop:"9px",fontSize:"18px",padding:"2px 0 0 6px"}}>
                <div style={{display:"inline-block",borderRight:"thin lightgray dotted",paddingRight:"20px"}}>VCenter</div>
            </div>
        )

    }

});

var Form=React.createClass({
    render: function () {
        console.log(this.props.toolItems);
        return (
            <div className="col-sm-8 col-md-9 col-lg-8" style={{height:"47px"}}>
                {this.props.toolItems}
            </div>
        )
    }
});

var Operator=React.createClass({
    render: function () {
        return (
            <div className="col-sm-4 col-md-3 col-lg-3" style={{height:"30px",marginTop:"9px"}}>
                <ToolBar.Button label={"刷新"} icon={2} tip={"刷新数据"} />
                <ToolBar.Button label={"配置"} icon={1} tip={"配置VCenter"}/>
                <ToolBar.Button label={"图表"} icon={3} tip={"实时图表监控"} />
                <ToolBar.Button label={"创建"} icon={0} tip={"创建VCenter"} />
                <div style={{width:"3px",height:"100%",borderLeft:"thin lightgray dotted",float:"right"}}></div>

            </div>
        )
    }
});


module.exports = MenuTool;