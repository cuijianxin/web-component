webpackJsonp([9],{43:function(e,t,a){var i=React.createClass({displayName:"Example",componentDidMount:function(){this.refs.view.scrollTop(9999)},render:function(){return React.createElement("div",{className:"example-scrollview"},React.createElement("h2",{className:"title"},"滚动容器",React.createElement("span",null,"ScrollView")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认"),React.createElement("div",null,React.createElement(RUI.ScrollView,{ref:"view"},React.createElement("h2",null,'theme: "rounded-dots" with less momentum'),React.createElement("hr",null),React.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),React.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),React.createElement("p",null,"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),React.createElement("p",null,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),React.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."),React.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"),React.createElement("p",null,"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),React.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),React.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),React.createElement("p",null,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),React.createElement("hr",null),React.createElement("p",null,"End of content.")))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:a(97)})))}});e.exports=i},97:function(e,t){e.exports='var Example = React.createClass({\n    componentDidMount:function() {\n        this.refs.view.scrollTop(9999);\n    },\n    render:function() {\n        return <div className="example-scrollview">\n            <h2 className="title">滚动容器<span>ScrollView</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <h4 className="final-title">默认</h4>\n                <div>\n                    <RUI.ScrollView ref="view">\n                        <h2>theme: "rounded-dots" with less momentum</h2>\n                        <hr/>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>\n                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>\n                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                        <hr/>\n                        <p>End of content.</p>\n                    </RUI.ScrollView>\n                </div>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./scrollview.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});