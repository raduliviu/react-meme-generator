(this["webpackJsonpreact-meme-generator"]=this["webpackJsonpreact-meme-generator"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),o=(n(11),n(3)),i=n.n(o),u=n(6),m=n(4),p=(n(13),n(0));var j=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(m.a)(a,2),o=s[0],j=s[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://api.imgflip.com/get_memes",e.prev=2,e.next=5,fetch("https://api.imgflip.com/get_memes",{cache:"no-cache"});case 5:if(!(n=e.sent).ok){e.next=13;break}return e.next=9,n.json();case 9:t=e.sent,c=t.data.memes.filter((function(e){return 2===e.box_count})),r(c),console.log(c);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"React Meme Generator"}),Object(p.jsx)("input",{type:"text"}),Object(p.jsx)("input",{type:"text"}),Object(p.jsx)("button",{onClick:function(){j(n[Math.floor(Math.random()*n.length)])},children:"Random picture"}),Object(p.jsx)("div",{className:"imageArea",children:o&&Object(p.jsx)("img",{src:o.url,alt:"meme"})})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.556b0cf2.chunk.js.map