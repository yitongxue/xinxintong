!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=126)}({0:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=g[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(u(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(u(i.parts[o],t));g[i.id]={id:i.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s=o[1],l=o[2],c=o[3],u={css:s,media:l,sourceMap:c};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}function o(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),o(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),o(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=y++;n=b||(b=s(t)),i=d.bind(null,n,c,!1),r=d.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=p.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=f.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function d(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=x(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=h.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,y=0,w=[],x=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=g[s.id];l.refs--,o.push(l)}if(e){i(r(e,t),t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},101:function(e,t,n){var i=n(88);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;n(1)(i,r);i.locals&&(e.exports=i.locals)},126:function(e,t,n){e.exports=n(72)},16:function(e,t,n){"use strict";var i={};i.isEmpty=function(e,t){if(void 0===t)return!0;switch(e.type){case"multiple":for(var n in t)if(!0===t[n])return!1;return!0;default:return 0===t.length}},i.checkRequire=function(e,t){return void 0!==t&&!this.isEmpty(e,t)||"请填写必填题目［"+e.title+"］"},i.checkFormat=function(e,t){if("number"===e.format){if(!/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(t))return"题目［"+e.title+"］请输入数值"}else if("name"===e.format){if(/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(t))return"题目［"+e.title+"］请输入字母或者汉字，并不少于2个字符";if(t.length<2)return"题目［"+e.title+"］请输入正确的姓名（不少于2个字符）"}else if("mobile"===e.format){if(!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(t))return"题目［"+e.title+"］请输入正确的手机号（11位数字）"}else if("email"===e.format&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t))return"题目［"+e.title+"］请输入正确的邮箱";return!0},i.checkCount=function(e,t){return!(0!=e.count&&void 0!==e.count&&t.length>e.count)||"［"+e.title+"］超出上传数量（"+e.count+"）限制"},i.checkValue=function(e,t){var n;if(e.required&&"Y"===e.required&&!0!==(n=this.checkRequire(e,t)))return n;if(t){if("shorttext"===e.type&&e.format&&!0!==(n=this.checkFormat(e,t)))return n;if("multiple"===e.type&&"Y"===e.limitChoice&&e.range){var i=0;for(var r in t)t[r]&&i++;if(i<e.range[0]||i>e.range[1])return"【"+e.title+"】中最多只能选择("+e.range[1]+")项，最少需要选择("+e.range[0]+")项"}if(/image|file/.test(e.type)&&e.count&&!0!==(n=this.checkCount(e,t)))return n}return!0},i.loadRecord=function(e,t,n){if(!n)return!1;var r,o,a;for(r in n)if("member"===r)t.member=angular.extend(t.member,n.member);else if(o=e[r])if(/score|url/.test(o.type))t[r]=n[r],"url"===o.type&&(t[r]._text=i.urlSubstitute(t[r]));else if(n[r].length)if("image"===o.type){a=n[r].split(","),t[r]=[];for(var s in a)t[r].push({imgSrc:a[s]})}else if("multiple"===o.type){a=n[r].split(","),t[r]={};for(var s in a)t[r][a[s]]=!0}else t[r]=n[r];return!0},i.autoFillDefault=function(e,t){angular.forEach(e,function(e){e.defaultValue&&void 0===t[e.id]&&(t[e.id]=e.defaultValue)})},i.autoFillMember=function(e,t,n){t.members&&angular.forEach(e,function(e){if(e.schema_id&&t.members[e.schema_id]){var i,r,o;if(i=t.members[e.schema_id],r=e.id.split("."),2===r.length)n[r[1]]=i[r[1]];else if(3===r.length&&i.extattr)switch(n.extattr||(n.extattr={}),e.type){case"multiple":if(o=i.extattr[r[2]],angular.isObject(o)){n.extattr[r[2]]={};for(var a in o)o[a]&&(n.extattr[r[2]][a]=!0)}break;default:n.extattr[r[2]]=i.extattr[r[2]]}}})},i.txtSubstitute=function(e){return e.replace(/\n/g,"<br>")},i.urlSubstitute=function(e){var t;return t="",e&&(e.title&&(t+="【"+e.title+"】"),e.description&&(t+=e.description)),t+='<a href="'+e.url+'">网页链接</a>'},i.optionsSubstitute=function(e,t){var n,i,r=[];if(n=t){if(e.ops&&e.ops.length){if("score"===e.type){var o="";return e.ops.forEach(function(e,t){void 0!==n[e.v]&&(o+="<div>"+e.l+":"+n[e.v]+"</div>")}),o=o.replace(/\s\/\s$/,"")}angular.isString(n)?(i=n.split(","),e.ops.forEach(function(e){-1!==i.indexOf(e.v)&&r.push(e.l)}),n=r.join(",")):(angular.isObject(n)||angular.isArray(n))&&(n=JSON.stringify(n))}}else n="";return n},e.exports=i},19:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,i=[];if(n=e.promise,window.YixinJSBridge)window.YixinJSBridge.invoke("pickImage",{type:t,quality:100},function(t){var n;t.data&&t.data.length&&(n={imgSrc:"data:"+t.mime+";base64,"+t.data},i.push(n)),e.resolve(i)});else{var r=document.createElement("input");r.setAttribute("type","file"),r.addEventListener("change",function(t){var n,o,a,s;for(o=t.target.files.length,n=0;n<o;n++){a=t.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var l=new FileReader;l.onload=function(t){return function(n){var o={};o.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),i.push(o),document.body.removeChild(r),e.resolve(i)}}(a),l.readAsDataURL(a)}},!1),r.style.opacity=0,document.body.appendChild(r),r.click()}return n},paste:function(e,t,n){function i(e){var n=e.getAsFile(),i=new FileReader;i.onload=function(e){var n={};n.imgSrc=e.target.result,o.push(n),t.resolve(o)},i.readAsDataURL(n)}var r,o=[];return r=t.promise,e.focus(),e.addEventListener("paste",function(e){var t,n,r=e.clipboardData;if(r&&(t=r.items)&&t.length){for(var o=0;o<r.types.length;o++)if("Files"===r.types[o]){n=t[o];break}n&&"file"===n.kind&&n.type.match(/^image\//i)&&i(n)}}),r},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,i=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():i.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),i.promise},this.loadExtJs=function(e,t){var n,i=this,r=$q.defer(),o=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--o&&(t.js&&t.js.length&&i.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,i=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){i.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),i.resolve()),i.promise},this.openPlugin=function(e){var t,n,i,r,o=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],r.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),n.appendChild(i),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",o.resolve(e)},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e),o.promise}}])},20:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var i;if(i=t.promise,window.wx)window.wx.getLocation({success:function(i){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+i.latitude,r+="&lng="+i.longitude,e.get(r).then(function(e){t.resolve({errmsg:"ok",lat:i.latitude,lng:i.longitude,address:e.data.address})})}});else try{var r=window.navigator;if(null!==r){var o=r.geolocation;null!==o?o.getCurrentPosition(function(i){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+i.coords.latitude,r+="&lng="+i.coords.longitude,e.get(r).then(function(e){t.resolve({errmsg:"ok",lat:i.coords.latitude,lng:i.coords.longitude,address:e.data.address})})},function(){t.resolve({errmsg:"获取地理位置失败"})}):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return i}}},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},34:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}",""])},37:function(e,t,n){var i=n(34);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;n(1)(i,r);i.locals&&(e.exports=i.locals)},38:function(e,t,n){"use strict";var i={};i.state={modified:!1,state:"waiting",_cacheKey:!1,start:function(e,t,n){var i;if(e&&(i=e.target,("BUTTON"===i.tagName||(i=i.parentNode)&&"BUTTON"===i.tagName)&&/submit\(.*\)/.test(i.getAttribute("ng-click")))){var r;this.button=i,r=i.querySelector("span"),r.setAttribute("data-label",r.innerHTML),r.innerHTML="正在提交数据...",this.button.classList.add("submit-running")}this.state="save"==n?"waiting":"running",this._cacheKey=t||1*new Date},finish:function(e){if(this.state="waiting",this.modified=!1,this.button){var t;t=this.button.querySelector("span"),t.innerHTML=t.getAttribute("data-label"),t.removeAttribute("data-label"),this.button.classList.remove("submit-running"),this.button=null}window.localStorage&&!e&&window.localStorage.removeItem(this._cacheKey)},isRunning:function(){return"running"===this.state},cache:function(e){if(window.localStorage){var t,n;t=this._cacheKey,n=angular.copy(e),n._cacheAt=1*new Date,n=JSON.stringify(n),window.localStorage.setItem(t,n)}},fromCache:function(e){if(window.localStorage){var t,n;t=this._cacheKey,n=window.localStorage.getItem(t),e||window.localStorage.removeItem(t),n&&(n=JSON.parse(n))}return n}},e.exports=i},4:function(e,t,n){"use strict";var i=angular.module("http.ui.xxt",[]);i.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){return t.search()},j:function(n){var i=e,r=[];n&&n.length&&(i+="/"+n);for(var o=1,a=arguments.length;o<a;o++)r.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return r.length&&(i+="?"+r.join("&")),i}}}]}),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,i,r,o){function a(t,n,i){var a;return r.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),i||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),o(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function c(e,t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var n=0,i=t.length;n<i;n++)n<e.length?c(e[n],t[n]):e.push(t[n])}else if(angular.isObject(e)){for(var r in e)void 0===t[r]?delete e[r]:angular.isObject(t[r])&&angular.isObject(e[r])?c(e[r],t[r]):e[r]=t[r];for(var r in t)void 0===e[r]&&(e[r]=t[r])}}else e=t;return e}this.get=function(e,r){var o,c,u=i.defer();return r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(c=n(function(){c=null,o=a(r.showProgressText,"info")},r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success(function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(r.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(r.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),a(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,r,o){var c,u,d=i.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(u=n(function(){u=null,c=a(o.showProgressText,"info")},o.showProgressDelay)),l(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,r,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(a(e,"warning"),c=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t){return c(e,t)}}])},40:function(e,t){var n={};n.makeDialog=function(e,t){var n,i;return i=document.createElement("div"),i.setAttribute("id",e),i.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",i.innerHTML=n,document.body.appendChild(i),i.children};var i=angular.module("directive.signin",[]);i.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,i,r){var o,a,s,l;void 0===t.value&&(t.value=1*new Date/1e3),a=new Date,a.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),l='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',o=function(i){if(i.preventDefault(),i.stopPropagation(),!t.opened){var r,o;o="_dlg-"+1*new Date,r={header:"",body:l,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},r=n.makeDialog(o,r),t.opened=!0,t.dialogID=o,e(r)(t)}},i[0].querySelector("[ng-bind]").addEventListener("click",o)}}}]),i.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,i=this.clientHeight;n>i?(e=n/i*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=i/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),i.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}])},41:function(e,t,n){"use strict";n(5),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx?window.wx.ready(function(){window.wx.showOptionMenu()}):/YiXin/i.test(navigator.userAgent)&&document.addEventListener("YixinJSBridgeReady",function(){YixinJSBridge.call("showOptionMenu")},!1),n(37),n(6),n(4),n(2),n(19),n(20),n(40);var i=function(e,t){if(!window.xxt||!window.xxt.share)return!1;var n,i;n=location.protocol+"//"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(n+="&page="+t.page.name,n+="&ek="+t.enrollKey),i=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(i=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:n,desc:i,pic:t.app.pic},window.xxt.share.set(t.app.title,n,i,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}},r=angular.module("app",["ngSanitize","notice.ui.xxt","http.ui.xxt","page.ui.xxt","directive.signin","snsshare.ui.xxt"]);r.config(["$controllerProvider","$locationProvider",function(e,t){r.provider={controller:e.register},t.html5Mode(!0)}]),r.controller("ctrlMain",["$scope","$timeout","http2","tmsLocation","tmsDynaPage",function(e,t,n,o,a){function s(){n.get(o.j("askFollow","site")).then(function(){},function(e){var t,n;t=document.body,n=document.createElement("iframe"),n.setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src",o.j("askFollow","site")),n.style.display="block"})}function l(t){var n,i,r,o;o=!0,n=e,r=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),function(e){if(i&&(n=i),!n[e])return void(o=!1);i=n[e]}),o&&i.apply(n,r)}var c=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)?window.wx.closeWindow():/YiXin/i.test(navigator.userAgent)&&window.YixinJSBridge.call("closeWebView")},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,!1,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(t,n,i,r,a,l){if(t.preventDefault(),t.stopPropagation(),a&&!e.User.fan)return void s();var c=o.j("","site","app");void 0!==i&&null!==i&&i.length&&(c+="&ek="+i),void 0!==r&&null!==r&&r.length&&(c+="&rid="+r),void 0!==n&&null!==n&&n.length&&(c+="&page="+n),void 0!==l&&"Y"===l&&(c+="&newRecord=Y"),location.replace(c)},e.openMatter=function(e,t,n,i){var r="/rest/site/fe/matter?site="+o.s().site+"&id="+e+"&type="+t;n?location.replace(r):!1===i?location.href=r:window.open(r)},e.gotoLottery=function(e,t,n){e.preventDefault(),e.stopPropagation(),location.replace("/rest/app/lottery?mpid="+o.s().mpid+"&lottery="+t+"&enrollKey="+n)},e.followMp=function(t,n){/YiXin/i.test(navigator.userAgent)?location.href="yixin://opencard?pid="+e.mpa.yx_cardid:void 0!==n&&n.length?e.gotoPage(t,n):alert("请在易信中打开页面")},e.onReady=function(t){e.params?l(t):c.push(t)},n.get(o.j("get","site","app","rid","page","ek","newRecord")).then(function(n){var o=n.data,s=o.site,l=o.app,u=o.mission,d={};l.data_schemas=JSON.parse(l.data_schemas),l.data_schemas.forEach(function(e){d[e.id]=e}),l._schemasById=d,e.params=o,e.site=s,e.mission=u,e.app=l,e.user=o.user,e.activeRound=o.activeRound,i(e,o),"Y"===l.use_site_header&&s&&s.header_page&&a.loadCode(r,s.header_page),"Y"===l.use_mission_header&&u&&u.header_page&&a.loadCode(r,u.header_page),"Y"===l.use_mission_footer&&u&&u.footer_page&&a.loadCode(r,u.footer_page),"Y"===l.use_site_footer&&s&&s.footer_page&&a.loadCode(r,s.footer_page),o.page&&a.loadCode(r,o.page).then(function(){e.page=o.page}),c.length&&angular.forEach(c,PG.exec),t(function(){e.$broadcast("xxt.app.signin.ready",o)});var f;(f=document.querySelector(".loading"))&&f.parentNode.removeChild(f)})}]),e.exports=r},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,i,r){var o={img_url:i,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",o,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",o,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var i="tmsbox"+1*new Date,r={type:"",timer:null},o=function(e,t){var n;return n=document.querySelector("#"+i),null===n?(n=document.createElement("div"),n.setAttribute("id",i),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+i))&&document.body.removeChild(e)},this.error=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("danger",t),i=document.createElement("button"),i.classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("warning",t),i=document.createElement("button"),i.classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=o("success",t),r.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null},2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=o("info",t),r.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null},2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(i,a){var s,l,c;return s=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),l=o("warning",i),a&&a.length?a.forEach(function(n){if(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve(n.value)}),n.execWait){var i=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=i,c.appendChild(o),t(function(){o.innerHTML=--i},500),r.timer=e(function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),r.timer=null,s.resolve(n.value)},n.execWait)}}):(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve()}),c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.reject()})),s.promise}}])},72:function(e,t,n){"use strict";n(101);var i=n(41);i.oUtilSchema=n(16),i.oUtilSubmit=n(38),i.config(["$compileProvider",function(e){e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|sms|wxLocalResource):/)}]),i.factory("Input",["http2","$q","$timeout","tmsLocation",function(e,t,n,r){var o,a;return o=function(){},o.prototype.check=function(e,t,n){var r,o,a,s,l;if(n.data_schemas&&n.data_schemas.length){r=JSON.parse(n.data_schemas);for(var c=0,u=r.length;c<u;c++){if(o=r[c],a=o.schema,0===a.id.indexOf("member.")){var d=a.id.substr(7);-1===d.indexOf(".")?s=e.member[d]:(d=d.split("."),s=e.member.extattr[d[1]])}else s=e[a.id];if(void 0===a.required&&"Y"===o.config.required&&(a.required="Y"),a.type&&"html"!==a.type&&!0!==(l=i.oUtilSchema.checkValue(a,s)))return l}}return!0},o.prototype.submit=function(t,n){var i,o,a;a=angular.copy(t),Object.keys&&0===Object.keys(a.member).length&&delete a.member,i=r.j("record/submit","site","app"),n&&n.length&&(i+="&ek="+n);for(var s in a)o=a[s],angular.isArray(o)&&o.length&&void 0!==o[0].imgSrc&&void 0!==o[0].serverId&&o.forEach(function(e){delete e.imgSrc});return e.post(i,a,{autoBreak:!1})},{ins:function(){return a||(a=new o),a}}}]),i.directive("tmsImageInput",["$compile","$q",function(e,t){var n,i,r;return n=[],i=function(t){var n;n="<div class='form-group'><button class='btn btn-default btn-lg btn-block' ng-click=\"chooseImage(null,null,'camera')\">拍照</button></div>",n+="<div class='form-group'><button class='btn btn-default btn-lg btn-block' ng-click=\"chooseImage(null,null,'album')\">相册</button></div>",n=__util.makeDialog("pickImageFrom",{body:n}),e(n)(t)},r=function(e){var n=t.defer();return n.resolve("ok"),n.promise},{restrict:"A",controller:["$scope","$timeout","noticebox",function(e,o,a){e.beforeSubmit(function(){return r(e.data)}),e.chooseImage=function(r,s,l){if(null!==r&&(-1===n.indexOf(r)&&n.push(r),void 0===e.data[r]&&(e.data[r]=[]),null!==s&&e.data[r].length===s))return void a.warn("最多允许上传"+s+"张图片");if(window.YixinJSBridge){if(void 0===l)return e.cachedImgFieldName=r,void i(e);r=e.cachedImgFieldName,e.cachedImgFieldName=null,angular.element("#pickImageFrom").remove()}window.xxt.image.choose(t.defer(),l).then(function(t){var n,i,a,s;n=e.$root.$$phase,"$digest"===n||"$apply"===n?e.data[r]=e.data[r].concat(t):e.$apply(function(){e.data[r]=e.data[r].concat(t)}),o(function(){for(i=0,a=t.length;i<a;i++)s=t[i],document.querySelector('ul[name="'+r+'"] li:nth-last-child(2) img').setAttribute("src",s.imgSrc);e.$broadcast("xxt.signin.image.choose.done",r)})})},e.removeImage=function(e,t){e.splice(t,1)}}]}}]),i.directive("tmsFileInput",["$q",function(e){var t,n;return t=new Resumable({target:"/rest/site/fe/matter/signin/record/uploadFile?site="+LS.s().site+"&aid="+LS.s().app,testChunks:!1,chunkSize:524288}),n=function(n){var i;return i=e.defer(),t.files&&0!==t.files.length||i.resolve("empty"),t.on("progress",function(){var e,i;i=t.progress();var e=n.$root.$$phase;"$digest"===e||"$apply"===e?n.progressOfUploadFile=Math.ceil(100*i):n.$apply(function(){n.progressOfUploadFile=Math.ceil(100*i)})}),t.on("complete",function(){var e=n.$root.$$phase;"$digest"===e||"$apply"===e?n.progressOfUploadFile="完成":n.$apply(function(){n.progressOfUploadFile="完成"}),t.cancel(),i.resolve("ok")}),t.upload(),i.promise},{restrict:"A",controller:["$scope",function(e){e.progressOfUploadFile=0,e.beforeSubmit(function(){return n(e)}),e.chooseFile=function(n,i,r){var o=document.createElement("input");o.setAttribute("type","file"),void 0!==r&&o.setAttribute("accept",r),o.addEventListener("change",function(i){var r,o,a;for(o=i.target.files.length,r=0;r<o;r++)a=i.target.files[r],t.addFile(a),void 0===e.data[n]&&(e.data[n]=[]),e.data[n].push({uniqueIdentifier:t.files[0].uniqueIdentifier,name:a.name,size:a.size,type:a.type,url:""});e.$apply("data."+n),e.$broadcast("xxt.signin.file.choose.done",n)},!1),o.click()}}]}}]),i.controller("ctrlSignin",["$scope","Input","tmsLocation","noticebox",function(e,t,n,r){function o(t){var i;i=e.record?e.record.enroll_key:void 0,s.submit(e.data,i).then(function(o){var a;o.data.forword?(a=n.j("","site","app"),a+="&page="+o.data.forword,a+="&ek="+o.data.ek,location.replace(a),r.success("完成提交")):"closeWindow"===t?e.closeWindow():"_autoForward"===t?(a=n.j("","site","app"),location.replace(a),r.success("完成提交")):t&&t.length?(a=n.j("","site","app"),a+="&page="+t,a+="&ek="+o.data.ek,location.replace(a),r.success("完成提交")):(r.success("完成提交"),void 0===i&&(e.record={enroll_key:o.data.ek}),e.$broadcast("xxt.app.signin.submit.done",o.data))},function(e){l.finish()})}function a(e,t){(0,c[e])().then(function(n){e++,e<c.length?a(e,t):o(t)})}window.onbeforeunload=function(){l.modified&&l.cache(e.data)};var s,l,c;c=[],s=t.ins(),e.data={member:{}},e.supplement={},e.submitState=l=i.oUtilSubmit.state,e.beforeSubmit=function(e){-1===c.indexOf(e)&&c.push(e)},e.submit=function(t,n){var i,u,d,f;d=e.app,f=e.record,l.isRunning()||(u="/site/"+d.siteid+"/app/signin/"+d.id+"/record/"+(f?f.enroll_key:"")+"/submit",l.start(t,u),!0===(i=s.check(e.data,d,e.page))?c.length?a(0,n):o(n):(l.finish(),r.warn(i)))},e.$on("xxt.app.signin.ready",function(t,n){if(n.record&&(i.oUtilSchema.loadRecord(n.app._schemasById,e.data,n.record.data),e.record=n.record),window.localStorage){var r=l.fromCache();r&&(r.member&&delete r.member,angular.extend(e.data,r),l.modified=!0)}e.$watch("data",function(e,t){e!==t&&(l.modified=!0)},!0)});var u=!1;e.$watch("data.member.schema_id",function(t){!1===u&&t&&e.user&&(i.oUtilSchema.autoFillMember(e.user,e.data.member),u=!0)})}])},88:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".ng-cloak{display:none}body,html{height:100%;width:100%;background:#efefef;font-family:Microsoft Yahei,Arial}body{position:relative;padding:15px;font-size:16px}img{max-width:100%}ul{list-style:none}li,ul,ul.img-tiles li{margin:0;padding:0}ul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;float:left}ul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none}ul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}ul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}ul.img-tiles li.img-picker button span{font-size:36px}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px solid #fff}div[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}div[wrap=matter]>span{cursor:pointer;text-decoration:underline}#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box}",""])}});