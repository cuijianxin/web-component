webpackJsonp([17],{54:function(e,t,a){"use strict";var c=a(16),n={name:"htmlmixed",scriptTypes:[{matches:/\/x-handlebars-template|\/x-mustache/i,mode:null},{matches:/(text|application)\/(x-)?vb(a|script)/i,mode:"vbscript"}]};e.exports=React.createClass({displayName:"exports",componentDidUpdate:function(){this.rebuildCodeMirror()},componentDidMount:function(){this.rebuildCodeMirror()},editor:null,rebuildCodeMirror:function(){"undefined"!=typeof CodeMirror&&"htmlmixed"==CodeMirror.mimeModes["text/html"]&&$(".source>textarea").text()?(this.editor&&this.editor.getValue()==$(".source>textarea").text()||(this.editor=CodeMirror.fromTextArea($(".source>textarea")[0],{mode:n,selectionPointer:!0,readOnly:!0,lineWrapping:!0})),this.editor.setValue($(".source>textarea").text()),this.editor.setSize("auto","auto")):setTimeout(this.rebuildCodeMirror,100)},render:function(){return React.createElement("div",{className:"components"},React.createElement("ul",{className:"lists"},React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/form"},"表单")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/button"},"按钮")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/input"},"输入框")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/spinner"},"数字调节器")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/select"},"下拉选框")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/pagination"},"分页")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/dialog"},"弹出层")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/tooltip"},"提示")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/checkbox"},"多选")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/radio"},"单选")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/table"},"表格")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/datepicker"},"日历")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/loading"},"加载")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/tree"},"树形菜单")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/slider"},"轮播图")),React.createElement("li",null,React.createElement(c.Link,{activeClassName:"active",to:"/components/scrollview"},"滚动视图"))),React.createElement("div",{className:"component-detail"},this.props.children))}})}});