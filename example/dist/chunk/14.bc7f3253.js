webpackJsonp([14],{39:function(e,a,t){var c=React.createClass({displayName:"Example",valueChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},groupChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"多选框",React.createElement("span",null,"Checkbox")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"单个按钮"),React.createElement("div",null,React.createElement(RUI.Checkbox,{value:"type_1",selected:1,onChange:this.valueChange},"初始已选"),React.createElement(RUI.Checkbox,{value:"type_2"},"初始未选"),React.createElement(RUI.Checkbox,{value:"type_3",selected:0,disable:!0},"禁用状态")),React.createElement("h4",{className:"final-title"},"组"),React.createElement("div",null,React.createElement(RUI.CheckboxGroup,{ref:"checkboxGroup",onChange:this.groupChange},React.createElement(RUI.Checkbox,{value:"type_1",selected:1},"初始已选"),React.createElement(RUI.Checkbox,{value:"type_2",selected:0},"初始未选"),React.createElement(RUI.Checkbox,{value:"type_3",selected:0},"分组测试"),React.createElement(RUI.Checkbox,{value:"type_4",selected:0,disable:!0},"禁用状态")))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(88)})))}});e.exports=c},88:function(e,a){e.exports='var Example = React.createClass({\r\n    valueChange:function(e) {\r\n        RUI.DialogManager.alert(JSON.stringify(e.data));\r\n    },\r\n    groupChange:function(e) {\r\n        RUI.DialogManager.alert(JSON.stringify(e.data));\r\n    },\r\n    render:function() {\r\n        return <div className="example-input">\r\n            <h2 className="title">多选框<span>Checkbox</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <h4 className="final-title">单个按钮</h4>\r\n                <div>\r\n                    <RUI.Checkbox value="type_1" selected={1} onChange={this.valueChange}>初始已选</RUI.Checkbox>\r\n                    <RUI.Checkbox value="type_2">初始未选</RUI.Checkbox>\r\n                    <RUI.Checkbox value="type_3" selected={0} disable={true}>禁用状态</RUI.Checkbox>\r\n                </div>\r\n                <h4 className="final-title">组</h4>\r\n                <div>\r\n                    <RUI.CheckboxGroup ref="checkboxGroup" onChange={this.groupChange}>\r\n                        <RUI.Checkbox value="type_1" selected={1}>初始已选</RUI.Checkbox>\r\n                        <RUI.Checkbox value="type_2" selected={0}>初始未选</RUI.Checkbox>\r\n                        <RUI.Checkbox value="type_3" selected={0}>分组测试</RUI.Checkbox>\r\n                        <RUI.Checkbox value="type_4" selected={0} disable={true}>禁用状态</RUI.Checkbox>\r\n                    </RUI.CheckboxGroup>\r\n                </div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./checkbox.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});