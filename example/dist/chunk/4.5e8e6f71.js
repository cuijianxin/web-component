webpackJsonp([4],{

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by CoolGuy on 2016/11/23 10:53.
	 */
	var Tabs = React.createClass({
	    displayName: 'Tabs',
	
	    getInitialState() {
	        return {
	            tab: [{ title: React.createElement(
	                    'span',
	                    null,
	                    React.createElement(RUI.Icon, { name: 'add' }),
	                    'Tab1'
	                ), content: React.createElement(
	                    'div',
	                    null,
	                    'Hello',
	                    React.createElement(
	                        'span',
	                        null,
	                        'World'
	                    )
	                ) }, { title: 'Tab 2', content: 'Content of Tab 2' }, { title: 'Tab 3', content: 'Content of Tab 3' }, { title: 'Tab 4', content: 'Content of Tab 4' }, { title: 'Tab 5', content: 'Content of Tab 5' }],
	            output: "目前没有",
	            shouldShowXOnlyOnePane: true,
	            maxPaneLength: 10
	        };
	    },
	    tabClick(which) {
	        this.setState({ output: "刚才点击了：" + which.index });
	    },
	    onAdd() {
	        this.setState({
	            tab: [...this.state.tab, { title: "Hello", content: "I am New!" }],
	            output: '新增了一项'
	        });
	    },
	    onRemove({ pane, index }) {
	        let tab = this.state.tab;
	        tab.splice(index, 1);
	        let len = tab.length || 1; //至少应该为1
	        console.log(len);
	        this.setState({
	            tab: tab,
	            output: `删掉了下标是${index}的项`
	        });
	    },
	    render() {
	        return React.createElement(
	            'div',
	            { className: 'example-slider' },
	            React.createElement(
	                'h2',
	                { className: 'title' },
	                'tab\u6807\u7B7E',
	                React.createElement(
	                    'span',
	                    null,
	                    'tab'
	                )
	            ),
	            React.createElement(
	                'h3',
	                { className: 'sub-title' },
	                '\u6F14\u793A'
	            ),
	            React.createElement(
	                'div',
	                { className: 'example' },
	                React.createElement(
	                    'div',
	                    null,
	                    '\u4E00\u4E9B\u8F93\u51FA\u5185\u5BB9\uFF1A',
	                    this.state.output
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u5B8C\u6574\u529F\u80FD\u6F14\u793A(type="editable-card")'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    'Tab\u53EA\u5269\u4E0B\u4E00\u9879\u65F6\u662F\u5426\u53EF\u4EE5\u5220\u9664?',
	                    React.createElement(
	                        RUI.RadioGroup,
	                        { ref: 'radioGroup', onChange: e => {
	                                this.setState({ shouldShowXOnlyOnePane: e.data == 'type_1' });
	                            }, defaultValue: "type_1" },
	                        React.createElement(
	                            RUI.Radio,
	                            { value: 'type_1' },
	                            '\u53EF\u4EE5'
	                        ),
	                        React.createElement(
	                            RUI.Radio,
	                            { value: 'type_2' },
	                            '\u4E0D\u53EF'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    '\u53EF\u4EE5\u6DFB\u52A0\u7684\u6700\u5927\u957F\u5EA6\u662F:(\u4E0D\u586B\u5199\u62160\u8868\u793A\u4E0D\u9650\u5236):',
	                    React.createElement(RUI.Input, { value: this.state.maxPaneLength, onChange: e => this.setState({ maxPaneLength: e.target.value }) })
	                ),
	                React.createElement(
	                    RUI.Tab,
	                    {
	                        defaultSelected: 2,
	                        onChange: this.tabClick,
	                        onRemove: this.onRemove,
	                        onAdd: this.onAdd,
	                        shouldShowXOnlyOnePane: this.state.shouldShowXOnlyOnePane,
	                        maxPaneLength: this.state.maxPaneLength,
	                        type: 'editable-card' },
	                    this.state.tab.map((v, i) => {
	                        return React.createElement(
	                            RUI.TabPane,
	                            { key: i, title: v.title },
	                            v.content
	                        );
	                    })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    'type="card"'
	                ),
	                React.createElement(
	                    RUI.Tab,
	                    {
	                        type: 'card'
	                    },
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98981' },
	                        '\u6211\u662F\u7B2C\u4E00\u4E2A\u6807\u7B7E'
	                    ),
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98982' },
	                        '\u6211\u662F\u7B2C2\u4E2A\u6807\u7B7E'
	                    ),
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98983' },
	                        '\u6211\u662F\u7B2C3\u4E2A\u6807\u7B7E'
	                    )
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    'type="normal"'
	                ),
	                React.createElement(
	                    RUI.Tab,
	                    {
	                        type: 'normal',
	                        onChange: this.tabClick
	                    },
	                    React.createElement(RUI.TabPane, { title: '\u6807\u98981' }),
	                    React.createElement(RUI.TabPane, { title: '\u6807\u98982' }),
	                    React.createElement(RUI.TabPane, { title: '\u6807\u98983' })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    'type="line"(\u9ED8\u8BA4\u6837\u5F0F), \u5141\u8BB8\u81EA\u5B9A\u4E49class(\u6B64\u5904\u5B9A\u4E49\u4E86\u6CA1\u6709\u4EFB\u4F55\u6837\u5F0F\u7684class)'
	                ),
	                React.createElement(
	                    RUI.Tab,
	                    {
	                        type: 'line',
	                        wrapperClass: 'my-class-do-nothing',
	                        headerClass: 'my-header-class-do-nothing',
	                        tabClass: 'my-tab-class-do-nothing'
	                    },
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98981' },
	                        '\u6211\u662F\u7B2C\u4E00\u4E2A\u6807\u7B7E'
	                    ),
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98982' },
	                        '\u6211\u662F\u7B2C2\u4E2A\u6807\u7B7E'
	                    ),
	                    React.createElement(
	                        RUI.TabPane,
	                        { title: '\u6807\u98983' },
	                        '\u6211\u662F\u7B2C3\u4E2A\u6807\u7B7E'
	                    )
	                )
	            ),
	            React.createElement(
	                'h3',
	                { className: 'sub-title' },
	                '\u6E90\u7801'
	            ),
	            React.createElement(
	                'div',
	                { className: 'source' },
	                React.createElement('textarea', { defaultValue: __webpack_require__(102) })
	            )
	        );
	    }
	});
	module.exports = Tabs;

/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = "/**\n * Created by CoolGuy on 2016/11/23 10:53.\n */\nvar Tabs = React.createClass({\n    getInitialState(){\n        return {\n            tab:[{ title: <span><RUI.Icon name=\"add\"></RUI.Icon>Tab1</span>, content: <div>Hello<span>World</span></div>},\n                { title: 'Tab 2', content: 'Content of Tab 2'},\n                { title: 'Tab 3', content: 'Content of Tab 3'},\n                { title: 'Tab 4', content: 'Content of Tab 4'},\n                { title: 'Tab 5', content: 'Content of Tab 5'},\n            ],\n            output:\"目前没有\",\n            shouldShowXOnlyOnePane:true,\n            maxPaneLength:10\n        }\n    },\n    tabClick(which){\n        this.setState({output:\"刚才点击了：\"+which.index});\n    },\n    onAdd(){\n        this.setState({\n            tab:[...this.state.tab,{title:\"Hello\",content:\"I am New!\"}],\n            output:'新增了一项'\n        })\n    },\n    onRemove({pane,index}){\n        let tab = this.state.tab;\n        tab.splice(index,1);\n        let len = tab.length || 1;//至少应该为1\n        console.log(len);\n        this.setState({\n            tab:tab,\n            output:`删掉了下标是${index}的项`\n        })\n    },\n    render(){\n        return (\n            <div className=\"example-slider\">\n                <h2 className=\"title\">tab标签<span>tab</span></h2>\n                <h3 className=\"sub-title\">演示</h3>\n                <div className=\"example\">\n                    <div>一些输出内容：{this.state.output}</div>\n                    <h4 className=\"final-title\">完整功能演示(type=\"editable-card\")</h4>\n                    <div>Tab只剩下一项时是否可以删除?\n                        <RUI.RadioGroup ref=\"radioGroup\" onChange={(e)=>{this.setState({shouldShowXOnlyOnePane:e.data=='type_1'})}} defaultValue={\"type_1\"}>\n                            <RUI.Radio value=\"type_1\">可以</RUI.Radio>\n                            <RUI.Radio value=\"type_2\">不可</RUI.Radio>\n                        </RUI.RadioGroup>\n                    </div>\n                    <div>\n                        可以添加的最大长度是:(不填写或0表示不限制):\n                        <RUI.Input value={this.state.maxPaneLength} onChange={(e)=>this.setState({maxPaneLength:e.target.value})}/>\n                    </div>\n                    <RUI.Tab\n                        defaultSelected={2}\n                        onChange={this.tabClick}\n                        onRemove={this.onRemove}\n                        onAdd={this.onAdd}\n                        shouldShowXOnlyOnePane={this.state.shouldShowXOnlyOnePane}\n                        maxPaneLength={this.state.maxPaneLength}\n                        type=\"editable-card\">\n                        { this.state.tab.map((v,i)=>{\n                            return <RUI.TabPane key={i} title={v.title}>{v.content}</RUI.TabPane>\n                        })}\n                    </RUI.Tab>\n                    <h4 className=\"final-title\">type=\"card\"</h4>\n                    <RUI.Tab\n                        type=\"card\"\n                    >\n                        <RUI.TabPane title=\"标题1\">我是第一个标签</RUI.TabPane>\n                        <RUI.TabPane title=\"标题2\">我是第2个标签</RUI.TabPane>\n                        <RUI.TabPane title=\"标题3\">我是第3个标签</RUI.TabPane>\n                    </RUI.Tab>\n                    <h4 className=\"final-title\">type=\"normal\"</h4>\n                    <RUI.Tab\n                        type=\"normal\"\n                        onChange={this.tabClick}\n                    >\n                        <RUI.TabPane title=\"标题1\"></RUI.TabPane>\n                        <RUI.TabPane title=\"标题2\"></RUI.TabPane>\n                        <RUI.TabPane title=\"标题3\"></RUI.TabPane>\n                    </RUI.Tab>\n                    <h4 className=\"final-title\">type=\"line\"(默认样式), 允许自定义class(此处定义了没有任何样式的class)</h4>\n                    <RUI.Tab\n                        type=\"line\"\n                        wrapperClass=\"my-class-do-nothing\"\n                        headerClass=\"my-header-class-do-nothing\"\n                        tabClass=\"my-tab-class-do-nothing\"\n                    >\n                        <RUI.TabPane title=\"标题1\">我是第一个标签</RUI.TabPane>\n                        <RUI.TabPane title=\"标题2\">我是第2个标签</RUI.TabPane>\n                        <RUI.TabPane title=\"标题3\">我是第3个标签</RUI.TabPane>\n                    </RUI.Tab>\n\n                </div>\n\n                <h3 className=\"sub-title\">源码</h3>\n                <div className=\"source\">\n                    <textarea defaultValue={require('raw!./tabs.js')} />\n                </div>\n            </div>\n        )\n    }\n});\nmodule.exports = Tabs;"

/***/ }

});