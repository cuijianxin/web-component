var Select = React.createClass({
	getInitialState: function () {
        return {
            selected :{key:'初始值',value:'1'},
            data: [{key:'初始值',value:'1'}]
        };
    },
    filterHandle : function() {
        return [];
    },
    onClickHandler:function(e) {
    	if (this.state.selected.key == "初始值") {
    		RUI.DialogManager.alert("下拉框重新渲染，加载多项数据", "提示");
    		this.setState({
	            selected : {key:'查看3',value:'3'},
	            data : [
	                {key:'选项1',value:'1'},
	                {key:'选项2',value:'2'},
	                {key:'选项3',value:'3'},
	                {key:'选项4',value:'4'},
	                {key:'选项5',value:'5'},
	                {key:'选项6',value:'6'}
	            ]
	        });
    	} else {
    		RUI.DialogManager.alert("下拉框重新渲染为初始状态", "提示");
    		this.setState({
	            selected :{key:'初始值',value:'1'},
            	data: [{key:'初始值',value:'1'}]
	        });
    	}
    },
    selectCallback:function(selected) {
        RUI.DialogManager.alert("选择项:" + selected.key, "提示");
    },
    render:function() {
    	var selectList = [
    		{key:'苹果',value:'1'},
    		{key:'香蕉',value:'2'},
    		{key:'菠萝',value:'3'}
    	];
        return <div className="example-select">
        	<h2 className="title">下拉选框<span>Select</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
            	<h4 className="final-title">基本样式</h4>
                <div>
                    <RUI.Select
                        data={selectList}
                        value={selectList[0]}
                        stuff={true}
                        callback={this.selectCallback}
                        className="rui-theme-1">
                    </RUI.Select>
                </div>
                
                <h4 className="final-title">无外边框样式</h4>
                <div>
                    <RUI.Select
                        ref="selectBody"
                        data={selectList}
                        value={selectList[0]}
                        className="rui-theme-3"
                        stuff={true}
                        callback={this.selectCallback}>
                    </RUI.Select>
                </div>
                
                <h4 className="final-title">带搜索框</h4>
                <div>
                    <RUI.Select
                        data={selectList}
                        value={selectList[0]}
                        filter={true}
                        maxLen="11"
                        result="未搜索到内容"
                        className="rui-theme-3"
                        stuff={true}
                        filterCallback={this.filterHandle}>
                    </RUI.Select>
                </div>
                
                <h4 className="final-title">单个选择值</h4>
                <div>
                    <RUI.Select
                        data={this.state.data}
                        value={this.state.selected}
                        stuff={true}
                        offset={'0'}
                        className="rui-theme-2 short">
                    </RUI.Select>
                    &nbsp;&nbsp;
                    <RUI.Button onClick={this.onClickHandler}>点击</RUI.Button>
                </div>
            </div>
        </div>
    }
});
export {Select};
