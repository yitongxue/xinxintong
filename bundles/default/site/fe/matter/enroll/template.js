!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=83)}({0:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],l=i[3],d={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}function i(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=b++;n=v||(v=s(t)),o=p.bind(null,n,l,!1),r=p.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=f.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=u.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,b=0,x=[],y=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(e){o(r(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},10:function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},11:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.enroll",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,o){var r,i,a,s;void 0===t.value&&(t.value=1*new Date/1e3),i=new Date,i.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(i.getMinutes()/5),t.data={year:i.getFullYear(),month:i.getMonth()+1,date:i.getDate(),hour:i.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),s='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',r=function(n){if(n.preventDefault(),n.stopPropagation(),!t.opened){var o,r;r="_dlg-"+1*new Date,o={header:"",body:s,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},o=__util.makeDialog(r,o),t.opened=!0,t.dialogID=r,e(o)(t)}},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),o.directive("tmsCheckboxGroup",function(){return{restrict:"A",link:function(e,t,n){var o,r,i,a;n.tmsCheckboxGroup&&n.tmsCheckboxGroup.length&&(o=n.tmsCheckboxGroup,n.tmsCheckboxGroupModel&&n.tmsCheckboxGroupModel.length&&(r=n.tmsCheckboxGroupModel,n.tmsCheckboxGroupUpper&&n.tmsCheckboxGroupUpper.length&&(a=n.tmsCheckboxGroupUpper,i=document.querySelectorAll("[name="+o+"]"),e.$watch(r+"."+o,function(e){var t;t=0,angular.forEach(e,function(e,n){e&&t++}),t>=a?[].forEach.call(i,function(e){void 0===e.checked?!e.classList.contains("checked")&&e.setAttribute("disabled",!0):!e.checked&&(e.disabled=!0)}):[].forEach.call(i,function(e){void 0===e.checked?e.removeAttribute("disabled"):e.disabled=!1})},!0))))}}}),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.service("srvUserTask",["$http","tmsModal",function(e,t){this.open=function(n){var o,r;r='<div class="modal-body">',n.summary&&(r+='<div class="form-group">活动说明：'+n.summary+"</div>"),o=n.userTask,r+='<table class="table table-bordered">',r+="<thead><tr><th>任务</th><th>要求</th><th>完成</th></tr></thead>",r+="<tbody>",o.minEnrollNum&&parseInt(o.minEnrollNum)>0&&(r+="<tr>",r+="<td>至少填写记录条数</td>",r+="<td>"+o.minEnrollNum+"</td>",r+="<td>{{enrollee.enroll_num}}</td>",r+="</tr>"),o.minRemarkNum&&parseInt(o.minRemarkNum)>0&&(r+="<tr>",r+="<td>至少发表评论条数</td>",r+="<td>"+o.minRemarkNum+"</td>",r+="<td>{{enrollee.remark_other_num}}</td>",r+="</tr>"),o.minLikeNum&&parseInt(o.minLikeNum)>0&&(r+="<tr>",r+="<td>对记录至少发表赞同的条数</td>",r+="<td>"+o.minLikeNum+"</td>",r+="<td>{{enrollee.like_other_num}}</td>",r+="</tr>"),o.maxLikeNum&&parseInt(o.maxLikeNum)>0&&(r+="<tr>",r+="<td>对记录最多发表赞同的条数</td>",r+="<td>"+o.maxLikeNum+"</td>",r+="<td>{{enrollee.like_other_num}}</td>",r+="</tr>"),r+="</tbody></table>",r+="</div>",r+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭任务说明</button></div>',t.open({template:r,controller:["$scope","$tmsModalInstance",function(t,o){e.get("/rest/site/fe/matter/enroll/user/task?site="+n.siteid+"&app="+n.id).success(function(e){t.enrollee=e.data}),t.cancel=function(){o.dismiss()}}]})}}])},12:function(e,t,n){"use strict";function o(e,t){var n,o,r;n=document.createDocumentFragment(),o=document.createElement("div"),o.setAttribute("id","frmPlugin"),r=document.createElement("iframe"),o.appendChild(r),o.onclick=function(){o.parentNode.removeChild(o)},n.appendChild(o),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){o.parentNode.removeChild(o),t&&t()},r.setAttribute("src",e)):r.contentDocument&&r.contentDocument.body&&(r.contentDocument.body.innerHTML=e)}angular.module("coinpay.ui.xxt",[]).service("tmsCoinPay",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-coinpay"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var r="http://"+location.host;r+="/rest/site/fe/coin/pay",r+="?site="+e,r+="&matter="+t,o(r)},!0),document.body.appendChild(n)}})},13:function(e,t,n){"use strict";function o(e,t){var n,o,r;n=document.createDocumentFragment(),o=document.createElement("div"),o.setAttribute("id","frmPlugin"),r=document.createElement("iframe"),o.appendChild(r),o.onclick=function(){o.parentNode.removeChild(o)},n.appendChild(o),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){o.parentNode.removeChild(o),t&&t()},r.setAttribute("src",e)):r.contentDocument&&r.contentDocument.body&&(r.contentDocument.body.innerHTML=e)}angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var r="http://"+location.host;r+="/rest/site/fe/user",r+="?site="+e,t?location.href=r:o(r)},!0),document.body.appendChild(n)}})},15:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,"body,html{font-family:Microsoft Yahei,Arial;width:100%;height:auto}body{position:relative;font-size:16px;padding:0}.ng-cloak{display:none}.container{position:relative}.navbar-default .navbar-brand,.navbar-default .navbar-nav>li>a{color:#fff}.navbar-brand{height:55px;padding:17.5px 15px}.main-navbar .navbar-brand:hover{color:#fff}@media screen and (min-width:768px){.navbar-nav>li>a{padding:17.5px 30px;font-size:18px;line-height:1}}@media screen and (max-width:768px){.navbar-brand{width:100%;text-align:center}.navbar-brand>.icon-note{display:inline-block;width:124px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.navbar-nav{margin:8px 0;position:absolute;top:0;right:0}.nav>li>a{padding:10px}}",""])},16:function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i=$q.defer();return document.documentElement.scrollTop=0,r=document.getElementsByTagName("body")[0],r.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",i.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),i.promise}}])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},37:function(module,exports,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(10),__webpack_require__(68),__webpack_require__(2),__webpack_require__(13),__webpack_require__(6),__webpack_require__(12),__webpack_require__(11);var ngApp=angular.module("app",["ngSanitize","ui.bootstrap","page.ui.xxt","directive.enroll","siteuser.ui.xxt","favor.ui.xxt"]);ngApp.provider("ls",function(){var e={};this.params=function(t){var n;return n=location.search,angular.forEach(t,function(t){var o,r;r=new RegExp(t+"=([^&]*)"),o=n.match(r),e[t]=o?o[1]:""}),e},this.$get=function(){return{p:e,j:function(t){var n=1,o=arguments.length,r="/rest/site/fe/matter/enroll",i=[];for(t&&t.length&&(r+="/"+t);n<o;n++)i.push(arguments[n]+"="+e[arguments[n]]);return i.length&&(r+="?"+i.join("&")),r}}}}),ngApp.config(["$controllerProvider","lsProvider",function(e,t){ngApp.provider={controller:e.register},t.params(["site","app","rid","page","ek","preview","newRecord","ignoretime"])}]),ngApp.factory("Round",["$http","$q",function(e,t){var n=function(e,t){this.scenario=e,this.template=t};return n.prototype.list=function(){var n,o,r,i;return n=this,o=t.defer(),r=o.promise,i="/rest/site/fe/matter/enroll/template/round/list",i+="?scenario="+n.scenario,i+="&template="+n.template,e.get(i).success(function(e){if(0!=e.err_code)return void alert(e.data);o.resolve(e.data)}),r},n}]);var LS=function(){function e(e){var t,n,o="/rest/site/fe/matter/enroll/template",r=this,i=[];if(e&&e.length&&(o+="/"+e),arguments.length>1){for(t=1,n=arguments.length;t<n;t++)i.push(arguments[t]+"="+r.p[arguments[t]]);o+="?"+i.join("&")}return o}return{p:function(){var e,t;return e=location.search,t={},angular.forEach(["scenario","template","page","rid"],function(n){var o,r;r=new RegExp(n+"=([^&]*)"),o=e.match(r),t[n]=o?o[1]:""}),t}(),j:e}}();ngApp.controller("ctrlRounds",["$scope","Round",function(e,t){var n,o;n=new t(LS.p.scenario,LS.p.template),n.list().then(function(t){e.rounds=t,angular.forEach(o,function(e){e(t)})}),o=[],e.onDataReady=function(e){o.push(e)},e.match=function(t){var n,o;for(n=0,o=e.rounds.length;n<o;n++)if(e.rounds[n],t.rid===e.rounds[n].rid)return e.rounds[n];return!1}}]),ngApp.factory("Record",["$http","$q",function(e,t){var n,o,r;return r=function(e,t){this.scenario=e,this.template=t,this.current={data:{},enroll_at:0}},o=!1,r.prototype.get=function(n){if(o)return!1;o=!0;var r,i,a;return r=this,a=t.defer(),i="/rest/site/fe/matter/enroll/template/record/get",i+="?scenario="+r.scenario,i+="&template="+r.template,e.post(i,n).success(function(e){var t;t=e.data,0==e.err_code&&(r.current=t,a.resolve(t)),o=!1}),a.promise},r.prototype.list=function(n,o){var r,i,a;return r=this,a=t.defer(),i="/rest/site/fe/matter/enroll/template/record/list",i+="?scenario="+r.scenario,i+="&template="+r.template,void 0!==o&&o.length&&(i+="&rid="+o),void 0!==n&&n.length&&(i+="&owner="+n),e.get(i).success(function(e){var t,n;if(0==e.err_code){if((t=e.data.records)&&t.length)for(var o=0;o<t.length;o++)n=t[o],n.data.member&&(n.data.member=JSON.parse(n.data.member));a.resolve(t)}}),a.promise},{ins:function(e,t){return n||(n=new r(e,t))}}}]),ngApp.controller("ctrlRecord",["$scope","Record",function(e,t){var n,o=t.ins(LS.p.scenario,LS.p.template),r=[];o.get(e.CustomConfig),e.Record=o;for(n in e.page.data_schemas)r.push(e.page.data_schemas[n].schema);e.value2Label=function(e){var t,n,i,a,s,c=[];if(r&&o.current.data){if(void 0===(t=o.current.data[e]))return"";for(n=0,i=r.length;n<i;n++)if(a=r[n],r[n].id===e){a=r[n];break}if(a&&a.ops&&a.ops.length){for(s=t.split(","),n=0,i=a.ops.length;n<i;n++)-1!==s.indexOf(a.ops[n].v)&&c.push(a.ops[n].l);if(c.length)return c.join(",")}return t}return""}}]),ngApp.controller("ctrlRecords",["$scope","Record",function(e,t){var n,o,r,i;i=""===LS.p.rid&&e.$parent.ActiveRound?e.$parent.ActiveRound.rid:LS.p.rid,n=t.ins(LS.p.scenario,LS.p.template),o={owner:"A",rid:i},r=function(){n.list(o.owner,o.rid).then(function(t){e.records=t})},e.$on("xxt.app.enroll.filter.rounds",function(e,t){o.rid=t[0].rid,r()}),e.$on("xxt.app.enroll.filter.owner",function(e,t){o.owner=t[0].id,r()}),e.fetch=r,e.options=o}]),ngApp.controller("ctrlOwnerOptions",["$scope",function(e){e.owners={A:{id:"A",label:"全部"},U:{id:"U",label:"我的"}},e.match=function(t){return e.owners[t.id]}}]),ngApp.controller("ctrlOrderbyOptions",["$scope",function(e){e.orderbys={time:{id:"time",label:"最新"},score:{id:"score",label:"点赞"},remark:{id:"remark",label:"评论"}}}]),ngApp.controller("ctrlMain",["$scope","$http","$timeout","$q",function($scope,$http,$timeout,$q){function renew(page,config){$scope.CustomConfig=config,$http.post(LS.j("pageGet","scenario","template")+"&page="+page,config).success(function(rsp){var params;if(0!==rsp.err_code)return void($scope.errmsg=rsp.err_msg);params=rsp.data,$scope.params=params,$scope.page=params.page,$scope.User=params.user,$scope.ActiveRound=params.activeRound,function setPage(page){page.ext_css&&page.ext_css.length&&angular.forEach(page.ext_css,function(e){var t,n;t=document.createElement("link"),t.href=e.url,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)}),page.ext_js&&page.ext_js.length&&angular.forEach(page.ext_js,function(e){$.getScript(e.url)}),page.js&&page.js.length&&function dynamicjs(){eval(page.js)}()}(params.page)})}window.renew=function(e,t){var n;n=$scope.$root.$$phase,"$digest"===n||"$apply"===n?renew(e,t):$scope.$apply(function(){renew(e,t)})},$scope.errmsg="",$scope.data={member:{}},$scope.CustomConfig={},$scope.gotoPage=function(e,t,n,o,r){},$scope.addRecord=function(e){},$scope.editRecord=function(e,t){},$scope.likeRecord=function(e){},$scope.remarkRecord=function(e){},$scope.openMatter=function(e,t){},$scope.$on("xxt.app.enroll.filter.rounds",function(e,t){e.targetScope!==$scope&&$scope.$broadcast("xxt.app.enroll.filter.rounds",t)}),$scope.$on("xxt.app.enroll.filter.owner",function(e,t){e.targetScope!==$scope&&$scope.$broadcast("xxt.app.enroll.filter.owner",t)}),window.renew(LS.p.page,{})}])},4:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,o){this.open=function(r){var i,a=n.defer(),s=n.defer(),c={result:a.promise,closed:s.promise,close:function(e){document.body.removeChild(u[0]),a.resolve(e)},dismiss:function(e){document.body.removeChild(u[0]),s.resolve(e)}};i=e.$new(!0),r.controller&&o(r.controller,{$scope:i,$tmsModalInstance:c});var l,d,p,u;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(r.template),d=angular.element("<div></div>"),d.attr({class:"modal-dialog"}).append(l),p=angular.element("<div></div>"),p.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),u=angular.element("<div></div>"),u.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(d).append(p),t(u)(i),document.body.appendChild(u[0]),c}}])},5:function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},55:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,"body,html{min-height:100%;width:100%;font-family:Microsoft Yahei,Arial}body{position:relative;font-size:16px;padding:0 15px}.app{margin-bottom:64px;margin-top:15px}img{max-width:100%}ul{list-style:none}li,ul{margin:0;padding:0}#errmsg{display:block;opacity:0;height:0;overflow:hidden;width:300px;position:fixed;top:0;left:50%;margin:0 0 0 -150px;text-align:center;transition:opacity 1s;z-index:-1;word-break:break-all}#errmsg.active{opacity:1;height:auto;z-index:999}ul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;margin:4px;float:left}ul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none}ul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}ul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}ul.img-tiles li.img-picker button span{font-size:36px}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px solid #fff}div[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}li .wrap-inline>label{padding:7px 0;color:#444}li .wrap-inline{border-bottom:1px dashed #efefef}li .wrap-inline:last-child{border-bottom:0}",""])},6:function(e,t,n){"use strict";n(5),n(2),n(4),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,r){function i(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/byUser",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function a(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/add",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function s(e){var o,r;return r=n.defer(),o="/rest/site/fe/user/favor/remove",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success(function(e){r.resolve(e.data)}),r.promise}function c(e){var o,r;return r=n.defer(),o="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success(function(e){0==e.err_code&&r.resolve(e.data)}),r.promise}function l(e,o){var r,i;return i=n.defer(),r="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(r,o).success(function(e){i.resolve(e.data)}),i.promise}function d(e,o){var r,i;return i=n.defer(),r="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(r,o).success(function(e){i.resolve(e.data)}),i.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',r.open({template:n,controller:["$scope","$tmsModalInstance",function(n,o){i(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},o.close(e)},n.cancel=function(){o.dismiss()}}]}).result.then(function(t){var n,o;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?a(e):s(e)),o=t.mySites){var r=[],i=[];o.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?r.push(e.id):i.push(e.id))}),r.length&&l(e,r),i.length&&d(e,i)}})},this.showSwitch=function(t,n){var r,i=this;r=document.createElement("div"),r.classList.add("tms-switch","tms-switch-favor"),r.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),e.$apply(function(){t.loginExpire?i.open(n):o.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,i.open(n)})})},!0),document.body.appendChild(r)}}])},68:function(e,t,n){var o=n(55);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1)(o,r);o.locals&&(e.exports=o.locals)},8:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},83:function(e,t,n){e.exports=n(37)},9:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,'.dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-switch{position:fixed;right:15px;width:70px;box-shadow:0 2px 6px rgba(18,27,32,.425);height:35px;color:#2994d0;background:#f8fcfe;border-radius:21px;font-size:24px;line-height:27px;text-align:center;cursor:pointer;z-index:1050}.tms-switch:before{font-size:.7em}.tms-switch:last-of-type{bottom:8px}.tms-switch:nth-last-of-type(2){bottom:64px}.tms-switch:nth-last-of-type(3){bottom:120px}.tms-switch:nth-last-of-type(4){bottom:176px}.tms-switch:nth-last-of-type(5){bottom:232px}.tms-switch:nth-last-of-type(6){bottom:288px}.tms-switch-back:before{content:"\\8FD4\\56DE"}.tms-switch-task:before{content:"\\4EFB\\52A1"}.tms-switch-save:before{content:"\\4FDD\\5B58"}.tms-switch-rank:before{content:"\\6392\\884C"}.tms-switch-repos:before{content:"\\5171\\4EAB"}.tms-switch-coinpay:before{content:"\\6253\\8D4F"}@media screen and (max-width:768px){body{margin-bottom:60px}.tms-switch:last-of-type{right:8px;bottom:10px}.tms-switch:nth-last-of-type(2){right:85px;bottom:10px}.tms-switch:nth-last-of-type(3){right:165px;bottom:10px}.tms-switch:nth-last-of-type(4){right:176px;bottom:10px}.tms-switch:nth-last-of-type(5){right:232px;bottom:10px}.tms-switch:nth-last-of-type(6){right:288px;bottom:10px}}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:"\\5173\\95ED";position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}',""])}});