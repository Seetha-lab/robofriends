(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,n,t){e.exports=t(29)},22:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),c=(t(22),t(5)),s=t(1),l=t(15),u=t(16),d={searchval:""},h={isPending:!1,robots:[],error:""},f=t(3),b=t(4),p=t(7),v=t(6),g=function(e){var n=e.searchfunction;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"tc pa2 ba b--green bg-light-blue",type:"search",placeholder:"search robot",onChange:n}))},E=function(e){return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?size=200x200"),alt:e.id}),o.a.createElement("div",null,o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.email)))},m=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(E,{key:n[t].id,id:n[t].id,name:n[t].name,email:n[t].email})})))},w=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid #3fe2e2",height:"600px"}},e.children)},O=function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(e){var r;return Object(f.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",null,o.a.createElement("h1",null,"Sorry! Problem in page laoding!!")):this.props.children}}]),t}(r.Component),y=(t(28),t(13),function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onfetchrobots()}},{key:"render",value:function(){var e=this.props,n=e.searchval,t=e.onsearchfunction,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"RoboFriends"),o.a.createElement(g,{searchfunction:t}),o.a.createElement(w,null,a?o.a.createElement("h1",null," Loading ... "):o.a.createElement(O,null,o.a.createElement(m,{robots:i}))))}}]),t}(r.Component)),S=Object(c.b)((function(e){return{searchval:e.searchRobots.searchval,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onsearchfunction:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onfetchrobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(y),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=Object(l.createLogger)(),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchval:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),_=Object(s.d)(k,Object(s.a)(u.a,C));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",null,o.a.createElement(c.a,{store:_},o.a.createElement(S,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");R?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.97e91077.chunk.js.map