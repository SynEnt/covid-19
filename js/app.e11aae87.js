(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],v=0,p=[];v<i.length;v++)c=i[v],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,i=1;i<o.length;i++){var s=o[i];0!==a[s]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},a={app:0},n=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("8a23"),a=o.n(r);a.a},4230:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{staticClass:"high-zindex toolbar-color",attrs:{app:"",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("a",{staticClass:"brand",attrs:{href:"https://versobyte.com"}},[t._v("Versobyte")])])]),o("v-content",[o("router-view"),o("v-dialog",{attrs:{persistent:""},model:{value:t.block,callback:function(e){t.block=e},expression:"block"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("Disable your ad-blocker")]),o("v-card-text",[o("strong",[t._v("Please disable your ad-blocker, we rely on the widget provided by Arc.io to support COVID-19 response fund.")])]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:"",onclick:"window.location.reload(false); "}},[t._v("Oh, ok")])],1)],1)],1)],1),o("v-footer",{staticClass:"ft-footer",attrs:{height:"auto"}},[o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-flex",{staticClass:"footer",attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("Copyright © Versobyte, All Rights Reserved.")])],1)],1)],1)},n=[],c={name:"App",components:{},data:function(){return{block:!1}},watch:{$route:function(t){document.title=t.meta.title||"Versobyte"}},mounted:function(){document.title="Versobyte";var t=this;setTimeout((function(){document.getElementById("arc-widget-container")||(t.block=!0)}),2e3)}},i=c,s=(o("034f"),o("7ce3"),o("2877")),l=o("6544"),u=o.n(l),v=o("7496"),p=o("40dc"),d=o("8336"),f=o("b0af"),b=o("99d9"),h=o("a75b"),m=o("169a"),y=o("0e8f"),_=o("553a"),w=o("a722"),g=o("2fa4"),k=Object(s["a"])(i,a,n,!1,null,"40146c1a",null),x=k.exports;u()(k,{VApp:v["a"],VAppBar:p["a"],VBtn:d["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VContent:h["a"],VDialog:m["a"],VFlex:y["a"],VFooter:_["a"],VLayout:w["a"],VSpacer:g["a"]});var C=o("8c4f"),V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"div-center"},[o("v-icon",{staticClass:"i-center check-icon",attrs:{size:"50",color:"black"}},[t._v("mdi-emoticon-outline")]),o("h1",{staticClass:"s-bold text-center"},[t._v("Thank You")]),t._m(0),o("v-row",{staticClass:"justify-content-center link-row"},[o("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){e.stopPropagation(),t.work=!0}}},[t._v("How Does This Work?")]),o("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){e.stopPropagation(),t.price=!0}}},[t._v("How Much Does This Cost?")]),o("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){e.stopPropagation(),t.contact=!0}}},[t._v("Contact Us")])],1)],1),o("v-dialog",{model:{value:t.work,callback:function(e){t.work=e},expression:"work"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("How Does This Work?")]),o("v-card-text",[t._v(" Versobyte uses "),o("a",{attrs:{href:"https://arc.io/",target:"_blank"}},[t._v("arc.io")]),t._v(" to earn revenue. "),o("v-spacer"),o("br"),t._v(" Arc.io let us earn revenue to donate by having each user participate in a CDN (content delivery network). "),o("v-spacer"),o("br"),t._v(" When you open this webpage, you will download files from "),o("a",{attrs:{href:"https://arc.io/",target:"_blank"}},[t._v("arc.io")]),t._v(" to distribute to others. "),o("v-spacer"),t._v(" If you downloaded a picture of a cat picture and someone else "),o("strong",[t._v("near")]),t._v(" you wants to see it, your device will provide the picture to that person and they will in return provide to others who wants to view it. "),o("v-spacer"),o("br"),t._v(" This method reduces strain on the servers and you can allow others on poor internet conditions view cat pictures faster. ")],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.work=!1}}},[t._v("Oh, ok")])],1)],1)],1),o("v-dialog",{model:{value:t.price,callback:function(e){t.price=e},expression:"price"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("How Much Does This Cost?")]),o("v-card-text",[t._v(" This costs nothing on both Versobyte and on your end. "),o("br"),o("br"),t._v(" We earn $0.0005 / hour for each desktop device on this webpage. ")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.price=!1}}},[t._v("Oh, ok")])],1)],1)],1),o("v-dialog",{model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("Contact Us")]),o("v-card-text",[o("strong",[t._v("Questions?")]),o("br"),t._v(" Shoot me an email at "),o("a",{attrs:{href:"mailto:contact@versobyte.com"}},[t._v("contact@versobyte.com")]),o("br"),t._v(" Send me a message on Discord at "),o("strong",[t._v("Syntax#9468")]),o("br"),o("br"),o("br"),o("strong",[t._v("Questions about Arc.io?")]),o("br"),t._v(" Send them an email at "),o("a",{attrs:{href:"mailto:team@arc.io"}},[t._v("team@arc.io")])]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.contact=!1}}},[t._v("Thanks")])],1)],1)],1)],1)},O=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-center"},[t._v("Please stay on this page and keep your device powered on to support COVID-19 response fund."),o("br"),t._v("You can continue browsing.")])}],T={name:"Home",data:function(){return{work:!1,price:!1,contact:!1}},components:{}},j=T,P=(o("cccb"),o("132d")),D=o("0fd9"),S=Object(s["a"])(j,V,O,!1,null,null,null),A=S.exports;u()(S,{VBtn:d["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VDialog:m["a"],VIcon:P["a"],VRow:D["a"],VSpacer:g["a"]}),r["a"].use(C["a"]);var H=[{path:"/",name:"Home",component:A}],M=new C["a"]({mode:"history",base:"/",routes:H}),$=M,I=o("f309");r["a"].use(I["a"]);var B=new I["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,vuetify:B,render:function(t){return t(x)}}).$mount("#app")},"703f":function(t,e,o){},"7ce3":function(t,e,o){"use strict";var r=o("703f"),a=o.n(r);a.a},"8a23":function(t,e,o){},cccb:function(t,e,o){"use strict";var r=o("4230"),a=o.n(r);a.a}});
//# sourceMappingURL=app.e11aae87.js.map