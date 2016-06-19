/**
 * Created by jingpeng on 16/6/19.
 */
var React=require('react');
var ReactPagination=require('react-bootstrap/lib/Pagination');

var Pagination=React.createClass({
    getInitialState:function() {
        return {
            activePage: 1
        };
    },
    handleSelect:function(eventKey) {
        this.setState({
            activePage: eventKey
        });
    },
    render: function () {
        return(
            <ReactPagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={20}
                maxButtons={5}
                activePage={this.state.activePage}
                onSelect={this.handleSelect}
                style={{margin:"0",float:"right"}}
                />
        )

    }
});

module.exports=Pagination;