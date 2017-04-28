var Radio = React.createClass({
	getInitialState:function() {
        return {
            asyncMode:0
        };
    },
    onClickHandler:function() {
        this.setState({asyncMode: this.state.asyncMode == 0 ? 1 : 0});
    },
    componentDidMount:function() {
        var _this = this;
        setTimeout(function() {
            _this.setState({
                asyncMode:1
            });
        }, 300);
    },
    valueChange:function(e) {
        RUI.DialogManager.alert(JSON.stringify(e.data));
    },
    groupChange:function(e) {
        RUI.DialogManager.alert(JSON.stringify(e.data));
        this.setState({
            a:1
        });
    },
    render:function() {
        return <div className="example-radio">
        	<h2 className="title">单选框<span>Radio</span></h2>
        	<h3 className="sub-title">演示</h3>
            <div className="example">
            	<h4 className="final-title">单个按钮</h4>
                <div>
                	<div>
                		<RUI.Radio value="type_1" defaultSelected={1} onChange={this.valueChange}>初始已选</RUI.Radio>
                    	<RUI.Radio value="type_2" defaultSelected={0} onChange={this.valueChange}>初始未选</RUI.Radio>
                	</div>
                	<div>
                		<RUI.Radio value="type_3" selected={this.state.asyncMode}>异步变更</RUI.Radio>
                		<RUI.Button onClick={this.onClickHandler}>state修改状态</RUI.Button>
                	</div>
                	<div>
                		<RUI.Radio value="type_4" defaultSelected={0} disable={true}>禁用状态</RUI.Radio>
                    	<RUI.Radio value="type_5" defaultSelected={1} disable={true}>禁用状态</RUI.Radio>
                	</div>
                </div>
                <h4 className="final-title">组</h4>
                <div>
                    <RUI.RadioGroup ref="radioGroup" onChange={this.groupChange} defaultValue={"type_1"}>
                        <RUI.Radio value="type_1">初始已选</RUI.Radio>
                        <RUI.Radio value="type_2">初始未选</RUI.Radio>
                        <RUI.Radio value="type_3">分组测试</RUI.Radio>
                    </RUI.RadioGroup>
                </div>
            </div>
        </div>
    }
});
export {Radio};