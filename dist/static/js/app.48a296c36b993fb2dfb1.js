webpackJsonp([1],{"+duS":function(t,e,a){t.exports=a.p+"static/img/airforce-logo.f3207dd.png"},"/078":function(t,e,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("img",{staticClass:"spinner",attrs:{src:a("zNsD"),alt:"loading"}})])}]};var n=a("VU/8")({name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}},s,!1,function(t){a("TI+4")},null,null);e.a=n.exports},"/yRs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=(s=a("8ebl")).default||s,i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("CjMs")},null,null);e.default=o.exports},0:function(t,e){},"1/oy":function(t,e){},"4PFG":function(t,e,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reachout"},[e("section",{staticClass:"reachout-section"},[e("img",{staticClass:"logo",attrs:{src:a("zNsD"),alt:""}}),this._v(" "),e("a",{staticClass:"deploy-button",attrs:{href:"./Chats"}},[this._v("Deploy")])]),this._v(" "),e("div",{staticClass:"go-back-button"},[e("a",{staticClass:"go-back",attrs:{href:"./home"}},[this._v("Go Back")])])])}]};var n=a("VU/8")({name:"Deploy"},s,!1,function(t){a("V292")},null,null);e.a=n.exports},"50pJ":function(t,e,a){"use strict";var s=a("mvHQ"),n=a.n(s),i=a("gRE1"),o=a.n(i),r={name:"SignUpModal",data:function(){return{reachoutURL:"https://reachout-backend.herokuapp.com/user/",form:{username:"",password:"",email:"",first_name:"",last_name:"",image_url:"",military_branch:""}}},methods:{onSubmit:function(t){return this.form.username=this.$route.query.username,t.preventDefault(),console.log(this.form),console.log(o()(this.form)),fetch(this.reachoutURL,{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:n()(this.form)}).then(console.log(this.form)).then(function(t){if(console.log(t),!t.ok){if(t.status>=400||t.status<500)return t.json().then(function(t){throw{errorMessage:t.message}});throw{errorMessage:"Failed to create user profile"}}var e=document.querySelector(".message");return e.textContent="You've successfully signed up for ReachOut!",setTimeout(function(){e.textContent=""},4e3),t.json()})},showModal:function(){this.$refs.myModalRef.show()},hideModal:function(){this.$root.$emit("bv::hide::modal","signup-modal")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signup-modal",centered:"",title:"Add User Information","ok-only":""}},[a("form",{on:{submit:t.onSubmit}},[a("div",[a("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text",name:"username",id:"username",value:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"text",name:"password",id:"password",value:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),a("input",{attrs:{type:"text",name:"email",id:"email",value:""}})]),t._v(" "),a("div",[a("label",{attrs:{for:"first-name"}},[t._v("First Name")]),t._v(" "),a("input",{attrs:{type:"text",name:"first-name",id:"first-name",value:""}})]),t._v(" "),a("div",[a("label",{attrs:{for:"last-name"}},[t._v("Last Name")]),t._v(" "),a("input",{attrs:{type:"text",name:"last-name",id:"last-name",value:""}})]),t._v(" "),a("div",[a("label",{attrs:{for:"user-image"}},[t._v("User Image")]),t._v(" "),a("input",{attrs:{type:"text",name:"user-image",id:"user-image",value:""}})]),t._v(" "),a("div",[a("label",{attrs:{for:"military-branch"}},[t._v("Military Branch")]),t._v(" "),a("input",{attrs:{type:"text",name:"military-branch",id:"military-branch",value:""}})]),t._v(" "),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-btn",{attrs:{type:"submit"}},[t._v("Sign Up")]),t._v(" "),a("b-btn",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:t.hideModal}},[t._v("\n                    Close\n                ")]),t._v(" "),a("p",{staticClass:"message"})],1)])])],1)},staticRenderFns:[]};var l=a("VU/8")(r,c,!1,function(t){a("LKxS")},null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-modal",{attrs:{id:"about-modal",centered:"",title:"About Reachout","ok-only":""}},[e("p",{attrs:{name:"",id:"",cols:"30",rows:"10"}},[this._v("Reach Out is an a real time application where veterans suffering from PTSD can reach out to supportive veterans within and outside their local communities.  ReachOut enables veterans to seek guidance, support and comradarie in hopes to learn how other veterans address, handle and reduce the psychological stress caused by combat PTSD. "),e("br"),this._v("\n        Please feel free to use the chat room, post help markers to notify veterans if you feel suicidal as well as add veterans to your contact list.\n        ")]),this._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[e("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:this.hideModal}},[this._v("\n                Close\n            ")])],1)])],1)},staticRenderFns:[]};var h=a("VU/8")({name:"AboutModal",methods:{hideModal:function(){this.$root.$emit("bv::hide::modal","about-modal")}}},u,!1,function(t){a("ZYDg")},null,null).exports,m=(a("6hKT"),new(a("s2En").a)),d=m.login,v=m.logout,f=m.authenticated,p=m.authNotifier,g={name:"Login",components:{SignUpModal:l,AboutModal:h},data:function(){var t=this;return p.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:m,authenticated:f}},methods:{showModal:function(){this.$refs.myModalRef.show()},login:d,logout:v}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-screen"},[s("div",{staticClass:"login"},[s("img",{staticClass:"login-logo",attrs:{src:a("zNsD"),alt:""}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"login-buttons"},[t.authenticated?t._e():s("b-button",{staticClass:"btn btn-danger mt-5 login-page-btn",on:{click:function(e){t.login()}}},[t._v("\n                Log In\n            ")]),t._v(" "),t.authenticated?s("b-button",{staticClass:"btn btn-danger btn-margin mt-5 login-page-btn",on:{click:function(e){t.logout()}}},[t._v("\n                Log Out\n            ")]):t._e(),t._v(" "),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.signup-modal",modifiers:{"signup-modal":!0}}],staticClass:"mt-4 mb-4 login-page-btn",attrs:{variant:"default"}},[t._v("Sign Up")]),t._v(" "),s("SignUpModal"),t._v(" "),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.about-modal",modifiers:{"about-modal":!0}}],staticClass:"btn text-center login-page-btn",attrs:{variant:"primary"}},[t._v("About ReachOut")]),t._v(" "),s("AboutModal")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h1-div"},[e("h1",{staticClass:"login-h1"},[this._v("Welcome to ReachOut")])])}]};var b=a("VU/8")(g,_,!1,function(t){a("Znu1")},null,null);e.a=b.exports},"5ZbH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=(s=a("hOwk")).default||s,i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("dtWn")},null,null);e.default=o.exports},"5cLx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=(s=a("WgA/")).default||s,i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},o=a("VU/8")(n,i,!1,null,null,null);e.default=o.exports},"9M+g":function(t,e){},CjMs:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},JpW5:function(t,e,a){t.exports=a.p+"static/img/user-icon.7ea4af7.png"},LKxS:function(t,e){},N5Q4:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("6hKT"),i=a("mvHQ"),o=a.n(i),r=a("Zrlr"),c=a.n(r),l=a("wxAW"),u=a.n(l),h=a("CpNC"),m=a("YaEn"),d=new(function(){function t(){c()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new h.a,this.auth0=new n.a.WebAuth({domain:"reach-out.auth0.com",clientID:"auRV5jvDoeuBweySL4xIMxYtzlszrE3v",redirectUri:"https://reachout-91799.firebaseapp.com/callback",responseType:"token id_token",scope:"openid"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return u()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){a&&a.accessToken&&a.idToken?(t.setSession(a),m.a.replace("home")):e&&(m.a.replace("home"),console.log(e))})}},{key:"setSession",value:function(t){var e=o()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),m.a.replace("login")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}}]),t}()),v=d.login,f=d.logout,p=d.authenticated,g=d.authNotifier,_={name:"app",data:function(){var t=this;return g.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:d,authenticated:p}},methods:{login:v,logout:f}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view",{attrs:{auth:this.auth,authenticated:this.authenticated}})},staticRenderFns:[]};var C=a("VU/8")(_,b,!1,function(t){a("N5Q4")},null,null).exports,k=a("50pJ"),y=a("k4qL"),x=a("Yz9I"),w=a("sA6N"),S=a("e6fC");a("Jmt5"),a("9M+g");s.a.use(w,{load:{key:"AIzaSyDDw7fXRkL9_OJvpMA2QKq7NEvthXIS1WE",libraries:"places"}}),s.a.use(S.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:m.a,Login:k.a,Home:y.a,Contacts:x.a,components:{App:C},template:"<App/>"})},NTiS:function(t,e){},PR4g:function(t,e,a){t.exports=a.p+"static/img/coast-guard-logo.55e61d4.png"},Sn3Q:function(t,e){},T5eZ:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=s},T7tc:function(t,e,a){t.exports=a.p+"static/img/army-logo.6d63638.png"},"TI+4":function(t,e){},V292:function(t,e){},WzCX:function(t,e){},YI6p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("jIen"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var o=a("T5eZ"),r=a("VU/8")(n.a,o.a,!1,null,null,null);e.default=r.exports},YaEn:function(t,e,a){"use strict";(function(t){var s=a("7+uW"),n=a("/ocq"),i=a("50pJ"),o=a("k4qL"),r=a("4PFG"),c=a("Z9Gd"),l=a("Yz9I"),u=a("/078"),h=a("wGcl");s.a.use(n.a),e.a=new n.a({mode:"history",base:t,routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:i.a},{path:"/home",name:"Home",component:o.a},{path:"/contacts",name:"Contacts",component:l.a},{path:"/deploy",name:"Deploy",component:r.a},{path:"/chats",name:"Chats",component:c.a},{path:"/notifications",name:"Notifications",component:h.a},{path:"/callback",name:"Callback",component:u.a}]})}).call(e,"/")},Yz9I:function(t,e,a){"use strict";var s={name:"Contacts",data:function(){return{reachoutURL:"https://reachout-backend.herokuapp.com/user/",userData:[]}},mounted:function(){var t=this;fetch(this.reachoutURL,{method:"get",mode:"cors",headers:new Headers({"Content-Type":"application/json"})}).then(function(t){return t.json()}).then(function(e){console.log(e),t.userData=e.user})},methods:{}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts"},[s("h1",{staticClass:"contacts-h1"},[t._v("Contacts")]),t._v(" "),s("div",{staticClass:"user-container"},t._l(t.userData,function(e){return s("ul",{key:e.id,staticClass:"user-list"},[s("li",{staticClass:"user"},[s("img",{staticClass:"user-img",attrs:{src:e.image_url,alt:""}}),t._v(" "),s("h3",{staticClass:"user-name"},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),t._v(" "),"Army"===e.military_branch?s("img",{staticClass:"user-branch",attrs:{src:a("T7tc")}}):t._e(),t._v(" "),"Navy"===e.military_branch?s("img",{staticClass:"user-branch",attrs:{src:a("xq3E")}}):t._e(),t._v(" "),"Air Force"===e.military_branch?s("img",{staticClass:"user-branch",attrs:{src:a("+duS")}}):t._e(),t._v(" "),"Coast Guard"===e.military_branch?s("img",{staticClass:"user-branch",attrs:{src:a("PR4g")}}):t._e(),t._v(" "),"Marines"===e.military_branch?s("img",{staticClass:"user-branch",attrs:{src:a("kpzE")}}):t._e()])])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-button-container"},[e("a",{staticClass:"contacts-home",attrs:{href:"./home"}},[this._v("HOME")])])}]};var i=a("VU/8")(s,n,!1,function(t){a("yejm")},null,null);e.a=i.exports},Z9Gd:function(t,e,a){"use strict";var s=a("Gu7T"),n=a.n(s),i=a("DmT9"),o=a.n(i),r={name:"ChatGroup",data:function(){return{user:"",message:"",messages:[],socket:o()("https://reachout-backend.herokuapp.com/")}},methods:{sendMessage:function(t){t.preventDefault(),this.socket.emit("SEND_MESSAGE",{user:this.user,message:this.message}),this.message=""}},mounted:function(){var t=this;this.socket.on("MESSAGE",function(e){t.messages=[].concat(n()(t.messages),[e])})}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-3"},[a("div",{staticClass:"card-body"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"messages"},[a("p",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.user)+": ")]),t._v(t._s(e.message))])])}))]),t._v(" "),a("div",{staticClass:"card-footer"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("div",{staticClass:"gorm-group"},[a("label",{attrs:{for:"user"}},[t._v("User:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"gorm-group pb-3"},[a("label",{attrs:{for:"message"}},[t._v("Message:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Send")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-title"},[e("h3",[this._v("Chat Group")]),this._v(" "),e("hr")])}]};var l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-modal",{attrs:{id:"contact-modal",centered:"",title:"Add Contact","ok-only":""}},[e("form",{on:{submit:this.submit}},[e("input",{attrs:{type:"text",name:"username",id:""}}),this._v(" "),e("b-btn",{attrs:{type:"submit"}},[this._v("Save Contact")])],1),this._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[e("b-btn",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:this.hideModal}},[this._v("\n                Close\n            ")])],1)])],1)},staticRenderFns:[]};var u={name:"Chats",components:{ChatGroup:a("VU/8")(r,c,!1,function(t){a("NTiS")},null,null).exports,AddContactModal:a("VU/8")({name:"AddContactModal",methods:{hideModal:function(){this.$root.$emit("bv::hide::modal","contact-modal")}}},l,!1,function(t){a("y++m")},null,null).exports},methods:{showModal:function(){this.$refs.myModalRef.show()}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chats"},[this._m(0),this._v(" "),e("ChatGroup"),this._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"btn mt3",attrs:{variant:"primary"}},[this._v("Add Contact")]),this._v(" "),e("AddContactModal")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-to-home-container"},[e("a",{staticClass:"back-to-home",attrs:{href:"./Home"}},[this._v("Back to Home")])])}]};var m=a("VU/8")(u,h,!1,function(t){a("Sn3Q")},null,null);e.a=m.exports},ZYDg:function(t,e){},Znu1:function(t,e){},dtWn:function(t,e){},k4qL:function(t,e,a){"use strict";a("6hKT");var s=new(a("s2En").a),n=s.login,i=s.logout,o=s.authenticated,r=s.authNotifier,c={name:"Home",data:function(){var t=this;return r.on("authChange",function(e){t.authenticated=e.authenticated}),{reachoutURL:"https://reachout-backend.herokuapp.com/user/",userData:[],auth:s,authenticated:o}},mounted:function(){var t=this;fetch(this.reachoutURL,{method:"get",mode:"cors",headers:new Headers({"Content-Type":"application/json"})}).then(function(t){return t.json()}).then(function(e){console.log(e.user),t.userData=e.user})},methods:{login:n,logout:i}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-container"},[t._m(0),t._v(" "),s("div",{staticClass:"links"},[s("img",{staticClass:"user-image",attrs:{src:"https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/17966271_10209963583900817_8300406579102339175_o.jpg?_nc_cat=0&oh=ceb7c33ed49d44974433849172d7c186&oe=5C14E04B",alt:"Username"}}),t._v(" "),s("a",{staticClass:"links-link",attrs:{href:"./Notifications"}},[t._v("NOTIFICATIONS (1)")]),t._v(" "),s("a",{staticClass:"links-link",attrs:{href:"./Deploy"}},[t._v("REACHOUT")]),t._v(" "),s("a",{staticClass:"links-link",attrs:{href:"./Chats"}},[t._v("CHAT LOUNGE")]),t._v(" "),s("a",{staticClass:"links-link",attrs:{href:"./Contacts"}},[t._v("CONTACTS ("),s("img",{staticClass:"contacts-icon",attrs:{src:a("JpW5"),alt:""}}),t._v(" "+t._s(t.userData.length)+") ")]),t._v(" "),t.authenticated?s("button",{staticClass:"home-login-btn",on:{click:function(e){t.logout()}}},[t._v("\n            Log Out\n        "),s("button")]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-container"},[e("img",{staticClass:"home-logo",attrs:{src:a("zNsD"),alt:""}})])}]};var u=a("VU/8")(c,l,!1,function(t){a("kRlv")},null,null);e.a=u.exports},kRlv:function(t,e){},kpzE:function(t,e,a){t.exports=a.p+"static/img/usmc-logo.691afce.png"},oM1v:function(t,e){},preG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=(s=a("hQTS")).default||s,i={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:this.placeholder},domProps:{value:this.value}})},staticRenderFns:[]},o=a("VU/8")(n,i,!1,null,null,null);e.default=o.exports},rIum:function(t,e,a){t.exports=a.p+"static/img/map-location.cc2fd6c.png"},s2En:function(t,e,a){"use strict";var s=a("mvHQ"),n=a.n(s),i=a("Zrlr"),o=a.n(i),r=a("wxAW"),c=a.n(r),l=a("6hKT"),u=a("CpNC"),h=a("YaEn"),m=function(){function t(){o()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new u.a,this.auth0=new l.a.WebAuth({domain:"reach-out.auth0.com",clientID:"auRV5jvDoeuBweySL4xIMxYtzlszrE3v",redirectUri:"https://reachout-91799.firebaseapp.com/callback",responseType:"token id_token",scope:"openid"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return c()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){a&&a.accessToken&&a.idToken?(t.setSession(a),h.a.replace("home")):e&&(h.a.replace("home"),console.log(e))})}},{key:"setSession",value:function(t){var e=n()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),h.a.replace("login")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}}]),t}();e.a=m},wGcl:function(t,e,a){"use strict";var s={name:"MapContainer",data:function(){return{center:{lat:39.7392,lng:-104.9903},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate(),this.setPlace(this.geolocate())},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-container"},[a("gmap-map",{staticClass:"gmap",staticStyle:{width:"100%",height:"40vh"},attrs:{center:t.center,zoom:10}},t._l(t.markers,function(e,s){return a("gmap-marker",{key:s,attrs:{position:e.position},on:{click:function(a){t.center=e.position}}})})),t._v(" "),a("br"),t._v(" "),a("div",[a("label",[a("gmap-autocomplete",{on:{place_changed:t.setPlace}}),t._v(" "),a("button",{staticClass:"marker-button",on:{click:t.addMarker}},[t._v("Add Marker")])],1),t._v(" "),a("br")])],1)},staticRenderFns:[]};var i={name:"Notifications",components:{MapContainer:a("VU/8")(s,n,!1,function(t){a("WzCX")},null,null).exports},data:function(){return{isOpen:!1}},methods:{toggleMap:function(){console.log(this.isOpen),this.isOpen=!this.isOpen,console.log(this.isOpen)}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notifications"},[s("h1",{staticClass:"notifications-h1"},[t._v("NOTIFICATIONS")]),t._v(" "),s("div",{staticClass:"msg_list"},[s("p",{staticClass:"notification-location-p",on:{click:t.toggleMap}},[t._v(" DistressedVet needs help! "),s("img",{attrs:{src:"http://prtlimages.cunamutual.com/ImageServer/Portal/B2B/CollapseSign.gif"}})]),t._v(" "),s("router-link",{staticClass:"notify-map-anchor",attrs:{tag:"li",to:"/Chats"}},[t.isOpen?s("img",{staticClass:"notify-map",attrs:{src:a("rIum"),alt:""}}):t._e()])],1),t._v(" "),s("MapContainer"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-button-container"},[e("a",{staticClass:"map-home-button",attrs:{href:"./home"}},[this._v("HOME")])])}]};var r=a("VU/8")(i,o,!1,function(t){a("oM1v")},null,null);e.a=r.exports},xq3E:function(t,e,a){t.exports=a.p+"static/img/navy-logo.afe39e4.png"},"y++m":function(t,e){},yejm:function(t,e){},zNsD:function(t,e,a){t.exports=a.p+"static/img/ReachOutLogo.ca1f89c.png"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.48a296c36b993fb2dfb1.js.map