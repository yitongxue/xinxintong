!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=137)}({0:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));g[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],c=i[3],d={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=y++;n=w||(w=s(t)),o=u.bind(null,n,c,!1),r=u.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=f.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=p.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=b(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=h.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),w=null,y=0,x=[],b=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=g[s.id];l.refs--,i.push(l)}if(e){o(r(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},110:function(e,t,n){var o=n(96);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},137:function(e,t,n){e.exports=n(79)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i,a;return a=$q.defer(),e||(console.log("参数为空"),a.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],r=document.getElementsByTagName("html")[0],r.style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",a.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),a.promise}}])},24:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,o=[];if(n=e.promise,window.YixinJSBridge)window.YixinJSBridge.invoke("pickImage",{type:t,quality:100},function(t){var n;t.data&&t.data.length&&(n={imgSrc:"data:"+t.mime+";base64,"+t.data},o.push(n)),e.resolve(o)});else{var r=document.createElement("input");r.setAttribute("type","file"),r.addEventListener("change",function(t){var n,i,a,s;for(i=t.target.files.length,n=0;n<i;n++){a=t.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var l=new FileReader;l.onload=function(t){return function(n){var i={};i.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),o.push(i),document.body.removeChild(r),e.resolve(o)}}(a),l.readAsDataURL(a)}},!1),r.style.opacity=0,document.body.appendChild(r),r.click()}return n},paste:function(e,t,n){function o(e){var n=e.getAsFile(),o=new FileReader;o.onload=function(e){var n={};n.imgSrc=e.target.result,i.push(n),t.resolve(i)},o.readAsDataURL(n)}var r,i=[];return r=t.promise,e.focus(),e.addEventListener("paste",function(e){var t,n,r=e.clipboardData;if(r&&(t=r.items)&&t.length){for(var i=0;i<r.types.length;i++)if("Files"===r.types[i]){n=t[i];break}n&&"file"===n.kind&&n.type.match(/^image\//i)&&o(n)}}),r},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},25:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var o;if(o=t.promise,window.wx)window.wx.getLocation({success:function(o){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+o.latitude,r+="&lng="+o.longitude,e.get(r).then(function(e){t.resolve({errmsg:"ok",lat:o.latitude,lng:o.longitude,address:e.data.address})})}});else try{var r=window.navigator;if(null!==r){var i=r.geolocation;null!==i?i.getCurrentPosition(function(o){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+o.coords.latitude,r+="&lng="+o.coords.longitude,e.get(r).then(function(e){t.resolve({errmsg:"ok",lat:o.coords.latitude,lng:o.coords.longitude,address:e.data.address})})},function(){t.resolve({errmsg:"获取地理位置失败"})}):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return o}}},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},38:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}",""])},4:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",[]);o.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){return t.search()},j:function(n){var o=e,r=[];n&&n.length&&(o+="/"+n);for(var i=1,a=arguments.length;i<a;i++)r.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return r.length&&(o+="?"+r.join("&")),o}}}]}),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,r,i){function a(t,n,o){var a;return r.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),i(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function c(e,t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var n=0,o=t.length;n<o;n++)n<e.length?c(e[n],t[n]):e.push(t[n])}else if(angular.isObject(e)){for(var r in e)void 0===t[r]?delete e[r]:angular.isObject(t[r])&&angular.isObject(e[r])?c(e[r],t[r]):e[r]=t[r];for(var r in t)void 0===e[r]&&(e[r]=t[r])}}else e=t;return e}this.get=function(e,r){var i,c,d=o.defer();return r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(c=n(function(){c=null,i=a(r.showProgressText,"info")},r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success(function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(r.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(r.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),a(null===e?"网络不可用":e,"danger")}),d.promise},this.post=function(e,r,i){var c,d,u=o.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(d=n(function(){d=null,c=a(i.showProgressText,"info")},i.showProgressDelay)),l(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,r,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(a(e,"warning"),c=null),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")}),u.promise},this.merge=function(e,t){return c(e,t)}}])},41:function(e,t,n){var o=n(38);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},44:function(e,t){var n={};n.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.signin",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,o,r){var i,a,s,l;void 0===t.value&&(t.value=1*new Date/1e3),a=new Date,a.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),l='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',i=function(o){if(o.preventDefault(),o.stopPropagation(),!t.opened){var r,i;i="_dlg-"+1*new Date,r={header:"",body:l,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},r=n.makeDialog(i,r),t.opened=!0,t.dialogID=i,e(r)(t)}},o[0].querySelector("[ng-bind]").addEventListener("click",i)}}}]),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}])},45:function(e,t,n){"use strict";n(5),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx?window.wx.ready(function(){window.wx.showOptionMenu()}):/YiXin/i.test(navigator.userAgent)&&document.addEventListener("YixinJSBridgeReady",function(){YixinJSBridge.call("showOptionMenu")},!1),n(41),n(6),n(4),n(2),n(24),n(25),n(44);var o=function(e,t){if(!window.xxt||!window.xxt.share)return!1;var n,o;n=location.protocol+"//"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(n+="&page="+t.page.name,n+="&ek="+t.enrollKey),o=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(o=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:n,desc:o,pic:t.app.pic},window.xxt.share.set(t.app.title,n,o,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}},r=angular.module("app",["ngSanitize","notice.ui.xxt","http.ui.xxt","page.ui.xxt","directive.signin","snsshare.ui.xxt"]);r.config(["$controllerProvider","$locationProvider",function(e,t){r.provider={controller:e.register},t.html5Mode(!0)}]),r.controller("ctrlMain",["$scope","$timeout","http2","tmsLocation","tmsDynaPage",function(e,t,n,i,a){function s(){n.get(i.j("askFollow","site")).then(function(){},function(e){var t,n;t=document.body,n=document.createElement("iframe"),n.setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src",i.j("askFollow","site")),n.style.display="block"})}function l(t){var n,o,r,i;i=!0,n=e,r=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),function(e){if(o&&(n=o),!n[e])return void(i=!1);o=n[e]}),i&&o.apply(n,r)}var c=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)?window.wx.closeWindow():/YiXin/i.test(navigator.userAgent)&&window.YixinJSBridge.call("closeWebView")},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,!1,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(t,n,o,r,a,l){if(t.preventDefault(),t.stopPropagation(),a&&!e.User.fan)return void s();var c=i.j("","site","app");void 0!==o&&null!==o&&o.length&&(c+="&ek="+o),void 0!==r&&null!==r&&r.length&&(c+="&rid="+r),void 0!==n&&null!==n&&n.length&&(c+="&page="+n),void 0!==l&&"Y"===l&&(c+="&newRecord=Y"),location.replace(c)},e.openMatter=function(e,t,n,o){var r="/rest/site/fe/matter?site="+i.s().site+"&id="+e+"&type="+t;n?location.replace(r):!1===o?location.href=r:window.open(r)},e.gotoLottery=function(e,t,n){e.preventDefault(),e.stopPropagation(),location.replace("/rest/app/lottery?mpid="+i.s().mpid+"&lottery="+t+"&enrollKey="+n)},e.followMp=function(t,n){/YiXin/i.test(navigator.userAgent)?location.href="yixin://opencard?pid="+e.mpa.yx_cardid:void 0!==n&&n.length?e.gotoPage(t,n):alert("请在易信中打开页面")},e.onReady=function(t){e.params?l(t):c.push(t)},n.get(i.j("get","site","app","rid","page","ek","newRecord")).then(function(n){var i=n.data,s=i.site,l=i.app,d=i.mission,u={};l.dataSchemas.forEach(function(e){u[e.id]=e}),l._schemasById=u,e.params=i,e.site=s,e.mission=d,e.app=l,e.user=i.user,e.activeRound=i.activeRound,o(e,i),"Y"===l.use_site_header&&s&&s.header_page&&a.loadCode(r,s.header_page),"Y"===l.use_mission_header&&d&&d.header_page&&a.loadCode(r,d.header_page),"Y"===l.use_mission_footer&&d&&d.footer_page&&a.loadCode(r,d.footer_page),"Y"===l.use_site_footer&&s&&s.footer_page&&a.loadCode(r,s.footer_page),i.page&&a.loadCode(r,i.page).then(function(){e.page=i.page}),c.length&&angular.forEach(c,PG.exec),t(function(){e.$broadcast("xxt.app.signin.ready",i)});var p;(p=document.querySelector(".loading"))&&p.parentNode.removeChild(p)})}]),e.exports=r},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,o,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:e,link:t,imgUrl:o,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:o,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,o,r){var i={img_url:o,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",i,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",i,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var o="tmsbox"+1*new Date,r={type:"",timer:null},i=function(e,t){var n;return n=document.querySelector("#"+o),null===n?(n=document.createElement("div"),n.setAttribute("id",o),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+o))&&document.body.removeChild(e)},this.error=function(t){var n,o;r.timer&&(e.cancel(r.timer),r.timer=null),n=i("danger",t),o=document.createElement("button"),o.classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,o;r.timer&&(e.cancel(r.timer),r.timer=null),n=i("warning",t),o=document.createElement("button"),o.classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=i("success",t),r.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null},2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=i("info",t),r.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null},2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(o,a){var s,l,c;return s=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),l=i("warning",o),a&&a.length?a.forEach(function(n){if(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve(n.value)}),n.execWait){var o=Math.ceil(n.execWait/500),i=document.createElement("span");i.classList.add("countdown"),i.innerHTML=o,c.appendChild(i),t(function(){i.innerHTML=--o},500),r.timer=e(function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),r.timer=null,s.resolve(n.value)},n.execWait)}}):(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve()}),c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.reject()})),s.promise}}])},79:function(e,t,n){"use strict";n(110);var o=n(45);o.factory("Record",["http2","$q","tmsLocation",function(e,t,n){var o,r,i;return o=function(){this.current={enroll_at:0}},i=!1,o.prototype.get=function(o){if(i)return!1;i=!0;var r,a,s;return r=this,s=t.defer(),a=n.j("record/get","site","app"),o&&(a+="&ek="+o),e.get(a).then(function(e){var t;t=e.data,r.current=t,s.resolve(t),i=!1}),s.promise},{ins:function(e,t,n,i){return r||(r=new o(e,t,n,i))}}}]),o.controller("ctrlRecord",["$scope","Record","$sce","tmsLocation","noticebox",function(e,t,n,o,r){var i=t.ins();e.value2Label=function(t){var o,r,a,s=[];return e.app.dataSchemas&&(r=e.app._schemasById[t])&&i.current.data&&((o=i.current.data[t])?r.ops&&r.ops.length&&(a=o.split(","),r.ops.forEach(function(e){-1!==a.indexOf(e.v)&&s.push(e.l)}),o=s.join(",")):o=""),n.trustAsHtml(o)},e.editRecord=function(t,n){n?e.gotoPage(t,n,i.current.enroll_key):r.error("没有指定登记编辑页")},e.gotoEnroll=function(t,n){if(e.app.entryRule&&e.app.entryRule.enroll&&e.app.entryRule.enroll.id){var i="/rest/site/fe/matter/enroll";i+="?site="+o.s().site,i+="&app="+e.app.entryRule.enroll.id,i+="&ignoretime=Y",location.href=i}else r.warn("没有指定关联报名表，无法填写报名信息")},i.get(o.s().ek),e.Record=i}]),o.controller("ctrlView",["$scope",function(e){}])},96:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".ng-cloak{display:none}body,html{height:100%;width:100%;background:#efefef;font-family:Microsoft Yahei,Arial}body{position:relative;padding:15px;font-size:16px}img{max-width:100%}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px dotted #eee}div[wrap].wrap-inline>*{display:inline-block;vertical-align:top;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}div[wrap] ul{list-style:none;padding:0;margin:0;max-width:50%}div[schema-type=image]>ul>li>img{width:100%}div[wrap=matter]>span{cursor:pointer;text-decoration:underline}li .wrap-inline>label{padding:7px 0;color:#444}li .wrap-inline{border-bottom:1px dashed #efefef}li .wrap-inline:last-child{border-bottom:0}#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box}",""])}});