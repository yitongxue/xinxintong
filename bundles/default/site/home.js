!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=189)}({0:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=h[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(u(o.parts[s],t))}else{for(var r=[],s=0;s<o.parts.length;s++)r.push(u(o.parts[s],t));h[o.id]={id:o.id,refs:1,parts:r}}}}function i(e,t){for(var n=[],o={},i=0;i<e.length;i++){var s=e[i],r=t.base?s[0]+t.base:s[0],a=s[1],c=s[2],l=s[3],u={css:a,media:c,sourceMap:l};o[r]?o[r].parts.push(u):n.push(o[r]={id:r,parts:[u]})}return n}function s(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function r(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),s(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),s(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,o,i,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var l=x++;n=b||(b=a(t)),o=d.bind(null,n,l,!1),i=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=p.bind(null,n,t),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=f.bind(null,n),i=function(){r(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function d(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=S(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,i=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||s)&&(o=w(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=m.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,x=0,y=[],w=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return o(n,t),function(e){for(var s=[],r=0;r<n.length;r++){var a=n[r],c=h[a.id];c.refs--,s.push(c)}if(e){o(i(e,t),t)}for(var r=0;r<s.length;r++){var c=s[r];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var S=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},1:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var s=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(o[s]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},189:function(e,t,n){e.exports=n(97)},2:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",["ng"]);o.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],o=0,i=arguments.length;o<i;o++)n.push(arguments[o]+"="+(e[arguments[o]]||""));return n.join("&")}return e},j:function(n){var o=e,i=[];n&&n.length&&(o+="/"+n);for(var s=1,r=arguments.length;s<r;s++)i.push(arguments[s]+"="+(t.search()[arguments[s]]||""));return i.length&&(o+="?"+i.join("&")),o},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,i,s){function r(t,n,o){var r;return i.trustAsHtml(t),r=angular.element("<div></div>"),r.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||r[0].addEventListener("click",function(){document.body.removeChild(r[0])},!0),s(r)(e),document.body.appendChild(r[0]),r[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t,n){if(t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var o=0,i=t.length;o<i;o++)o<e.length?l(e[o],t[o],n):e.push(t[o])}else if(angular.isObject(e)){for(var s in e)n&&-1!==n.indexOf(s)||(void 0===t[s]?delete e[s]:angular.isObject(t[s])&&angular.isObject(e[s])?l(e[s],t[s],n):e[s]=t[s]);for(var s in t)n&&-1!==n.indexOf(s)||void 0===e[s]&&(e[s]=t[s])}}else e=t;return!0}}this.get=function(e,i){var s,l,u=o.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(l=n(function(){l=null,s=r(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&n.cancel(l),s&&(a(s),s=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&r(e,"warning"),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),r(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(l&&n.cancel(l),s&&(a(s),s=null)),r(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,i,s){var l,u,d=o.defer();return s=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},s),!0===s.showProgress&&(u=n(function(){u=null,l=r(s.showProgressText,"info")},s.showProgressDelay)),c(s)&&(e+=(-1===e.indexOf("?")?"?":"&")+s.page.j()),t.post(e,i,s).success(function(e){if(s.page&&void 0!==e.data.total&&(s.page.total=e.data.total),!0===s.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),s.parseResponse)if(angular.isString(e)){if(s.autoNotice&&(r(e,"warning"),l=null),s.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(s.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),r(t,"warning")}if(s.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===s.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),r(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&l(e,t,n)}}])},23:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,o){this.open=function(i){var s,r=n.defer(),a=n.defer(),c={result:r.promise,closed:a.promise,close:function(e){document.body.removeChild(f[0]),r.resolve(e)},dismiss:function(e){document.body.removeChild(f[0]),a.resolve(e)}};s=e.$new(!0),i.controller&&o(i.controller,{$scope:s,$tmsModalInstance:c});var l,u,d,f;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(i.template),u=angular.element("<div></div>"),u.attr({class:"modal-dialog"}).append(l),d=angular.element("<div></div>"),d.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),f=angular.element("<div></div>"),f.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(u).append(d),t(f)(s),document.body.appendChild(f[0]),c}}])},24:function(e,t,n){var o=n(36);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(0)(o,i);o.locals&&(e.exports=o.locals)},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var s;return s=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(s)+")"})}},34:function(e,t,n){"use strict";n(24),n(4),n(23),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,i){function s(e){var o,i;return i=n.defer(),o="/rest/site/fe/user/favor/byUser",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){i.resolve(e.data)}),i.promise}function r(e){var o,i;return i=n.defer(),o="/rest/site/fe/user/favor/add",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){i.resolve(e.data)}),i.promise}function a(e){var o,i;return i=n.defer(),o="/rest/site/fe/user/favor/remove",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){i.resolve(e.data)}),i.promise}function c(e){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success(function(e){0==e.err_code&&i.resolve(e.data)}),i.promise}function l(e,o){var i,s;return s=n.defer(),i="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(i,o).success(function(e){s.resolve(e.data)}),s.promise}function u(e,o){var i,s;return s=n.defer(),i="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(i,o).success(function(e){s.resolve(e.data)}),s.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',i.open({template:n,controller:["$scope","$tmsModalInstance",function(n,o){s(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},o.close(e)},n.cancel=function(){o.dismiss()}}]}).result.then(function(t){var n,o;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?r(e):a(e)),o=t.mySites){var i=[],s=[];o.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?i.push(e.id):s.push(e.id))}),i.length&&l(e,i),s.length&&u(e,s)}})},this.showSwitch=function(t,n){var i,s=this;i=document.createElement("div"),i.classList.add("tms-switch","tms-switch-favor"),i.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),e.$apply(function(){t.loginExpire?s.open(n):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,s.open(n)})})},!0),document.body.appendChild(i)}}])},36:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var i;i=document.createElement("script"),i.src=e[t],i.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(i)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,i=$q.defer(),s=t.ext_js.length;return n=function(n){var r;r=document.createElement("script"),r.src=n.url,r.onload=function(){0===--s&&(t.js&&t.js.length&&o.loadJs(e,t.js),i.resolve())},document.body.appendChild(r)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),i.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,i,s,r;return r=$q.defer(),e||(console.log("参数为空"),r.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,s=document.getElementsByTagName("body")[0],i=document.getElementsByTagName("html")[0],i.style.cssText="height:100%;",s.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),s.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),s.style.cssText="overflow-y:auto",r.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),r.promise}}])},46:function(e,t,n){"use strict";n(24),n(4),n(23),angular.module("forward.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsForward",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,i){function s(e){var o,i;return i=n.defer(),o="/rest/pl/fe/site/forward/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success(function(e){0==e.err_code&&i.resolve(e.data)}),i.promise}this.open=function(e){var t;t='<div class="modal-header"><span class="modal-title">转发到哪个团队和频道</span></div>',t+='<div class="modal-body">',t+='<div ng-repeat="site in mySites">',t+="<span>{{site.name}}</span>",t+='<div class="checkbox" ng-repeat="chn in site.homeChannels">',t+="<label>",t+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='chn._selected' ng-change=\"choose(site,chn)\">",t+="<span>{{chn.title}}</span>",t+="</label>",t+="</div>",t+='<div ng-if="site.homeChannels.length===0"><a href="" ng-click="createChannel(site)">创建</a>团队主页频道，转发内容到团队主页</div>',t+="</div>",t+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队，转发内容到团队主页</div>',t+="</div>",t+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',i.open({template:t,controller:["$http","$scope","$tmsModalInstance",function(t,n,o){var i=[];s(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._recommended}),n.mySites=t}),n.createChannel=function(e){t.post("/rest/pl/fe/matter/channel/create?site="+e.id,{}).success(function(n){var o=n.data;t.post("/rest/pl/fe/site/setting/page/addHomeChannel?site="+e.id,o).success(function(t){e.homeChannels.push(t.data)})})},n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._selected="N",t.homeChannels=[],n.mySites=[t]})},n.choose=function(e,t){"Y"===t._selected?(t.siteid=e.id,i.push(t)):i.splice(i.indexOf(t),1)},n.ok=function(){var n=[];i.length&&(i.forEach(function(e){n.push({siteid:e.siteid,channelId:e.channel_id})}),t.post("/rest/pl/fe/site/forward/push?id="+e.id+"&type="+e.type,n).success(function(){o.close()}))},n.cancel=function(){o.dismiss()}}]})},this.showSwitch=function(t,n){var i,s=this;i=document.createElement("div"),i.classList.add("tms-switch","tms-switch-forward"),i.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),e.$apply(function(){t.loginExpire?s.open(n):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,s.open(n)})})},!0),document.body.appendChild(i)}}])},47:function(e,t,n){"use strict";n(24),n(23),angular.module("subscribe.ui.xxt",["modal.ui.xxt"]).service("tmsSubscribe",["$http","tmsModal",function(e,t){this.open=function(n,o){var i;i='<div class="modal-header"><span class="modal-title">关注团队，接收该团队发布的内容</span></div>',i+='<div class="modal-body">',i+='<div class="checkbox">',i+="<label>",i+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='atSite._selected'>",i+="<span>个人账户</span>",i+="<span ng-if=\"atSite._subscribed==='Y'\">（已关注）</span>",i+="</label>",i+="</div>",i+='<div class="checkbox" ng-repeat="site in mySites">',i+="<label>",i+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",i+="<span>{{site.name}}</span>",i+="<span ng-if=\"site._subscribed==='Y'\">（已关注）</span>",i+="</label>",i+="</div>",i+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行关注，方便团队内共享信息</div>',i+="</div>",i+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:i,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/site/home/get?site="+o.id+"&_="+1*new Date).success(function(e){var n=e.data;n._selected=n._subscribed,t.atSite=n}),e.get("/rest/pl/fe/site/subscribe/sitesByUser?site="+o.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}}),t.createSite=function(){e.get("/rest/pl/fe/site/create").success(function(e){var n=e.data;n._subscribed=n._selected="N",t.mySites=[n]})},t.ok=function(){var e;e={atSite:t.atSite,mySites:t.mySites},n.close(e)},t.cancel=function(){n.dismiss()}}]}).result.then(function(t){var n,i,s;if(i=t.atSite,i&&i._selected!==i._subscribed&&(n="Y"===i._selected?"/rest/site/fe/user/site/subscribe?site="+o.id+"&target="+i.id:"/rest/site/fe/user/site/unsubscribe?site="+o.id+"&target="+i.id,e.get(n)),s=t.mySites){var r=[],a=[];if(s.forEach(function(e){e._selected!==e._subscribed&&("Y"===e._selected?r.push(e.id):a.push(e.id))}),r.length){var n="/rest/pl/fe/site/subscribe/do?site="+o.id;n+="&subscriber="+r.join(","),e.get(n)}}})}}])},97:function(e,t,n){"use strict";n(2),n(4),n(47),n(98),n(34),n(46);var o=angular.module("app",["ui.bootstrap","ui.tms","http.ui.xxt","page.ui.xxt","subscribe.ui.xxt","contribute.ui.xxt","favor.ui.xxt","forward.ui.xxt"]);o.provider("srvUser",function(){var e;this.$get=["$q","http2",function(t,n){return{getSiteUser:function(o){return e?e.promise:(e=t.defer(),n.get("/rest/site/fe/user/get?site="+o).then(function(t){e.resolve(t.data)}),e.promise)}}}]}),o.config(["$controllerProvider","$uibTooltipProvider",function(e,t){o.provider={controller:e.register},t.setTriggers({show:"hide"})}]),o.directive("autoHeight",["$window",function(e){return{restrict:"A",scope:{},link:function(t,n,o){var i=e.innerHeight;n.css("min-height",i-52-50+"px")}}}]),o.directive("imageonload",function(){return{restrict:"A",link:function(e,t,n){t.bind("load",function(){e.$apply(n.imageonload)})}}}),o.controller("ctrlMain",["$scope","$q","$uibModal","http2","srvUser","tmsDynaPage","tmsSubscribe","tmsContribute","tmsFavor","tmsForward",function(e,t,n,i,s,r,a,c,l,u){function d(){var e=t.defer(),n="/rest/pl/fe/site/create?_="+1*new Date;return i.get(n).then(function(t){e.resolve(t.data)}),e.promise}function f(e,t){var n="/rest/pl/fe/template/purchase?template="+t.id;n+="&site="+e.id,i.get(n).then(function(n){i.get("/rest/pl/fe/matter/enroll/createByOther?site="+e.id+"&template="+t.id).then(function(t){location.href="/rest/pl/fe/matter/enroll?id="+t.data.id+"&site="+e.id})})}var p,h=location.search,g=h.match(/site=([^&]*)/)[1],m=!1,v=!1;$("body").click(function(){m&&($("#popoverUseTempateAsAdmin").trigger("hide"),m=!1),v&&($("#popoverFavorTempateAsAdmin").trigger("hide"),v=!1)}),e.favorTemplate=function(e,t){if(p.loginExpire){var o="/rest/pl/fe/template/siteCanFavor?template="+e.id+"&_="+1*new Date;i.get(o).then(function(t){var o=t.data;n.open({templateUrl:"favorTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(e,t){e.mySites=o,e.ok=function(){var e=[];o.forEach(function(t){"Y"===t._selected&&e.push(t)}),e.length?t.close(e):t.dismiss()},e.cancel=function(){t.dismiss()}}]}).result.then(function(t){var n="/rest/pl/fe/template/favor?template="+e.id,o=[];t.forEach(function(e){o.push(e.id)}),n+="&site="+o.join(","),i.get(n).then(function(e){})})})}},e.useTemplate=function(e,t){if(p.loginExpire){var o="/rest/pl/fe/site/list?_="+1*new Date;i.get(o).then(function(t){var o=t.data;1===o.length?f(o[0],e):0===o.length?d().then(function(t){f(t,e)}):n.open({templateUrl:"useTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(e,t){var n;e.mySites=o,e.data=n={},e.ok=function(){void 0!==n.index?t.close(o[n.index]):t.dismiss()},e.cancel=function(){t.dismiss()}}]}).result.then(function(t){f(t,e)})})}},e.contributeSite=function(){if(e.user.loginExpire)c.open(p,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"contributeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},e.subscribeSite=function(){if(e.user.loginExpire)a.open(p,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"subscribeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},i.get("/rest/site/home/get?site="+g).then(function(t){s.getSiteUser(g).then(function(t){if(e.user=p=t,window.sessionStorage){var n;(n=window.sessionStorage.getItem("xxt.site.home.auth.pending"))&&(window.sessionStorage.removeItem("xxt.site.home.auth.pending"),p.loginExpire&&(n=JSON.parse(n),e[n.name].apply(e,n.args||[])))}}),r.loadCode(o,t.data.home_page).then(function(){t.data.heading_pic||(t.data.heading_pic="/static/img/avatar.png"),e.site=t.data,e.page=t.data.home_page})})}]),e.exports=o},98:function(e,t,n){"use strict";n(24),n(23),angular.module("contribute.ui.xxt",["modal.ui.xxt"]).service("tmsContribute",["$http","tmsModal",function(e,t){this.open=function(n,o){var i;i='<div class="modal-header"><span class="modal-title">投稿，将自己团队中的内容发给当前团队</span></div>',i+='<div class="modal-body">',i+="<dl>",i+='<dd ng-repeat="m in selectedMatters" ng-click="unchooseMatter(m)"><span>{{m.title}}</span></dd>',i+="</dl>",i+='<select ng-options="site.id as site.name for site in mySites" ng-model="data.chooseSite" ng-change="chooseSite()"></select>',i+="<dl>",i+='<dd ng-repeat="m in matters" ng-click="chooseMatter(m)"><span>{{m.title}}</span></dd>',i+="</dl>",i+="</div>",i+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:i,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/pl/fe/site/list?site="+o.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}});var i,s;t.data=i={},t.selectedMatters=s=[],t.chooseSite=function(){e.get("/rest/pl/fe/matter/article/list?site="+i.chooseSite).success(function(e){t.matters=e.data.docs})},t.chooseMatter=function(e){-1===s.indexOf(e)&&s.push(e)},t.unchooseMatter=function(e){s.splice(s.indexOf(e),1)},t.ok=function(){s.length?e.post("/rest/pl/fe/site/contribute/do?site="+o.id,s).success(function(e){n.close()}):n.close()},t.cancel=function(){n.dismiss()}}]})}}])}});