!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=99)}({0:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(d(o.parts[i],t));m[o.id]={id:o.id,refs:1,parts:s}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],a=i[1],c=i[2],l=i[3],d={css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(d):n.push(o[s]={id:s,parts:[d]})}return n}function i(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=g(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=y++;n=b||(b=a(t)),o=u.bind(null,n,l,!1),r=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=p.bind(null,n,t),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=f.bind(null,n),r=function(){s(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=k(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){return document.querySelector(e)},g=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=v.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,y=0,x=[],k=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=m[a.id];c.refs--,i.push(c)}if(e){o(r(e,t),t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},10:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i=$q.defer();return document.documentElement.scrollTop=0,r=document.getElementsByTagName("body")[0],r.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",i.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),i.promise}}])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},4:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,o){this.open=function(r){var i,s=n.defer(),a=n.defer(),c={result:s.promise,closed:a.promise,close:function(e){document.body.removeChild(f[0]),s.resolve(e)},dismiss:function(e){document.body.removeChild(f[0]),a.resolve(e)}};i=e.$new(!0),r.controller&&o(r.controller,{$scope:i,$tmsModalInstance:c});var l,d,u,f;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(r.template),d=angular.element("<div></div>"),d.attr({class:"modal-dialog"}).append(l),u=angular.element("<div></div>"),u.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),f=angular.element("<div></div>"),f.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(d).append(u),t(f)(i),document.body.appendChild(f[0]),c}}])},47:function(e,t,n){"use strict";n(9),/MicroMessenger/.test(navigator.userAgent)&&(signPackage.jsApiList=["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"],wx.config(signPackage)),angular.module("app",["ui.bootstrap","page.ui.xxt","favor.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","tmsFavor","tmsDynaPage",function(e,t,n,o,r){var i,s,a;i=t.search().site,s=t.search().id,a=t.search().inviteToken,e.elSiteCard=angular.element(document.querySelector("#site-card")),e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.favor=function(e,t){e.loginExpire?o.open(t):r.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,o.open(t)})},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+a:r.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+a})},e.siteUser=function(e){var t="http://"+location.host;t+="/rest/site/fe/user",t+="?site="+i,location.href=t},n.get("/rest/site/home/get?site="+i).success(function(t){e.siteInfo=t.data,n.get("/rest/site/fe/matter/link/get?site="+i+"&id="+s).success(function(t){if(t.data){if(e.link=t.data.link,e.user=t.data.user,e.qrcode="/rest/site/fe/matter/link/qrcode?site="+i+"&url="+encodeURIComponent(location.href),-1!==Object.keys(e.link).indexOf("invite")){var o=e.link.fullUrl.length;"?"!==e.link.fullUrl.charAt(o-1)?e.link.fullUrl=e.link.fullUrl+"&inviteToken="+a:e.link.fullUrl=e.link.fullUrl+"inviteToken="+a}document.querySelector("#link>iframe").setAttribute("src",e.link.fullUrl),n.post("/rest/site/fe/matter/logAccess?site="+i+"&id="+s+"&type=link&title="+e.link.title,{search:location.search.replace("?",""),referer:document.referrer})}}).error(function(e,t){})})}])},5:function(e,t,n){var o=n(10);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},9:function(e,t,n){"use strict";n(5),n(2),n(4),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,r){function i(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/byUser",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function s(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/add",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function a(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/remove",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function c(e){var o,r;return r=n.defer(),o="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success(function(e){0==e.err_code&&r.resolve(e.data)}),r.promise}function l(e,o){var r,i;return i=n.defer(),r="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(r,o).success(function(e){i.resolve(e.data)}),i.promise}function d(e,o){var r,i;return i=n.defer(),r="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(r,o).success(function(e){i.resolve(e.data)}),i.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',r.open({template:n,controller:["$scope","$tmsModalInstance",function(n,o){i(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},o.close(e)},n.cancel=function(){o.dismiss()}}]}).result.then(function(t){var n,o;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?s(e):a(e)),o=t.mySites){var r=[],i=[];o.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?r.push(e.id):i.push(e.id))}),r.length&&l(e,r),i.length&&d(e,i)}})},this.showSwitch=function(t,n){var r,i=this;r=document.createElement("div"),r.classList.add("tms-switch","tms-switch-favor"),r.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),e.$apply(function(){t.loginExpire?i.open(n):o.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,i.open(n)})})},!0),document.body.appendChild(r)}}])},99:function(e,t,n){e.exports=n(47)}});