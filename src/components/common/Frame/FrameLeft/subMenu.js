/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
require('jquery');

var SubMenu = React.createClass({
    getInitialState: function () {
        return ({
            flag: false
        })
    },
    _clickSubMenu: function () {

    },
    render: function () {
        var that = this;
        if (this.props.subMenus.length == 1) {
            return (
                <ul className="sub-menu">
                    <li onClick={this._clickSubMenu} className="secondLayer"
                        style={{paddingLeft: "13px"}}><a href="#">{menu.secondLayer[0].name}</a></li>
                </ul>
            )
        } else {
            return (
                <ul className="sub-menu">
                    {this.props.subMenus.map(function (subMenu) {
                        return <li onClick={that._clickSubMenu}
                                   className="secondLayer" key={subMenu.name} style={{paddingLeft: "13px"}}><a
                            href="#">{subMenu.name}</a></li>;
                    })}
                </ul>
            )
        }
    }
});

module.exports = SubMenu;