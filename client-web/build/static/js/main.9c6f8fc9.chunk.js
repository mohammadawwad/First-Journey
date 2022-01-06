(this["webpackJsonpclient-web"]=this["webpackJsonpclient-web"]||[]).push([[0],{152:function(e,t,a){e.exports=a(222)},221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(15),i=a(43),s=a(128),u=a(83),p=a(7),m=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===a||void 0===a?void 0:a.data))),Object(p.a)(Object(p.a)({},t),{},{authData:null===a||void 0===a?void 0:a.data});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},t),{},{authData:null});default:return e}},d=Object(i.c)({postsReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case"FETCH_ALL":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case"FETCH_BY_SEARCH":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data});case"FETCH_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload.post});case"LIKE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"CREATE":return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"UPDATE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},authReducers:m}),g=a(257),f=a(26),b=a(14),v=a(144),h=a(246),E=a(227),y=a(247),x=a(75),O=a.n(x),j=a(19),w=a(244),C=Object(w.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(j.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(j.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(j.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),N=a(12),k=a.n(N),S=a(24),I=a(132),T=a.n(I).a.create({baseURL:"https://first-journey.herokuapp.com"});T.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var L=function(e){return T.get("/posts/".concat(e))},A=function(e){return T.get("/posts?page=".concat(e))},D=function(e){return T.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},_=function(e,t){return T.patch("/posts/".concat(e),t)},P=function(e){return T.delete("/posts/".concat(e))},R=function(e){return T.patch("/posts/".concat(e,"/likePost"))},B=function(e){return T.post("/user/signin",e)},F=function(e){return T.post("/user/signup",e)},H=function(e){return function(){var t=Object(S.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,D(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_SEARCH",payload:{data:r}}),a({type:"END_LOADING"}),console.log(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},G=a(81),U=a.n(G),W=function(){var e=Object(l.c)((function(e){return e.postsReducers})),t=e.post,a=e.posts,o=e.isLoading,c=Object(l.b)(),i=Object(b.g)(),s=C(),u=Object(b.i)().id,p=new U.a;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(S.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,L(e);case 4:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(u))}),[u]),Object(n.useEffect)((function(){t&&(console.log("POST EXISTS"),c(H({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")})))}),[t]),!t)return console.log("No Posts"),null;if(o)return r.a.createElement(v.a,{elevation:6,className:s.loadingPaper},r.a.createElement(h.a,{size:"7em"}));var m=a.filter((function(e){return e._id!=t._id}));return r.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",{className:s.card},r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{variant:"h3",component:"h2"},p.clean(t.title)),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")}))),r.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},p.clean(t.message)),r.a.createElement(E.a,{variant:"h6"},"Created by: ",t.name),r.a.createElement(E.a,{variant:"body1"},O()(t.createdAt).fromNow()),r.a.createElement(y.a,{style:{margin:"20px 0"}}),r.a.createElement(E.a,{variant:"body1"},r.a.createElement("strong",null,"Realtime Chat - coming soon!")),r.a.createElement(y.a,{style:{margin:"20px 0"}}),r.a.createElement(E.a,{variant:"body1"},r.a.createElement("strong",null,"Comments - coming soon!")),r.a.createElement(y.a,{style:{margin:"20px 0"}})),r.a.createElement("div",{className:s.imageSection},r.a.createElement("img",{className:s.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title}))),m.length&&r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{gutterButtom:!0,variant:"h5"},"You Might Also Like: "),r.a.createElement(y.a,null),r.a.createElement("div",{className:s.recomendedPosts},m.map((function(e){var t=e.title,a=e.message,n=e.name,o=e.likes,c=e.selectedFile,l=e._id;return r.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){i.push("/posts/".concat(e))}(l)},key:l},r.a.createElement(E.a,{gutterButtom:!0,variant:"h6"},p.clean(t)),r.a.createElement(E.a,{gutterButtom:!0,variant:"subtitle2"},n),r.a.createElement(E.a,{gutterButtom:!0,variant:"subtitle2"},p.clean(a)),r.a.createElement(E.a,{gutterButtom:!0,variant:"subtitle1"},"Like: ",o.length),r.a.createElement("img",{src:c,width:"200px"}))})))))},z=a(30),J=a(249),M=a(250),Y=a(263),q=a(251),K=a(248),Q=Object(w.a)((function(e){return{appBar:Object(j.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(j.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(j.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(K.a[500]),backgroundColor:K.a[500]}}})),V=a(133),X=function(){var e=Q(),t=Object(l.b)(),a=Object(b.g)(),o=Object(b.h)(),c=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(z.a)(c,2),s=i[0],u=i[1];console.log(s),Object(n.useEffect)((function(){var e=null===s||void 0===s?void 0:s.token;e&&(1e3*Object(V.a)(e).exp<(new Date).getTime()&&p());u(JSON.parse(localStorage.getItem("profile")))}),[o]);var p=function(){t({type:"LOGOUT"}),a.push("/"),u(null)};return r.a.createElement(J.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:e.brandContainer},r.a.createElement(E.a,{className:e.heading,component:f.b,to:"/",variant:"h2",align:"center"},"First Journey")),r.a.createElement(M.a,{className:e.toolBar},s?r.a.createElement("div",{className:e.profile},r.a.createElement(Y.a,{className:e.purple,alt:s.result.name,src:s.result.imageUrl},s.result.name.charAt(0)),r.a.createElement(E.a,{className:e.userName,variant:"h6"},s.result.name),r.a.createElement(q.a,{variant:"contained",className:e.logout,color:"secondary",onClick:p},"Logout")):r.a.createElement(q.a,{component:f.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},Z=a(262),$=a(256),ee=a(260),te=Object(w.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),ae=a(252),ne=a(146),re=a(253),oe=a(254),ce=a(255),le=a(134),ie=a.n(le),se=a(96),ue=a.n(se),pe=a(136),me=a.n(pe),de=a(135),ge=a.n(de),fe=function(e){var t,a,n,o,c=e.post,i=e.setCurrentId,s=te(),u=Object(l.b)(),p=JSON.parse(localStorage.getItem("profile")),m=new U.a,d=Object(b.g)(),g=function(){return c.likes.length>0?c.likes.find((function(e){var t,a;return e===((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(ae.a,{className:s.card},r.a.createElement(ne.a,{className:s.cardAction,onClick:function(){d.push("/posts/".concat(c._id))}},r.a.createElement(re.a,{className:s.media,image:c.selectedFile,title:c.title}),r.a.createElement("div",{className:s.overlay},r.a.createElement(E.a,{varient:"h6"},c.name),r.a.createElement(E.a,{varient:"body2"},O()(c.createdAt).fromNow())),((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement("div",{className:s.overlay2,name:"edit"},r.a.createElement(q.a,{onClick:function(e){e.stopPropagation(),i(c._id)},style:{color:"white"},size:"small"},r.a.createElement(ge.a,{fontSize:"default"}))),r.a.createElement("div",{className:s.details},r.a.createElement(E.a,{varient:"body2",color:"textSecondary"},c.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:s.title,varient:"h5",gutterBottom:!0},m.clean(c.title)),r.a.createElement(oe.a,null,r.a.createElement(E.a,{varient:"body2",color:"textSecondary",component:"p"},m.clean(c.message)))),r.a.createElement(ce.a,{className:s.cardActions},r.a.createElement(q.a,{size:"small",color:"primary",disabled:!(null===p||void 0===p?void 0:p.result),onClick:function(){var e;u((e=c._id,function(){var t=Object(S.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}},r.a.createElement(g,null)),((null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===p||void 0===p||null===(o=p.result)||void 0===o?void 0:o._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement(q.a,{size:"small",color:"primary",onClick:function(){var e;u((e=c._id,function(){var t=Object(S.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))}},r.a.createElement(me.a,{fontSize:"small"}),"Delete")))},be=Object(w.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(K.a[500]),backgroundColor:K.a[500]}},Object(j.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(j.a)(t,"actionDiv",{textAlign:"center"}),t})),ve=function(e){var t=e.setCurrentId,a=be(),n=Object(l.c)((function(e){return e.postsReducers})),o=n.posts,c=n.isLoading;return console.log("POSTS: "+o),o.length||c?c?r.a.createElement(h.a,null):r.a.createElement($.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},o.map((function(e){return r.a.createElement($.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(fe,{post:e,setCurrentId:t,elevation:6}))}))):"No Posts, would you like to be the first \ud83d\ude03"},he=Object(w.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Ee=a(137),ye=a.n(Ee),xe=function(e){var t,a=e.currentId,o=e.setCurrentId,c=he(),i=JSON.parse(localStorage.getItem("profile")),s=Object(b.g)(),u=Object(l.b)(),m=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),d=Object(z.a)(m,2),g=d[0],f=d[1],h=Object(l.c)((function(e){return a?e.postsReducers.posts.find((function(e){return e._id===a})):null}));Object(n.useEffect)((function(){(null===h||void 0===h?void 0:h.title)||y(),h&&f(h)}),[h]);var y=function(){o(0),f({title:"",message:"",tags:[],selectedFile:""})};return(null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.name)?r.a.createElement(v.a,{className:c.paper,elevation:6},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(c.root," ").concat(c.form),onSubmit:function(e){var t,n,r,o;(e.preventDefault(),0==a)?(u(function(e,t){return function(){var a=Object(S.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"START_LOADING"}),a.next=4,c=e,T.post("/posts",c);case 4:r=a.sent,o=r.data,t.push("/posts/".concat(o._id)),n({type:"CREATE",payload:o}),n({type:"END_LOADING"}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}var c}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(Object(p.a)(Object(p.a)({},g),{},{name:null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.name}),s)),y()):(u((r=a,o=Object(p.a)(Object(p.a)({},g),{},{name:null===i||void 0===i||null===(n=i.result)||void 0===n?void 0:n.name}),function(){var e=Object(S.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(r,o);case 3:a=e.sent,n=a.data,t({type:"UPDATE",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),y())}},r.a.createElement(E.a,{variant:"h6"},a?"Editing ":"Creating ","a Journey"),r.a.createElement(ee.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:g.title,onChange:function(e){return f(Object(p.a)(Object(p.a)({},g),{},{title:e.target.value}))}}),r.a.createElement(ee.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:g.message,onChange:function(e){return f(Object(p.a)(Object(p.a)({},g),{},{message:e.target.value}))}}),r.a.createElement(ee.a,{name:"tags",variant:"outlined",label:"Tags ','",fullWidth:!0,value:g.tags,onChange:function(e){return f(Object(p.a)(Object(p.a)({},g),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:c.fileInput},r.a.createElement(ye.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return f(Object(p.a)(Object(p.a)({},g),{},{selectedFile:t}))}})),r.a.createElement(q.a,{className:c.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(q.a,{variant:"contained",color:"secondary",size:"small",onClick:y,fullWidth:!0},"Clear"))):r.a.createElement(v.a,{className:c.paper},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Login or Sign Up to create a post, like, and comment."))},Oe=Object(w.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(j.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}})),je=a(264),we=a(261),Ce=Object(w.a)((function(){return{ul:{justifyContent:"space-around"}}})),Ne=function(e){var t=e.page,a=Ce(),o=Object(l.b)(),c=Object(l.c)((function(e){return e.postsReducers})).numberOfPages;return Object(n.useEffect)((function(){t&&o(function(e){return function(){var t=Object(S.a)(k.a.mark((function t(a){var n,r,o,c,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,A(e);case 4:n=t.sent,r=n.data,o=r.data,c=r.currentPage,l=r.numberOfPages,a({type:"FETCH_ALL",payload:{data:o,currentPage:c,numberOfPages:l}}),a({type:"END_LOADING"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t]),r.a.createElement(je.a,{classes:{ul:a.ul},count:c,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return r.a.createElement(we.a,Object.assign({},e,{component:f.b,to:"/posts?page=".concat(e.page)}))}})},ke=a(138),Se=a.n(ke),Ie=function(){var e=Oe(),t=Object(l.b)(),a=new URLSearchParams(Object(b.h)().search),o=Object(b.g)(),c=a.get("page")||1,i=a.get("searchQuery"),s=Object(n.useState)(0),p=Object(z.a)(s,2),m=p[0],d=p[1],f=Object(n.useState)(""),h=Object(z.a)(f,2),E=h[0],y=h[1],x=Object(n.useState)([]),O=Object(z.a)(x,2),w=O[0],C=O[1],N=function(){E.trim()||w?(t(H({search:E,tags:w.join(",")})),o.push("/posts/search?searchQuery=".concat(E||"none","&tags=").concat(w.join(",")))):o.push("/")};return r.a.createElement(Z.a,{in:!0},r.a.createElement(g.a,{maxWidth:"xl"},r.a.createElement($.a,Object(j.a)({className:e.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3},"className",e.gridContainer),r.a.createElement($.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(ve,{setCurrentId:d})),r.a.createElement($.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(J.a,{className:e.appBarSearch,position:"static",color:"inherit"},r.a.createElement(ee.a,{name:"search",variant:"outlined",label:"Search Journies",fullWidth:!0,value:E,onKeyPress:function(e){13==e.keyCode&&N()},onChange:function(e){return y(e.target.value)}}),r.a.createElement(Se.a,{style:{margin:"10px 0"},value:w,onAdd:function(e){C([].concat(Object(u.a)(w),[e]))},onDelete:function(e){C(w.filter((function(t){return t!=e})))},label:"Search Tags",variant:"outlined"}),r.a.createElement(q.a,{onClick:N,className:e.searchButton,variant:"contained",color:"primary"},"Search Posts")),r.a.createElement(xe,{currentId:m,setCurrentId:d}),!i&&!w.length&&r.a.createElement(v.a,{elevation:6,className:e.pagination},r.a.createElement(Ne,{page:c}))))))},Te=a(142),Le=a.n(Te),Ae=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),De=a(258),_e=a(259),Pe=a(139),Re=a.n(Pe),Be=a(140),Fe=a.n(Be),He=function(e){var t=e.half,a=e.name,n=e.handleChange,o=e.label,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement($.a,{item:!0,xs:12,sm:t?6:12},r.a.createElement(ee.a,{name:a,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:o,autoFocus:c,type:l,InputProps:"password"===a?{endAdornment:r.a.createElement(De.a,{position:"end"},r.a.createElement(_e.a,{onClick:i},"password"===l?r.a.createElement(Re.a,null):r.a.createElement(Fe.a,null)))}:null}))},Ge=a(141),Ue=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},We={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},ze=function(){var e=Ae(),t=Object(n.useState)(!1),a=Object(z.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(z.a)(i,2),u=s[0],m=s[1],d=Object(l.b)(),f=Object(b.g)(),h=Object(n.useState)(We),y=Object(z.a)(h,2),x=y[0],O=y[1],w=function(e){O(Object(p.a)(Object(p.a)({},x),{},Object(j.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(S.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Google Sign In Successful"),e.next=3,console.log(t);case 3:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{d({type:"AUTH",data:{result:a,token:n}}),f.push("/")}catch(r){console.log(r)}case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,{className:e.paper,elevation:3},r.a.createElement(Y.a,{className:e.avatar},r.a.createElement(Le.a,null)),r.a.createElement(E.a,{variant:"h5"},o?"Sign Up":"Sign In"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),d(o?function(e,t){return function(){var a=Object(S.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(x,f):function(e,t){return function(){var a=Object(S.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(x,f))}},r.a.createElement($.a,{container:!0,spacing:2},o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(He,{name:"firstName",label:"First Name",handleChange:w,autoFocus:!0,half:!0}),r.a.createElement(He,{name:"lastName",label:"Last Name",handleChange:w,half:!0})),r.a.createElement(He,{name:"email",label:"Email Adress",handleChange:w,type:"email"}),r.a.createElement(He,{name:"password",label:"Password",handleChange:w,type:u?"text":"password",handleShowPassword:function(){m((function(e){return!e}))}}),o&&r.a.createElement(He,{name:"confirmPassword",label:"Confirm Password",handleChange:w,type:"password"})),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},o?"Sign Up":"Sign In"),r.a.createElement(Ge.GoogleLogin,{clientId:"47800095300-ltbv54jmv6mqfd8tpe2909c5ih209a1o.apps.googleusercontent.com",render:function(t){return r.a.createElement(q.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:r.a.createElement(Ue,null),variant:"contained"},"Google Sign In")},onSuccess:C,onFailure:function(e){console.log("Google Sign In Failed"),console.log(e)},cookiePolicy:"single_host_origin"}),r.a.createElement($.a,{contaienr:!0,justify:"flex-end"},r.a.createElement($.a,{item:!0},r.a.createElement(q.a,{onClick:function(){c((function(e){return!e})),m(!1)}},o?"Have an account? Sign In":"Don't have an account? Sign Up Now"))))))},Je=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(f.a,null,r.a.createElement(g.a,{maxWidth:"xl"},r.a.createElement(X,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,{to:"/posts"})}}),r.a.createElement(b.b,{path:"/posts",exact:!0,component:Ie}),r.a.createElement(b.b,{path:"/posts/search",exact:!0,component:Ie}),r.a.createElement(b.b,{path:"/posts/:id",exact:!0,component:W}),r.a.createElement(b.b,{path:"/auth",exact:!0,component:function(){return e?r.a.createElement(b.a,{to:"/posts"}):r.a.createElement(ze,null)}}))))},Me=(a(221),Object(i.e)(d,{},Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(l.a,{store:Me},r.a.createElement(Je,null)),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.9c6f8fc9.chunk.js.map