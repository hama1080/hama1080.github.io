(window.webpackJsonp=window.webpackJsonp||[]).push([[6,16,18],{261:function(t,e,s){var i=s(264);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(34).default)("f4bb30ac",i,!0,{sourceMap:!1})},262:function(t,e,s){var i=s(267);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(34).default)("4344ce65",i,!0,{sourceMap:!1})},263:function(t,e,s){"use strict";var i=s(261);s.n(i).a},264:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.link-button[data-v-a5a26702]{font-size:120%;padding:5px 10px;margin:15px\n}\n.custom-icon[data-v-a5a26702],.v-icon[data-v-a5a26702]{width:20px\n}",""])},265:function(t,e,s){"use strict";s.r(e);var i={name:"sourcelink",components:{GithubIcon:s(269).b},props:["address"]},n=(s(263),s(12)),a=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{offset:18,span:6,xs:{span:10,offset:14}}},[e("a",{attrs:{href:this.address}},[e("el-button",{staticClass:"link-button",attrs:{plain:""}},[e("github-icon",{staticClass:"custom-icon",attrs:{name:"github"}}),this._v(" "),e("div",{staticClass:"source-text"},[this._v("Source")])],1)],1)])],1)},[],!1,null,"a5a26702",null);a.options.__file="sourceLink.vue";e.default=a.exports},266:function(t,e,s){"use strict";var i=s(262);s.n(i).a},267:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.work-card[data-v-39e6fc0a]{margin:0 0 50px\n}\n.description[data-v-39e6fc0a]{text-align:left\n}\n.description[data-v-39e6fc0a],.screen-shots[data-v-39e6fc0a]{margin:30px 0\n}\n.tech-header[data-v-39e6fc0a]{margin:10px 0;font-weight:700\n}\n.tech[data-v-39e6fc0a]{margin:0 5px\n}",""])},268:function(t,e,s){"use strict";s.r(e);var i={name:"portfolio",components:{sourceLink:s(265).default},props:{title:String,date:String,description:String,screenShots:Array,technologies:Array,sourceAddress:String},data:function(){return{carouselHeight:"300px"}},methods:{resizeWindow:function(){window.innerWidth<768?this.carouselHeight="150px":this.carouselHeight="300px"}},created:function(){this.resizeWindow(),window.addEventListener("resize",this.resizeWindow,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeWindow,!1)}},n=(s(266),s(12)),a=Object(n.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:20,offset:2}},[s("el-card",{staticClass:"work-card"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("h2",[t._v(t._s(t.title))]),t._v(" "),s("h3",[t._v(t._s(t.date))]),t._v(" "),s("div",{staticClass:"description"},[s("el-row",[s("el-col",{attrs:{md:{span:16,offset:4}}},[s("span",{domProps:{innerHTML:t._s(t.description)}})])],1)],1),t._v(" "),s("div",{staticClass:"screen-shots"},[0==t.screenShots.length?s("div"):1==t.screenShots.length?s("div",[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.screenShots[0]}})]):s("div",[s("el-carousel",{attrs:{height:t.carouselHeight,trigger:"click","indicator-position":"outside",autoplay:!1}},t._l(t.screenShots,function(t,e){return s("el-carousel-item",{key:e},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t}})])}))],1)]),t._v(" "),s("div",{staticClass:"technologies"},[s("div",{staticClass:"tech-header"},[t._v("Technologies")]),t._v(" "),t._l(t.technologies,function(e,i){return s("span",{key:i,staticClass:"tech"},[t._v("\n              "+t._s(e)+"\n            ")])})],2),t._v(" "),""!=t.sourceAddress?s("sourceLink",{attrs:{address:t.sourceAddress}}):t._e()],1)],1)],1)],1)],1)},[],!1,null,"39e6fc0a",null);a.options.__file="work.vue";e.default=a.exports},272:function(t,e,s){var i=s(289);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(34).default)("c19913fa",i,!0,{sourceMap:!1})},288:function(t,e,s){"use strict";var i=s(272);s.n(i).a},289:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"",""])},317:function(t,e,s){"use strict";s.r(e);var i={name:"digitalClock",components:{work:s(268).default}},n=(s(288),s(12)),a=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"7セグデジタル時計",date:"2013",description:"Arduinoと7セグメントLEDを用いたデジタル時計．4桁の7セグLEDをダイナミック点灯方式を利用し，点灯させている．制御基板と表示基板を分けて作成し，立体的に連結することで，スタイリッシュなデザインとしている．",screenShots:["/works/digitalClock/figure0.png","/works/digitalClock/figure1.png","/works/digitalClock/figure2.png"],technologies:["Arduino","Dynamic Lighting System"],sourceAddress:"https://github.com/hama1080/ArduinoDigitalClock"}})],1)},[],!1,null,"3e017a1e",null);a.options.__file="digitalClock.vue";e.default=a.exports}}]);