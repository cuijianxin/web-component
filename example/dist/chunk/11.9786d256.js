webpackJsonp([11],{41:function(e,a,n){var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=React.createClass({displayName:"Example",getPageConfig:function(){return{pageSize:20,currentPage:1,totalNum:43}},onPageChange:function(e){RUI.DialogManager.alert("change:"+e,"提示")},render:function(){return React.createElement("div",{className:"example-pagination"},React.createElement("h2",{className:"title"},"分页",React.createElement("span",null,"Pagination")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement(RUI.Pagination,t({},this.getPageConfig(),{onPage:this.onPageChange}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:n(95)})))}});e.exports=r},95:function(e,a){e.exports='var Example = React.createClass({\n    getPageConfig:function() {\n        return {\n            pageSize:20,\n            currentPage:1,\n            totalNum:43\n        };\n    },\n    onPageChange:function(currentPage) {\n        RUI.DialogManager.alert("change:" + currentPage, "提示");\n    },\n    render:function() {\n        return <div className="example-pagination">\n            <h2 className="title">分页<span>Pagination</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <RUI.Pagination {...this.getPageConfig()} onPage={this.onPageChange} />\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./pagination.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});