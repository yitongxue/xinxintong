!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=118)}({10:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,r,i){var s={img_url:r,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",s,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",s,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},118:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n(9),n(10),angular.module("app",["ui.bootstrap","ui.tms","http.ui.xxt","snsshare.ui.xxt"]).controller("ctrlMain",["$scope","http2","tmsSnsShare",function(e,t,n){e.requireLogin=!1,e.data={},e.submit=function(){t.post("/rest/i/matterUrl?invite="+e.invite.id,e.data).then(function(e){location.href=e.data})},t.get("/rest/site/fe/user/get").then(function(r){var i,s;e.loginUser=i=r.data,i.unionid&&i.uname&&(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(i.uname)?s="mobile":/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(i.uname)&&(s="email")),t.get("/rest/site/fe/invite/get"+location.search).then(function(t){var r=t.data;if(e.invite=r,/MicroMessenger|Yixin/i.test(navigator.userAgent)){var a,o;location.search.match(/shareby=([^&]*)/)&&location.search.match(/shareby=([^&]*)/)[1],a=e.loginUser.uid+"_"+1*new Date,o=location.href+"&shareby="+a,n.config({siteId:r.matter_siteid,jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),n.set(r.matter_title,o,r.matter_summary,r.matter_pic)}r.entryRule&&(e.entryRule=r.entryRule,"member"===r.entryRule.scope&&r.entryRule.mschemas&&r.entryRule.mschemas.length&&(e.mschema=r.entryRule.mschemas[0],e.data.member={schema_id:e.mschema.id},"mobile"===s&&e.mschema.attrs.mobile?e.data.member.mobile=i.uname:"email"===s&&e.mschema.attrs.email&&(e.data.member.email=i.uname),e.requireLogin=!0))})})}])},9:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",[]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){return t.search()},j:function(n){var r=e,i=[];n&&n.length&&(r+="/"+n);for(var s=1,a=arguments.length;s<a;s++)i.push(arguments[s]+"="+(t.search()[arguments[s]]||""));return i.length&&(r+="?"+i.join("&")),r}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,i,s){function a(t,n,r){var a;return i.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),s(a)(e),document.body.appendChild(a[0]),a[0]}function o(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var n=0,r=t.length;n<r;n++)n<e.length?l(e[n],t[n]):e.push(t[n])}else if(angular.isObject(e)){for(var i in e)void 0===t[i]?delete e[i]:angular.isObject(t[i])&&angular.isObject(e[i])?l(e[i],t[i]):e[i]=t[i];for(var i in t)void 0===e[i]&&(e[i]=t[i])}}else e=t;return e}this.get=function(e,i){var s,l,u=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(l=n(function(){l=null,s=a(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&n.cancel(l),s&&(o(s),s=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&a(e,"warning"),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(l&&n.cancel(l),s&&(o(s),s=null)),a(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,i,s){var l,u,g=r.defer();return s=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},s),!0===s.showProgress&&(u=n(function(){u=null,l=a(s.showProgressText,"info")},s.showProgressDelay)),c(s)&&(e+=(-1===e.indexOf("?")?"?":"&")+s.page.j()),t.post(e,i,s).success(function(e){if(s.page&&void 0!==e.data.total&&(s.page.total=e.data.total),!0===s.showProgress&&(u&&n.cancel(u),l&&(o(l),l=null)),s.parseResponse)if(angular.isString(e)){if(s.autoNotice&&(a(e,"warning"),l=null),s.autoBreak)return;g.reject(e)}else if(0!=e.err_code){if(s.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(s.autoBreak)return;g.reject(e)}else g.resolve(e);else g.resolve(e)}).error(function(e,t){!0===s.showProgress&&(u&&n.cancel(u),l&&(o(l),l=null)),a(null===e?"网络不可用":e,"danger")}),g.promise},this.merge=function(e,t){return l(e,t)}}])}});