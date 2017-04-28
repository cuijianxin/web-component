var CheckBox = React.createClass({
	valueChange:function(e) {
        RUI.DialogManager.alert(JSON.stringify(e.data));
    },
    groupChange:function(e) {
        console.log(e.data);
        RUI.DialogManager.alert(JSON.stringify(e.data));
        this.setState({
            a:1
        });
    },
    render:function() {
        return <div className="example-checkbox">
        	<h2 className="title">多选框<span>Checkbox</span></h2>
        	<h3 className="sub-title">演示</h3>
            <div className="example">
            	<h4 className="final-title">单个按钮</h4>
                <div>
                    <RUI.Checkbox value="type_1" defaultSelected={1} onChange={this.valueChange}>初始已选</RUI.Checkbox>
                    <RUI.Checkbox value="type_2">初始未选</RUI.Checkbox>
                    <RUI.Checkbox value="type_3" defaultSelected={0} disable={true}>禁用状态</RUI.Checkbox>
                    <RUI.Checkbox value="type_3" defaultSelected={1} disable={true}>禁用状态</RUI.Checkbox>
                </div>
                <h4 className="final-title">组</h4>
                <div>
                    <RUI.CheckboxGroup ref="checkboxGroup" onChange={this.groupChange}>
                        <RUI.Checkbox value="type_1" defaultSelected={1}>初始已选</RUI.Checkbox>
                        <RUI.Checkbox value="type_2" defaultSelected={0}>初始未选</RUI.Checkbox>
                        <RUI.Checkbox value="type_3" defaultSelected={0}>分组测试</RUI.Checkbox>
                    </RUI.CheckboxGroup>
                </div>
            </div>
        </div>
    }
});
export {CheckBox};