(function(e){function t(t){for(var s,r,c=t[0],o=t[1],u=t[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={mission:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ue/site/fe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c264")},1512:function(e,t,n){"use strict";var s=n("771e"),a=n.n(s);a.a},3577:function(e,t,n){"use strict";var s=n("6f9a"),a=n.n(s);a.a},"5b5c":function(e,t,n){var s={"./af":"0154","./af.js":"0154","./ar":"a16b","./ar-dz":"a1aa","./ar-dz.js":"a1aa","./ar-kw":"c6c3","./ar-kw.js":"c6c3","./ar-ly":"85f7","./ar-ly.js":"85f7","./ar-ma":"f589","./ar-ma.js":"f589","./ar-sa":"0ef8","./ar-sa.js":"0ef8","./ar-tn":"c3a3","./ar-tn.js":"c3a3","./ar.js":"a16b","./az":"1bfa","./az.js":"1bfa","./be":"f5be","./be.js":"f5be","./bg":"f934","./bg.js":"f934","./bm":"56bb","./bm.js":"56bb","./bn":"70cf","./bn.js":"70cf","./bo":"0074","./bo.js":"0074","./br":"22a4","./br.js":"22a4","./bs":"9ad2","./bs.js":"9ad2","./ca":"6c31","./ca.js":"6c31","./cs":"abba","./cs.js":"abba","./cv":"7b52","./cv.js":"7b52","./cy":"5f2f","./cy.js":"5f2f","./da":"0f6d","./da.js":"0f6d","./de":"dac6","./de-at":"23f3","./de-at.js":"23f3","./de-ch":"bb77","./de-ch.js":"bb77","./de.js":"dac6","./dv":"fdb0","./dv.js":"fdb0","./el":"343c","./el.js":"343c","./en-au":"54e8","./en-au.js":"54e8","./en-ca":"bee6","./en-ca.js":"bee6","./en-gb":"b53c","./en-gb.js":"b53c","./en-ie":"691d","./en-ie.js":"691d","./en-il":"24f7","./en-il.js":"24f7","./en-in":"8393","./en-in.js":"8393","./en-nz":"64cd","./en-nz.js":"64cd","./en-sg":"8a05","./en-sg.js":"8a05","./eo":"046d","./eo.js":"046d","./es":"7694","./es-do":"b81d","./es-do.js":"b81d","./es-us":"8b63","./es-us.js":"8b63","./es.js":"7694","./et":"1856","./et.js":"1856","./eu":"0ccc","./eu.js":"0ccc","./fa":"7d80","./fa.js":"7d80","./fi":"cc1c","./fi.js":"cc1c","./fil":"8107","./fil.js":"8107","./fo":"5927","./fo.js":"5927","./fr":"0071","./fr-ca":"dfd2","./fr-ca.js":"dfd2","./fr-ch":"34f3","./fr-ch.js":"34f3","./fr.js":"0071","./fy":"94ed","./fy.js":"94ed","./ga":"f82e","./ga.js":"f82e","./gd":"c61e","./gd.js":"c61e","./gl":"9124","./gl.js":"9124","./gom-deva":"ec6e","./gom-deva.js":"ec6e","./gom-latn":"c225","./gom-latn.js":"c225","./gu":"8a84","./gu.js":"8a84","./he":"f94d","./he.js":"f94d","./hi":"44ab","./hi.js":"44ab","./hr":"ec4c","./hr.js":"ec4c","./hu":"021a","./hu.js":"021a","./hy-am":"61f8","./hy-am.js":"61f8","./id":"f91e","./id.js":"f91e","./is":"dd50","./is.js":"dd50","./it":"a409","./it-ch":"333c","./it-ch.js":"333c","./it.js":"a409","./ja":"0918","./ja.js":"0918","./jv":"91ca","./jv.js":"91ca","./ka":"01c5","./ka.js":"01c5","./kk":"222d","./kk.js":"222d","./km":"967d","./km.js":"967d","./kn":"f31e","./kn.js":"f31e","./ko":"84dd","./ko.js":"84dd","./ku":"3bb0","./ku.js":"3bb0","./ky":"6b69","./ky.js":"6b69","./lb":"ae2f","./lb.js":"ae2f","./lo":"9ad28","./lo.js":"9ad28","./lt":"7ae9","./lt.js":"7ae9","./lv":"ee48","./lv.js":"ee48","./me":"72bc","./me.js":"72bc","./mi":"e072","./mi.js":"e072","./mk":"1c3c","./mk.js":"1c3c","./ml":"bd5a","./ml.js":"bd5a","./mn":"9459","./mn.js":"9459","./mr":"9559","./mr.js":"9559","./ms":"3ccb","./ms-my":"7670","./ms-my.js":"7670","./ms.js":"3ccb","./mt":"f2a4","./mt.js":"f2a4","./my":"0f9b","./my.js":"0f9b","./nb":"d231","./nb.js":"d231","./ne":"8388","./ne.js":"8388","./nl":"1f79","./nl-be":"51eb","./nl-be.js":"51eb","./nl.js":"1f79","./nn":"4ebd","./nn.js":"4ebd","./oc-lnc":"8adc","./oc-lnc.js":"8adc","./pa-in":"7b6a","./pa-in.js":"7b6a","./pl":"55f6","./pl.js":"55f6","./pt":"b479","./pt-br":"1105","./pt-br.js":"1105","./pt.js":"b479","./ro":"cdf1","./ro.js":"cdf1","./ru":"f5c8","./ru.js":"f5c8","./sd":"ad40","./sd.js":"ad40","./se":"5f63","./se.js":"5f63","./si":"68d8","./si.js":"68d8","./sk":"4af9","./sk.js":"4af9","./sl":"ffbe","./sl.js":"ffbe","./sq":"f55a","./sq.js":"f55a","./sr":"cf4a","./sr-cyrl":"926e","./sr-cyrl.js":"926e","./sr.js":"cf4a","./ss":"afa0","./ss.js":"afa0","./sv":"32ec","./sv.js":"32ec","./sw":"f832","./sw.js":"f832","./ta":"50b9","./ta.js":"50b9","./te":"558e","./te.js":"558e","./tet":"e75b","./tet.js":"e75b","./tg":"b98b","./tg.js":"b98b","./th":"37b4","./th.js":"37b4","./tk":"7907","./tk.js":"7907","./tl-ph":"55bd","./tl-ph.js":"55bd","./tlh":"692f","./tlh.js":"692f","./tr":"0ced","./tr.js":"0ced","./tzl":"afa0f","./tzl.js":"afa0f","./tzm":"b817","./tzm-latn":"53be","./tzm-latn.js":"53be","./tzm.js":"b817","./ug-cn":"d62a","./ug-cn.js":"d62a","./uk":"2ac1","./uk.js":"2ac1","./ur":"3aea","./ur.js":"3aea","./uz":"4b7a","./uz-latn":"936f","./uz-latn.js":"936f","./uz.js":"4b7a","./vi":"8c25","./vi.js":"8c25","./x-pseudo":"e1ad","./x-pseudo.js":"e1ad","./yo":"0a91","./yo.js":"0a91","./zh-cn":"d2a5","./zh-cn.js":"d2a5","./zh-hk":"db73","./zh-hk.js":"db73","./zh-mo":"28fe","./zh-mo.js":"28fe","./zh-tw":"32e9","./zh-tw.js":"32e9"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=i,e.exports=a,a.id="5b5c"},"6f9a":function(e,t,n){},"771e":function(e,t,n){},"7f40":function(e,t,n){},c264:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tms-frame",{attrs:{display:{header:!0,footer:!1,left:!1,right:!1},"center-color":"#ddd"},scopedSlots:e._u([{key:"header",fn:function(){return[n("van-nav-bar",{attrs:{title:e.mission.title}})]},proxy:!0},e.mission.id?{key:"center",fn:function(){return[n("tms-flex",{attrs:{direction:"column","align-items":"stretch"}},[n("van-tabbar",{attrs:{route:"",fixed:!1,"safe-area-inset-bottom":!0}},[n("van-tabbar-item",{attrs:{to:{name:"Track",query:e.$route.query},icon:"todo-list-o"}},[e._v("活动")]),n("van-tabbar-item",{attrs:{to:{name:"Doc",query:e.$route.query},icon:"description"}},[e._v("资料")]),n("van-tabbar-item",{attrs:{to:{name:"Notice",query:e.$route.query},icon:"comment-o",dot:e.noticeCount>0}},[e._v("通知")])],1),n("router-view")],1)]},proxy:!0}:e.failure?{key:"center",fn:function(){return[n("van-empty",{attrs:{image:"error",description:e.failure}})]},proxy:!0}:{key:"center",fn:function(){return[n("tms-flex",{staticStyle:{width:"100%",height:"100%"},attrs:{"align-items":"center","elastic-items":[0]}},[n("van-loading",{attrs:{size:"48",vertical:""}},[e._v("加载中...")])],1)]},proxy:!0}],null,!0)})},i=[],r=(n("d3b7"),n("ac1f"),n("1276"),n("c189"),n("59f6")),c=n.n(r),o=(n("c907"),n("e913")),u=n.n(o),l=(n("4c29"),n("5ad7")),f=n.n(l),d=(n("f355"),n("1132")),m=(n("78bb"),n("90e9")),p=(n("5172"),n("0a68")),h=(n("5b1b"),n("ebc2")),b=(n("a74f"),n("6697")),j=(n("c6c0"),n("78f1")),v=n("82ae"),g=n.n(v);s["a"].use(d["a"]).use(m["a"]).use(p["a"]).use(h["a"]).use(b["a"]).use(j["a"]),s["a"].use(c.a).use(u.a).use(f.a);var y={data:function(){return{failure:null,noticeCount:0,mission:{id:null,title:""}}},mounted:function(){var e=this,t=this.$route.query,a=t.site,i=t.mission;s["a"].$apis.mission.entryRule(a,i).then((function(t){new Promise((function(e,t){if(/MicroMessenger/i.test(navigator.userAgent)){var s=n("18a0"),i="/rest/site/fe/wxjssdksignpackage2",r={site:a,url:encodeURIComponent(location.href.split("#")[0])};g.a.get(i,{params:r}).then((function(n){var a=n.data;if(0!==a.code)return t(a.err_msg);var i=a.data,r=i.appId,c=i.timestamp,o=i.nonceStr,u=i.signature;s.config({appId:r,timestamp:c,nonceStr:o,signature:u,jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),s.ready((function(){e(s)}))}))}else e(!0)})).then((function(){!1===t[0]?e.failure=t[1]:(s["a"].$apis.mission.get(a,i).then((function(t){Object.assign(e.mission,t),s["a"].$mission=t,e.$tmsEmit("mission.ready",t)})),s["a"].$apis.notice.count(a).then((function(t){e.noticeCount=t})))})).catch((function(t){e.failure=t}))}))}},k=y,_=n("2877"),x=Object(_["a"])(k,a,i,!1,null,null,null),I=x.exports,z=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"track"},[n("mis-app",{attrs:{apps:e.apps}})],1)},$=[],C=(n("4160"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tms-flex",{attrs:{direction:"column","align-items":"stretch"}},e._l(e.apps,(function(e){return n("tms-card",{key:e.id,staticClass:"app",attrs:{title:e.title,url:e.entryUrl}})})),1)}),S=[],O={name:"MisApp",props:{apps:Array}},M=O,T=(n("3577"),Object(_["a"])(M,C,S,!1,null,"6b2b2e9a",null)),A=T.exports,E={name:"Home",components:{MisApp:A},data:function(){return{apps:[]}},props:{siteId:String,missionId:String},mounted:function(){var e=this;s["a"].$apis.mission.userTrack(this.siteId,this.missionId).then((function(t){return t.forEach((function(t){return e.apps.push(t)}))}))}},N=E,L=Object(_["a"])(N,w,$,!1,null,null,null),q=L.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tms-flex",{staticClass:"doc",attrs:{direction:"column"}},[e.channels.length?n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:e.channelItems},on:{change:e.onChangeSelectedChannel},model:{value:e.selectedChannelId,callback:function(t){e.selectedChannelId=t},expression:"selectedChannelId"}})],1):e._e(),n("mis-doc",{attrs:{channels:e.channels,docs:e.docs}})],1)},P=[],H=(n("d81d"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs"},[n("tms-flex",{attrs:{direction:"column","align-items":"stretch"}},e._l(e.docs,(function(e){return n("tms-card",{key:e.id,staticClass:"doc",attrs:{title:e.title,desc:e.summary,url:e.entryUrl}})})),1)],1)}),U=[],R=(n("08fe"),n("b37d")),Y=(n("05cf"),n("1169")),F=(n("3f41"),n("b611"));s["a"].use(R["a"]).use(Y["a"]).use(F["a"]);var J={name:"MisDoc",props:{docs:Array}},B=J,G=(n("e887"),Object(_["a"])(B,H,U,!1,null,"029962f4",null)),K=G.exports,Q={name:"Home",components:{MisDoc:K},props:{siteId:String,missionId:String},data:function(){return{docs:[],channels:[],selectedChannelId:null,matterTypes:[]}},computed:{channelItems:function(){var e=this.channels.map((function(e){var t=e.id,n=e.title;return{text:n,value:t}}));return e.splice(0,0,{text:"全部频道",value:null}),e}},methods:{onChangeSelectedChannel:function(){var e=this;this.docs=[],s["a"].$apis.mission.docList(this.siteId,this.missionId,this.matterTypes,this.selectedChannelId).then((function(t){return t.forEach((function(t){return e.docs.push(t)}))}))}},mounted:function(){var e=this;if(s["a"].$mission){var t=s["a"].$mission,n=t.pageConfig?t.pageConfig:{},a=!(!n.channel||1!=n.channel.visible),i=!(!n.channel||1!=n.channel.asFilter);this.matterTypes=a?["channel"]:["article","link"],!1===a&&!0===i&&s["a"].$apis.mission.channelList(this.siteId,this.missionId).then((function(t){return t.forEach((function(t){return e.channels.push(t)}))})),s["a"].$apis.mission.docList(this.siteId,this.missionId,this.matterTypes).then((function(t){return t.forEach((function(t){return e.docs.push(t)}))}))}}},V=Q,W=Object(_["a"])(V,D,P,!1,null,null,null),X=W.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tms-flex",{staticClass:"notice",attrs:{direction:"column"}},[n("div",[n("van-tabs",{on:{change:e.onChangeNoticeScope},model:{value:e.noticeScope,callback:function(t){e.noticeScope=t},expression:"noticeScope"}},[n("van-tab",{attrs:{name:"unclose",title:"未关闭"}}),n("van-tab",{attrs:{name:"all",title:"全部"}})],1),n("mis-notice",{attrs:{notices:e.notices},on:{"notice-close":e.closeNotice}})],1),!1===e.batchDone?n("van-button",{attrs:{type:"default",block:""},on:{click:e.moreNotice}},[e._v(" 更多 "),e.batch&&e.batch.total?n("span",[n("span",[e._v("("+e._s(e.notices.length)+"/"+e._s(e.batch.total)+")")])]):e._e()]):e._e()],1)},ee=[],te=(n("c975"),n("ad2e"),n("2969")),ne=(n("76f8"),n("1292")),se=n("35f4"),ae=n.n(se),ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tms-flex",{attrs:{direction:"column","align-items":"stretch"}},e._l(e.notices,(function(t){return n("tms-card",{key:t.id,staticClass:"notice",attrs:{title:t.createAt},scopedSlots:e._u([{key:"desc",fn:function(){return[n("div",{domProps:{innerHTML:e._s(t.remark)}})]},proxy:!0},t.close_at<=0?{key:"footer",fn:function(){return[n("tms-flex",{attrs:{direction:"row-reverse"}},[n("van-button",{attrs:{type:"default",size:"small"},on:{click:function(n){return e.onClose(t)}}},[e._v("关闭")])],1)]},proxy:!0}:null],null,!0)})})),1)},re=[],ce=(n("c489"),n("66ef"));s["a"].use(R["a"]).use(ce["a"]);var oe={name:"MisNotice",props:{notices:Array},methods:{onClose:function(e){this.$emit("notice-close",e)}}},ue=oe,le=(n("1512"),Object(_["a"])(ue,ie,re,!1,null,"d6ab8db6",null)),fe=le.exports,de=n("14ec");s["a"].use(te["a"]).use(ne["a"]);var me={name:"Home",components:{MisNotice:fe},props:{siteId:String,missionId:String},data:function(){return{noticeScope:"unclose",notices:[],batch:null,batchDone:!1}},methods:{moreNotice:function(){var e=this;this.batch.next().then((function(t){var n=t.result,s=t.done;e.batchDone=s,n.logs.forEach((function(t){var n=t.id,s=t.close_at,a=t.batch,i=a.create_at,r=a.remark;e.notices.push({id:n,close_at:s,createAt:ae()(1e3*i).format("YYYY-MM-DD HH:mm"),remark:r})}))}))},closeNotice:function(e){var t=this;s["a"].$apis.notice.close(this.siteId,e.id).then((function(){var n=t.notices.indexOf(e);t.notices.splice(n,1),t.batch.total--,t.$toast.success("已关闭")}))},onChangeNoticeScope:function(){this.notices=[],"unclose"===this.noticeScope?(this.batch=new de["a"](s["a"].$apis.notice.uncloseList,this.siteId,this.missionId),this.batch.size=10,this.moreNotice()):"all"===this.noticeScope&&(this.batch=new de["a"](s["a"].$apis.notice.list,this.siteId,this.missionId),this.batch.size=10,this.moreNotice())}},mounted:function(){this.onChangeNoticeScope()}},pe=me,he=Object(_["a"])(pe,Z,ee,!1,null,null,null),be=he.exports;s["a"].use(z["a"]);var je=[{path:"/mission",name:"Track",component:q,props:function(e){var t=e.query;return{siteId:t.site,missionId:t.mission}}},{path:"/mission/doc",name:"Doc",component:X,props:function(e){var t=e.query;return{siteId:t.site,missionId:t.mission}}},{path:"/mission/notice",name:"Notice",component:be,props:function(e){var t=e.query;return{siteId:t.site,missionId:t.mission}}}],ve=new z["a"]({mode:"history",base:"/ue/site/fe/",routes:je}),ge=ve,ye=(n("a15b"),"/rest/site/fe/matter/mission");function ke(e){return{entryRule:function(t,n){var s={site:t,mission:n};return e.get("".concat(ye,"/entryRule"),{params:s}).then((function(e){return e.data.data}))},get:function(t,n){var s={site:t,mission:n};return e.get("".concat(ye,"/get"),{params:s}).then((function(e){return e.data.data}))},userTrack:function(t,n){var s={site:t,mission:n};return e.get("".concat(ye,"/userTrack"),{params:s}).then((function(e){return e.data.data}))},docList:function(t,n,s,a){var i={site:t,mission:n,channel:a};return i.matterType=Array.isArray(s)?s.join(","):s,e.get("".concat(ye,"/matter/docList"),{params:i}).then((function(e){return e.data.data}))},channelList:function(e,t){return this.docList(e,t,"channel")}}}var _e="/rest/site/fe/user/notice";function xe(e){return{uncloseList:function(t,n,s){var a=s.page,i=s.size,r={site:t,mission:n,page:a,size:i};return e.get("".concat(_e,"/uncloseList"),{params:r}).then((function(e){return e.data.data}))},list:function(t,n,s){var a=s.page,i=s.size,r={site:t,mission:n,page:a,size:i};return e.get("".concat(_e,"/list"),{params:r}).then((function(e){return e.data.data}))},close:function(t,n){var s={site:t,id:n};return e.get("".concat(_e,"/close"),{params:s}).then((function(e){return e.data.data}))},count:function(t){var n={site:t};return e.get("".concat(_e,"/count"),{params:n}).then((function(e){return e.data.data}))}}}function Ie(e){return{mission:ke(e.tmsAxios.mission),notice:xe(e.tmsAxios.notice)}}function ze(e,t){e.$apis=Ie(t),e.prototype.$apis=e.$apis}s["a"].config.productionTip=!1,s["a"].use(de["c"]).use(de["b"]);var we={};we.mission=s["a"].TmsAxios({name:"mission-api",config:{withCredentials:!0}}),we.notice=s["a"].TmsAxios({name:"notice-api",config:{withCredentials:!0}}),s["a"].use(ze,{tmsAxios:we}),new s["a"]({router:ge,render:function(e){return e(I)}}).$mount("#app")},e887:function(e,t,n){"use strict";var s=n("7f40"),a=n.n(s);a.a}});
//# sourceMappingURL=mission.d23aa6d2.js.map