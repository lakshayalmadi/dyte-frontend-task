(this["webpackJsonpdyte-frontend"]=this["webpackJsonpdyte-frontend"]||[]).push([[0],{34:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(26),i=a.n(s),o=(a(34),a(28)),l=a(2),r=a(9),d=a(1);function j(e){var t=e.onClick;return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("img",{src:"https://www.dyte.io/images/Dyte-Logo.svg",alt:"logo"}),Object(d.jsx)("div",{className:"copy-link",onClick:t,children:"Get Shareable Link"})]})}a(36),a(37),a(38),a(39),a(40);var u=a(27),h=function(e){var t=e.language,a=e.value,n=e.onChange;return Object(d.jsx)("div",{className:"editor",children:Object(d.jsx)(u.Controlled,{onBeforeChange:n,value:a,options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})})};function b(e){var t=e.srcDoc;return Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{className:"live-editor",srcDoc:t,title:"Live Renderer",sandbox:"allow-scripts",frameBorder:"0"})})}var f=function(e){var t=e.selectedFile,a=e.onClick;return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("div",{className:"html"===t?"active":"",onClick:a,"data-file":"html",children:"index.html"}),Object(d.jsx)("div",{className:"css"===t?"active":"",onClick:a,"data-file":"css",children:"index.css"}),Object(d.jsx)("div",{className:"js"===t?"active":"",onClick:a,"data-file":"js",children:"index.js"})]})};a.p;var m=a(14),v=a.n(m);var O=function(){var e=Object(n.useState)("<h1>Real-time audio and video SDKs, ready to launch \ud83d\ude80</h1>"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(""),m=Object(r.a)(u,2),O=m[0],p=m[1],x=Object(n.useState)(""),g=Object(r.a)(x,2),k=g[0],y=g[1],C=Object(n.useState)("html"),N=Object(r.a)(C,2),S=N[0],w=N[1];return Object(n.useEffect)((function(){var e=window.location.pathname;"/"===(e=e.substr(20,e.length))[e.length-1]&&(e=e.substr(0,e.length-1)),e&&v.a.get("https://dyte-backend-api.herokuapp.com/api/pastes/".concat(e)).then((function(e){console.log(e.data),e.data._id&&(c(e.data.html),l(e.data.css),p(e.data.javascript))})).catch((function(e){console.log("Error")}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){y("\n      <html>\n        <head>\n          <style>".concat(o,"</style>\n        </head>\n        <body>").concat(a,"</body>\n        <script>").concat(O,"<\/script>\n      </html>"))}),250);return function(){return clearTimeout(e)}}),[a,o,O]),Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{onClick:function(){v.a.post("https://dyte-backend-api.herokuapp.com/api/pastes",{html:a,css:o,javascript:O}).then((function(e){console.log(e.data),alert("https://lakshayalmadi.github.io/dyte-frontend-task/".concat(e.data._id))})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(f,{selectedFile:S,onClick:function(e){var t=e.target.dataset.file;w(t)}}),"html"===S&&Object(d.jsx)(h,{language:"xml",fileName:"HTML",value:a,onChange:function(e,t,a){c(a)}}),"css"===S&&Object(d.jsx)(h,{language:"css",fileName:"CSS",value:o,onChange:function(e,t,a){l(a)}}),"js"===S&&Object(d.jsx)(h,{language:"js",fileName:"Javascript",value:O,onChange:function(e,t,a){p(a)}}),Object(d.jsx)("div",{className:"heading",children:"Live View"}),Object(d.jsx)(b,{srcDoc:k})]})},p=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/dyte-frontend-task/:pathId",exact:!0,component:O}),Object(d.jsx)(l.b,{path:"/dyte-frontend-task",exact:!0,component:O}),Object(d.jsx)(l.a,{to:"/dyte-frontend-task"})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d1d4539f.chunk.js.map