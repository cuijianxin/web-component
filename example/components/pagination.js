var Pagination = React.createClass({
	getInitialState:function() {
        return {
            pageSize:10,
            currentPage:1,
            totalNum:28
        };
    },
    onPageChange:function(currentPage) {
        RUI.DialogManager.alert("当前所在页: 第" + currentPage + "页", "提示");
    },
    render:function() {
        return <div className="example-pagination">
        	<h2 className="title">分页<span>Pagination</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
            	<RUI.Pagination {...this.state} onPage={this.onPageChange} />
            </div>
        </div>
    }
});
export {Pagination};
