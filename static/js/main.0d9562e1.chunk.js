(this["webpackJsonpreact-meme-generator"]=this["webpackJsonpreact-meme-generator"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),o=(n(11),n(4)),i=n.n(o),u=n(6),j=n(2),l=(n(13),n(0));function b(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Upload your own image"}),n&&Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{alt:"not found",width:"250px",src:URL.createObjectURL(n)}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){return r(null)},children:"Remove"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"file",name:"myImage",onChange:function(e){console.log(e.target.files[0]),r(e.target.files[0])}})]})}var m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("https://i.imgflip.com/1bij.jpg"),s=Object(j.a)(a,2),o=s[0],m=s[1],p=Object(c.useState)(""),h=Object(j.a)(p,2),O=h[0],f=h[1],x=Object(c.useState)(""),d=Object(j.a)(x,2),g=d[0],v=d[1];Object(c.useEffect)((function(){k()}),[]);var k=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://api.imgflip.com/get_memes",e.prev=2,e.next=5,fetch("https://api.imgflip.com/get_memes",{cache:"no-cache"});case 5:if(!(n=e.sent).ok){e.next=13;break}return e.next=9,n.json();case 9:t=e.sent,c=t.data.memes.filter((function(e){return 2===e.box_count})),r(c),console.log(c);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"React Meme Generator"}),Object(l.jsxs)("div",{className:"inputArea",children:[Object(l.jsx)("input",{type:"text",value:O,onChange:function(e){f(e.target.value)},placeholder:"Enter top text"}),Object(l.jsx)("input",{type:"text",value:g,onChange:function(e){v(e.target.value)},placeholder:"Enter bottom text"}),Object(l.jsx)("button",{onClick:function(){f(""),v(""),m(n[Math.floor(Math.random()*n.length)].url)},children:"Random picture"})]}),Object(l.jsxs)("div",{className:"imageArea",children:[Object(l.jsx)("img",{src:o,alt:"meme"}),Object(l.jsx)("h2",{className:"top",children:O}),Object(l.jsx)("h2",{className:"bottom",children:g})]}),Object(l.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.0d9562e1.chunk.js.map