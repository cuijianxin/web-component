webpackJsonp([7],{46:function(e,a,t){var n=React.createClass({displayName:"Example",getInitialState:function(){return{asyncMode:0}},componentDidMount:function(){var e=this;setTimeout(function(){e.setState({asyncMode:1})},300)},valueChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},groupChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"单选框",React.createElement("span",null,"Radio")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"单个按钮"),React.createElement("div",null,React.createElement(RUI.Radio,{value:"type_1",selected:1,onChange:this.valueChange},"初始已选"),React.createElement(RUI.Radio,{value:"type_2",selected:this.state.asyncMode},"异步变更"),React.createElement(RUI.Radio,{value:"type_3",selected:0,disable:!0},"禁用状态")),React.createElement("h4",{className:"final-title"},"组"),React.createElement("div",null,React.createElement(RUI.RadioGroup,{ref:"radioGroup",onChange:this.groupChange,defaultValue:"type_1"},React.createElement(RUI.Radio,{value:"type_1"},"初始已选"),React.createElement(RUI.Radio,{value:"type_2"},"初始未选"),React.createElement(RUI.Radio,{value:"type_3"},"分组测试"),React.createElement(RUI.Radio,{value:"type_4",disable:!0},"禁用状态")))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(95)})))}});e.exports=n},95:function(e,a){e.exports='var Example = React.createClass({\r\n    getInitialState:function() {\r\n        return {\r\n            asyncMode:0\r\n        };\r\n    },\r\n    componentDidMount:function() {\r\n        var _this = this;\r\n        setTimeout(function() {\r\n            _this.setState({\r\n                asyncMode:1\r\n            });\r\n        }, 300);\r\n    },\r\n    valueChange:function(e) {\r\n        RUI.DialogManager.alert(JSON.stringify(e.data));\r\n    },\r\n    groupChange:function(e) {\r\n        RUI.DialogManager.alert(JSON.stringify(e.data));\r\n    },\r\n    render:function() {\r\n        return <div className="example-input">\r\n            <h2 className="title">单选框<span>Radio</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <h4 className="final-title">单个按钮</h4>\r\n                <div>\r\n                    <RUI.Radio value="type_1" selected={1} onChange={this.valueChange}>初始已选</RUI.Radio>\r\n                    <RUI.Radio value="type_2" selected={this.state.asyncMode}>异步变更</RUI.Radio>\r\n                    <RUI.Radio value="type_3" selected={0} disable={true}>禁用状态</RUI.Radio>\r\n                </div>\r\n                <h4 className="final-title">组</h4>\r\n                <div>\r\n                    <RUI.RadioGroup ref="radioGroup" onChange={this.groupChange} defaultValue={"type_1"}>\r\n                        <RUI.Radio value="type_1">初始已选</RUI.Radio>\r\n                        <RUI.Radio value="type_2">初始未选</RUI.Radio>\r\n                        <RUI.Radio value="type_3">分组测试</RUI.Radio>\r\n                        <RUI.Radio value="type_4" disable={true}>禁用状态</RUI.Radio>\r\n                    </RUI.RadioGroup>\r\n                </div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./radio.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});