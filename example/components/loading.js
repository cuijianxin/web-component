var Loading = React.createClass({
	followShowLoading:function(e) {
        this.refs.followLoading.open(e.data);
        setTimeout(function() {
            this.refs.followLoading.close(e.data);
        }.bind(this), 2000);
    },
    render:function() {
        return <div className="example-loading">
        	<h2 className="title">加载<span>Loading</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
                <RUI.Button className="primary" onClick={this.followShowLoading}>loading展示，2秒消失</RUI.Button>
            </div>
            <RUI.Loading
                ref="followLoading"
                type={'follow'}
                mask={true}
                size={'s-small'}>
            </RUI.Loading>
        </div>;
    }
});
export {Loading};