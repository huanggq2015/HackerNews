(function(t){function e(e){for(var i,o,s=e[0],r=e[1],m=e[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(h.length)h.shift()();return c.push.apply(c,m||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(i=!1)}i&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},c=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var m=0;m<s.length;m++)e(s[m]);var l=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1380:function(t,e,n){"use strict";n("9fa0")},"40a2":function(t,e,n){"use strict";n("974d")},"4f7e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("pageHeader"),n("router-view",{staticClass:"router-view"})],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[t._m(0),n("ul",{staticClass:"tab-ul"},t._l(t.headerMenuList,(function(e){return n("li",{key:e.name,staticClass:"tab-li"},[n("router-link",{staticClass:"tab-li-link",attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0),t._m(1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-box"},[n("span",{staticClass:"logo-icon"},[t._v("Y")]),n("b",[t._v("Hacker News")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-btn"},[n("a",{attrs:{href:"#"}},[t._v("login")])])}],r={name:"page-header",data:function(){return{headerMenuList:[{name:"new",path:"/"},{name:"past",path:"/"},{name:"comments",path:"/"},{name:"task",path:"/"},{name:"show",path:"/"},{name:"jobs",path:"/"},{name:"submit",path:"/"}]}}},m=r,l=(n("7ddf"),n("2877")),u=Object(l["a"])(m,o,s,!1,null,"28e15280",null),h=u.exports,p={name:"Home",components:{pageHeader:h}},d=p,f=(n("1380"),Object(l["a"])(d,a,c,!1,null,"d15cb71a",null)),v=f.exports,g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"article"},[n("div",{staticClass:"article-content"},[n("div",{staticClass:"article-title"},[n("i",{staticClass:"switch-btn"}),n("h3",[t._v(t._s(t.article.name))]),n("span",[t._v("("+t._s(t.article.domainName)+")")])]),n("div",{staticClass:"article-other"},[n("a",[n("span",[t._v(t._s(t.article.points))]),t._v(" points by "),n("span",[t._v(t._s(t.article.author))]),n("span",[t._v(" "+t._s(t.article.publishTime))])]),n("a",[t._v("hide")]),n("a",[t._v("past")]),n("a",[t._v("web")]),n("a",[t._v("favorite")]),n("a",[t._v(t._s(t.article.comments)+" comments")])]),t._m(0)]),n("div",{staticClass:"add-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentValue,expression:"commentValue"}],attrs:{name:"comment",rows:"3"},domProps:{value:t.commentValue},on:{input:function(e){e.target.composing||(t.commentValue=e.target.value)}}}),n("button",{on:{click:function(e){return t.addCommentClick()}}},[t._v("add comment")])])]),t.comments.length?n("div",{staticClass:"comments"},t._l(t.comments,(function(e){return n("div",{key:e.id,staticClass:"comment-item",class:{active:e.active}},[n("div",{staticClass:"comment-title"},[n("i",{staticClass:"switch-btn",on:{click:function(n){return t.parentSwitchBtnClick(e)}}}),n("span",[t._v(t._s(e.userName))]),n("span",[t._v(t._s(e.commentTime))]),n("span",[t._v(" ["),e.points?[t._v(" "+t._s(e.points)+" points ")]:[t._v(" - ")],t._v("] ")],2)]),n("div",{staticClass:"comment-content"},[n("pre",[t._v(t._s(e.content))])]),n("div",{staticClass:"comment-btn"},[n("a",{on:{click:function(n){return t.parentReplyClick(e)}}},[t._v("reply")]),n("a",{on:{click:function(n){return t.parentVoteClick(e)}}},[t._v("vote for him")]),e.replyActive?n("div",{staticClass:"add-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentInputValue,expression:"commentInputValue"}],attrs:{name:"comment",rows:"3"},domProps:{value:t.commentInputValue},on:{input:function(e){e.target.composing||(t.commentInputValue=e.target.value)}}}),n("button",{on:{click:function(n){return t.parentReplyCommentClick(e)}}},[t._v("reply comment")])]):t._e()]),n("div",{staticClass:"comment-children"},t._l(e.children,(function(i){return n("div",{key:i.id,staticClass:"comment-children-item",class:{active:i.active}},[n("div",{staticClass:"comment-title"},[n("i",{staticClass:"switch-btn",on:{click:function(n){return t.childSwitchBtnClick(e,i)}}}),n("span",[t._v(t._s(i.childName))]),n("span",[t._v(" reply ")]),n("span",[t._v(t._s(i.parentName))]),n("span",[t._v(t._s(i.commentTime))]),n("span",[t._v(" ["),i.points?[t._v(" "+t._s(i.points)+" points ")]:[t._v(" - ")],t._v("] ")],2)]),n("div",{staticClass:"comment-content"},[n("pre",[t._v(t._s(i.content))])]),n("div",{staticClass:"comment-btn"},[n("a",{on:{click:function(n){return t.childReplyClick(e,i)}}},[t._v("reply")]),n("a",{on:{click:function(n){return t.childVoteClick(e,i)}}},[t._v("vote for him")]),i.replyActive?n("div",{staticClass:"add-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentInputValue,expression:"commentInputValue"}],attrs:{name:"comment",rows:"3"},domProps:{value:t.commentInputValue},on:{input:function(e){e.target.composing||(t.commentInputValue=e.target.value)}}}),n("button",{on:{click:function(n){return t.childReplyCommentClick(e,i)}}},[t._v("reply comment")])]):t._e()])])})),0)])})),0):n("div",{staticClass:"comments no-comments"},[n("div",[t._v("暂无评论")])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-text"},[n("pre",[t._v("          这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容。")])])}],C=(n("4160"),n("159b"),{name:"Home",data:function(){return{article:{name:"A Article Title,A Article Title",domainName:"article.com",points:0,author:"authorName",publishTime:"2021-02-06 12:12:12",comments:0},comments:[{id:1,active:!0,userName:"userName",commentTime:"2021-02-06 12:12:12",points:12,content:"I think it's best if I give you my husband's email—he's sitting in front of a computer all day so he can print stuff off and get it back to you sooner than I could.",children:[{id:2,active:!0,childName:"childName",parentName:"parentName",commentTime:"2021-02-06 12:12:12",points:0,content:"I think it's best if I give you my husband's email—he's sitting in front of a computer all day so he can print stuff off and get it back to you sooner than I could."}]}],commentValue:"",commentInputValue:"",initId:3}},created:function(){this.getComments()},mounted:function(){},methods:{getComments:function(){if(this.comments=[],window.localStorage){var t=localStorage.getItem("comments");t&&(this.comments=JSON.parse(t),this.updateArticle());var e=localStorage.getItem("initId");e&&(this.initId=+e)}else console.log("您的浏览器不支持 localStorage ，请升级浏览器版本！")},updateArticle:function(){this.article.comments=this.comments.length},addCommentClick:function(){if(this.commentValue){var t=this.getRandomName(),e=(new Date).format("YYYY-MM-DD hh:mm:ss"),n=this.getId();this.comments.push({id:n,active:!0,replyActive:!1,userName:t,commentTime:e,points:0,content:this.commentValue,children:[]}),this.saveComments()}},getId:function(){return this.initId++,this.initId},getRandomName:function(t){t=t||5+Math.floor(10*Math.random());for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789",n=e.length,i="",a=0;a<t;a++)i+=e.charAt(Math.floor(Math.random()*n));return i},saveComments:function(){var t=JSON.parse(JSON.stringify(this.comments));t.forEach((function(t){t.active=!1,t.replyActive=!1,t.children.forEach((function(t){t.active=!1,t.replyActive=!1}))})),localStorage.setItem("comments",JSON.stringify(t)),localStorage.setItem("initId",this.initId),this.updateArticle()},hideAllReplyComment:function(){this.commentInputValue="",this.comments.forEach((function(t){t.replyActive=!1,t.children.forEach((function(t){t.replyActive=!1}))})),this.comments=JSON.parse(JSON.stringify(this.comments))},parentReplyClick:function(t){this.commentInputValue="",this.hideAllReplyComment(),this.comments.forEach((function(e){e.id===t.id&&(e.active=!0),e.replyActive=e.id===t.id,e.children.forEach((function(t){t.replyActive=!1}))})),this.comments=JSON.parse(JSON.stringify(this.comments))},parentReplyCommentClick:function(t,e){var n=this.commentInputValue;if(n){var i=t.userName;e&&(i=e.childName);var a=this.getRandomName(),c=(new Date).format("YYYY-MM-DD hh:mm:ss"),o=this.getId();this.comments.forEach((function(e){e.id===t.id&&e.children.push({id:o,active:!0,childName:a,parentName:i,commentTime:c,points:0,content:n})})),this.saveComments(),this.commentInputValue="",this.hideAllReplyComment()}},childReplyClick:function(t,e){this.commentInputValue="",this.hideAllReplyComment(),this.comments.forEach((function(n){n.replyActive=!1,n.children.forEach((function(i){i.replyActive=n.id===t.id&&e.id===i.id,n.id===t.id&&e.id===i.id&&(i.active=!0)}))})),this.comments=JSON.parse(JSON.stringify(this.comments))},childReplyCommentClick:function(t,e){this.parentReplyCommentClick(t,e)},parentVoteClick:function(t){this.comments.forEach((function(e){e.id===t.id&&e.points++})),this.saveComments()},childVoteClick:function(t,e){this.comments.forEach((function(n){n.id===t.id&&n.children.forEach((function(t){t.id===e.id&&t.points++}))})),this.saveComments()},parentSwitchBtnClick:function(t){this.comments.forEach((function(e){e.id===t.id&&(e.active=!e.active,e.active||(e.replyActive=!1))})),this.comments=JSON.parse(JSON.stringify(this.comments))},childSwitchBtnClick:function(t,e){this.comments.forEach((function(n){n.id===t.id&&n.children.forEach((function(t){t.id===e.id&&(t.active=!t.active,t.active||(t.replyActive=!1))}))})),this.comments=JSON.parse(JSON.stringify(this.comments))}}}),b=C,S=(n("40a2"),Object(l["a"])(b,_,y,!1,null,"5495db98",null)),k=S.exports;i["a"].use(g["a"]);var w=[{path:"/",name:"Home",component:k}],N=new g["a"]({mode:"history",base:"/",routes:w}),I=N,O=n("2f62");i["a"].use(O["a"]);var A=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("91aa"),n("c67a");i["a"].config.productionTip=!1,new i["a"]({router:I,store:A,render:function(t){return t(v)}}).$mount("#app")},"7ddf":function(t,e,n){"use strict";n("4f7e")},"91aa":function(t,e,n){n("d3b7"),n("ac1f"),n("25f0"),n("5319"),function(t){Date.prototype.format=function(t){var e=t,n=["日","一","二","三","四","五","六"];e=e.replace(/yyyy|YYYY/,this.getFullYear()),e=e.replace(/yy|YY/,this.getYear()%100>9?(this.getYear()%100).toString():"0"+this.getYear()%100);var i=this.getMonth()+1;return e=e.replace(/MM/,i>9?i.toString():"0"+i),e=e.replace(/M/g,i),e=e.replace(/w|W/g,n[this.getDay()]),e=e.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():"0"+this.getDate()),e=e.replace(/d|D/g,this.getDate()),e=e.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():"0"+this.getHours()),e=e.replace(/h|H/g,this.getHours()),e=e.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():"0"+this.getMinutes()),e=e.replace(/m/g,this.getMinutes()),e=e.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():"0"+this.getSeconds()),e=e.replace(/s|S/g,this.getSeconds()),e}}(window)},"974d":function(t,e,n){},"9fa0":function(t,e,n){},c67a:function(t,e,n){t.exports={pageMinWidth:"1200px",headerHeight:"30px"}}});