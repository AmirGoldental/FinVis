(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a86f42cd"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/FinVis/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Dashboard")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-cog")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Application")])],1),a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"shrink"},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{href:t.source,icon:"",large:"",target:"_blank"}},r),[a("v-icon",{attrs:{large:""}},[t._v("mdi-code-tags")])],1)]}}])},[a("span",[t._v("Source")])])],1)],1)],1),a("HelloWorld")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t._v(" hii "),r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1)],1)],1)},s=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=l,u=a("2877"),f=a("6544"),p=a.n(f),v=a("62ad"),d=a("a523"),m=a("adda"),h=a("0fd9"),b=Object(u["a"])(c,i,s,!1,null,null,null),g=b.exports;p()(b,{VCol:v["a"],VContainer:d["a"],VImg:m["a"],VRow:h["a"]});var y={name:"App",components:{HelloWorld:g},props:{source:String},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},w=y,_=a("7496"),x=a("40dc"),j=a("5bc1"),V=a("8336"),C=a("553a"),k=a("132d"),O=a("8860"),A=a("da13"),S=a("1800"),L=a("5d23"),P=a("f6c4"),T=a("f774"),E=a("2a7f"),I=a("3a2f"),W=Object(u["a"])(w,n,o,!1,null,null,null),H=W.exports;p()(W,{VApp:_["a"],VAppBar:x["a"],VAppBarNavIcon:j["a"],VBtn:V["a"],VCol:v["a"],VContainer:d["a"],VFooter:C["a"],VIcon:k["a"],VList:O["a"],VListItem:A["a"],VListItemAction:S["a"],VListItemContent:L["a"],VListItemTitle:L["b"],VMain:P["a"],VNavigationDrawer:T["a"],VRow:h["a"],VToolbarTitle:E["a"],VTooltip:I["a"]});a("d3b7");var M=a("8c4f"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},F=[],$={name:"Home",components:{HelloWorld:g}},q=$,N=Object(u["a"])(q,D,F,!1,null,null,null),B=N.exports;r["a"].use(M["a"]);var J=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],R=new M["a"]({routes:J}),Y=R,Q=a("2f62");r["a"].use(Q["a"]);var z=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("f309");r["a"].use(G["a"]);var K=new G["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:z,vuetify:K,render:function(t){return t(H)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2d7e0d3c.js.map