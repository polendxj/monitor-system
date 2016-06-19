/**
 * Created by Captain on 2016/6/17.
 */
var React = require("react");
var Jquery = require("jquery");
var MenuTool = require("../../Frame/FrameRight/headNav/menuTool");
var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");
var Table = require("react-bootstrap/lib/Table");

var MenuAction = require('../../../../actions/MenuAction');
var MenuStore = require('../../../../stores/MenuStore');

var UserList = React.createClass({
    render: function () {
        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <MenuTool />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});

var Content = React.createClass({
    componentDidMount: function () {
        $(".tab-content").css("padding", 0);
        $(".tab-content").find("th").css("borderBottom", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderTop", "thin #ECECEC solid");
        $(".tab-content").find("th").css("borderLeft", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderTop", "0 #ECECEC solid");
        $(".tab-content").find("td").css("borderLeft", "0 #ECECEC solid");
    },
    render: function () {
        return (
            <div style={{padding:"0 10px 0 10px"}}>
                <Tabs id="controlled-tab-example"
                      style={{padding:"0"}}>
                    <Tab title="用户列表" style={{padding:"0"}}>
                        <Table responsive style={{margin:"0"}}>
                            <thead>
                            <tr>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>用户名</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>权限</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>性别</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>邮箱</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>电话</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>状态</th>
                                <th style={{textAlign:"center",fontWeight:"bold"}}>操作</th>
                            </tr>
                            </thead>
                            <tbody style={{textAlign:"center"}}>
                            <tr>
                                <td>余淮</td>
                                <td>超级管理员</td>
                                <td>男</td>
                                <td>123456@qq.com</td>
                                <td>15108492769</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>路星河</td>
                                <td>用户</td>
                                <td>男</td>
                                <td>487921435@qq.com</td>
                                <td>18454392017</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>耿耿</td>
                                <td>用户</td>
                                <td>女</td>
                                <td>23764967@qq.com</td>
                                <td>13867349902</td>
                                <td>Enable</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </div>
        )
    }
});

module.exports = UserList;