!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=132)}({0:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},1:function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=m[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(d(i.parts[s],t))}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(d(i.parts[s],t));m[i.id]={id:i.id,refs:1,parts:r}}}}function o(e,t){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=t.base?s[0]+t.base:s[0],a=s[1],c=s[2],l=s[3],d={css:a,media:c,sourceMap:l};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}function s(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=y[y.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=g(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function r(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),s(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),s(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,i,o,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var l=x++;n=b||(b=a(t)),i=u.bind(null,n,l,!1),o=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),i=f.bind(null,n,t),o=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=p.bind(null,n),o=function(){r(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function u(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function p(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var i=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(i=w(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){return document.querySelector(e)},g=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=v.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,x=0,y=[],w=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return i(n,t),function(e){for(var s=[],r=0;r<n.length;r++){var a=n[r],c=m[a.id];c.refs--,s.push(c)}if(e){i(o(e,t),t)}for(var r=0;r<s.length;r++){var c=s[r];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var S=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},132:function(e,t,n){e.exports=n(71)},17:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,i){this.open=function(o){var s,r=n.defer(),a=n.defer(),c={result:r.promise,closed:a.promise,close:function(e){document.body.removeChild(p[0]),r.resolve(e)},dismiss:function(e){document.body.removeChild(p[0]),a.resolve(e)}};s=e.$new(!0),o.controller&&i(o.controller,{$scope:s,$tmsModalInstance:c});var l,d,u,p;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(o.template),d=angular.element("<div></div>"),d.attr({class:"modal-dialog"}).append(l),u=angular.element("<div></div>"),u.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),p=angular.element("<div></div>"),p.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(d).append(u),t(p)(s),document.body.appendChild(p[0]),c}}])},18:function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(i,o);i.locals&&(e.exports=i.locals)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,i=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():i.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),i.promise},this.loadExtJs=function(e,t){var n,i=this,o=$q.defer(),s=t.ext_js.length;return n=function(n){var r;r=document.createElement("script"),r.src=n.url,r.onload=function(){0===--s&&(t.js&&t.js.length&&i.loadJs(e,t.js),o.resolve())},document.body.appendChild(r)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,i=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){i.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),i.resolve()),i.promise},this.openPlugin=function(e){var t,n,i,o,s=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,o=document.getElementsByTagName("body")[0],o.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),n.appendChild(i),n.onclick=function(){n.parentNode.removeChild(n),o.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),o.style.cssText="overflow-y:auto",s.resolve(e)},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e),s.promise}}])},21:function(e,t,n){"use strict";n(18),n(2),n(17),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,i,o){function s(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/byUser",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function r(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/add",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function a(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/remove",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function c(e){var i,o;return o=n.defer(),i="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(i).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}function l(e,i){var o,s;return s=n.defer(),o="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(o,i).success(function(e){s.resolve(e.data)}),s.promise}function d(e,i){var o,s;return s=n.defer(),o="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(o,i).success(function(e){s.resolve(e.data)}),s.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:n,controller:["$scope","$tmsModalInstance",function(n,i){s(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},i.close(e)},n.cancel=function(){i.dismiss()}}]}).result.then(function(t){var n,i;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?r(e):a(e)),i=t.mySites){var o=[],s=[];i.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?o.push(e.id):s.push(e.id))}),o.length&&l(e,o),s.length&&d(e,s)}})},this.showSwitch=function(t,n){var o,s=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-favor"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?s.open(n):i.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,s.open(n)})})},!0),document.body.appendChild(o)}}])},22:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},29:function(e,t,n){"use strict";n(18),n(2),n(17),angular.module("forward.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsForward",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,i,o){function s(e){var i,o;return o=n.defer(),i="/rest/pl/fe/site/forward/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(i).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}this.open=function(e){var t;t='<div class="modal-header"><span class="modal-title">转发到哪个团队和频道</span></div>',t+='<div class="modal-body">',t+='<div ng-repeat="site in mySites">',t+="<span>{{site.name}}</span>",t+='<div class="checkbox" ng-repeat="chn in site.homeChannels">',t+="<label>",t+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='chn._selected' ng-change=\"choose(site,chn)\">",t+="<span>{{chn.title}}</span>",t+="</label>",t+="</div>",t+='<div ng-if="site.homeChannels.length===0"><a href="" ng-click="createChannel(site)">创建</a>团队主页频道，转发内容到团队主页</div>',t+="</div>",t+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队，转发内容到团队主页</div>',t+="</div>",t+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:t,controller:["$http","$scope","$tmsModalInstance",function(t,n,i){var o=[];s(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._recommended}),n.mySites=t}),n.createChannel=function(e){t.post("/rest/pl/fe/matter/channel/create?site="+e.id,{}).success(function(n){var i=n.data;t.post("/rest/pl/fe/site/setting/page/addHomeChannel?site="+e.id,i).success(function(t){e.homeChannels.push(t.data)})})},n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._selected="N",t.homeChannels=[],n.mySites=[t]})},n.choose=function(e,t){"Y"===t._selected?(t.siteid=e.id,o.push(t)):o.splice(o.indexOf(t),1)},n.ok=function(){var n=[];o.length&&(o.forEach(function(e){n.push({siteid:e.siteid,channelId:e.channel_id})}),t.post("/rest/pl/fe/site/forward/push?id="+e.id+"&type="+e.type,n).success(function(){i.close()}))},n.cancel=function(){i.dismiss()}}]})},this.showSwitch=function(t,n){var o,s=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-forward"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?s.open(n):i.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,s.open(n)})})},!0),document.body.appendChild(o)}}])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var s;return s=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")"})}},30:function(e,t,n){"use strict";n(18),n(17),angular.module("subscribe.ui.xxt",["modal.ui.xxt"]).service("tmsSubscribe",["$http","tmsModal",function(e,t){this.open=function(n,i){var o;o='<div class="modal-header"><span class="modal-title">关注团队，接收该团队发布的内容</span></div>',o+='<div class="modal-body">',o+='<div class="checkbox">',o+="<label>",o+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='atSite._selected'>",o+="<span>个人账户</span>",o+="<span ng-if=\"atSite._subscribed==='Y'\">（已关注）</span>",o+="</label>",o+="</div>",o+='<div class="checkbox" ng-repeat="site in mySites">',o+="<label>",o+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",o+="<span>{{site.name}}</span>",o+="<span ng-if=\"site._subscribed==='Y'\">（已关注）</span>",o+="</label>",o+="</div>",o+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行关注，方便团队内共享信息</div>',o+="</div>",o+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:o,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/site/home/get?site="+i.id+"&_="+1*new Date).success(function(e){var n=e.data;n._selected=n._subscribed,t.atSite=n}),e.get("/rest/pl/fe/site/subscribe/sitesByUser?site="+i.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}}),t.createSite=function(){e.get("/rest/pl/fe/site/create").success(function(e){var n=e.data;n._subscribed=n._selected="N",t.mySites=[n]})},t.ok=function(){var e;e={atSite:t.atSite,mySites:t.mySites},n.close(e)},t.cancel=function(){n.dismiss()}}]}).result.then(function(t){var n,o,s;if(o=t.atSite,o&&o._selected!==o._subscribed&&(n="Y"===o._selected?"/rest/site/fe/user/site/subscribe?site="+i.id+"&target="+o.id:"/rest/site/fe/user/site/unsubscribe?site="+i.id+"&target="+o.id,e.get(n)),s=t.mySites){var r=[],a=[];if(s.forEach(function(e){e._selected!==e._subscribed&&("Y"===e._selected?r.push(e.id):a.push(e.id))}),r.length){var n="/rest/pl/fe/site/subscribe/do?site="+i.id;n+="&subscriber="+r.join(","),e.get(n)}}})}}])},71:function(e,t,n){"use strict";n(2),n(30),n(72),n(21),n(29);var i=angular.module("app",["ui.bootstrap","ui.tms","page.ui.xxt","subscribe.ui.xxt","contribute.ui.xxt","favor.ui.xxt","forward.ui.xxt"]);i.provider("srvUser",function(){var e;this.$get=["$q","http2",function(t,n){return{getSiteUser:function(i){return e?e.promise:(e=t.defer(),n.get("/rest/site/fe/user/get?site="+i,function(t){e.resolve(t.data)}),e.promise)}}}]}),i.config(["$controllerProvider","$uibTooltipProvider",function(e,t){i.provider={controller:e.register},t.setTriggers({show:"hide"})}]),i.directive("autoHeight",["$window",function(e){return{restrict:"A",scope:{},link:function(t,n,i){var o=e.innerHeight;n.css("min-height",o-52-50+"px")}}}]),i.directive("imageonload",function(){return{restrict:"A",link:function(e,t,n){t.bind("load",function(){e.$apply(n.imageonload)})}}}),i.controller("ctrlMain",["$scope","$q","$uibModal","http2","srvUser","tmsDynaPage","tmsSubscribe","tmsContribute","tmsFavor","tmsForward",function(e,t,n,o,s,r,a,c,l,d){function u(){var e=t.defer(),n="/rest/pl/fe/site/create?_="+1*new Date;return o.get(n,function(t){e.resolve(t.data)}),e.promise}function p(e,t){var n="/rest/pl/fe/template/purchase?template="+t.id;n+="&site="+e.id,o.get(n,function(n){o.get("/rest/pl/fe/matter/enroll/createByOther?site="+e.id+"&template="+t.id,function(t){location.href="/rest/pl/fe/matter/enroll?id="+t.data.id+"&site="+e.id})})}var f,m=location.search,h=m.match(/site=([^&]*)/)[1],v=!1,g=!1;$("body").click(function(){v&&($("#popoverUseTempateAsAdmin").trigger("hide"),v=!1),g&&($("#popoverFavorTempateAsAdmin").trigger("hide"),g=!1)}),e.favorTemplate=function(e,t){if(f.loginExpire){var i="/rest/pl/fe/template/siteCanFavor?template="+e.id+"&_="+1*new Date;o.get(i,function(t){var i=t.data;n.open({templateUrl:"favorTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(e,t){e.mySites=i,e.ok=function(){var e=[];i.forEach(function(t){"Y"===t._selected&&e.push(t)}),e.length?t.close(e):t.dismiss()},e.cancel=function(){t.dismiss()}}]}).result.then(function(t){var n="/rest/pl/fe/template/favor?template="+e.id,i=[];t.forEach(function(e){i.push(e.id)}),n+="&site="+i.join(","),o.get(n,function(e){})})})}},e.useTemplate=function(e,t){if(f.loginExpire){var i="/rest/pl/fe/site/list?_="+1*new Date;o.get(i,function(t){var i=t.data;1===i.length?p(i[0],e):0===i.length?u().then(function(t){p(t,e)}):n.open({templateUrl:"useTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(e,t){var n;e.mySites=i,e.data=n={},e.ok=function(){void 0!==n.index?t.close(i[n.index]):t.dismiss()},e.cancel=function(){t.dismiss()}}]}).result.then(function(t){p(t,e)})})}},e.contributeSite=function(){if(e.user.loginExpire)c.open(f,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"contributeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},e.subscribeSite=function(){if(e.user.loginExpire)a.open(f,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"subscribeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},o.get("/rest/site/home/get?site="+h,function(t){s.getSiteUser(h).then(function(t){if(e.user=f=t,window.sessionStorage){var n;(n=window.sessionStorage.getItem("xxt.site.home.auth.pending"))&&(window.sessionStorage.removeItem("xxt.site.home.auth.pending"),f.loginExpire&&(n=JSON.parse(n),e[n.name].apply(e,n.args||[])))}}),r.loadCode(i,t.data.home_page).then(function(){t.data.heading_pic||(t.data.heading_pic="/static/img/avatar.png"),e.site=t.data,e.page=t.data.home_page})})}]),e.exports=i},72:function(e,t,n){"use strict";n(18),n(17),angular.module("contribute.ui.xxt",["modal.ui.xxt"]).service("tmsContribute",["$http","tmsModal",function(e,t){this.open=function(n,i){var o;o='<div class="modal-header"><span class="modal-title">投稿，将自己团队中的内容发给当前团队</span></div>',o+='<div class="modal-body">',o+="<dl>",o+='<dd ng-repeat="m in selectedMatters" ng-click="unchooseMatter(m)"><span>{{m.title}}</span></dd>',o+="</dl>",o+='<select ng-options="site.id as site.name for site in mySites" ng-model="data.chooseSite" ng-change="chooseSite()"></select>',o+="<dl>",o+='<dd ng-repeat="m in matters" ng-click="chooseMatter(m)"><span>{{m.title}}</span></dd>',o+="</dl>",o+="</div>",o+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:o,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/pl/fe/site/list?site="+i.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}});var o,s;t.data=o={},t.selectedMatters=s=[],t.chooseSite=function(){e.get("/rest/pl/fe/matter/article/list?site="+o.chooseSite).success(function(e){t.matters=e.data.docs})},t.chooseMatter=function(e){-1===s.indexOf(e)&&s.push(e)},t.unchooseMatter=function(e){s.splice(s.indexOf(e),1)},t.ok=function(){s.length?e.post("/rest/pl/fe/site/contribute/do?site="+i.id,s).success(function(e){n.close()}):n.close()},t.cancel=function(){n.dismiss()}}]})}}])}});