(this.webpackJsonpreactweb=this.webpackJsonpreactweb||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),s=a(16),l=a(7),i=a(8),d=a(10),m=a(9),u=a(12),p=a(1);a(26);var h=function(){return o.a.createElement("header",{className:"bg-white"},o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light shadow-sm justify-content-md-right"},o.a.createElement("div",{className:"container"},o.a.createElement(u.b,{className:"navbar-brand text-danger",to:"/"},"ToDo List (react)"),o.a.createElement("button",{className:"navbar-toggler","data-target":"#menu","data-toggle":"collapse"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{id:"menu"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{className:"nav-link",to:"/"},"HOME")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{className:"nav-link",to:"/about"},"ABOUT")))))))},b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState({title:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.title?(e.props.addTodo(e.state.title),e.setState({title:""})):e.props.showNotification("Input can't be empty",!0)},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"mb-4",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"todo",className:"form-control mb-3 rounded-0 shadow-sm border-danger",placeholder:"Add Todo",value:this.state.title,onChange:this.onChange}),o.a.createElement("button",{className:"btn btn-danger rounded-0 shadow-sm mb-3 px-5"},"Add"))}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return e.props.todo.completed?"list-group-item list-group-item-action item-completed list-group-item-success":"list-group-item list-group-item-action"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,n=e.completed;return o.a.createElement("li",{className:this.getStyle()},o.a.createElement("input",{type:"checkbox",className:"mr-3",onChange:this.props.changeCompleted.bind(this,t),checked:n}),a,o.a.createElement("button",{className:"close",onClick:this.props.delTodo.bind(this,t)},"\xd7"))}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"list-group list-group-flush"},this.props.todos.map((function(t){return o.a.createElement(f,{key:t.id,todo:t,changeCompleted:e.props.changeCompleted,delTodo:e.props.delTodo})})))}}]),a}(n.Component);var g=function(){return o.a.createElement("div",{className:"container my-4 bg-white shadow-sm p-5"},o.a.createElement("h1",{className:"mb-4 "},"About"),o.a.createElement("p",{className:"lead"},"This is React based todo list and it also uses React router"))},E=a(34);var N=function(){return o.a.createElement("footer",{className:"bg-white border-top"},o.a.createElement("p",{className:"text-center text-muted small m-0 p-3"},"@Author Santosh Jha"))},y=a(6),j=a.n(y),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.changeCompleted=function(t){e.setState({todos:e.state.todos.map((function(a){return a.id===t&&(a.completed=!a.completed,a.completed&&e.showNotification("Checked",!0)),a}))})},e.showNotification=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=document.createElement("div"),n=t?"noti danger":"noti success";a.className=n,a.textContent=e,document.body.prepend(a),setTimeout((function(){a.remove()}),3e3)},e.addTodo=function(t){var a={id:Object(E.a)(),title:t};e.setState({todos:[].concat(Object(s.a)(e.state.todos),[a])})},e.delTodo=function(t){e.setState({todos:Object(s.a)(e.state.todos.filter((function(e){return e.id!==t})))}),e.showNotification("Deleted Successfully")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return e.json()})).then((function(t){return e.setState({todos:t})}))}},{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(p.a,{exact:!0,path:"/"},o.a.createElement("section",{className:"container p-5 my-5 shadow-sm bg-white"},o.a.createElement(b,{addTodo:this.addTodo,showNotification:this.showNotification}),o.a.createElement(v,{todos:this.state.todos,changeCompleted:this.changeCompleted,delTodo:this.delTodo}))),o.a.createElement(p.a,{path:"/about",component:g}),o.a.createElement(N,null)))}}]),a}(n.Component);w.prototypes={AddTodo:j.a.func.isRequired,Todos:[j.a.array.isRequired,j.a.func.isRequired]};var O=w;c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.182fe40a.chunk.js.map