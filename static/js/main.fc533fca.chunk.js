(this["webpackJsonptest-series"]=this["webpackJsonptest-series"]||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a.n(n);a(232),a(235);try{r.a.initializeApp({apiKey:"AIzaSyDhCDxTGQlS8l_OwpytwsAPjcKh1AAfGYY",authDomain:"nirmaan-dd8f5.firebaseapp.com",databaseURL:"https://nirmaan-dd8f5.firebaseio.com",projectId:"nirmaan-dd8f5",storageBucket:"nirmaan-dd8f5.appspot.com",messagingSenderId:"850611168510"}),r.a.firestore()}catch(o){console.log("Error Initializing Firebase")}t.default=r.a},215:function(e,t,a){e.exports=a.p+"static/media/nirmaan.e9294754.jpg"},218:function(e,t,a){e.exports=a(417)},223:function(e,t,a){},224:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(88),c=(a(223),a(224),a(6)),l=a(33),i=a(15),s=a(7),u=a(8),m=a(11),p=a(9),d=a(12),h=a(4),E=(a(229),a(215)),f=a.n(E);var b=function(e){return"localhost"===window.location.hostname?"".concat("/",e):"/test-series".concat("/",e)},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={url:""},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.redirect=function(e){e.preventDefault();var t="test/".concat(a.state.url);window.location=b(t)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.auth;if(e.isLoaded&&"admin@nirmaan.com"===e.email)return r.a.createElement(l.a,{to:"/create"});var t=e.uid?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.redirect},r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"searchTerm",id:"url",onChange:this.handleChange,placeholder:"What are you looking for?"}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{className:"fa fa-search"})))))):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("img",{alt:"Nirmaan",width:"20%",src:f.a})),r.a.createElement("h1",null,r.a.createElement("b",null,"Welcome to Nirmaan Test Platform")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){window.location=b("login")}},"Login")," \xa0 \xa0",r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){window.location=b("signup")}},"SignUp"));return r.a.createElement("div",null,t)}}]),t}(n.Component),v=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))(g),y=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:b(""),onClick:e.signOut},"Log Out")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/",className:"btn btn-floating pink ligthen-1"},e.profile.initials)))})),O=function(){return r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/signup"},"SignUp"))," \xa0",r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/login"},"Login")))},N=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.isLoaded&&t.uid?r.a.createElement(y,{profile:a}):r.a.createElement(O,null);return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:"/",className:"brand-logo"},r.a.createElement("i",{className:"fa fa-home",style:{fontSize:24}})),n))}));function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){return function(t,a,n){var r=(0,n.getFirestore)();console.log(e);var o=e.testid,c=e.authid,l=o.concat("_sub");r.collection(l).doc(c).set(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.ans)).then((function(){console.log("no error"),t({type:"CREATE_TEST_SUCCESS"})})).catch((function(e){console.log("error"),t({type:"CREATE_PROJECT_ERROR"},e)}))}},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={testid:"",question:"",opt1:"",opt2:"",opt3:"",opt4:"",ans:"A"},a.handleChange=function(e){var t=a.props.id;a.setState(Object(i.a)({testid:t},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.qid,n="".concat(Number(t)+1);a.props.createQues(a.state),a.props.history.push(n),document.getElementById("myForm").reset(),a.setState({question:"",opt1:"",opt2:"",opt3:"",opt4:"",ans:"A"})},a.handleOver=function(e){var t=a.props.id,n="AThanks/".concat(t);window.location=b(n)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.qid,n=e.auth;return n.isLoaded&&"admin@nirmaan.com"!==n.email?r.a.createElement(l.a,{to:"/"}):"undefined"===typeof t||"undefined"===typeof a?r.a.createElement(l.a,{to:"/HAdmin"}):r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("form",{id:"myForm"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Q")),r.a.createElement("input",{type:"text",className:"form-control",id:"question",placeholder:"Question","aria-label":"Username","aria-describedby":"basic-addon1",onChange:this.handleChange})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"opt1",className:"form-control",placeholder:"Option 1",onChange:this.handleChange})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"opt2",className:"form-control",placeholder:"Option 2",onChange:this.handleChange})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"opt3",className:"form-control",placeholder:"Option 3",onChange:this.handleChange})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"opt4",className:"form-control",placeholder:"Option 4",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ans"},"Answer"),r.a.createElement("select",{className:"form-control",id:"ans",onChange:this.handleChange},r.a.createElement("option",null,"A"),r.a.createElement("option",null,"B"),r.a.createElement("option",null,"C"),r.a.createElement("option",null,"D"))),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSubmit},"Next Question")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleOver},"Exit"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null))}}]),t}(n.Component),w=Object(h.b)((function(e,t){return{authError:e.auth.authError,auth:e.firebase.auth,id:t.match.params.id,qid:t.match.params.qid}}),(function(e){return{createQues:function(t){return e((a=t,function(e,t,n){var r=(0,n.getFirestore)(),o=a.testid,c=Math.random().toString(36).slice(2),l=o.concat("_ans");r.collection(o).add({quesid:c,ques:a.question,opt1:a.opt1,opt2:a.opt2,opt3:a.opt3,opt4:a.opt4,createdAt:new Date}).then((function(){console.log("no error"),e({type:"CREATE_TEST_SUCCESS"})})).catch((function(t){console.log("error"),e({type:"CREATE_TEST_ERROR"},t)})),r.collection(l).add({quesid:c,ans:a.ans}).then((function(){console.log("no error"),e({type:"SUBMIT_TEST_SUCCESS"})})).catch((function(t){console.log("error"),e({type:"SUBMIT_TEST_ERROR"},t)}))}));var a}}}))(C),R=(a(231),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.auth;return a.isLoaded&&!a.isEmpty?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-2"}),r.a.createElement("div",{id:"loginbox",className:"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"},r.a.createElement("div",{className:"panel panel-info"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"panel-title"},"Login")),r.a.createElement("div",{id:"panel-body",className:"panel-body"},r.a.createElement("form",{id:"loginform",className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-user"})),r.a.createElement("input",{id:"email",type:"email",className:"form-control",placeholder:"Email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-lock"})),r.a.createElement("input",{id:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 controls"},r.a.createElement("button",{className:"btn btn-success"},"Login"),t?r.a.createElement("div",{className:"alert alert-danger col-sm-12"},t):null))))))))}}]),t}(n.Component)),P=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(R),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.isLoaded&&!t.isEmpty?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-2"}),r.a.createElement("div",{id:"loginbox",className:"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"},r.a.createElement("div",{className:"panel panel-info"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"panel-title"},"SignUp")),r.a.createElement("div",{id:"panel-body",className:"panel-body"},r.a.createElement("form",{id:"loginform",className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-user"})),r.a.createElement("input",{id:"email",type:"email",className:"form-control",placeholder:"Email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-lock"})),r.a.createElement("input",{id:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-user"})),r.a.createElement("input",{id:"firstName",type:"text",className:"form-control",placeholder:"First Name",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-lock"})),r.a.createElement("input",{id:"lastName",type:"text",className:"form-control",placeholder:"Second Name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 controls"},r.a.createElement("button",{className:"btn btn-success"},"SignUp"),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null)))))))))}}]),t}(n.Component),A=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,o=n.getFirestore,c=r(),l=o();c.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return l.collection("users").doc(e.user.uid).set({firstname:a.firstName,lastname:a.lastName})})).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){console.log(t),e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))(T),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){console.log("jhj");var t=Math.random().toString(36).slice(2),a="create".concat("/",t,"/1");window.location=b(a)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.auth;return e.isLoaded&&"admin@nirmaan.com"!==e.email?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("div",{style:{height:100}}),r.a.createElement("h2",null,"Create a Quiz now!!!")," ",r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSubmit},"Create Quiz"))}}]),t}(n.Component),_=Object(h.b)((function(e,t){return{authError:e.auth.authError,auth:e.firebase.auth}}))(k),U=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=this.props.id;return e.isLoaded&&"admin@nirmaan.com"!==e.email?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("p",null,"Test Created at the following url"),r.a.createElement("p",null,"Url: https://nirmaan-iitm.github.io/test-series/tests/",t))}}]),t}(n.Component),x=Object(h.b)((function(e,t){return{authError:e.auth.authError,auth:e.firebase.auth,id:t.match.params.id}}))(U);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var I=a(138).default.firestore(),F=1,L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[],ans:[]},a.handleSubmit=function(e){e.preventDefault();var t={ans:a.state.ans,testid:a.state.testid,authid:a.props.auth.email},n=a.state.testid.concat("_sub");I.collection(n).doc(a.props.auth.email).get().then((function(e){e.exists?a.props.history.push("/error/234"):(a.props.submitQuiz(t),a.props.history.push("/"))})).catch((function(e){console.log("Error getting document:",e)}))},a.handleChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.ans);t[e.target.id]=e.target.value,a.setState({ans:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;this.setState({testid:t}),I.collection(t).get().then((function(t){var a=t.docs.map((function(e){return e.data()}));e.setState({questions:a})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.auth,n=t.id;return a.isLoaded&&(a.isEmpty||"undefined"===typeof n)?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("h1",null,"Quiz"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},this.state.questions.map((function(t){return r.a.createElement("div",{className:"card",style:{marginTop:20},key:t.quesid},r.a.createElement("div",{className:"card-header",style:{textAlign:"left"}},F++,": ",t.ques),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group",style:{textAlign:"left"}},r.a.createElement("div",{className:"row"},r.a.createElement("li",{className:"col-6 list-group-item"},"A: ",t.opt1),r.a.createElement("li",{className:"col-6 list-group-item"},"B: ",t.opt2),r.a.createElement("li",{className:"col-6 list-group-item"},"C: ",t.opt3),r.a.createElement("li",{className:"col-6 list-group-item"},"D: ",t.opt4)))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-10",style:{textAlign:"right"},htmlFor:t.quesid},r.a.createElement("b",null,"Answer:")),r.a.createElement("div",{className:"col-2"},r.a.createElement("select",{className:"form-control",onChange:e.handleChange,id:t.quesid},r.a.createElement("option",null),r.a.createElement("option",null,"A"),r.a.createElement("option",null,"B"),r.a.createElement("option",null,"C"),r.a.createElement("option",null,"D")))))})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSubmit},"Submit")))}}]),t}(n.Component),q=Object(h.b)((function(e,t){return{authError:e.auth.authError,auth:e.firebase.auth,id:t.match.params.id}}),(function(e){return{submitQuiz:function(t){return e(S(t))}}}))(L),z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.auth,n=t.id;switch(a.isLoaded&&a.isEmpty&&(n="235"),n){case"234":e="You have already submitted the Quiz";break;case"235":e="You are not Authenticated";break;default:e="Unknown Error"}return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},e)}}]),t}(n.Component),B=Object(h.b)((function(e,t){return{auth:e.firebase.auth,profile:e.firebase.profile,id:t.match.params.id}}))(z);var G=function(){return r.a.createElement(c.a,{basename:b("")},r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:v}),r.a.createElement(l.b,{path:"/test/:id",component:q}),r.a.createElement(l.b,{path:"/login",component:P}),r.a.createElement(l.b,{path:"/signup",component:A}),r.a.createElement(l.b,{path:"/HAdmin",component:_}),r.a.createElement(l.b,{path:"/AThanks/:id",component:x}),r.a.createElement(l.b,{path:"/create/:id?/:qid?",component:w}),r.a.createElement(l.b,{path:"/error/:id",component:B}))))},Q=a(217);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(237);var M=a(32);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J,H={authError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Y({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Y({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Y({},e,{authError:null});case"SIGNUP_ERROR":return Y({},e,{authError:t.err.message});default:return e}},$=a(49),V=a(62),X={},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TEST_SUCCESS":return console.log("create test success"),e;case"CREATE_TEST_ERROR":return console.log("create test error"),e;case"SUBMIT_TEST_SUCCESS":return console.log("submit test success"),e;case"SUBMIT_TEST_ERROR":return console.log("submit test error"),e;default:return e}},ee=Object(M.c)({auth:K,test:Z,firestore:$.firestoreReducer,firebase:V.firebaseReducer});J=a(138).default;var te=Object(M.e)(ee,{},Object(M.d)(Object(M.a)(Q.a.withExtraArgument({getFirebase:V.getFirebase,getFirestore:$.getFirestore})),Object($.reduxFirestore)(J))),ae={firebase:J,config:{userProfile:"users",logErrors:!1,useFirestoreForProfile:!0},dispatch:te.dispatch,createFirestoreInstance:$.createFirestoreInstance};Object(o.render)(r.a.createElement(h.a,{store:te},r.a.createElement(V.ReactReduxFirebaseProvider,ae,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.fc533fca.chunk.js.map