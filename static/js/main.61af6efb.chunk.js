(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(5),l=a.n(c),o=(a(16),a(3)),i=a(2),d=a(6),r=a(7),u=a(9),k=a(8),m=a(10),h=a(1);a(18);var p=function(e){var t=e.textInput,a=e.handleInput,n=e.addTask;return s.a.createElement("div",{className:"input-section"},s.a.createElement("input",{className:"task-input",type:"text",placeholder:"Your task...",value:t,onChange:a}),s.a.createElement("button",{className:"button-add",onClick:n},s.a.createElement("i",{className:"fas fa-plus"})," Add Task"))};var T=function(e){var t=e.task,a=e.id,n=e.list,c=e.deleteTask,l=e.changeTask,o=t.text;return s.a.createElement("div",{className:"task","data-id":a,"data-list":n},s.a.createElement("div",{className:"task-text"},s.a.createElement("span",null,o)),s.a.createElement("button",{className:"button-check",onClick:l},s.a.createElement("i",{className:"fas fa-check icon-disabled"})),s.a.createElement("button",{className:"button-delete",onClick:c},s.a.createElement("i",{className:"fas fa-trash-alt icon-disabled"})))};var b=function(e){var t=e.todo,a=e.deleteTask,n=e.completeTask;return s.a.createElement("div",{className:"todo"},s.a.createElement("ul",null,t.reduceRight(function(e,t,c){return e.push(s.a.createElement("li",{key:c},s.a.createElement(T,{task:t,id:c,list:"todo",deleteTask:a,changeTask:n}))),e},[])))};var v=function(e){var t=e.completed,a=e.deleteTask,n=e.uncompleteTask;return s.a.createElement("div",{className:"completed"},s.a.createElement("ul",null,t.reduceRight(function(e,t,c){return e.push(s.a.createElement("li",{key:c},s.a.createElement(T,{task:t,id:c,list:"completed",deleteTask:a,changeTask:n}))),e},[])))},f=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(u.a)(this,Object(k.a)(t).call(this))).state={todo:[],completed:[],textInput:""},e.handleInput=e.handleInput.bind(Object(h.a)(Object(h.a)(e))),e.addTask=e.addTask.bind(Object(h.a)(Object(h.a)(e))),e.deleteTask=e.deleteTask.bind(Object(h.a)(Object(h.a)(e))),e.changeTask=e.changeTask.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleInput",value:function(e){this.setState({textInput:e.target.value})}},{key:"addTask",value:function(){this.state.textInput&&this.setState({todo:Object(i.a)(this.state.todo).concat([{text:this.state.textInput}]),textInput:""})}},{key:"deleteTask",value:function(e){var t=e.target.parentNode.dataset.id,a=e.target.parentNode.dataset.list,n=Object(i.a)(this.state[a]),s=n.splice(t,1);return this.setState(Object(o.a)({},a,n)),s}},{key:"changeTask",value:function(e){var t=this.deleteTask(e)[0],a="";a="todo"===e.target.parentNode.dataset.list?"completed":"todo";var n=Object(i.a)(this.state[a]);n.push(t),this.setState(Object(o.a)({},a,n))}},{key:"uncompleteTask",value:function(e){}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,{textInput:this.state.textInput,handleInput:this.handleInput,addTask:this.addTask}),s.a.createElement(b,{todo:this.state.todo,deleteTask:this.deleteTask,completeTask:this.changeTask}),s.a.createElement(v,{completed:this.state.completed,deleteTask:this.deleteTask,uncompleteTask:this.changeTask}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.61af6efb.chunk.js.map