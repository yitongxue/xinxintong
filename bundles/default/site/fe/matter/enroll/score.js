!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=115)}({0:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=m[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],t));m[o.id]={id:o.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s=r[1],c=r[2],l=r[3],d={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}function r(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),r(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),r(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,i,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var l=x++;n=b||(b=s(t)),o=u.bind(null,n,l,!1),i=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=f.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=p.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function u(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var o=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=y(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=h.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,x=0,w=[],y=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,r.push(c)}if(e){o(i(e,t),t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},10:function(e,t,n){"use strict";function o(e,t){var n,o,i;n=document.createDocumentFragment(),o=document.createElement("div"),o.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),o.appendChild(i),o.onclick=function(){o.parentNode.removeChild(o)},n.appendChild(o),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){o.parentNode.removeChild(o),t&&t()},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e)}angular.module("coinpay.ui.xxt",[]).service("tmsCoinPay",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-coinpay"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var i=location.protocol+"//"+location.host;i+="/rest/site/fe/coin/pay",i+="?site="+e,i+="&matter="+t,o(i)},!0),document.body.appendChild(n)}})},11:function(e,t,n){"use strict";function o(e,t){var n,o,i;n=document.createDocumentFragment(),o=document.createElement("div"),o.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),o.appendChild(i),o.onclick=function(){o.parentNode.removeChild(o)},n.appendChild(o),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){o.parentNode.removeChild(o),t&&t()},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e)}angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var i=location.protocol+"//"+location.host;i+="/rest/site/fe/user",i+="?site="+e,t?location.href=i:o(i)},!0),document.body.appendChild(n)}})},115:function(e,t,n){e.exports=n(57)},12:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"body,html{font-family:Microsoft Yahei,Arial;width:100%;height:auto}body{position:relative;font-size:16px;padding:0}.ng-cloak{display:none}.container{position:relative}.navbar-default .navbar-brand,.site-navbar-default .navbar-default .navbar-nav>li>a{color:#fff}.site-navbar-default .navbar-brand{padding:15px}.main-navbar .navbar-brand:hover{color:#fff}@media screen and (min-width:768px){.site-navbar-default .navbar-nav>li>a{padding:15px;line-height:1}}@media screen and (max-width:768px){.site-navbar-default .navbar-brand{width:100%;text-align:center}.site-navbar-default .navbar-brand>.icon-note{display:inline-block;width:124px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.site-navbar-default .navbar-nav{margin:8px 0;position:absolute;top:0;right:0}.site-navbar-default .nav>li>a{padding:10px}}.tms-flex-row{display:flex;align-items:center}.tms-flex-row .tms-flex-grow{flex:1}.dropdown-menu{min-width:auto}.dropdown-menu-top{bottom:100%;top:auto}#picViewer{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1051;display:none;margin:0 auto;overflow:hidden;background:#000}#picViewer>div{position:absolute;bottom:6px;left:8px;right:8px;z-index:1999;height:36px}#picViewer span{display:inline-block;width:36px;height:36px;line-height:25px;border-radius:18px;font-size:25px;text-align:center;color:#bbb}#picViewer span.page{position:absolute;left:50%;margin-left:-18px;font-size:18px}#picViewer span.prev{position:absolute;left:50%;margin-left:-72px}#picViewer span.next{position:absolute;left:50%;margin-left:36px}#picViewer span.exit{position:absolute;right:0}#picViewer span.exit>i{text-shadow:0 0 .1em #fff,0 0 .1em #fff}",""])},13:function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)},14:function(e,t,n){"use strict";n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx?window.wx.ready(function(){window.wx.showOptionMenu()}):/YiXin/i.test(navigator.userAgent)&&document.addEventListener("YixinJSBridgeReady",function(){YixinJSBridge.call("showOptionMenu")},!1),n(8),n(13),n(6),n(5),n(2),n(11),n(10),n(9);var o=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","page.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt","directive.enroll"];window.moduleAngularModules&&window.moduleAngularModules.forEach(function(e){o.push(e)});var i=angular.module("app",o);i.config(["$controllerProvider","$uibTooltipProvider","$locationProvider",function(e,t,n){i.provider={controller:e.register},t.setTriggers({show:"hide"}),n.html5Mode(!0)}]),i.controller("ctrlMain",["$scope","$q","http2","$timeout","tmsLocation","tmsDynaPage","tmsSnsShare","tmsSiteUser",function(e,t,n,o,r,a,s,c){function l(){var o,i;return i=t.defer(),o=r.j("entryRule","site","app"),n.get(o).then(function(t){e.params.entryRuleResult=t.data,i.resolve(t.data)})}function d(e,t){var n,o,i;n=document.body,o=document.createElement("div"),o.setAttribute("id","frmPlugin"),o.height=n.clientHeight,i=document.createElement("iframe"),o.appendChild(i),n.scrollTop=0,n.appendChild(o),window.onClosePlugin=function(){t?t().then(function(e){o.parentNode.removeChild(o)}):o.parentNode.removeChild(o)},o.onclick=function(){onClosePlugin()},e&&i.setAttribute("src",e),o.style.display="block"}function u(t){var n,o,i,r;r=!0,n=e,i=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),function(e){if(o&&(n=o),!n[e])return void(r=!1);o=n[e]}),r&&o.apply(n,i)}var p=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)?window.wx.closeWindow():/YiXin/i.test(navigator.userAgent)&&window.YixinJSBridge.call("closeWebView")},e.askFollowSns=function(){var t;e.app.entryRule&&"Y"===e.app.entryRule.scope.sns&&(t=r.j("askFollow","site"),t+="&sns="+Object.keys(e.app.entryRule.sns).join(","),d(t,l))},e.askBecomeMember=function(){var t,n;e.app.entry_rule&&"Y"===e.app.entryRule.scope.member&&(n=Object.keys(e.app.entryRule.member),1===n.length?(t="/rest/site/fe/user/member?site="+e.app.siteid,t+="&schema="+n[0]):n.length>1&&(t="/rest/site/fe/user/memberschema?site="+e.app.siteid,t+="&schema="+n.join(",")),d(t,l))},e.addRecord=function(t,n){if(n)e.gotoPage(t,n,null,null,"Y");else for(var o in e.app.pages){var i=e.app.pages[o];if("I"===i.type){e.gotoPage(t,i.name,null,null,"Y");break}}},e.gotoApp=function(t){location.replace(e.app.entryUrl)},e.gotoPage=function(e,t,n,o,i){e&&(e.preventDefault(),e.stopPropagation());var a=r.j("","site","app");n?a+="&ek="+n:"cowork"===t&&(a+="&ek="+r.s().ek),o&&(a+="&rid="+o),t&&(a+="&page="+t),i&&"Y"===i&&(a+="&newRecord=Y"),location=a},e.openMatter=function(e,t,n,o){var i="/rest/site/fe/matter?site="+r.s().site+"&id="+e+"&type="+t;n?location.replace(i):!1===o?location.href=i:window.open(i)},e.onReady=function(t){e.params?u(t):p.push(t)},e.setSnsShare=function(t,o){function i(){if("miniprogram"!==window.__wxjs_environment){var i,a,c,l,d,u;i=e.app,a=e.page,c=e.user,l=location.protocol+"//"+location.host+r.j("","site","app","rid"),a&&a.share_page&&"Y"===a.share_page?l+="&page="+a.name:r.s().page&&(l+="&page="+r.s().page),t&&t.enroll_key&&(l+="&ek="+t.enroll_key),o&&angular.forEach(o,function(e,t){void 0!==e&&(l+="&"+t+"="+e)}),d=c.uid+"_"+1*new Date,l+="&shareby="+d,u=i.summary,a&&a.share_summary&&a.share_summary.length&&t&&(u=t.data[a.share_summary]),window.shareCounter=0,s.config({siteId:i.siteid,logger:function(e){var t;t="/rest/site/fe/matter/logShare",t+="?shareid="+d,t+="&site="+i.siteid,t+="&id="+i.id,t+="&type=enroll",t+="&title="+i.title,t+="&shareby="+d,t+="&shareto="+e,n.get(t),window.shareCounter++,window.onshare&&window.onshare(window.shareCounter)},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage","chooseImage","uploadImage","getLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]}),s.set(i.title,l,u,i.pic)}}/MicroMessenger|Yixin/i.test(navigator.userAgent)&&(window.WeixinJSBridge&&WeixinJSBridge.invoke?i():document.addEventListener("WeixinJSBridgeReady",i,!1))},e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0),n.get(r.j("get","site","app","rid","page","ek","newRecord")).then(function(t){var r=t.data,s=r.site,c=r.app,l=r.mission,d=(r.page,r.user),f={},m="";c.dataSchemas.forEach(function(e){f[e.id]=e}),c._schemasById=f,e.params=r,e.site=s,e.mission=l,e.app=c,e.user=d,"Y"===c.multi_rounds&&r.activeRound&&(e.activeRound=r.activeRound,m=r.activeRound.rid),"Y"===c.use_site_header&&s&&s.header_page&&a.loadCode(i,s.header_page),"Y"===c.use_mission_header&&l&&l.header_page&&a.loadCode(i,l.header_page),"Y"===c.use_mission_footer&&l&&l.footer_page&&a.loadCode(i,l.footer_page),"Y"===c.use_site_footer&&s&&s.footer_page&&a.loadCode(i,s.footer_page),r.page&&a.loadCode(i,r.page).then(function(){e.page=r.page}),"Y"===c.can_siteuser&&(e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+e,location.href=t}),p.length&&angular.forEach(p,u);var g;(g=document.querySelector(".loading"))&&g.parentNode.removeChild(g),o(function(){e.$broadcast("xxt.app.enroll.ready",r)}),n.post("/rest/site/fe/matter/logAccess?site="+c.siteid+"&id="+c.id+"&type=enroll&title="+c.title,{search:location.search.replace("?",""),referer:document.referrer,rid:m,assignedNickname:d.nickname})})}]),e.exports=i},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var i;i=document.createElement("script"),i.src=e[t],i.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(i)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,i=$q.defer(),r=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--r&&(t.js&&t.js.length&&o.loadJs(e,t.js),i.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),i.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,i,r=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],i.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",r.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),r.promise}}])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,o,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,o,i){var r={img_url:o,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",r,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",r,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},5:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",[]);o.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){return t.search()},j:function(n){var o=e,i=[];n&&n.length&&(o+="/"+n);for(var r=1,a=arguments.length;r<a;r++)i.push(arguments[r]+"="+(t.search()[arguments[r]]||""));return i.length&&(o+="?"+i.join("&")),o}}}]}),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,i,r){function a(t,n,o){var a;return i.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),r(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}this.get=function(e,i){var r,c,l=o.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(c=n(function(){c=null,r=a(i.showProgressText,"info")},i.showProgressDelay)),t.get(e,i).success(function(e){if(!0===i.showProgress&&(c&&n.cancel(c),r&&(s(r),r=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&a(e,"warning"),i.autoBreak)return;l.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;l.reject(e)}else l.resolve(e);else l.resolve(e)}).error(function(e,t){!0===i.showProgress&&(c&&n.cancel(c),r&&(s(r),r=null)),a(null===e?"网络不可用":e,"danger")}),l.promise},this.post=function(e,i,r){var c,l,d=o.defer();return r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(l=n(function(){l=null,c=a(r.showProgressText,"info")},r.showProgressDelay)),t.post(e,i,r).success(function(e){if(!0===r.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&(a(e,"warning"),c=null),r.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(r.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(r.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===r.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")}),d.promise}}])},57:function(e,t,n){"use strict";n(94),n(14).controller("ctrlScore",["$scope","$sce","tmsLocation","http2",function(e,t,n,o){var i,r,a;e.value2Label=function(n){var o,r,a,s=[];return(r=i._schemasById[n])&&e.record.data&&((o=e.record.data[n])?r.ops&&r.ops.length&&(a="single"===r.type?o.split(","):o,r.ops.forEach(function(e){-1!==a.indexOf(e.v)&&s.push(e.l)}),o=s.join(",")):o=""),t.trustAsHtml(o)},e.$on("xxt.app.enroll.ready",function(t,s){i=s.app,r=[],a={},o.get(n.j("record/get","site","app","ek")).then(function(t){var n;n=t.data,i.dataSchemas.forEach(function(e){e.requireScore&&"Y"===e.requireScore&&(r.push(e),a[e.id]=e,"multiple"===e.type&&n.data[e.id]&&(n.data[e.id]=n.data[e.id].split(",")))}),e.quizSchemas=r,e.record=n,e.setSnsShare(n);var o={};"Y"===i.can_repos&&(o.repos={}),"Y"===i.can_rank&&(o.rank={}),i.scenarioConfig&&"Y"===i.scenarioConfig.can_action&&(o.action={}),Object.keys(o)&&(e.appNavs=o)})})}])},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$q",function(e,t){var n="tmsbox"+1*new Date,o={type:"",timer:null},i=function(e,t){var i;return i=document.querySelector("#"+n),null===i?(i=document.createElement("div"),i.setAttribute("id",n),i.classList.add("notice-box"),i.classList.add("alert"),i.classList.add("alert-"+e),i.innerHTML="<div>"+t+"</div>",document.body.appendChild(i),o.type=e):(o.type!==e&&(i.classList.remove("alert-"+e),o.type=e),i.childNodes[0].innerHTML=t),i};this.close=function(){var e;(e=document.querySelector("#"+n))&&document.body.removeChild(e)},this.error=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;o.timer&&e.cancel(o.timer),n=i("success",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.info=function(t){var n;o.timer&&e.cancel(o.timer),n=i("info",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(n,r){var a,s,c;return a=t.defer(),o.timer&&(e.cancel(o.timer),o.timer=null),s=i("warning",n),r&&r.length?r.forEach(function(e){c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML=e.label,s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.resolve(e.value)})}):(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.resolve()}),c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.reject()})),a.promise}}])},7:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'.dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-act-toggle{position:fixed;right:15px;bottom:8px;width:48px;height:48px;line-height:48px;box-shadow:0 2px 6px rgba(18,27,32,.425);color:#fff;background:#e5b526;border:1px solid #e5b526;border-radius:24px;font-size:20px;text-align:center;cursor:pointer;z-index:1050}.tms-nav-target>*+*{margin-top:.5em}.tms-act-popover-wrap>div+div{margin-top:8px}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:"\\5173\\95ED";position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}',""])},78:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"img{max-width:100%}.schema{border-bottom:1px dashed #aaa}.schema:last-child{border-bottom:0}.schema.fail{background:#eee}.schema .answer{color:#66f}.schema .glyphicon{color:red}",""])},8:function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)},9:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.enroll",[]);o.directive("tmsAppNav",["$templateCache",function(e){var t;return t="<div class='tms-nav-target'>",t+="<div ng-if=\"navs.repos\"><button class='btn btn-default btn-block' ng-click=\"goto($event,'repos')\">共享页</button></div>",t+="<div ng-if=\"navs.favor\"><button class='btn btn-default btn-block' ng-click=\"goto($event,'favor')\">收藏页</button></div>",t+="<div ng-if=\"navs.rank\"><button class='btn btn-default btn-block' ng-click=\"goto($event,'rank')\">排行页</button></div>",t+='<div ng-if="navs.action"><button class=\'btn btn-default btn-block\' ng-click="goto($event,\'action\')">动态页<span class=\'notice-count\' ng-if="noticeCount" ng-bind="noticeCount"></span></button></div>',t+="</div>",e.put("appNavTemplate.html",t),{restrict:"A",replace:!0,transclude:!0,scope:{navs:"=appNavs",noticeCount:"=noticeCount"},template:'<span><span ng-if="!navs"><span ng-transclude></span></span><span ng-if="navs" uib-popover-template="\'appNavTemplate.html\'" popover-placement="bottom" popover-trigger="\'outsideClick\'"><span ng-transclude></span><span class=\'notice-count\' ng-if="noticeCount" ng-bind="noticeCount"></span><span class="caret"></span></span></span>',controller:["$scope",function(e){e.goto=function(t,n){e.$parent.gotoPage(t,n)}}]}}]),o.directive("tmsAppAct",["$templateCache",function(e){var t;return t="<div class='tms-act-popover-wrap'>",t+="<div ng-if=\"acts.mockAsMember\"><button class='btn btn-default' ng-click=\"goto($event,'mockAsMember')\"><span ng-if=\"mocker.role!=='member'\">作为</span><span ng-if=\"mocker.role==='member'\">退出</span>成员</button></div>",t+="<div ng-if=\"acts.mockAsVisitor\"><button class='btn btn-default' ng-click=\"goto($event,'mockAsVisitor')\"><span ng-if=\"mocker.role!=='visitor'\">作为</span><span ng-if=\"mocker.role==='visitor'\">退出</span>访客</button></div>",t+="<div ng-if=\"acts.addRecord\"><button class='btn btn-default' ng-click=\"goto($event,'addRecord')\">添加记录</button></div>",t+="<div ng-if=\"acts.save\"><button class='btn btn-default' ng-click=\"goto($event,'save')\">保存</button></div>",t+="</div>",e.put("appActTemplate.html",t),{restrict:"A",replace:!0,scope:{acts:"=appActs"},template:'<button uib-popover-template="\'appActTemplate.html\'" popover-placement="top-right" popover-trigger="\'outsideClick\'" popover-append-to-body="true" class="tms-act-toggle" popover-class="tms-act-popover"><span class=\'glyphicon glyphicon-option-vertical\'></span></button>',controller:["$scope",function(e){e.$watch("acts",function(t){var n;t&&(n=t.mockAsVisitor||t.mockAsMember)&&n.mocker&&angular.isString(n.mocker)&&(e.mocker=e.$parent[n.mocker])&&e.$parent.$watch(n.mocker,function(t){e.mocker=t},!0)}),e.back=function(){history.back()},e.historyLen=function(){return history.length},e.goto=function(t,n){switch(n){case"mockAsVisitor":e.$parent.mockAsVisitor(t,"visitor"!==e.mocker.role);break;case"mockAsMember":e.$parent.mockAsMember(t,"member"!==e.mocker.role);break;case"addRecord":e.$parent.addRecord(t);break;case"save":e.$parent.save();break;default:e.$parent.gotoPage(t,n)}}}]}}]),o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,o){var i,r,a,s;void 0===t.value&&(t.value=1*new Date/1e3),r=new Date,r.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(r.getMinutes()/5),t.data={year:r.getFullYear(),month:r.getMonth()+1,date:r.getDate(),hour:r.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),s='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',i=function(n){if(n.preventDefault(),n.stopPropagation(),!t.opened){var o,i;i="_dlg-"+1*new Date,o={header:"",body:s,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},o=__util.makeDialog(i,o),t.opened=!0,t.dialogID=i,e(o)(t)}},n[0].querySelector("[ng-bind]").addEventListener("click",i)}}}]),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.directive("tmsHideParentHeight",function(){return{restrict:"A",link:function(e,t,n){var o,i;if(n.tmsHideParentHeight){o=n.tmsHideParentHeight;for(var r=0,a=t.length;r<a;r++)i=t[r],i.parentElement&&window.addEventListener("resize",function(){i.classList.toggle("hidden",i.parentElement.clientHeight<o)})}}}}),o.directive("tmsScrollSpy",function(){return{restrict:"A",scope:{selector:"@selector",offset:"@",onbottom:"&",toggleSpy:"="},link:function(e,t,n){"window"===e.selector&&window.addEventListener("scroll",function(t){var n;(n=t.target.scrollingElement)&&e.toggleSpy&&e.onbottom&&angular.isFunction(e.onbottom)&&n.clientHeight+n.scrollTop+parseInt(e.offset)>=n.scrollHeight&&e.$apply(function(){e.toggleSpy=!1,e.onbottom()})})}}})},94:function(e,t,n){var o=n(78);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)}});