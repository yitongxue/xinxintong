!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=66)}({0:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},1:function(e,t,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(h(i.parts[a],t))}else{for(var s=[];a<i.parts.length;a++)s.push(h(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function g(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,p=0;function h(e,t){var n,i,r;if(t.singleton){var o=p++;n=m||(m=c(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(t),i=g.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e,t);return l(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],c=r[a.id];c&&(c.refs--,i.push(c))}e&&l(s(e,t),t);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete r[d.id]}}}}},19:function(e,t,n){"use strict";angular.module("schema.ui.xxt",[]).service("tmsSchema",["$filter","$sce","$parse",function(e,t,n){var i,r=this;this.config=function(e){angular.isString(e)&&(e=JSON.parse(e)),angular.isArray(e)?(i={},e.forEach((function(e){i[e.id]=e}))):i=e},this.isEmpty=function(e,t){if(void 0===t)return!0;switch(e.type){case"multiple":for(var n in t)if(!0===t[n])return!1;return!0;default:return 0===t.length}},this.checkRequire=function(e,t){return void 0!==t&&!this.isEmpty(e,t)||"请填写必填题目［"+e.title+"］"},this.checkFormat=function(e,t){if("number"===e.format){if(!/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(t))return"题目［"+e.title+"］请输入数值"}else if("name"===e.format){if(t.length<2)return"题目［"+e.title+"］请输入正确的姓名（不少于2个字符）"}else if("mobile"===e.format){if(!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9]|9[0-9])\d{8}$/.test(t))return"题目［"+e.title+"］请输入正确的手机号（11位数字）"}else if("email"===e.format&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t))return"题目［"+e.title+"］请输入正确的邮箱";return!0},this.checkCount=function(e,t){return!(0!=e.count&&void 0!==e.count&&t.length>e.count)||"［"+e.title+"］超出上传数量（"+e.count+"）限制"},this.checkValue=function(e,t){var n;if(e.required&&"Y"===e.required&&!0!==(n=this.checkRequire(e,t)))return n;if(t){if("shorttext"===e.type&&e.format&&!0!==(n=this.checkFormat(e,t)))return n;if("multiple"===e.type&&"Y"===e.limitChoice&&e.range){var i=0;for(var r in t)t[r]&&i++;if(i<e.range[0]||i>e.range[1])return"【"+e.title+"】中最多只能选择("+e.range[1]+")项，最少需要选择("+e.range[0]+")项"}if(/image|file/.test(e.type)&&e.count&&!0!==(n=this.checkCount(e,t)))return n}return!0},this.loadRecord=function(e,t,n){if(!n)return!1;var i,r;for(i in n)if("member"===i)t.member=angular.extend(t.member,n.member);else if(void 0!==e[i]){var o=e[i];if(/score|url/.test(o.type))t[i]=n[i];else if(n[i].length)if("image"===e[i].type)for(var a in r=n[i].split(","),t[i]=[],r)t[i].push({imgSrc:r[a]});else if("multiple"===e[i].type)for(var a in r=n[i].split(","),t[i]={},r)t[i][r[a]]=!0;else t[i]=n[i]}return!0},this.autoFillMember=function(e,t,n){t.members&&angular.forEach(e,(function(e){var i,r,o;if(e.mschema_id&&t.members[e.mschema_id])if(i=t.members[e.mschema_id],2===(r=e.id.split(".")).length)n[r[1]]=i[r[1]];else if(3===r.length&&i.extattr)switch(n.extattr||(n.extattr={}),e.type){case"multiple":if(o=i.extattr[r[2]],angular.isObject(o))for(var a in n.extattr[r[2]]={},o)o[a]&&(n.extattr[r[2]][a]=!0);break;default:n.extattr[r[2]]=i.extattr[r[2]]}}))},this.autoFillDefault=function(e,t){angular.forEach(e,(function(e){e.defaultValue&&void 0===t[e.id]&&(t[e.id]=e.defaultValue)}))},this.value2Text=function(e,t){var n,i,r=[];if(n=t){if(e.ops&&e.ops.length)if("single"===e.type){for(var o=0,a=e.ops.length;o<a;o++)if(e.ops[o].v===n){n=e.ops[o].l;break}}else if("multiple"===e.type){for(var s in i=[],n)n[s]&&i.push(s);e.ops.forEach((function(e){-1!==i.indexOf(e.v)&&r.push(e.l)})),n=r.join(",")}}else n="";return n},this.value2Html=function(e,t){if(!t||!e)return"";if(e.ops&&e.ops.length){if("score"===e.type){var n="";return e.ops.forEach((function(e,i){void 0!==t[e.v]&&(n+="<div>"+e.l+":"+t[e.v]+"</div>")})),n=n.replace(/\s\/\s$/,"")}if(angular.isString(t)){var i,r=[];if(i=t.split(","),e.ops.forEach((function(e,t){-1!==i.indexOf(e.v)&&r.push(e.l)})),r.length)return r.join(",")}else(angular.isObject(t)||angular.isArray(t))&&(t=JSON.stringify(t))}return t},this.txtSubstitute=function(e){return e.replace(/\n/g,"<br>")},this.urlSubstitute=function(e){var t;return t="",e&&(e.title&&(t+="【"+e.title+"】"),e.description&&(t+=e.description)),t+='<a href="'+e.url+'">网页链接</a>'},this.optionsSubstitute=function(e,t){var n,i,r=[];if(n=t){if(e.ops&&e.ops.length){if("score"===e.type){var o="",a=!1;return e.ops.forEach((function(e,t){if(void 0===n[e.v])return a=!0;o+="<div>"+e.l+":"+n[e.v]+"</div>",a=!1})),o=a?n:o.replace(/\s\/\s$/,"")}if("single"===e.type||"multiple"===e.type){if(!angular.isString(n))return n;i=n.split(","),e.ops.forEach((function(e){-1!==i.indexOf(e.v)&&r.push(e.l)})),n=r.join(",")}else(angular.isObject(n)||angular.isArray(n))&&(n=JSON.stringify(n))}}else n="";return n},this.dateSubstitute=function(t){return t&&parseInt(t)?"<span>"+e("date")(1e3*t,"yy-MM-dd HH:mm")+"</span>":""},this.forTable=function(e,n){function o(e,t){var n,i,r;if(e){if(2===(n=t.id.split(".")).length)return e[n[1]];if(3===n.length&&e.extattr){if(i=e.extattr[n[2]])switch(t.type){case"single":if(t.ops&&t.ops.length)for(var o=t.ops.length-1;o>=0;o--)i===t.ops[o].v&&(r=t.ops[o].l);break;case"multiple":t.ops&&t.ops.length&&(r=[],t.ops.forEach((function(e){i[e.v]&&r.push(e.l)})),r=r.join(","));break;default:r=i}return r}return""}return""}var a;return n&&angular.isArray(n)&&(a={},n.forEach((function(e){a[e.id]=e})),n=a),function(e,n){var i,a,s={};if(e.data&&n){for(var l in n)switch(a=(i=n[l]).type,i.mschema_id&&e.data.member&&(a="member"),a){case"image":var c;c=e.data[i.id]?angular.isString(e.data[i.id])?e.data[i.id].split(","):e.data[i.id]:[],s[i.id]=c;break;case"file":case"voice":var u=e.data[i.id]?e.data[i.id]:{};s[i.id]=u;break;case"multitext":var d;if(d=e.data[i.id]){if(angular.isString(d))try{d=JSON.parse(d),angular.isString(d)&&(d=JSON.parse(d))}catch(e){d=[]}}else d=[];s[i.id]=d;break;case"date":s[i.id]=e.data[i.id]&&angular.isNumber(e.data[i.id])?e.data[i.id]:0;break;case"url":s[i.id]=e.data[i.id],s[i.id]&&(s[i.id]._text="【"+s[i.id].title+"】"+s[i.id].description);break;default:try{if(/^member\./.test(i.id))s[i.id]=o(e.data.member,i);else{var f=r.value2Html(i,e.data[i.id]);s[i.id]=angular.isString(f)?t.trustAsHtml(f):f}}catch(t){console.log(t,i,e.data[i.id])}}e._data=s}return e}(e,n||i)},this.forEdit=function(e,n){var i;if("file"===e.type)n[e.id]&&n[e.id].length&&(i=n[e.id]).forEach((function(e){e.url&&angular.isString(e.url)&&e.url&&t.trustAsUrl(e.url)})),n[e.id]=i;else if("multiple"===e.type){var r={};n[e.id]&&n[e.id].length&&(o=n[e.id].split(",")).forEach((function(e){r[e]=!0})),n[e.id]=r}else if("image"===e.type){var o=n[e.id];r=[];o&&o.length&&(o=o.split(",")).forEach((function(e){r.push({imgSrc:e})})),n[e.id]=r}return n},this.strRecData=function(t,i,r){var o,a,s,l;return i&&0!==i.length?(r&&(r.fnSchemaFilter&&(s=r.fnSchemaFilter),r.fnDataFilter&&(l=r.fnDataFilter)),o="",i.forEach((function(i){if(!s||s(i))switch(a=n(i.id)(t),i.type){case"image":a&&a.length&&(o+="<span>",a.forEach((function(e){o+='<img src="'+e+'" />'})),o+="</span>");break;case"file":a&&a.length&&a.forEach((function(e){o+='<span><a href="'+e.url+'" target="_blank">'+e.name+"</a></span>"}));break;case"date":a>0&&(o="<span>"+e("date")(1e3*a,"yy-MM-dd HH:mm")+"</span>");break;case"shortext":case"longtext":o+=a;break;case"multitext":if(a&&a.length)for(var r=a.length-1;r>=0;r--)l&&!l(a[r].id)||(o+=a[r].value)}})),o):""},this.member={getExtattrsUIValue:function(e,t){var n={};return e.forEach((function(e){/single|multiple/.test(e.type)?t.extattr[e.id]&&(n[e.id]=r.value2Text(e,t.extattr[e.id])):n[e.id]=t.extattr[e.id]})),n}},this.getSchemaVisible=function(e,t){var i,r,o;if(e.visibility.logicOR){i=!1;for(var a=0,s=e.visibility.rules.length;a<s;a++)if(r=e.visibility.rules[a],(o=n(r.schema)(t))&&(o===r.op||o[r.op])){i=!0;break}}else{i=!0;for(a=0,s=e.visibility.rules.length;a<s;a++)if(r=e.visibility.rules[a],!(o=n(r.schema)(t))||o!==r.op&&!o[r.op]){i=!1;break}}return i}}])},2:function(e,t,n){"use strict";var i=angular.module("http.ui.xxt",["ng"]);i.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],i=0,r=arguments.length;i<r;i++)n.push(arguments[i]+"="+(e[arguments[i]]||""));return n.join("&")}return e},j:function(n){var i=e,r=[];n&&n.length&&(i+="/"+n);for(var o=1,a=arguments.length;o<a;o++)r.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return r.length&&(i+="?"+r.join("&")),i},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,i,r,o){function a(t,n,i){var a;return r.trustAsHtml(t),(a=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),i||a[0].addEventListener("click",(function(){document.body.removeChild(a[0])}),!0),o(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,r){var o,c,u=i.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(c=n((function(){c=null,o=a(r.showProgressText,"info")}),r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),a(null===e?"网络不可用":e,"danger")})),u.promise},this.post=function(e,r,o){var c,u,d=i.defer();return!0===(o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o)).showProgress&&(u=n((function(){u=null,c=a(o.showProgressText,"info")}),o.showProgressDelay)),l(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,r,o).success((function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(a(e,"warning"),c=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")})),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,i){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var r=0,o=n.length;r<o;r++)r<t.length?e(t[r],n[r],i):t.push(n[r])}else if(angular.isObject(t)){for(var a in t)i&&-1!==i.indexOf(a)||(void 0===n[a]?delete t[a]:angular.isObject(n[a])&&angular.isObject(t[a])?e(t[a],n[a],i):t[a]=n[a]);for(var a in n)i&&-1!==i.indexOf(a)||void 0===t[a]&&(t[a]=n[a])}}else t=n;return!0}}(e,t,n)}}])},22:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},canupload:function(e){var t,n;return e.name.lastIndexOf(".")?(t=e.name.lastIndexOf(".")+1,n=e.name.substring(t).toLowerCase(),-1==="png,jpg,jpeg,gif".indexOf(n)?{err_code:-1,err_msg:"图片扩展名（".concat(n,"）错误：只能上传以").concat("png,jpg,jpeg,gif","为扩展名的文件")}:{err_code:0}):{err_code:-1,err_msg:"只能上传以".concat("png,jpg,jpeg,gif","为扩展名的文件")}},choose:function(e,t){var n,i=[];n=e.promise;var r=document.createElement("input");return r.setAttribute("type","file"),r.addEventListener("change",(function(t){var n,o,a,s;for(o=t.target.files.length,n=0;n<o;n++){a=t.target.files[n];var l=window.xxt.image.canupload(a);if(0===l.err_code){s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var c=new FileReader;c.onload=function(t){return function(n){var o={};o.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),i.push(o),document.body.removeChild(r),e.resolve(i)}}(a),c.readAsDataURL(a)}else e.resolve(l.err_msg)}}),!1),r.style.opacity=0,document.body.appendChild(r),r.click(),n},paste:function(e,t,n){var i,r=[];return i=t.promise,e.focus(),e.addEventListener("paste",(function(e){var n,i,o=e.clipboardData;if(o&&(n=o.items)&&n.length){for(var a=0;a<o.types.length;a++)if("Files"===o.types[a]){i=n[a];break}i&&"file"===i.kind&&i.type.match(/^image\//i)&&function(e){var n=e.getAsFile(),i=new FileReader;i.onload=function(e){var n={};n.imgSrc=e.target.result,r.push(n),t.resolve(r)},i.readAsDataURL(n)}(i)}})),i},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var i="tmsbox"+1*new Date,r={type:"",timer:null},o=function(e,t){var n;return null===(n=document.querySelector("#"+i))?((n=document.createElement("div")).setAttribute("id",i),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+i))&&document.body.removeChild(e)},this.error=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("danger",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("warning",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=o("success",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=o("info",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(i,a){var s,l,c,u;return s=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),l=o("warning",i),a&&a.length?a.forEach((function(n){if((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve(n.value)})),n.execWait){var i=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=i,c.appendChild(o),u=t((function(){i<=0?(t.cancel(u),u=null):o.innerHTML=--i}),500),r.timer=e((function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),r.timer=null,s.resolve(n.value)}),n.execWait)}})):((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve()})),(c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.reject()}))),s.promise}}])},66:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n(7),n(68),n(5),n(2),n(22),n(19),n(9);var i=angular.module("app",["ui.bootstrap","notice.ui.xxt","http.ui.xxt","directive.enroll","schema.ui.xxt"]);i.config(["$locationProvider",function(e){e.html5Mode(!0)}]),i.directive("tmsImageInput",["$compile","$q",function(e,t){var n;return n=[],{restrict:"A",controller:["$scope","$timeout","noticebox",function(e,i,r){e.chooseImage=function(o){var a;a=e.member.extattr?e.member.extattr:e.member.extattr={},null!==o&&(-1===n.indexOf(o.id)&&n.push(o.id),void 0===a[o.id]&&(a[o.id]=[]),a[o.id].length>=1)?r.warn("最多允许上传（1）张图片"):window.xxt.image.choose(t.defer()).then((function(t){var n;"$digest"===(n=e.$root.$$phase)||"$apply"===n?a[o.id]=a[o.id].concat(t):e.$apply((function(){a[o.id]=a[o.id].concat(t)})),i((function(){var e,n,i,r;for(e=0,n=t.length;e<n;e++)i=t[e],(r=document.querySelector('ul[name="'+o.id+'"] li:nth-last-child(2) img'))&&r.setAttribute("src",i.imgSrc)}))}))},e.removeImage=function(t,n){e.member.extattr[t.id].splice(n,1)}}]}}]),i.controller("ctrlMember",["$scope","$timeout","noticebox","tmsLocation","http2","tmsSchema",function(e,t,n,i,r,o){function a(t){var i,r,a,s=e.member;if(s.name&&!1==(i=s.name,r=2,a="请提供您的姓名！",!(null==i||""==i||i.length<r)||(n.warn(a),!1)))return!1;if(s.mobile&&!1===function(e,t){return!1!==/^1[3|4|5|7|8|9][0-9]\d{4,8}$/.test(e)||(n.warn(t),!1)}(s.mobile,"请提供正确的手机号（11位数字）！"))return!1;if(s.email&&!1===function(e,t){if(void 0===e)return n.warn(t),!1;var i=e.indexOf("@"),r=e.lastIndexOf(".");return!(i<1||r-i<2)||(n.warn(t),!1)}(s.email,"请提供正确的邮箱！"))return!1;if(t.extAttrs&&t.extAttrs.length){var l,c,u;l=s.extattr||{};for(var d=0,f=t.extAttrs.length;d<f;d++)if((c=t.extAttrs[d]).required&&"Y"===c.required&&!0!==(u=o.checkValue(c,l[c.id])))return n.warn(u),!1}return!0}function s(t){e.posting=!0,r.post(t,e.member,{autoBreak:!1}).then((function(t){e.posting=!1,n.confirm("已经提交成功，离开页面！",[{label:"取消",value:"cancel"},{label:"离开",value:"continue",execWait:5e3}]).then((function(e){"continue"===e&&r.get(i.j("passed","site","schema")+"&redirect=N").then((function(e){window.parent&&window.parent.onClosePlugin?window.parent.onClosePlugin(e.data):location.href=e.data}))}))}),(function(){e.posting=!1}))}function l(t){var n,r;t.members&&(n=t.members[i.s().schema]),e.member={schema_id:i.s().schema},r=e.schema.attrs,n?(e.member.id=n.id,e.member.verified=n.verified,!r.name.hide&&(e.member.name=n.name),!r.email.hide&&(e.member.email=n.email),!r.mobile.hide&&(e.member.mobile=n.mobile),n.extattr&&(e.member.extattr=n.extattr)):t.login&&(
//!oAttrs.name.hide && ($scope.member.name = user.login.nickname);
!r.mobile.hide&&/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(t.login.uname)&&(e.member.mobile=t.login.uname),r.email.hide||-1===t.login.uname.indexOf("@")||(e.member.email=t.login.uname))}e.posting=!1,e.loginUser={},e.subView="login",e.isRegister=!1,e.switchSubView=function(t){e.subView=t},e.openThirdAppUrl=function(e){location.href="/rest/site/fe/user/login/byRegAndThird?thirdId="+e.id},e.login=function(){e.loginUser.password&&r.post("/rest/site/fe/user/login/do?site="+i.s().site,e.loginUser).then((function(t){r.post("/rest/site/fe/user/login/checkPwdStrength",{account:e.loginUser.uname,password:e.loginUser.password}).then((function(t){t.data.strength||alert(t.data.msg),r.get(i.j("get","site","schema")).then((function(t){var n=t.data;e.user=n,l(n)}))}))}))},e.loginByReg=function(e){r.post("/rest/site/fe/user/login/byRegAndWxopenid?site="+i.s().site,e).then((function(e){location.reload(!0)}))},e.logout=function(){r.post("/rest/site/fe/user/logout/do?site="+i.s().site,e.loginUser).then((function(e){location.reload(!0)}))},e.register=function(){r.post("/rest/site/fe/user/register/do?site="+i.s().site,{uname:e.loginUser.uname,nickname:e.loginUser.nickname,password:e.loginUser.password,pin:e.loginUser.pin}).then((function(t){e.user=t.data,l(e.user)}))},e.gotoHome=function(){location.href="/rest/site/fe/user?site="+i.s().site},e.repeatPwd={test:function(t){return t===e.password}},e.doAuth=function(t){if(!t){if(!a(e.schema))return;if(document.querySelectorAll(".ng-invalid-required").length)return void n.warn("请填写必填项")}s(i.j("doAuth","site","schema"))},e.doReauth=function(){a(e.schema)&&(document.querySelectorAll(".ng-invalid-required").length?n.warn("请填写必填项"):s(i.j("doReauth","site","schema")))},e.refreshPin=function(t){var n;t||(t=document.getElementById("pinInput")),t&&(n=1*new Date,120,"/rest/site/fe/user/login/getCaptcha?site=platform&codelen=4&width=120&height=32&fontsize=20",e.pinImg="/rest/site/fe/user/login/getCaptcha?site=platform&codelen=4&width=120&height=32&fontsize=20&_="+n)},e.shiftRegUser=function(e){r.post("/rest/site/fe/user/shiftRegUser?site="+i.s().site,{uname:e.uname}).then((function(e){location.reload(!0)}))},r.get("/rest/site/fe/get?site="+i.s().site).then((function(n){e.site=n.data,r.get("/rest/site/fe/user/memberschema/get?site="+i.s().site+"&schema="+i.s().schema+"&matter="+i.s().matter).then((function(n){e.schema=n.data.schema,e.matter=n.data.matter,r.get(i.j("get","site","schema")).then((function(n){e.user=n.data,l(e.user),e.user.sns&&e.user.sns.wx&&(e.loginUser.nickname=e.user.sns.wx.nickname),t((function(){var t=document.getElementById("pinInput");t&&e.refreshPin(t)})),r.get("/rest/site/fe/user/get?site="+i.s().site).then((function(t){t.data.siteRegistersByWx&&(e.user.siteRegistersByWx=t.data.siteRegistersByWx),t.data.plRegistersByWx&&(e.user.plRegistersByWx=t.data.plRegistersByWx)}))}))}))})),r.get("/rest/site/fe/user/login/thirdList").then((function(t){e.thirdApps=t.data})),r.get("/rest/site/fe/user/getSafetyLevel").then((function(t){e.isRegister=t.data.register})),e.isSmallLayout=!1,window.screen&&window.screen.width<=768&&(e.isSmallLayout=!0)}])},68:function(e,t,n){var i=n(69);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(e.exports=i.locals)},69:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"body {\n\tfont-family: 'Microsoft Yahei', Arial;\n}\n\n.app {\n\tmargin-top: 70px;\n\tmargin-bottom: 50px;\n}\n\n.ng-cloak {\n\tdisplay: none;\n}\n\n.navbar-form {\n\twidth: auto;\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n\tmargin-right: 0;\n\tmargin-left: 0;\n\tborder: 0;\n\tbox-shadow: none;\n}\n\n.navbar-right {\n\tfloat: right !important;\n\tmargin-right: -15px;\n}\n\n#matter .matter-pic {\n\twidth: 100%;\n}\n\n#matter .matter-pic>div {\n\twidth: 100%;\n\theight: 0;\n\tpadding-bottom: 56%;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n}\n\nimg {\n\tmax-width: 100%\n}\n\n/* img tiles */\nul.img-tiles li {\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\twidth: 80px;\n\theight: 80px;\n\tmargin: 0px;\n\tpadding: 0px;\n\tfloat: left\n}\n\nul.img-tiles li.img-thumbnail img {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmax-width: none\n}\n\nul.img-tiles li.img-thumbnail button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0\n}\n\nul.img-tiles li.img-picker button {\n\tposition: auto;\n\twidth: 100%;\n\theight: 100%\n}\n\nul.img-tiles li.img-picker button span {\n\tfont-size: 36px\n}\n",""])},7:function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(e.exports=i.locals)},8:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-header{padding:15px 15px 0 15px}.dialog .dlg-body{padding:15px 15px 0 15px}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-act-toggle{position:fixed;right:15px;bottom:8px;width:48px;height:48px;line-height:48px;box-shadow:0 2px 6px rgba(18,27,32,.425);color:#fff;background:#ff8018;border:1px solid #ff8018;border-radius:24px;font-size:20px;text-align:center;cursor:pointer;z-index:1045}.tms-nav-target>*+*{margin-top:.5em}.tms-act-popover-wrap>div+div{margin-top:8px}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:'关闭';position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}",""])},9:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,i;return(i=document.createElement("div")).setAttribute("id",e),i.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",i.innerHTML=n,document.body.appendChild(i),i.children};var i=angular.module("directive.enroll",[]);i.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;(t=new Date).setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,i){var r,o,a;void 0===t.value&&(t.value=1*new Date/1e3),(o=new Date).setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(o.getMinutes()/5),t.data={year:o.getFullYear(),month:o.getMonth()+1,date:o.getDate(),hour:o.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),r=function(n){var i,r;(n.preventDefault(),n.stopPropagation(),t.opened)||(r="_dlg-"+1*new Date,i={header:"",body:'<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div><div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div><div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div><div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div><div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},i=__util.makeDialog(r,i),t.opened=!0,t.dialogID=r,e(i)(t))},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),i.directive("flexImg",(function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",(function(){var e,t,n=this.clientWidth,i=this.clientHeight;n>i?(e=n/i*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=i/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))}))}}})),i.directive("tmsHideParentHeight",(function(){return{restrict:"A",link:function(e,t,n){var i,r;if(n.tmsHideParentHeight){i=n.tmsHideParentHeight;for(var o=0,a=t.length;o<a;o++)(r=t[o]).parentElement&&window.addEventListener("resize",(function(){r.classList.toggle("hidden",r.parentElement.clientHeight<i)}))}}}})),i.directive("tmsScrollSpy",(function(){return{restrict:"A",scope:{selector:"@selector",offset:"@",onbottom:"&",toggleSpy:"="},link:function(e,t,n){var i="window"===e.selector?window:document.querySelector(e.selector);i.addEventListener("scroll",(function(t){var n=i===window?t.target.documentElement:t.target;e.toggleSpy&&e.onbottom&&angular.isFunction(e.onbottom)&&n.clientHeight+n.scrollTop+parseInt(e.offset)>=n.scrollHeight&&e.$apply((function(){e.toggleSpy=!1,e.onbottom()}))}))}}}))}});