!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=106)}({106:function(e,t,i){e.exports=i(47)},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,i,n,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?i:e,link:t,imgUrl:n,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:i,link:t,imgUrl:n,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,i,n,r){var s={img_url:n,link:t,title:e,desc:i};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",s,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",s,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},47:function(e,t,i){"use strict";i(4),angular.module("app",["ui.bootstrap","ui.tms","snsshare.ui.xxt"]).controller("ctrlMain",["$scope","http2","tmsSnsShare",function(e,t,i){e.requireLogin=!1,e.data={},e.submit=function(){t.post("/rest/i/matterUrl?invite="+e.invite.id,e.data,function(e){location.href=e.data})},t.get("/rest/site/fe/user/get",function(n){var r,s;e.loginUser=r=n.data,r.unionid&&r.uname&&(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(r.uname)?s="mobile":/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(r.uname)&&(s="email")),t.get("/rest/site/fe/invite/get"+location.search,function(t){var n=t.data;if(e.invite=n,/MicroMessenger|Yixin/i.test(navigator.userAgent)){var a,o;location.search.match(/shareby=([^&]*)/)&&location.search.match(/shareby=([^&]*)/)[1],a=e.loginUser.uid+"_"+1*new Date,o=location.href+"&shareby="+a,i.config({siteId:n.matter_siteid,jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),i.set(n.matter_title,o,n.matter_summary,n.matter_pic)}n.entryRule&&(e.entryRule=n.entryRule,"member"===n.entryRule.scope&&n.entryRule.mschemas&&n.entryRule.mschemas.length&&(e.mschema=n.entryRule.mschemas[0],e.data.member={schema_id:e.mschema.id},"mobile"===s&&e.mschema.attrs.mobile?e.data.member.mobile=r.uname:"email"===s&&e.mschema.attrs.email&&(e.data.member.email=r.uname),e.requireLogin=!0))})})}])}});