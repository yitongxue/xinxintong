!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=158)}({0:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},1:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=m[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(u(r.parts[o],t));m[r.id]={id:r.id,refs:1,parts:s}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a=o[1],c=o[2],l=o[3],u={css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function o(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),o(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),o(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var l=y++;n=b||(b=a(t)),r=d.bind(null,n,l,!1),i=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),i=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function d(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=x(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=g.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,y=0,w=[],x=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=m[a.id];c.refs--,o.push(c)}if(e){r(i(e,t),t)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},11:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var r,i,o,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,r,i){this.type=t,this.elapse=n||1*new Date-e,this.biz=r,i&&(this.text=i)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&(n=t.getItem(s),n=n?JSON.parse(n):{},n[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,r){var i,o;0===this.events.length?(this.start=1*new Date,i=new a(this.start,t,0,n,r),this.events.push(i),e(this)):(i=new a(this.start,t,null,n,r),o=this.events[this.events.length-1],(o.type!==i.type||i.elapse-o.elapse>1e3)&&(this.events.push(i),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},l=function(e){var r;this.begin=function(){this.cancel(r),r=t(function(){var t,r,i;e.stop(),e.sendUrl&&(t=window.localStorage)&&(r=t.getItem(s),r=JSON.parse(r),i=r[e.sendUrl],delete r[e.sendUrl],r=t.setItem(s,JSON.stringify(r)),n.post(e.sendUrl,{start:i.start,events:i.events},{showProgress:!1}))},5e3)},this.cancel=function(){r&&(t.cancel(r),r=null)}};if((r=window.localStorage)&&(i=r.getItem(s),i=i?JSON.parse(i):{}))for(var u in i)i&&i[u]&&(o=i[u],o.closing&&"Y"===o.closing&&(delete i[u],i=r.setItem(s,JSON.stringify(i)),n.post(o.sendUrl,{start:o.start,events:o.events}).then(function(){})));return{restrict:"A",link:function(e,n,r){var i=new c,o=new l(i);!r.readySign&&r.sendUrl&&(i.sendUrl=r.sendUrl),i.pushEvent("load"),n.on("click",function(e){var t,n,r;t=e.target,t.hasAttribute("trace-biz")&&(n=t.getAttribute("trace-biz"),!n&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),r=t.innerText),i.pushEvent("click",n,r),o.begin()}),n.on("touchend",function(e){i.pushEvent("touchend"),o.begin()}),window.addEventListener("scroll",function(e){i.pushEvent("scroll"),o.begin()}),window.addEventListener("beforeunload",function(e){i.pushEvent("beforeunload"),i.stop(),o.cancel()}),r.readySign&&e.$watch(r.readySign,function(e){e&&t(function(){i.setSendUrl(r.sendUrl)})}),o.begin()}}}])},117:function(e,t){e.exports="<div class='col-md-12'>\n    <div class='form-group'>\n        <button class='btn btn-default' ng-click=\"gotoTeamHome()\"><span class='glyphicon glyphicon-arrow-left'></span> 返回</button>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div class='form-group'>\n                <label>团队名称</label>\n                <input type='text' class='form-control' ng-model=\"team.title\" ng-change=\"update('title')\">\n            </div>\n            <div class='form-group'>\n                <label>团队介绍</label>\n                <textarea class='form-control' ng-model=\"team.summary\" ng-change=\"update('summary')\"></textarea>\n            </div>\n        </div>\n    </div>\n    <button class='btn' ng-class=\"modified?'btn-success':'btn-default'\" ng-disabled=\"!modified\" ng-click=\"submit()\">完成设置</button>\n</div>"},118:function(e,t){e.exports='<div class=\'col-md-12\'>\n    <div class=\'form-group\'>\n        <label>团队名称</label>\n        <input type=\'text\' class=\'form-control\' ng-model="team.title">\n    </div>\n    <div class=\'form-group\'>\n        <label>团队介绍</label>\n        <textarea class=\'form-control\' ng-model="team.summary"></textarea>\n    </div>\n    <section ng-if="schemas.length">\n        <hr>\n        <div class=\'form-group\' ng-repeat="schema in schemas" ng-switch on="schema.type">\n            <label ng-bind="schema.title" ng-if="schema.type!==\'html\'"></label>\n            <input type=\'text\' class=\'form-control\' ng-model="member[schema.id]" ng-switch-when="shorttext">\n            <textarea class="form-control" ng-model="member[schema.id]" rows="3" ng-switch-when="longtext"></textarea>\n            <ul class=\'list-unstyled\' ng-switch-when="single">\n                <li class="radio" ng-repschemat="op in schema.ops">\n                    <label>\n                        <input type="radio" name="{{action.id+\'_\'+schema.id}}" value="{{op.v}}" ng-model="member[schema.id]"><span>{{op.l}}</span></label>\n                </li>\n            </ul>\n            <ul class=\'list-unstyled\' ng-switch-when="multiple">\n                <li class="checkbox" ng-repschemat="op in schema.ops">\n                    <label>\n                        <input type="checkbox" ng-model="member[schema.id][op.v]"><span>{{op.l}}</span></label>\n                </li>\n            </ul>\n            <div ng-switch-when="date" tms-date="Y" tms-date-value="member[schema.id]">\n                <div ng-bind="member[schema.id]*1000|date:\'yy-MM-dd HH:mm\'" class="form-control"></div>\n            </div>\n            <div tms-image-input="Y" ng-switch-when="image">\n                <ul class="img-tiles clschemarfix list-unstyled" name="{{schema.id}}">\n                    <li wrap="img" ng-repschemat="img in member[schema.id]" class="img-thumbnail">\n                        <img flex-img>\n                        <button class="btn btn-default btn-xs" ng-click="removeImage(schema,$index)"><span class="glyphicon glyphicon-remove"></span></button>\n                    </li>\n                    <li class="img-picker">\n                        <button class="btn btn-default" ng-click="chooseImage(schema)"><span class="glyphicon glyphicon-picture"></span>\n                            <br>选择图片</button>\n                    </li>\n                </ul>\n            </div>\n            <div ng-switch-when="html">\n                <div ng-bind-html="schema.content"></div>\n            </div>\n        </div>\n    </section>\n    <button class=\'btn btn-default\' ng-click="submit()">完成组建</button>\n</div>'},119:function(e,t){e.exports="<div class='col-md-12'>\n    <div class='form-group'>\n        <button class='btn btn-default' ng-click=\"gotoHome()\"><span class='glyphicon glyphicon-arrow-left'></span> 活动首页</button>\n        <button class='btn btn-default' ng-click=\"config()\"><span class='glyphicon glyphicon-cog'></span> 团队设置</button>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div class='form-group'>\n                <label ng-bind=\"::team.title\"></label>\n            </div>\n            <div class='form-group'>\n                <div class='help-block' ng-bind=\"::team.summary\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">已有成员</div>\n        <div class=\"panel-body\">\n            <div class='list-group'>\n                <div class='list-group-item' ng-repeat=\"mem in members\">\n                    <span ng-bind=\"::mem.nickname\"></span><span ng-if=\"mem.is_leader==='Y'\">（组长）</span><button ng-if=\"mem.is_leader==='N'&&user.records[team.team_id].is_leader==='Y'\" class='btn btn-default btn-xs pull-right' ng-click=\"quit(mem)\">移出</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class='form-group'>\n        <button class='btn btn-default' ng-click=\"invite()\"><span class='glyphicon glyphicon-share-alt'></span> 发起邀请</button>\n    </div>\n</div>"},120:function(e,t){e.exports='<div class="modal-header">\n    <button class="close" ng-click="close()">×</button>\n    <h5 class="modal-title">邀请</h5>\n</div>\n<div class="modal-body">\n    <div class="form-group">\n        <div style=\'word-break:break-all;\' ng-bind="::inviteUrl"></div>\n    </div>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-default" ng-click="close()">关闭</button>\n</div>'},158:function(e,t,n){e.exports=n(80)},2:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",["ng"]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,i=arguments.length;r<i;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,i=[];n&&n.length&&(r+="/"+n);for(var o=1,s=arguments.length;o<s;o++)i.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return i.length&&(r+="?"+i.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,i,o){function s(t,n,r){var s;return i.trustAsHtml(t),s=angular.element("<div></div>"),s.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||s[0].addEventListener("click",function(){document.body.removeChild(s[0])},!0),o(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t,n){if(t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var r=0,i=t.length;r<i;r++)r<e.length?l(e[r],t[r],n):e.push(t[r])}else if(angular.isObject(e)){for(var o in e)n&&-1!==n.indexOf(o)||(void 0===t[o]?delete e[o]:angular.isObject(t[o])&&angular.isObject(e[o])?l(e[o],t[o],n):e[o]=t[o]);for(var o in t)n&&-1!==n.indexOf(o)||void 0===e[o]&&(e[o]=t[o])}}else e=t;return!0}}this.get=function(e,i){var o,l,u=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(l=n(function(){l=null,o=s(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&n.cancel(l),o&&(a(o),o=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&s(e,"warning"),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(l&&n.cancel(l),o&&(a(o),o=null)),s(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,i,o){var l,u,d=r.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(u=n(function(){u=null,l=s(o.showProgressText,"info")},o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,i,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(s(e,"warning"),l=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===o.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),s(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&l(e,t,n)}}])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},42:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"body{font-family:Microsoft Yahei,Arial}.app-pic>div{width:100%;height:0;padding-bottom:56%;background-size:contain;background-repeat:no-repeat;background-position:50%}",""])},48:function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(1)(r,i);r.locals&&(e.exports=r.locals)},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},53:function(e,t,n){"use strict";n(48),n(5),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready(function(){window.wx.showOptionMenu()}),n(11),n(6),n(2),n(7);var r=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach(function(e){r.push(e)});var i=angular.module("app",r);i.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),i.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r}]),i.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r.create=function(r,i){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{team:r,member:i}).then(function(e){o.resolve(e.data)}),o.promise},r.update=function(r){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),r).then(function(e){i.resolve(e.data)}),i.promise},r.join=function(r){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),r).then(function(e){i.resolve(e.data)}),i.promise},r.quit=function(r){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/quit?"+n.s("site","app","team")+"&ek="+r.enroll_key).then(function(e){i.resolve(e.data)}),i.promise},r}]),i.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r}]),i.factory("facGroupUser",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/user/get?"+n.s("site","app")).then(function(e){var t,n=e.data;n&&(t={teams:[]},n.records&&n.records.length&&n.records.forEach(function(e){t[e.team_id]=e,t.teams.push(e.team_id)}),n.records=t),r.resolve(n)}),r.promise},r}]),i.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,r,i,o,s,a){e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0);var c;(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=i},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var r="tmsbox"+1*new Date,i={type:"",timer:null},o=function(e,t){var n;return n=document.querySelector("#"+r),null===n?(n=document.createElement("div"),n.setAttribute("id",r),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),i.type=e):(i.type!==e&&(n.classList.remove("alert-"+e),i.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+r))&&document.body.removeChild(e)},this.error=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;i.timer&&e.cancel(i.timer),n=o("success",t),i.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.info=function(t){var n;i.timer&&e.cancel(i.timer),n=o("info",t),i.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(r,s){var a,c,l;return a=n.defer(),i.timer&&(e.cancel(i.timer),i.timer=null),c=o("warning",r),s&&s.length?s.forEach(function(n){if(l=document.createElement("button"),l.classList.add("btn","btn-default","btn-sm"),l.innerHTML=n.label,c.appendChild(l,c.childNodes[0]),l.addEventListener("click",function(){document.body.removeChild(c),a.resolve(n.value)}),n.execWait){var r=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=r,l.appendChild(o),t(function(){o.innerHTML=--r},500),i.timer=e(function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),i.timer=null,a.resolve(n.value)},n.execWait)}}):(l=document.createElement("button"),l.classList.add("btn","btn-default","btn-sm"),l.innerHTML="是",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",function(){document.body.removeChild(c),a.resolve()}),l=document.createElement("button"),l.classList.add("btn","btn-default","btn-sm"),l.innerHTML="否",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",function(){document.body.removeChild(c),a.reject()})),a.promise}}])},7:function(e,t,n){"use strict";function r(e,t){var n,r,i;n=document.createDocumentFragment(),r=document.createElement("div"),r.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),r.appendChild(i),r.onclick=function(){r.parentNode.removeChild(r)},n.appendChild(r),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){r.parentNode.removeChild(r),t&&t()},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e)}angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var i=location.protocol+"//"+location.host;i+="/rest/site/fe/user",i+="?site="+e,t?location.href=i:r(i)},!0),document.body.appendChild(n)}})},80:function(e,t,n){"use strict";window.moduleAngularModules=["ngRoute"];var r=n(53);r.config(["$routeProvider",function(e){e.when("/rest/site/fe/matter/group/team/create",{template:n(118),controller:"ctrlTeamCreate"}).when("/rest/site/fe/matter/group/team/config",{template:n(117),controller:"ctrlTeamConfig"}).otherwise({template:n(119),controller:"ctrlTeamHome"})}]),r.controller("ctrlTeam",["$scope","tmsLocation","facGroupApp","facGroupUser",function(e,t,n,r){e.gotoHome=function(){location.href="/rest/site/fe/matter/group?"+t.s("site","app")},e.gotoTeamHome=function(){t.path("/rest/site/fe/matter/group/team/home")},n.get().then(function(t){e.app=t,e.schemas=t.dataSchemas,r.get().then(function(t){e.user=t})})}]),r.controller("ctrlTeamHome",["$scope","$uibModal","tmsLocation","facGroupTeam","facGroupRecord",function(e,t,r,i,o){e.config=function(){r.path("/rest/site/fe/matter/group/team/config")},e.invite=function(){t.open({template:n(120),controller:["$scope","$uibModalInstance","tmsLocation",function(e,t,n){e.close=function(){t.dismiss()},e.inviteUrl=location.protocol+"//"+location.host+"/rest/site/fe/matter/group/invite?"+n.s("site","app","team")}]})},e.quit=function(t){i.quit(t).then(function(){e.members.splice(e.members.indexOf(t),1)})},i.get().then(function(t){e.team=t,o.list().then(function(t){e.members=t})})}]),r.controller("ctrlTeamCreate",["$scope","$location","facGroupTeam",function(e,t,n){e.submit=function(){n.create(e.team,e.member).then(function(n){t.search().team=n.team_id,e.gotoTeamHome()})},e.team={},e.member={}}]),r.controller("ctrlTeamConfig",["$scope","$location","facGroupTeam",function(e,t,n){var r,i;i={},e.update=function(t){i[t]=e.team[t],e.modified=!0},e.submit=function(){Object.keys(i).length&&n.update(i).then(function(){e.modified=!1,i={}})},e.modified=!1,n.get().then(function(t){r=t,e.team=angular.copy(r)})}])}});