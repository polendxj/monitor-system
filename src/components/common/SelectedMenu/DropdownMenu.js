/**
 * Created by jingpeng on 16/3/7.
 */
var React = require("react");

var MenuItem = require("./MenuItem");
var Divider = require("./Divider");

var DropdownMenu = React.createClass({
    getInitialState: function () {
        return {
            "icon": "",
            "current": ""
        }
    },
    render: function () {
        var children = [];
        var display = "";
        var that = this;
        if (this.props.children) {
            this.props.children.forEach(function (value, key) {
                if (value instanceof Array) {
                    for (elm in value) {
                        var val = value[elm];

                        if (that.props.selected == val.props.value) {
                            display = val.props.display;
                        }
                        if (!val.props.display) {
                            children.push(<Divider key={"subitem"+key}/>);
                        } else {
                            children.push(<MenuItem onChange={that.props.onChange}
                                                    clazz={val.props.clazz} display={val.props.display}
                                                    value={val.props.value}
                                                    index={key}
                                                    key={"subitem"+elm}/>);
                        }
                    }

                } else {
                    if (that.props.selected == value.props.value) {
                        display = value.props.display;
                    }
                    if (!value.props.display) {
                        children.push(<Divider key={"item"+key}/>);
                    } else {
                        children.push(<MenuItem onChange={that.props.onChange}
                                                clazz={value.props.clazz} display={value.props.display}
                                                value={value.props.value}
                                                index={key}
                                                key={"item"+key}/>);
                    }

                }

            });
            if (!display) {
                display = this.props.children[0].props.display;
            }
            var result="";
            if(children.length!=1){
                result=<ul className="dropdown-menu">
                          {children}
                      </ul>
            }

        }
        return (
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false" style={{"textAlign":"left","width":"auto"}}>
                        <i className="fa fa-bars"
                           style={{"color":"gray"}}> {this.props.label ? this.props.label : "" + display}</i>
                        <span id="editFilterTypeDisplay" style={{"textAlign":"left"}}> {this.state.current}</span>
                    </button>
                    {result}

                </div>
            </div>
        )
    }
});


module.exports = DropdownMenu;