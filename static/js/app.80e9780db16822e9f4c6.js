webpackJsonp([1],{"0F+d":function(t,e){},DSHg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={name:"TopBar",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"menu"}},[e("el-menu",{staticClass:"top-bar",attrs:{"default-active":this.activeIndex,mode:"horizontal"},on:{select:this.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[this._v("Profile")]),this._v(" "),e("el-menu-item",{attrs:{index:"2"}},[this._v("Works")]),this._v(" "),e("el-menu-item",{attrs:{index:"3"}},[this._v("Photographs")])],1)],1)},staticRenderFns:[]};var s={name:"App",components:{TopBar:n("VU/8")(i,r,!1,function(t){n("DSHg")},"data-v-ac5742c0",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TopBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(s,o,!1,function(t){n("ZKUs")},null,null).exports,l=n("zL8q"),u=n.n(l),d=n("znjY"),h=n.n(d),p=(n("tvR6"),n("/ocq")),f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var v=n("VU/8")({name:"Profile",data:function(){return{msg:"hmhm903"}}},f,!1,function(t){n("0F+d")},"data-v-129acc4e",null).exports;a.default.use(p.a),a.default.use(u.a,{locale:h.a});var m=new p.a({routes:[{path:"/",name:"Profile",component:v}]});a.default.config.productionTip=!1,new a.default({el:"#app",router:m,components:{App:c},template:"<App/>"})},ZKUs:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.80e9780db16822e9f4c6.js.map