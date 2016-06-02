/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");

var SubMenu = React.createClass({
    render: function () {
        if(this.props.subMenus.length==1){
            return (
                <li key={menu.name}><a href="#"><i className={menu.icon}></i><span>{menu.name}</span></a>
                    <ul className="sub-menu" style={{display:this.props.menuToggle&&this.props.idxFlag?"block":"none"}}>
                        <li style={{paddingLeft: "27px"}}><a href="#">{menu.secondLayer[0].name}</a></li>
                    </ul>
                </li>
            )
        }else{
            return (
                <ul className="sub-menu" style={{display:this.props.status?"block":"none"}}>
                    {this.props.subMenus.map(function (subMenu) {
                        return <li key={subMenu.name} style={{paddingLeft: "27px"}}><a href="#">{subMenu.name}</a></li>;
                    })}
                </ul>
            )
        }
    }
});

module.exports = SubMenu;