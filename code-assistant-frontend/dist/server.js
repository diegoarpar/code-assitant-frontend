(()=>{var e,s={18:(e,s,t)=>{const n=t(938);t(183),e.exports={getRecipes:async(e,s)=>n.post("http://localhost:3030/api/feedback",{feedback:e.body.feedback,rate:e.body.rate},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},375:(e,s,t)=>{const n=t(938);t(183),e.exports={getRecipes:async(e,s)=>n.post("http://localhost:3030/api/log",{code:e.body.code},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},84:(e,s,t)=>{const n=t(938);t(183),e.exports={getRecipes:async(e,s)=>n.post("http://localhost:3030/api/messages",{code:e.body.code,key:e.body.key},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},239:(e,s,t)=>{const n=t(938);t(183),e.exports={getRecipes:async(e,s)=>n.post("http://localhost:3030/api/token",{code:e.body.code,key:e.body.key},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},373:e=>{"use strict";e.exports=require("@tinymce/tinymce-react")},938:e=>{"use strict";e.exports=require("axios")},183:e=>{"use strict";e.exports=require("bluebird")},15:e=>{"use strict";e.exports=require("react")},732:e=>{"use strict";e.exports=require("react/jsx-runtime")}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var r=t[e]={exports:{}};return s[e](r,r.exports,n),r.exports}n.m=s,n.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return n.d(s,{a:s}),s},n.d=(e,s)=>{for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((s,t)=>(n.f[t](e,s),s)),[])),n.u=e=>e+".server.js",n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={792:1},n.f.require=(s,t)=>{e[s]||(s=>{var t=s.modules,a=s.ids,r=s.runtime;for(var o in t)n.o(t,o)&&(n.m[o]=t[o]);r&&r(n);for(var i=0;i<a.length;i++)e[a[i]]=1})(require("./"+n.u(s)))},(()=>{"use strict";const e=require("express");var s=n.n(e),t=n(15),a=n.n(t);const r=require("react-dom/server");var o=n.n(r);const i=require("react-router-dom/server"),c=require("react-router-dom");var l=n(732);const d=()=>(0,l.jsxs)("div",{id:"about",className:"min-vh-100",children:[(0,l.jsx)("header",{className:"header-assistant",children:(0,l.jsx)("h1",{children:"About Us"})}),(0,l.jsxs)("main",{className:"text-center",children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"pt-5",children:"Who We Are"}),(0,l.jsx)("span",{children:"We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h3",{className:"pt-5",children:"Our Mission"}),(0,l.jsx)("span",{children:"Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h3",{className:"pt-5",children:"Contact Us"}),(0,l.jsx)("span",{children:"We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:"}),(0,l.jsxs)("span",{children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:diegoarpar@gmail.com",children:"diegoarpar@gmail.com"}),(0,l.jsx)("strong",{children:"DIEGO ARMANDO PADILLA RAMIREZ"})]})]})]})]}),h={container:{maxWidth:"120rem",padding:"3.2rem",margin:"50px auto",width:"800px",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"},heading:{color:"#333333",letterSpacing:"0.1rem"},list:{marginLeft:"20px",listStyle:"none",display:"flex",flexDirection:"column"},list_item:{color:"#333333",letterSpacing:"1.2px",fontSize:"1.6rem",alignItems:"center",padding:"0.2rem",borderRadius:"0.3rem"}},u=()=>(0,l.jsx)("div",{style:h.container,children:(0,l.jsx)("div",{children:(0,l.jsx)("h1",{style:h.heading,children:" Loading the page "})})});var m=n(938),p=n.n(m);const x=require("react-bootstrap"),j="http://test.miarchivo.com.co:3002/api/",g=()=>{const e=j+"logs",[s,n]=(0,t.useState)({}),[a,r]=(0,t.useState)("Refresh logs list"),[o,i]=(0,t.useState)({}),c=s=>{r("Processing..."),i({}),m(-1,{}),n({}),p().post(e,{},{headers:{Authorization:"Bearer "}}).then((e=>{r("Refresh list"),n(e.data)})).catch((e=>{console.log(e),r("Refresh list")}))},d=function(e){return`${e.slice(0,4)}/${e.slice(4,6)}/${e.slice(6,8)} ${e.slice(9,11)}:${e.slice(11,13)}`};(0,t.useEffect)((()=>{c()}),[]);const[h,u]=(0,t.useState)(null),m=(e,s)=>{u(h===e?null:e),i(s)};return(0,l.jsxs)("div",{id:"logs",className:"min-vh-100",children:[(0,l.jsx)("header",{className:"header-assistant",children:(0,l.jsx)("h1",{children:"Assistant Logs"})}),(0,l.jsxs)("div",{className:"container mt-4",children:[(0,l.jsxs)("div",{className:"row col pt-2 pb-2",children:[(0,l.jsx)("div",{className:"col-4",children:null!=s&&null!=s.components&&(0,l.jsxs)("select",{className:"form-select",onChange:e=>{const t=e.target.value;m(t,s.components[t])},"aria-label":"Select component",children:[(0,l.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select a log entry"}),s.components.map(((e,s)=>(0,l.jsxs)("option",{value:s,children:["Log: ",d(e.id)]},s)))]})}),(0,l.jsx)("div",{className:"col-4",children:(0,l.jsx)("button",{className:"btn btn-primary",onClick:()=>c(),children:a})})]}),null!=o&&null!=o.content&&null!=h&&(0,l.jsx)("div",{className:"collapse "+(null!=o?"show":""),id:`collapseComponent${h}`,children:(0,l.jsxs)("div",{className:"card card-body",children:[(0,l.jsxs)("h2",{className:"text-center",children:["Detail of LOG: ",d(o.id)]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:o.content}})]})})]})]})},v=()=>{const[e,s]=(0,t.useState)(""),n=j+"token";return(0,l.jsxs)("div",{id:"token",className:"min-vh-100",children:[(0,l.jsx)("header",{className:"header-assistant",children:(0,l.jsx)("h1",{children:"Token"})}),(0,l.jsx)("div",{children:(0,l.jsx)("main",{className:"",children:(0,l.jsxs)("section",{className:"pt-5",children:[(0,l.jsx)("span",{children:"In order to use the system, provide your email to sent new token "})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("div",{className:"col-16",children:[(0,l.jsx)("input",{type:"text",value:e,onChange:e=>s(e.target.value),style:{width:"80%",margin:"10px"},placeholder:"Your Email"}),(0,l.jsx)(x.Button,{className:"btn btn-primary",onClick:s=>{e.trim()&&p().post(n,{code:e,key:""},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>null)).catch((e=>(console.log(e),null)))},children:"Request a Token"})]})]})})})]})},y=a().lazy((()=>new Promise((e=>setTimeout(e,100))).then((()=>n.e(467).then(n.bind(n,467)))))),f=e=>{let{setMessage:s,message:n,setEditorReference:a}=e;return(0,l.jsx)(t.Suspense,{fallback:(0,l.jsx)("span",{children:"Loading... "}),children:(0,l.jsx)(y,{setMessage:s,message:n,setEditorReference:a})})},b=(require("html-react-parser"),e=>{let{conversation:s,onSendMessage:n,onSendMessageComponent:a,onInitConversation:r,onClicLockSendButton:o}=e;const[i,c]=(0,t.useState)(""),[d,h]=(0,t.useState)(""),[u,m]=(0,t.useState)(null),g=j+"recipes";return(0,l.jsxs)("div",{className:"assistant-chat-results-page",children:[(0,l.jsx)("header",{className:"header-assistant",children:(0,l.jsx)("h1",{children:"Assistant Chat"})}),(0,l.jsx)("div",{className:"assistant-chat-results",children:s.messages.map(((e,s)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("strong",{children:[" "!=e.sender?e.sender+":":""," "]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}})]},s)))}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"assistant-chat-text",children:[(0,l.jsx)(f,{message:i,setMessage:c,setEditorReference:e=>{m(e)}}),(0,l.jsxs)("div",{className:"col-16",children:[(0,l.jsx)("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{width:"60%",margin:"10px"},placeholder:"Passcode token"}),(0,l.jsx)(x.Button,{className:"btn btn-primary",onClick:e=>(e=>{o(!0,e),i.trim()?(n(i),n("Processing your information...","Code Assistant"),h(""),p().post(g,{code:i,key:d},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((s=>a(s.data.components,e))).catch((s=>(console.log(s),n("Ops... try again","Code Assistant"),a([],e))))):o(!1,e)})(e),style:{width:"10%",margin:"10px"},children:"Send"}),(0,l.jsx)(x.Button,{className:"btn btn-secondary",onClick:e=>(null!=u&&null!=u.current&&u.current.setContent(""),void r()),style:{width:"10%",margin:"10px"},children:"Clean"})]})]})})]})}),k=()=>{const e=[{id:1,name:"Conversation 1",messages:[]},{id:2,name:"Conversation 2",messages:[]}],[s,n]=(0,t.useState)(e),[a,r]=(0,t.useState)(1),o=(e,s)=>{n((t=>t.map((t=>t.id===a?{...t,messages:[...t.messages,{text:e,sender:s||"You"}]}:t))))},i=(e,s)=>{null!=s&&null!=s.target&&(s.target.disabled=e,s.target.innerText=1==e?"Processing":"Send")},c=s.find((e=>e.id===a));return(0,l.jsx)("div",{id:"chat",children:c&&(0,l.jsx)(b,{conversation:c,onSendMessage:o,onSendMessageComponent:(e,s)=>{i(!1,s),e?e.forEach((e=>{o("<div> <hr/> </div>"," "),o(e.content,e.id)})):o("Not information found","Code Assistant")},onInitConversation:()=>{n(e)},onClicLockSendButton:i})})},N=a().lazy((()=>new Promise((e=>setTimeout(e,1))).then((()=>n.e(490).then(n.bind(n,490)))))),I=()=>(0,l.jsxs)(t.Suspense,{fallback:(0,l.jsx)(u,{}),children:[(0,l.jsx)(N,{}),(0,l.jsx)(k,{}),(0,l.jsx)(g,{}),(0,l.jsx)(v,{}),(0,l.jsx)(d,{})]}),S=()=>{const e=(e,s)=>{null!=e&&e.preventDefault();const t=document.getElementById(s);if(t){t.scrollIntoView({behavior:"smooth"});const e=t.offsetTop,s=window.scrollY,n=e-s,a=2e3;let r=null;const o=e=>{null===r&&(r=e);const t=e-r,c=i(t,s,n,a);window.scrollTo(0,c),t<a&&requestAnimationFrame(o)},i=(e,s,t,n)=>(e/=n/2)<1?t/2*e*e+s:-t/2*(--e*(e-2)-1)+s;requestAnimationFrame(o)}};return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"nav nave-menu-assistant",children:[(0,l.jsx)("input",{className:"nav-input",type:"checkbox"}),(0,l.jsx)("span",{className:"first-span"}),(0,l.jsx)("span",{}),(0,l.jsxs)("div",{className:"menu",children:[(0,l.jsx)("li",{onClick:s=>e(s,"home"),children:(0,l.jsx)(c.Link,{to:"#home",children:"Home"})}),(0,l.jsx)("li",{onClick:s=>e(s,"chat"),children:(0,l.jsx)(c.Link,{to:"#chat",children:"Code Assistant"})}),(0,l.jsx)("li",{onClick:s=>e(s,"logs"),children:(0,l.jsx)(c.Link,{to:"#logs",children:"Logs"})}),(0,l.jsx)("li",{onClick:s=>e(s,"token"),children:(0,l.jsx)(c.Link,{to:"#token",children:"Get Token"})}),(0,l.jsx)("li",{onClick:s=>e(s,"about"),children:(0,l.jsx)(c.Link,{to:"#about",children:"About"})})]})]}),(0,l.jsxs)(c.Routes,{children:[(0,l.jsx)(c.Route,{path:"/",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home/about",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home/chatBoard",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home/logs",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home/token",element:(0,l.jsx)(I,{})}),(0,l.jsx)(c.Route,{path:"/home/feedback",element:(0,l.jsx)(I,{})})]}),(0,l.jsx)("footer",{className:"footer-assistant",children:(0,l.jsx)("p",{children:"© 2024 Java Code Assistant. All rights reserved. Any feedback to padillar001@gannon.edu"})})]})};var R=n(84),C=n.n(R),A=n(375),w=n.n(A),q=n(239),L=n.n(q),z=n(18),M=n.n(z);const B=require("body-parser");var O=n.n(B);const T=s()();T.use(s().static("public")),T.use(O().json()),T.get("*/home/*",((e,s)=>{const t=o().renderToString((0,l.jsx)(i.StaticRouter,{location:e.url,children:(0,l.jsx)(S,{})}));s.send(`\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <title>Code Assistant AI</title>\n    </head>\n    <body>\n      <div id="root">${t}</div>\n      <script src="/bundle.js"><\/script>\n    </body>\n  </html>\n`)})),T.post("/api/recipes",((e,s)=>{!async function(){try{const t=await C().getRecipes(e,s);return s.json(t.data)}catch(e){return e}}()})),T.post("/api/token",((e,s)=>{!async function(){try{const t=await L().getRecipes(e,s);return s.json(t.data)}catch(e){return e}}()})),T.post("/api/logs",((e,s)=>{!async function(){try{const t=await w().getRecipes(e,s);return s.json(t.data)}catch(e){return e}}()})),T.post("/api/feedback",((e,s)=>{!async function(){try{const t=await M().getRecipes(e,s);return s.json(t.data)}catch(e){return e}}()})),T.listen(3002,(()=>{console.log("App is running on http://localhost:3002")}))})()})();