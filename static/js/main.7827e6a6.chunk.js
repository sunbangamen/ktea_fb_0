(this.webpackJsonpktea_fb_0=this.webpackJsonpktea_fb_0||[]).push([[0],{281:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),i=a(20),s=a(32),l=a(83),u=a(27),j=a(71);a(160),a(283);j.a.initializeApp({apiKey:"AIzaSyBx_jUBKinOZRJ1jcUjItFq8BRqtKvM8ZA",authDomain:"ktea-test-web-one.firebaseapp.com",projectId:"ktea-test-web-one",storageBucket:"ktea-test-web-one.appspot.com",messagingSenderId:"1063484290596",appId:"1:1063484290596:web:49df0420019ae17a6f4ab1",databaseURL:"https://ktea-test-web-one-default-rtdb.firebaseio.com"});j.a;var d=j.a.auth(),b=j.a.database(),h=a(1),p=a.n(h),m=a(4),O=b.ref("/chart"),f=function(e){return b.ref("chart").push({place:e.place,value:e.value,timestamp:e.timestamp,uid:e.uid})},x=function(){return O},g=a(8),v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),s=(o[0],o[1]),l=function(){var e=function(){var e=[];return b.ref("chat").on("value",(function(t){t.forEach((function(t){e.push(t.val())}))})),e}();s(e)},u=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,n={message:a,timestamp:Date.now(),uid:d.currentUser.uid},b.ref("chats").push({message:n.message,timestamp:n.timestamp,uid:n.uid});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}var n}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){try{b.ref("chats").on("child_added",l),b.ref("chats").on("child_changed",l),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"auto"})}catch(e){console.log(e)}}),[]),Object(g.jsxs)("div",{className:"chat-container",children:[Object(g.jsx)("div",{className:"chat-top",children:"\ud5e4\ub354"}),Object(g.jsxs)("div",{className:"chat-middle",children:[Object(g.jsxs)("li",{className:"chat-bubble send",children:[Object(g.jsx)("p",{children:"\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~ \ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~ \ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~"}),Object(g.jsx)("span",{children:"13:30PM"})]}),Object(g.jsxs)("li",{className:"chat-bubble receive",children:[Object(g.jsx)("p",{children:"\ubc29\uac00\ubc29\uac00!!"}),Object(g.jsx)("span",{children:"13:31PM"})]})]}),Object(g.jsx)("div",{className:"chat-bottom",children:Object(g.jsxs)("form",{onSubmit:u,children:[Object(g.jsx)("input",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",value:a,onChange:function(e){c(e.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"\uc804\uc1a1"})]})})]})},w=a(92),y=["component","authenticated"];var C=function(e){var t=e.component,a=e.authenticated,n=Object(w.a)(e,y);return Object(g.jsx)(u.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return!1===a?Object(g.jsx)(t,Object(s.a)({},e)):Object(g.jsx)(u.a,{to:"/chart"})}}))},k=["component","authenticated"];var S=function(e){var t=e.component,a=e.authenticated,n=Object(w.a)(e,k);return Object(g.jsx)(u.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return!0===a?Object(g.jsx)(t,Object(s.a)({},e)):Object(g.jsx)(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},N=a(22),E=a(91),W=function(e,t){return d.createUserWithEmailAndPassword(e,t)},D=function(e,t){return d.signInWithEmailAndPassword(e,t)},F=function(){return d.signOut()},_=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),s=o[0],l=o[1],u=Object(n.useState)([]),j=Object(i.a)(u,2),b=j[0],h=j[1],O=Object(n.useState)(!1),v=Object(i.a)(O,2),w=v[0],y=v[1],C=Object(n.useState)(!1),k=Object(i.a)(C,2),S=k[0],W=k[1],D={labels:["5","10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100"],datasets:[{label:"# sensor",data:s,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"},{label:"# sensor1",data:b,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]},_=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,f({place:a,value:0,timestamp:Date.now(),uid:d.currentUser.uid});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x().on("child_changed",(function(e){l((function(t){return Object(N.a)(t.concat(Math.floor(e.val().value)))})),console.log("change : ",e.val().value)})),x().on("child_changed",(function(e){h((function(t){return Object(N.a)(t.concat(Math.floor(e.val().value1)))})),console.log("change1 : ",e.val().value1)}))}),[]),console.log("loaded : ",w);var q=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length};console.log("average \ucd1d\ubc30\uc5f4 : ",s),console.log("average1 \ucd1d\ubc30\uc5f4 : ",b),console.log("\ud3c9\uade0\uac12 : ",q(s)),console.log("\ud3c9\uade0\uac12 : ",q(b));var A=q(s)+5,I=q(s)-5,T=q(b)+5,U=q(b)-5,P=s[s.length-1],R=b[b.length-1],B="sensor",M="sensor1",L=function(e){W(!0),alert("".concat(e,"\uc704\uce58\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))};I>P?S?console.log("\ubb38\uc81c\ubc1c\uc0dd"):L(B):A<P?(console.log("\ubb38\uc81c \ubc1c\uc0dd"),S?console.log("\ubb38\uc81c\ubc1c\uc0dd"):L(B)):console.log("\uc815\uc0c1\uce21\uc815"),U>R?S?console.log("\ubb38\uc81c\ubc1c\uc0dd"):L(M):T<R?(console.log("\ubb38\uc81c \ubc1c\uc0dd"),S?console.log("\ubb38\uc81c\ubc1c\uc0dd"):L(M)):console.log("\uc815\uc0c1\uce21\uc815");return s[19]&&l((function(e){return Object(N.a)(e.slice(18))})),b[19]&&h((function(e){return Object(N.a)(e.slice(18))})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("button",{onClick:F,children:"\ub85c\uadf8\uc544\uc6c3"}),Object(g.jsxs)("form",{onSubmit:_,children:[Object(g.jsx)("input",{placeholder:"\ud604\uc7a5\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.",value:a,onChange:function(e){c(e.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"\uc804\uc1a1"})]}),Object(g.jsx)("h1",{className:"title",children:"Line Chart"})]}),w?Object(g.jsx)("button",{onClick:function(){y(!1),l([]),h([])},children:"\ucd08\uae30\ud654"}):Object(g.jsx)("button",{onClick:function(){y(!0),W(!1),l(s.filter((function(e){return e===s}))),h(b.filter((function(e){return e===b})))},children:"\uce21\uc815\uc2dc\uc791"}),Object(g.jsx)(E.a,{data:D,options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},width:100,height:50})]})},q=c.a.memo(_),A=a(323),I=a(322),T=a(318),U=a(320),P=a(315),R=a(319),B=a(321),M=a(90),L=a.n(M),G=a(284),J=a(316),K=a(317);function Z(){return Object(g.jsxs)(G.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(P.a,{color:"inherit",href:"#",children:"(\uc0ac)\uc548\uc804\uc7ac\ud574\ud658\uacbd\ub300\ucc45\ubcf8\ubd80"})," ",(new Date).getFullYear(),"."]})}var z=Object(J.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function V(){var e=z(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1],j=function(e){var t=e.target.name;"email"===t?r(e.target.value):"password"===t&&u(e.target.value)},d=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===c||""===l){e.next=10;break}return e.prev=2,e.next=5,D(c,l).then((function(e){return console.log(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(K.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(T.a,{}),Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)(A.a,{className:e.avatar,children:Object(g.jsx)(L.a,{})}),Object(g.jsx)(G.a,{component:"h1",variant:"h5",children:"\uc2e4\uc2dc\uac04 \uad00\uc81c \uc2dc\uc2a4\ud15c"}),Object(g.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:d,children:[Object(g.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:j}),Object(g.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:j}),Object(g.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"\ub85c\uadf8\uc778"}),Object(g.jsx)(R.a,{container:!0,children:Object(g.jsx)(R.a,{item:!0,children:Object(g.jsx)(P.a,{href:"/signup",variant:"body2",children:"\uacc4\uc815\uc774 \uc5c6\uc2b5\ub2c8\uae4c? \ud68c\uc6d0\uac00\uc785"})})})]})]}),Object(g.jsx)(B.a,{mt:8,children:Object(g.jsx)(Z,{})})]})}function Y(){return Object(g.jsxs)(G.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(P.a,{color:"inherit",href:"#",children:"(\uc0ac)\uc548\uc804\uc7ac\ud574\ud658\uacbd\ub300\ucc45\ubcf8\ubd80"})," ",(new Date).getFullYear(),"."]})}var H=Object(J.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Q(){var e=H(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1],j=function(e){var t=e.target.name;"email"===t?r(e.target.value):"password"===t&&u(e.target.value)},d=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===c||""===l){e.next=10;break}return e.prev=2,e.next=5,W(c,l);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(K.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(T.a,{}),Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)(A.a,{className:e.avatar,children:Object(g.jsx)(L.a,{})}),Object(g.jsx)(G.a,{component:"h1",variant:"h5",children:"\ud68c\uc6d0 \uac00\uc785"}),Object(g.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:d,children:[Object(g.jsxs)(R.a,{container:!0,spacing:2,children:[Object(g.jsx)(R.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,name:"company",label:"\ud68c\uc0ac\uba85",id:"company",autoComplete:"company"})}),Object(g.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"\uc774\ub984",name:"lastName",autoComplete:"lname"})}),Object(g.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"phone",name:"phone",variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"\uc5f0\ub77d\ucc98",autoFocus:!0})}),Object(g.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"phone1",name:"phone1",variant:"outlined",required:!0,fullWidth:!0,id:"phone1",label:"\ud68c\uc0ac\uc5f0\ub77d\ucc98",autoFocus:!0})}),Object(g.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"position",name:"position",variant:"outlined",required:!0,fullWidth:!0,id:"position",label:"\ud574\ub2f9\ubd80\uc11c",autoFocus:!0})}),Object(g.jsx)(R.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:j})}),Object(g.jsx)(R.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:j})})]}),Object(g.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up(\ud68c\uc6d0\uac00\uc785)"}),Object(g.jsx)(R.a,{container:!0,justifyContent:"flex-end",children:Object(g.jsx)(R.a,{item:!0,children:Object(g.jsx)(P.a,{href:"/login",variant:"body2",children:"(\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc2b5\ub2c8\uae4c? \ub85c\uadf8\uc778)"})})})]})]}),Object(g.jsx)(B.a,{mt:5,children:Object(g.jsx)(Y,{})})]})}var X={authenticated:!1,loading:!0};function $(e,t){switch(t.type){case"GET_USER":return Object(s.a)(Object(s.a)({},e),{},{authenticated:t.result});default:return e}}var ee=function(){var e=Object(n.useReducer)($,X),t=Object(i.a)(e,2),a=t[0],c=t[1],r=a.authenticated;return Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){c(e?{type:"GET_USER",result:!0}:{type:"GET_USER",result:!1})}))}),[]),Object(g.jsx)(l.a,{children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(S,{path:"/chat",authenticated:r,component:v}),Object(g.jsx)(S,{path:"/chart",authenticated:r,component:q}),Object(g.jsx)(C,{path:"/signup",authenticated:r,component:Q}),Object(g.jsx)(C,{path:["/","/login"],authenticated:r,component:V})]})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,326)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(ee,{})}),document.getElementById("root")),te()}},[[281,1,2]]]);
//# sourceMappingURL=main.7827e6a6.chunk.js.map