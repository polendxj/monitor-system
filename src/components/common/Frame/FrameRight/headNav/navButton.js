/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");

var NavButton = React.createClass({
    render: function () {
        return (
            <ul className="nav navbar-nav navbar-right not-nav">
                <li className="button" style={{padding:"10px 0"}}>
                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                       className="speech-button">
                        <i className="fa fa-bell" style={{fontSize:"14px"}}></i>
                        <span className="bubble" style={{top:"-7px",left:"24px"}}>2</span>
                    </a>

                </li>
                <li className="button" style={{padding:"10px 0"}}>
                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                       className="speech-button">
                        <i className="fa fa-cogs" style={{fontSize:"14px"}}></i>
                    </a>
                </li>
                <li className="button" style={{padding:"10px 0"}}>
                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                       className="speech-button">
                        <i className="fa fa-power-off" style={{fontSize:"14px"}}></i>
                    </a>
                </li>
            </ul>
        )
    }
});

module.exports = NavButton;