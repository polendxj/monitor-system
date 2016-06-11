/**
 * Created by Captain on 2016/6/8.
 */
var React = require("react");
var ToolBar=require("../../../ToolBar/ToolBar");
var MenuStore=require('../../../../../stores/MenuStore');
var MenuAction=require('../../../../../actions/MenuAction');

var style= {
        height: "35px",
        backgroundColor: "white",
        marginTop: "0px",
        color: "black",
        paddingTop:"0px"
};
var FirstMenuLayer = React.createClass({
    getInitialState: function () {
        return ({
            firstMenus:[]
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_menus,this._changeTopMenu);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_menus,this._changeTopMenu);
    },
    _changeTopMenu: function () {
        this.setState({firstMenus:MenuStore.getFirstMenus()})
    },
    _click: function (idx) {
        MenuAction.changeFirstMenus(idx,this.state.firstMenus[idx]);
    },
    render: function () {
        var that = this;
        return (
            <div style={{height:"49px",backgroundColor:"white",paddingLeft:"150px"}}>
                {
                    this.state.firstMenus.map(function (firstMenu,idx) {
                        return(
                            <button key={firstMenu.name} onClick={that._click.bind(that,idx)} type="button"
                                    className="btn btn-info btn-flat"
                                    style={style}><span
                                style={{fontSize:"14px",lineHeight:"35px"}}>{firstMenu.name}</span>
                            </button>
                        )
                    })
                }
            </div>
        )
    }
});

var FirstLayerBtn=React.createClass({
    render: function () {
        return (
            <button onClick={this._click} type="button"
                    className="btn btn-info btn-flat"
                    style={style}><span
                style={{fontSize:"14px",lineHeight:"35px"}}>{this.props.menu.name}</span>
            </button>
        )
    }
});

module.exports = FirstMenuLayer;