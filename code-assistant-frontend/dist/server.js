(()=>{var e,t={18:(e,t,n)=>{const o=n(938);n(183),e.exports={getRecipes:async(e,t)=>o.post("http://localhost:3030/api/feedback",{feedback:e.body.feedback,rate:e.body.rate},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},375:(e,t,n)=>{const o=n(938);n(183),e.exports={getRecipes:async(e,t)=>o.post("http://localhost:3030/api/logs",{code:e.body.code},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},84:(e,t,n)=>{const o=n(938);n(183),e.exports={getRecipes:async(e,t)=>o.post("http://localhost:3030/api/messages",{code:e.body.code,key:e.body.key},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},239:(e,t,n)=>{const o=n(938);n(183),e.exports={getRecipes:async(e,t)=>o.post("http://localhost:3030/api/token",{code:e.body.code,key:e.body.key},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},306:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(601),i=n.n(o),r=n(314),s=n.n(r)()(i());s.push([e.id,"",""]);const a=s},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],d=r[l]||0,h="".concat(l," ").concat(d);r[l]=d+1;var p=n(h),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var u=i(m,o);o.byIndex=a,t.splice(a,0,{identifier:h,updater:u,references:1})}s.push(h)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var c=o(e,i),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},938:e=>{"use strict";e.exports=require("axios")},183:e=>{"use strict";e.exports=require("bluebird")},15:e=>{"use strict";e.exports=require("react")},35:e=>{"use strict";e.exports=require("react-quill")},732:e=>{"use strict";e.exports=require("react/jsx-runtime")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={id:e,exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".server.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0,e={792:1},o.f.require=(t,n)=>{e[t]||(t=>{var n=t.modules,i=t.ids,r=t.runtime;for(var s in n)o.o(n,s)&&(o.m[s]=n[s]);r&&r(o);for(var a=0;a<i.length;a++)e[i[a]]=1})(require("./"+o.u(t)))},(()=>{"use strict";const e=require("express");var t=o.n(e),n=o(15),i=o.n(n);const r=require("react-dom/server");var s=o.n(r);const a=require("react-router-dom/server"),c=require("react-router-dom");var l=o(732);const d={container:{fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"#333",margin:"0",padding:"0",textAlign:"center"},header:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0"},main:{padding:"20px"},infoSection:{marginBottom:"30px"},missionSection:{marginBottom:"30px"},contactSection:{marginBottom:"30px"},email:{fontSize:"18px",color:"#333"},footer:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0",position:"absolute",width:"100%",bottom:"0"}},h=()=>(0,l.jsxs)("div",{style:d.container,children:[(0,l.jsx)("header",{style:d.header,children:(0,l.jsx)("h1",{children:"About Us"})}),(0,l.jsxs)("main",{style:d.main,children:[(0,l.jsxs)("section",{style:d.infoSection,children:[(0,l.jsx)("h2",{children:"Who We Are"}),(0,l.jsx)("p",{children:"We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time."})]}),(0,l.jsxs)("section",{style:d.missionSection,children:[(0,l.jsx)("h3",{children:"Our Mission"}),(0,l.jsx)("p",{children:"Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks."})]}),(0,l.jsxs)("section",{style:d.contactSection,children:[(0,l.jsx)("h3",{children:"Contact Us"}),(0,l.jsx)("p",{children:"We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:"}),(0,l.jsxs)("p",{style:d.email,children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:diegoarpar@gmail.com",children:"diegoarpar@gmail.com"}),(0,l.jsx)("strong",{children:"DIEGO ARMANDO PADILLA RAMIREZ"})]})]})]}),(0,l.jsx)("footer",{style:d.footer,children:(0,l.jsx)("p",{children:"© 2024 Java Code Assistant. All rights reserved."})})]}),p={container:{maxWidth:"120rem",padding:"3.2rem",margin:"50px auto",width:"800px",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"},heading:{color:"#333333",letterSpacing:"0.1rem"},list:{marginLeft:"20px",listStyle:"none",display:"flex",flexDirection:"column"},list_item:{color:"#333333",letterSpacing:"1.2px",fontSize:"1.6rem",alignItems:"center",padding:"0.2rem",borderRadius:"0.3rem"}},m=()=>(0,l.jsx)("div",{style:p.container,children:(0,l.jsx)("div",{children:(0,l.jsx)("h1",{style:p.heading,children:" Loading the page "})})}),u=i().lazy((()=>new Promise((e=>setTimeout(e,2e3))).then((()=>o.e(490).then(o.bind(o,490)))))),x=()=>(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(m,{}),children:(0,l.jsx)(u,{})});var g=o(938),f=o.n(g);const v=i().lazy((()=>new Promise((e=>setTimeout(e,2e3))).then((()=>o.e(399).then(o.bind(o,399)))))),y=e=>{let{setMessage:t,message:o}=e;return(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)("span",{children:"Loading... "}),children:(0,l.jsx)(v,{setMessage:t,message:o})})},j=e=>{let{conversation:t,onSendMessage:o,onSendMessageComponent:i,onInitConversation:r,onClicLockSendButton:s}=e;const[a,c]=(0,n.useState)(""),[d,h]=(0,n.useState)("");return(0,l.jsxs)("div",{style:{padding:"20px",flexGrow:1},children:[(0,l.jsx)("link",{rel:"stylesheet",href:"//cdn.quilljs.com/1.2.6/quill.snow.css"}),(0,l.jsx)("h2",{children:t.name}),(0,l.jsx)("div",{style:{height:"400px",overflowY:"scroll",border:"1px solid black",marginBottom:"10px"},children:t.messages.map(((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("strong",{children:[" "!=e.sender?e.sender+":":""," "]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}})]},t)))}),(0,l.jsx)("div",{children:(0,l.jsx)(y,{message:a,setMessage:c})}),(0,l.jsx)("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{width:"80%",padding:"10px"}}),(0,l.jsx)("button",{onClick:e=>(e=>{s(!0,e),a.trim()&&(o(a),o("Processing your information...","Code Assistant"),h(""),f().post("http://test.miarchivo.com.co:3002/api/recipes",{code:a,key:d},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((t=>(c(""),i(t.data.components,e)))).catch((t=>(console.log(t),o("Ops... try again","Code Assistant"),i([],e)))))})(e),style:{padding:"10px 20px",marginLeft:"10px"},children:"Send"}),(0,l.jsx)("button",{onClick:e=>{r()},style:{padding:"10px 20px",marginLeft:"10px"},children:"Clean"})]})},b=e=>{let{conversations:t,onSelectConversation:n}=e;return(0,l.jsx)("div",{style:{width:"200px",borderRight:"1px solid black"},children:t.map((e=>(0,l.jsx)("div",{onClick:()=>n(e.id),style:{padding:"10px",cursor:"pointer",borderBottom:"1px solid gray"},children:e.name},e.id)))})},A=()=>{const e=[{id:1,name:"Conversation 1",messages:[]},{id:2,name:"Conversation 2",messages:[]}],[t,o]=(0,n.useState)(e),[i,r]=(0,n.useState)(1),s=(e,t)=>{o((n=>n.map((n=>n.id===i?{...n,messages:[...n.messages,{text:e,sender:t||"You"}]}:n))))},a=(e,t)=>{null!=t&&null!=t.target&&(t.target.disabled=e)},c=t.find((e=>e.id===i));return(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)(b,{conversations:t,onSelectConversation:r}),c&&(0,l.jsx)(j,{conversation:c,onSendMessage:s,onSendMessageComponent:(e,t)=>{a(!1,t),e?e.forEach((e=>{s("<div> <hr/> </div>"," "),s(e.content,e.id)})):s("Not information found","Code Assistant")},onInitConversation:()=>{o(e)},onClicLockSendButton:a})]})},S={container:{fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"#333",margin:"0",padding:"0",textAlign:"center"},header:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0"},main:{padding:"20px"},infoSection:{marginBottom:"30px"},missionSection:{marginBottom:"30px"},contactSection:{marginBottom:"30px"},email:{fontSize:"18px",color:"#333"},footer:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0",position:"absolute",width:"100%",bottom:"0"}},k=()=>(0,l.jsxs)("div",{style:S.container,children:[(0,l.jsx)("header",{style:S.header,children:(0,l.jsx)("h1",{children:"Feedback"})}),(0,l.jsxs)("main",{style:S.main,children:[(0,l.jsxs)("section",{style:S.infoSection,children:[(0,l.jsx)("h2",{children:"Who We Are"}),(0,l.jsx)("p",{children:"We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time."})]}),(0,l.jsxs)("section",{style:S.missionSection,children:[(0,l.jsx)("h3",{children:"Our Mission"}),(0,l.jsx)("p",{children:"Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks."})]}),(0,l.jsxs)("section",{style:S.contactSection,children:[(0,l.jsx)("h3",{children:"Contact Us"}),(0,l.jsx)("p",{children:"We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:"}),(0,l.jsxs)("p",{style:S.email,children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:diegoarpar@gmail.com",children:"diegoarpar@gmail.com"}),(0,l.jsx)("strong",{children:"DIEGO ARMANDO PADILLA RAMIREZ"})]})]})]}),(0,l.jsx)("footer",{style:S.footer,children:(0,l.jsx)("p",{children:"© 2024 Java Code Assistant. All rights reserved."})})]}),C={container:{fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"#333",margin:"0",padding:"0",textAlign:"center"},header:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0"},main:{padding:"20px"},infoSection:{marginBottom:"30px"},missionSection:{marginBottom:"30px"},contactSection:{marginBottom:"30px"},email:{fontSize:"18px",color:"#333"},footer:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0",position:"absolute",width:"100%",bottom:"0"}},w=()=>(0,l.jsxs)("div",{style:C.container,children:[(0,l.jsx)("header",{style:C.header,children:(0,l.jsx)("h1",{children:"Logs"})}),(0,l.jsxs)("main",{style:C.main,children:[(0,l.jsxs)("section",{style:C.infoSection,children:[(0,l.jsx)("h2",{children:"Who We Are"}),(0,l.jsx)("p",{children:"We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time."})]}),(0,l.jsxs)("section",{style:C.missionSection,children:[(0,l.jsx)("h3",{children:"Our Mission"}),(0,l.jsx)("p",{children:"Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks."})]}),(0,l.jsxs)("section",{style:C.contactSection,children:[(0,l.jsx)("h3",{children:"Contact Us"}),(0,l.jsx)("p",{children:"We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:"}),(0,l.jsxs)("p",{style:C.email,children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:diegoarpar@gmail.com",children:"diegoarpar@gmail.com"}),(0,l.jsx)("strong",{children:"DIEGO ARMANDO PADILLA RAMIREZ"})]})]})]}),(0,l.jsx)("footer",{style:C.footer,children:(0,l.jsx)("p",{children:"© 2024 Java Code Assistant. All rights reserved."})})]}),I={container:{fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"#333",margin:"0",padding:"0",textAlign:"center"},header:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0"},main:{padding:"20px"},infoSection:{marginBottom:"30px"},missionSection:{marginBottom:"30px"},contactSection:{marginBottom:"30px"},email:{fontSize:"18px",color:"#333"},footer:{backgroundColor:"#4CAF50",color:"white",padding:"10px 0",position:"absolute",width:"100%",bottom:"0"}},R=()=>(0,l.jsxs)("div",{style:I.container,children:[(0,l.jsx)("header",{style:I.header,children:(0,l.jsx)("h1",{children:"Token"})}),(0,l.jsxs)("main",{style:I.main,children:[(0,l.jsxs)("section",{style:I.infoSection,children:[(0,l.jsx)("h2",{children:"Who We Are"}),(0,l.jsx)("p",{children:"We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time."})]}),(0,l.jsxs)("section",{style:I.missionSection,children:[(0,l.jsx)("h3",{children:"Our Mission"}),(0,l.jsx)("p",{children:"Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks."})]}),(0,l.jsxs)("section",{style:I.contactSection,children:[(0,l.jsx)("h3",{children:"Contact Us"}),(0,l.jsx)("p",{children:"We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:"}),(0,l.jsxs)("p",{style:I.email,children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:diegoarpar@gmail.com",children:"diegoarpar@gmail.com"}),(0,l.jsx)("strong",{children:"DIEGO ARMANDO PADILLA RAMIREZ"})]})]})]}),(0,l.jsx)("footer",{style:I.footer,children:(0,l.jsx)("p",{children:"© 2024 Java Code Assistant. All rights reserved."})})]});var M=o(72),O=o.n(M),L=o(825),B=o.n(L),q=o(659),E=o.n(q),z=o(56),T=o.n(z),F=o(540),J=o.n(F),W=o(113),D=o.n(W),P=o(306),_={};_.styleTagTransform=D(),_.setAttributes=T(),_.insert=E().bind(null,"head"),_.domAPI=B(),_.insertStyleElement=J(),O()(P.A,_),P.A&&P.A.locals&&P.A.locals;const N={main_header:{backgroundColor:"white",display:"flex",alignItem:"center",justifyContent:"center",boxShadow:"#4CAF50"},header:{padding:"0.6rem",width:"85rem",display:"flex",alignItem:"center",justifyContent:"center"},navbar:{display:"flex",alignItem:"center",justifyContent:"center"},nav_link:{textDecoration:"none",color:"white",background:"#4CAF50",fontSize:"1.2rem",padding:"0.3rem 1.6rem",margin:"5px",border:"1px solid white",borderRadius:"0.3rem"}},U=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:N.main_header,children:(0,l.jsx)("div",{style:N.header,children:(0,l.jsxs)("div",{style:N.navbar,children:[(0,l.jsx)(c.Link,{to:"/home/",style:N.nav_link,children:"Home"}),(0,l.jsx)(c.Link,{to:"/home/about",style:N.nav_link,children:"About"}),(0,l.jsx)(c.Link,{to:"/home/chatBoard",style:N.nav_link,children:"ChatBoard"}),(0,l.jsx)(c.Link,{to:"/home/logs",style:N.nav_link,children:"Logs"}),(0,l.jsx)(c.Link,{to:"/home/token",style:N.nav_link,children:"Get Token"})]})})}),(0,l.jsxs)(c.Routes,{children:[(0,l.jsx)(c.Route,{path:"/home",element:(0,l.jsx)(x,{})}),(0,l.jsx)(c.Route,{path:"/home/about",element:(0,l.jsx)(h,{})}),(0,l.jsx)(c.Route,{path:"/home/chatBoard",element:(0,l.jsx)(A,{})}),(0,l.jsx)(c.Route,{path:"/home/logs",element:(0,l.jsx)(w,{})}),(0,l.jsx)(c.Route,{path:"/home/token",element:(0,l.jsx)(R,{})}),(0,l.jsx)(c.Route,{path:"/home/feedback",element:(0,l.jsx)(k,{})})]})]});var H=o(84),G=o.n(H),Z=o(375),Y=o.n(Z),K=o(239),Q=o.n(K),V=o(18),X=o.n(V);const $=require("body-parser");var ee=o.n($);const te=t()();te.use(t().static("public")),te.use(ee().json()),te.get("*/home/*",((e,t)=>{const n=s().renderToString((0,l.jsx)(a.StaticRouter,{location:e.url,children:(0,l.jsx)(U,{})}));t.send('\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <title>SSR React App</title>\n    </head>\n    <body>\n      <div id="root">'.concat(n,'</div>\n      <script src="/bundle.js"><\/script>\n    </body>\n  </html>\n'))})),te.post("/api/recipes",((e,t)=>{!async function(){try{const n=await G().getRecipes(e,t);return t.json(n.data)}catch(e){return e}}()})),te.post("/api/token",((e,t)=>{!async function(){try{const n=await Q().getRecipes(e,t);return t.json(n.data)}catch(e){return e}}()})),te.post("/api/logs",((e,t)=>{!async function(){try{const n=await Y().getRecipes(e,t);return t.json(n.data)}catch(e){return e}}()})),te.post("/api/feedback",((e,t)=>{!async function(){try{const n=await X().getRecipes(e,t);return t.json(n.data)}catch(e){return e}}()})),te.listen(3002,(()=>{console.log("App is running on http://localhost:3002")}))})()})();