(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{378:function(t,e,r){"use strict";r(44),r(382);var n=r(379),o=r(27);e.a=Object(o.a)(n.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},379:function(t,e,r){"use strict";r(44);var n=r(16),o=r(1);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n.b)(this.height),r=Object(n.b)(this.minHeight),o=Object(n.b)(this.minWidth),c=Object(n.b)(this.maxHeight),l=Object(n.b)(this.maxWidth),d=Object(n.b)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},380:function(t,e,r){var content=r(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("5470a08c",content,!0,{sourceMap:!1})},381:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},382:function(t,e,r){var content=r(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("27f0eb42",content,!0,{sourceMap:!1})},383:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}",""])},384:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("be70614c",content,!0,{sourceMap:!1})},385:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},386:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("74d835da",content,!0,{sourceMap:!1})},387:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},391:function(t,e,r){"use strict";r(148);var n=r(74);e.a=Object(n.a)("flex")},392:function(t,e,r){var content=r(405);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("0ec99e81",content,!0,{sourceMap:!1})},395:function(t,e,r){"use strict";r(44),r(380);var n=r(378).a,o=r(12);e.a=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(o.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?t.calculatedAspectRatio=o/n:null!=e&&setTimeout(r,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},400:function(t,e,r){"use strict";r(384),r(386);var n=r(32);r(44);var o=r(1).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,r=!0,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t):{};var t,e,r}}}),c=r(379),l=r(28),d=r(27),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},v=Object(d.a)(n.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=r(149),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(m.a,v).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},v.options.computed.classes.call(this))},styles:function(){var style=f({},v.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),r=e.tag,data=e.data;return data.style=this.styles,t(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},404:function(t,e,r){"use strict";var n=r(392);r.n(n).a},405:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".work-title[data-v-2b433a15]{width:100%;text-align:center}.work-date[data-v-2b433a15]{margin-left:auto;padding-top:10px}",""])},406:function(t,e,r){"use strict";var n=r(1);e.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},429:function(t,e,r){"use strict";r.r(e);r(47);var n=r(204),o={name:"Works",data:function(){return{workArray:[],openedWork:null}},created:function(){var t=this;n.default.firestore().collection("works").get().then(function(e){e.forEach(function(e){t.workArray.push(e.data())})}).then(function(e){t.workArray.sort(function(a,b){return Date.parse(b.date)-Date.parse(a.date)})}).catch(function(t){console.log(t)}),this.setOpenedWorkFromPath(this.$route.path)},methods:{openDetail:function(title){this.openedWork=title,this.$router.push("/works/"+title)},closeDetail:function(){this.openedWork=null},setOpenedWorkFromPath:function(path){var t=path.split("/");3===t.length?this.openedWork=t[2]:this.openedWork=null}},watch:{$route:function(t,e){this.setOpenedWorkFromPath(t.path)}}},c=(r(404),r(54)),l=r(147),d=r.n(l),h=r(400),v=r(406),m=r(372),f=r(391),x=r(142),_=r(395),y=r(375),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",xl8:""}},[r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.workArray,function(e){return r("v-flex",{key:e.title},[r("v-card",{staticStyle:{margin:"0 auto"},attrs:{hover:"",nuxt:"",height:"350px",width:"250px"},on:{click:function(r){return t.openDetail(e.title)}}},[r("v-img",{staticClass:"grey lighten-2",attrs:{"aspect-ratio":"1",src:e.eyeCatchImage,width:"250px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"title work-title"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"work-date"},[r("v-icon",{staticStyle:{"padding-bottom":"2px"},attrs:{small:""}},[t._v("far fa-calendar")]),t._v(" "),r("span",{staticClass:"subheading"},[t._v(t._s(e.date))])],1)])],1),t._v(" "),t.openedWork===e.title?r("nuxt-child",{attrs:{title:e.title,date:e.date,description:e.description,technologies:e.technologies,source:e.source,images:e.images},on:{close:t.closeDetail}}):t._e()],1)}),1)],1)],1)],1)},[],!1,null,"2b433a15",null);e.default=component.exports;d()(component,{VCard:h.a,VCardTitle:v.a,VContainer:m.a,VFlex:f.a,VIcon:x.a,VImg:_.a,VLayout:y.a})}}]);