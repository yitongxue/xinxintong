!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=136)}({136:function(e,t,r){e.exports=r(63)},2:function(e,t,r){"use strict";var n=angular.module("http.ui.xxt",["ng"]);n.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var r=[],n=0,i=arguments.length;n<i;n++)r.push(arguments[n]+"="+(e[arguments[n]]||""));return r.join("&")}return e},j:function(r){var n=e,i=[];r&&r.length&&(n+="/"+r);for(var a=1,s=arguments.length;a<s;a++)i.push(arguments[a]+"="+(t.search()[arguments[a]]||""));return i.length&&(n+="?"+i.join("&")),n},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),n.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,r,n,i,a){function s(t,r,n){var s;return i.trustAsHtml(t),s=angular.element("<div></div>"),s.attr({class:"tms-notice-box alert alert-"+(r||"info"),"ng-style":"{'z-index':1099}"}).html(t),n||s[0].addEventListener("click",function(){document.body.removeChild(s[0])},!0),a(s)(e),document.body.appendChild(s[0]),s[0]}function o(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t,r){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var n=0,i=t.length;n<i;n++)n<e.length?l(e[n],t[n],r):e.push(t[n])}else if(angular.isObject(e)){for(var a in e)r&&-1!==r.indexOf(a)||(void 0===t[a]?delete e[a]:angular.isObject(t[a])&&angular.isObject(e[a])?l(e[a],t[a],r):e[a]=t[a]);for(var a in t)r&&-1!==r.indexOf(a)||void 0===e[a]&&(e[a]=t[a])}}else e=t;return!0}this.get=function(e,i){var a,l,u=n.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(l=r(function(){l=null,a=s(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&r.cancel(l),a&&(o(a),a=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&s(e,"warning"),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(l&&r.cancel(l),a&&(o(a),a=null)),s(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,i,a){var l,u,g=n.defer();return a=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},a),!0===a.showProgress&&(u=r(function(){u=null,l=s(a.showProgressText,"info")},a.showProgressDelay)),c(a)&&(e+=(-1===e.indexOf("?")?"?":"&")+a.page.j()),t.post(e,i,a).success(function(e){if(a.page&&void 0!==e.data.total&&(a.page.total=e.data.total),!0===a.showProgress&&(u&&r.cancel(u),l&&(o(l),l=null)),a.parseResponse)if(angular.isString(e)){if(a.autoNotice&&(s(e,"warning"),l=null),a.autoBreak)return;g.reject(e)}else if(0!=e.err_code){if(a.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(a.autoBreak)return;g.reject(e)}else g.resolve(e);else g.resolve(e)}).error(function(e,t){!0===a.showProgress&&(u&&r.cancel(u),l&&(o(l),l=null)),s(null===e?"网络不可用":e,"danger")}),g.promise},this.merge=function(e,t,r){return!angular.equals(e,t)&&l(e,t,r)}}])},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,r,n,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?r:e,link:t,imgUrl:n,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:r,link:t,imgUrl:n,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},63:function(e,t,r){"use strict";r(2),r(5),angular.module("app",["ui.bootstrap","ui.tms","http.ui.xxt","snsshare.ui.xxt"]).controller("ctrlMain",["$scope","http2","tmsSnsShare",function(e,t,r){e.requireLogin=!1,e.data={},e.submit=function(){t.post("/rest/i/matterUrl?invite="+e.invite.id,e.data).then(function(e){location.href=e.data})},t.get("/rest/site/fe/user/get").then(function(n){var i,a,s;e.loginUser=i=n.data,s=location.search.match(/inviteCode=([^&]*)/)[1],i.unionid&&i.uname&&(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(i.uname)?a="mobile":/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(i.uname)&&(a="email")),t.get("/rest/site/fe/invite/get?inviteCode="+s).then(function(t){var n=t.data;if(e.invite=n,/MicroMessenger/i.test(navigator.userAgent)){var s,o;location.search.match(/shareby=([^&]*)/)&&location.search.match(/shareby=([^&]*)/)[1],s=e.loginUser.uid+"_"+1*new Date,o=location.href+"&shareby="+s,r.config({siteId:n.matter_siteid,jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),r.set(n.matter_title,o,n.matter_summary,n.matter_pic)}n.entryRule&&(e.entryRule=n.entryRule,"member"===n.entryRule.scope&&n.entryRule.mschemas&&n.entryRule.mschemas.length&&(e.mschema=n.entryRule.mschemas[0],e.data.member={schema_id:e.mschema.id},"mobile"===a&&e.mschema.attrs.mobile?e.data.member.mobile=i.uname:"email"===a&&e.mschema.attrs.email&&(e.data.member.email=i.uname),e.requireLogin=!0))})})}])}});