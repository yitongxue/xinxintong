!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=90)}({2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],r.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",i.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),i.promise}}])},35:function(e,t,n){"use strict";n(2),/MicroMessenger/.test(navigator.userAgent)&&(signPackage.jsApiList=["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"],wx.config(signPackage)),angular.module("app",["ui.bootstrap","infinite-scroll","page.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","$q","tmsDynaPage",function(e,t,n,o,r){var i,s,c,a;i=t.search().site,s=t.search().id,c=t.search().inviteToken,a=t.search().shareby?t.search().shareby:"";var l=function(){var t,o;t=e.user.vid+(new Date).getTime(),window.xxt.share.options.logger=function(o){var r="/rest/site/fe/matter/logShare";r+="?shareid="+t,r+="&site="+i,r+="&id="+s,r+="&type=channel",r+="&title="+e.channel.title,r+="&shareto="+o,r+="&shareby="+a,n.get(r)},o=location.href,/shareby=/.test(o)?o=o.replace(/shareby=[^&]*/,"shareby="+t):o+="&shareby="+t,window.xxt.share.set(e.channel.title,o,e.channel.summary,e.channel.pic,"")};e.Matter={matters:[],busy:!1,page:1,orderby:"time",changeOrderby:function(){this.reset()},reset:function(){this.matters=[],this.busy=!1,this.end=!1,this.page=1,this.nextPage()},nextPage:function(){var e,t=this;this.end||(this.busy=!0,e="/rest/site/fe/matter/channel/mattersGet",e+="?site="+i,e+="&id="+s,e+="&orderby="+this.orderby,e+="&page="+this.page,e+="&size=10",n.get(e).success(function(e){if(e.data.matters.length){for(var n=e.data.matters,o=0,r=n.length;o<r;o++)t.matters.push(n[o]);t.page++}else t.end=!0;t.busy=!1}))}},e.elSiteCard=angular.element(document.querySelector("#site-card")),e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.open=function(t){e.channel.invite?location.href=t.url+"&inviteToken="+c:location.href=t.url},e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+i,location.href=t},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+c:r.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+c})};var u=function(){var t=o.defer();return n.get("/rest/site/home/get?site="+i).success(function(t){e.siteInfo=t.data}),n.get("/rest/site/fe/matter/channel/get?site="+i+"&id="+s).success(function(o){e.user=o.data.user,e.channel=o.data.channel,e.qrcode="/rest/site/fe/matter/channel/qrcode?site="+i+"&url="+encodeURIComponent(location.href),/MicroMessenge|Yixin/i.test(navigator.userAgent)&&l(),t.resolve(),n.post("/rest/site/fe/matter/logAccess?site="+i+"&id="+s+"&type=channel&title="+e.channel.title+"&shareby="+a,{search:location.search.replace("?",""),referer:document.referrer})}).error(function(e,t){if(401===t){var n=document.createElement("iframe");n.setAttribute("id","frmAuth"),n.onload=function(){this.height=document.documentElement.clientHeight},document.body.appendChild(n),0===e.indexOf("http")?(window.onAuthSuccess=function(){n.style.display="none",u()},n.setAttribute("src",e),n.style.display="block"):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=e,n.style.display="block")}else alert(e)}),t.promise};u()}])},90:function(e,t,n){e.exports=n(35)}});