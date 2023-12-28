(function(){"use strict";var t={6471:function(t,e,s){var a=s(144),r=s(1096),o=s(5378),i=s(1828),n=s(7092),l=s(1446),c=s(3584),d=s(7615),u=s(2370),p=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r.Z,{staticStyle:{"background-image":"url('/background.jpg')"}},[e(o.Z,{attrs:{fixed:"",app:"",dark:""}},[e(d.Z,{attrs:{"justify-center":"","align-center":""}},[e(i.Z,{attrs:{text:"",to:"/"}},[e(u.qW,[t._v("About")])],1),e(i.Z,{attrs:{text:"",to:"/works"}},[e(u.qW,[t._v("Works")])],1),e(i.Z,{attrs:{text:"",to:"/photos"}},[e(u.qW,[t._v("Photos")])],1)],1)],1),e(l.Z,[e(n.Z,[e(n.Z,[e("router-view")],1)],1)],1),e(c.Z,{attrs:{id:"footer",fixed:"",dark:"",app:""}})],1)},h=[],f=a.ZP.extend({name:"App"}),g=f,m=s(1001),v=(0,m.Z)(g,p,h,!1,null,null,null),Z=v.exports,y=s(8345),b=s(3243),w=s(5057),x=s(780),k=s(248),_=s(1908),C=s(7833),S=s(5093),j=function(){var t=this,e=t._self._c;return e(n.Z,[e(d.Z,{attrs:{"justify-center":"",row:"",wrap:""}},[e(b.Z,{attrs:{xs12:"",md5:"",lg4:"",xl3:"","offset-md1":"","offset-lg2":"","offset-xl3":""}},[e(d.Z,{attrs:{"justify-center":"","align-center":"","fill-height":""}},[e(b.Z,[e(x.Z,{attrs:{src:s(2144),"max-width":"300px"}}),e("div",{attrs:{id:"socials"}},[e(i.Z,{attrs:{large:"",icon:""},on:{click:t.openGitHub}},[e(w.Z,[t._v("fab fa-github")])],1),e(i.Z,{attrs:{large:"",icon:""},on:{click:t.openLinkedIn}},[e(w.Z,[t._v("fab fa-linkedin")])],1)],1)],1)],1)],1),e(b.Z,{staticClass:"text-xs-center text-md-left",attrs:{xs12:"",md6:"",lg6:"",xl6:""}},[e(d.Z,{attrs:{wrap:""}},[e(b.Z,{attrs:{xs12:""}},[e("span",{staticClass:"display-2"},[t._v("濱野 拓人")])]),e(b.Z,{attrs:{xs12:""}},[e("span",{staticClass:"headline"},[t._v("@hama1080")])])],1),e("div",{attrs:{id:"message"}},[e("span",{staticClass:"subheading"},[t._v("Software engineer.")])]),e("div",{attrs:{id:"skills"}},[e("div",{staticClass:"title"},[t._v("Skills")]),e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{"offset-xs2":"","offset-sm3":"","offset-md0":""}},[e(k.Z,{staticStyle:{background:"rgba(0, 0, 0, 0)"},attrs:{"two-line":""}},[e(_.Z,[e(C.Z,[e(w.Z,[t._v("far fa-keyboard")])],1),e(S.km,[e(S.V9,[t._v("Programming Languages")]),e(S.oZ,[t._v("Java, C/C++, JavaScript, Python")])],1)],1),e(_.Z,[e(C.Z,[e(w.Z,[t._v("fas fa-book")])],1),e(S.km,[e(S.V9,[t._v("Libraries/Frameworks")]),e(S.oZ,[t._v("React, Spring, PhysX")])],1)],1),e(_.Z,[e(C.Z,[e(w.Z,[t._v("fas fa-network-wired")])],1),e(S.km,[e(S.V9,[t._v("Infrastructure")]),e(S.oZ,[t._v(" AWS, Docker, Firebase ")])],1)],1),e(_.Z,[e(C.Z,[e(w.Z,[t._v("fas fa-bolt")])],1),e(S.km,[e(S.V9,[t._v("Electronics")]),e(S.oZ,[t._v("Raspberry Pi, Arduino, M5Stack, PIC")])],1)],1)],1)],1)],1)],1)],1)],1),e(c.Z,{staticStyle:{height:"80px","margin-bottom":"16px"},attrs:{id:"footer",fixed:"",app:""}},[e("domino")],1)],1)},P=[],I=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"canvas"}})},E=[],R=(s(7658),s(9842)),W={mounted(){const t=document.getElementById("footer").clientWidth,e=80,s=R.Engine,a=R.Render,r=R.World,o=R.Bodies,i=s.create(),n=a.create({element:document.getElementById("canvas"),engine:i,options:{width:t,height:e,background:"rgba(0, 0, 0, 0)",wireframes:!1}});let l=[];const c=50;l.push(o.rectangle(t/2,e,t,10,{isStatic:!0}));const d=60,u=o.polygon(c,e,3,d,{isStatic:!0});R.Body.rotate(u,3.14),l.push(u);const p=c+d+50,h=40,f=t/h;for(let m=0;m<f;m++)l.push(o.rectangle(p+m*h,0,7,60,{density:.02,friction:1}));const g=R.Bodies.circle(c,0,20,{density:.02});l.push(g),r.add(i.world,l),s.run(i),a.run(n)}},A=W,O=(0,m.Z)(A,I,E,!1,null,null,null),D=O.exports,F={components:{domino:D},methods:{openGitHub(){window.open("https://github.com/hama1080")},openLinkedIn(){window.open("https://www.linkedin.com/in/takutohamano/")}}},$=F,B=(0,m.Z)($,j,P,!1,null,"8fc5d0d4",null),L=B.exports,T=s(3058),q=s(5223),J=function(){var t=this,e=t._self._c;return e(d.Z,{attrs:{"justify-center":"","align-center":""}},[e(b.Z,{attrs:{xs12:"",xl8:""}},[e(n.Z,{attrs:{fluid:"","grid-list-xl":""}},[e(d.Z,{attrs:{row:"",wrap:""}},t._l(t.workArray,(function(s){return e(b.Z,{key:s.title},[e(T.Z,{staticStyle:{margin:"0 auto"},attrs:{hover:"",tile:"",height:"350px",width:"250px"},on:{click:function(e){return t.openDetail(s.title)}}},[e(x.Z,{staticClass:"grey lighten-2",attrs:{"aspect-ratio":"1",src:s.eyeCatchImage,width:"250px"}}),e(q.ZB,[e("div",[e(w.Z,{staticStyle:{"padding-bottom":"5px"},attrs:{small:""}},[t._v("far fa-calendar")]),e("span",{staticClass:"subtitle-2",staticStyle:{"padding-left":"5px"}},[t._v(t._s(s.date))])],1),e("div",{staticClass:"work-title"},[t._v(t._s(s.title))])])],1),t.openedWork===s.title?e("router-view",{attrs:{title:s.title,date:s.date,description:s.description,technologies:s.technologies,source:s.source,images:s.images},on:{close:t.closeDetail}}):t._e()],1)})),1)],1)],1)],1)},V=[],z=s(3977);const M={apiKey:"AIzaSyDbDENjeJ8MdWpXiIQ902c5ECLqcjh9AC4",authDomain:"portfolio-546a8.firebaseapp.com",databaseURL:"https://portfolio-546a8.firebaseio.com",projectId:"portfolio-546a8",storageBucket:"portfolio-546a8.appspot.com",messagingSenderId:"772914165771",appId:"1:772914165771:web:fc3d04f8b3f65916"},N=(0,z.ZF)(M);var H=N,U=s(3247),K={name:"Works",data:function(){return{workArray:[],openedWork:null}},async created(){const t=(0,U.ad)(H);try{const e=await(0,U.PL)((0,U.hJ)(t,"works"));e.forEach((t=>{this.workArray.push(t.data())})),this.workArray.sort(((t,e)=>Date.parse(e.date)-Date.parse(t.date)))}catch(e){console.log(e)}this.setOpenedWorkFromPath(this.$route.path)},methods:{openDetail(t){this.openedWork=t,this.$router.push("/works/"+t)},closeDetail(){this.openedWork=null},setOpenedWorkFromPath(t){const e=t.split("/");3===e.length?this.openedWork=e[2]:this.openedWork=null}},watch:{$route(t,e){this.setOpenedWorkFromPath(t.path)}}},G=K,X=(0,m.Z)(G,J,V,!1,null,"519c0ee6",null),Q=X.exports,Y=s(657),tt=s(6714),et=s(2570),st=s(4402),at=function(){var t=this,e=t._self._c;return e(et.Z,{attrs:{"max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(T.Z,[e(q.EB,[e("div",{staticClass:"display-1 card-title"},[t._v(t._s(t.title))]),e("div",{staticClass:"title card-date"},[t._v(t._s(t.date))])]),e(n.Z,{attrs:{"grid-list-lg":""}},[e(d.Z,{attrs:{wrap:""}},[e(b.Z,{attrs:{xs12:"",md6:""}},[e(st.Z,{attrs:{"aspect-ratio":1}},[e(Y.Z,{attrs:{height:"100%","hide-delimiters":"","show-arrows":1!==t.images.length}},t._l(t.images,(function(t,s){return e(tt.Z,{key:s,attrs:{src:t}})})),1)],1)],1),e(b.Z,{attrs:{xs12:"",md6:""}},[e("div",{staticClass:"work-detail"},[e("div",[e("div",{staticClass:"title"},[t._v("Description")]),e("div",{staticClass:"detail-content"},[e("span",{staticClass:"subheading",domProps:{innerHTML:t._s(t.description)}})])]),e("div",[e("div",{staticClass:"title",staticStyle:{"padding-top":"20px"}},[t._v("Technologies")]),e("ul",{staticClass:"detail-content"},t._l(t.technologies,(function(s,a){return e("li",{key:a,staticClass:"subheading"},[t._v(" "+t._s(s)+" ")])})),0)]),e("div",{staticClass:"source"},[null!=t.source?e("source-link",{attrs:{address:t.source}}):t._e()],1)])])],1)],1)],1)],1)},rt=[],ot=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{large:"",icon:""},on:{click:t.openSource}},[e(w.Z,{attrs:{large:""}},[t._v("fab fa-github")])],1)},it=[],nt={name:"Sourcelink",props:{address:{type:String,default:""}},methods:{openSource(){window.open(this.address)}}},lt=nt,ct=(0,m.Z)(lt,ot,it,!1,null,"6a9546c2",null),dt=ct.exports,ut={components:{sourceLink:dt},props:{title:String,date:String,description:String,technologies:Array,source:String,images:Array},data(){return{dialog:!0}},watch:{dialog(t){t||(this.$router.push("/works"),this.$emit("close"))}}},pt=ut,ht=(0,m.Z)(pt,at,rt,!1,null,"0ca0132e",null),ft=ht.exports,gt=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{fluid:"","grid-list-xl":""}},[e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{xs12:"",md8:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(540)}})],1)],1)],1),e(d.Z,{attrs:{"justify-center":"",row:"",wrap:""}},[e(b.Z,{attrs:{xs12:"",md4:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(8530)}})],1)],1),e(b.Z,{attrs:{xs12:"",md4:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(8729)}})],1)],1)],1),e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{xs12:"",md8:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(5843)}})],1)],1)],1),e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{xs12:"",md8:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(8502)}})],1)],1)],1),e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{xs12:"",md8:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(7829)}})],1)],1)],1),e(d.Z,{attrs:{"justify-center":""}},[e(b.Z,{attrs:{xs12:"",md8:""}},[e(T.Z,{staticClass:"photo"},[e(x.Z,{attrs:{src:s(2905)}})],1)],1)],1)],1)},mt=[],vt={},Zt=(0,m.Z)(vt,gt,mt,!1,null,"18413946",null),yt=Zt.exports,bt=s(2202),wt=s(7709),xt=s(271),kt=s(6904),_t=s(8236),Ct=s(5251),St=function(){var t=this,e=t._self._c;return e("div",[t.displaySuccess?e(bt.Z,{attrs:{type:"success"}},[t._v(" 追加成功 ")]):t._e(),t.displayError?e(bt.Z,{attrs:{type:"error"}},[t._v(" 追加失敗 ")]):t._e(),e(_t.Z,{attrs:{value:t.overlay}},[e(w.Z,[t._v("fas fa-feather")]),t._v(" 追加中 ")],1),e("div",[e(Ct.Z,{attrs:{type:"text",placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e(Ct.Z,{attrs:{type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(i.Z,{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.signIn}},[t._v(" Signin ")])],1),t.loginSuccess?e(kt.Z,{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(n.Z,[e(Ct.Z,{attrs:{label:"Date",rules:t.textRule,required:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),e(Ct.Z,{attrs:{label:"Title",rules:t.textRule,required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e(Ct.Z,{attrs:{label:"documentName(English)",rules:t.textRule,required:""},model:{value:t.documentName,callback:function(e){t.documentName=e},expression:"documentName"}}),e(Ct.Z,{attrs:{label:"Description",rules:t.textRule,required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),e(wt.Z,{attrs:{label:"technologies",multiple:""},model:{value:t.technologies,callback:function(e){t.technologies=e},expression:"technologies"}}),e(xt.Z,{attrs:{label:"アイキャッチ画像","prepend-icon":"mdi-camera"},on:{change:t.loadEyecatch},model:{value:t.eyecatch,callback:function(e){t.eyecatch=e},expression:"eyecatch"}}),t.eyecatch?e("vue-cropper",{ref:"eyecatch",attrs:{alt:"Source Image","aspect-ratio":1,"view-mode":1,"zoom-on-wheel":!1}}):t._e(),e(xt.Z,{attrs:{label:"写真",multiple:"","prepend-icon":"mdi-camera",rules:t.photoRules},on:{change:t.loadPhotos},model:{value:t.photos,callback:function(e){t.photos=e},expression:"photos"}}),t._l(t.photos,(function(t,s){return e("vue-cropper",{key:s,ref:"cropper",refInFor:!0,attrs:{alt:"Source Image","aspect-ratio":1,"view-mode":1,"zoom-on-wheel":!1}})}))],2),e(i.Z,{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.post}},[t._v(" 新規追加 ")])],1):t._e()],1)},jt=[],Pt=s(7652),It=s(3387),Et=s(6650),Rt={components:{VueCropper:Pt.Z},data(){return{username:"",password:"",loginSuccess:!1,overlay:!1,valid:!1,date:"",title:"",documentName:"",description:"",technologies:[],eyecatch:null,photos:[],textRule:[t=>!!t||"必須項目"],photoRules:[t=>0!==t.length||"写真の投稿は必須です"],displaySuccess:!1,displayError:!1}},methods:{async signIn(){const t=(0,It.v0)();(0,It.e5)(t,this.username,this.password).then((t=>{this.loginSuccess=!0})).catch((t=>{console.log(t)}))},async post(){this.overlay=!0,this.displaySuccess=!1,this.displayError=!1;const t=(0,Et.cF)();let e=null;const s=(0,Et.iH)(t,`works/${this.title}/eyecatch.png`),a=await this.getCanvasBlob(this.resizeImg(this.$refs.eyecatch.getCroppedCanvas(),500,500));try{await(0,Et.KV)(s,a),e=await(0,Et.Jt)(s)}catch(i){return this.displayError=!0,void(this.overlay=!1)}const r=[];for(let n=0;n<this.photos.length;n++){const e=(0,Et.iH)(t,`works/${this.title}/figure${n}.png`),s=await this.getCanvasBlob(this.resizeImg(this.$refs.cropper[n].getCroppedCanvas(),800,800));try{await(0,Et.KV)(e,s),r.push(await(0,Et.Jt)(e)),console.log(r)}catch(i){return this.displayError=!0,void(this.overlay=!1)}}const o=(0,U.ad)(H);try{await(0,U.ET)((0,U.hJ)(o,"works"),{date:this.date,title:this.title,description:this.description,technologies:this.technologies,eyeCatchImage:e,images:r}),this.displaySuccess=!0,this.overlay=!1}catch(i){this.displayError=!0,this.overlay=!1}},resizeImg(t,e,s){const a=document.createElement("canvas");a.width=e,a.height=s;const r=a.getContext("2d");return r.drawImage(t,0,0,e,s),a},async getCanvasBlob(t){return new Promise(((e,s)=>{t.toBlob((function(t){e(t)}))}))},loadEyecatch(){"function"!==typeof FileReader&&alert("Sorry, FileReader API not supported");const t=this.eyecatch,e=new FileReader;e.onload=t=>{this.$refs.eyecatch.replace(t.target.result)},e.readAsDataURL(t)},loadPhotos(){"function"!==typeof FileReader&&alert("Sorry, FileReader API not supported");for(let t=0;t<this.photos.length;t++){const e=this.photos[t],s=new FileReader;s.onload=e=>{this.$refs.cropper[t].replace(e.target.result)},s.readAsDataURL(e)}}}},Wt=Rt,At=(0,m.Z)(Wt,St,jt,!1,null,null,null),Ot=At.exports;a.ZP.use(y.ZP);const Dt=[{path:"/",component:L},{path:"/works",component:Q,children:[{path:":work",component:ft}]},{path:"/photos",component:yt},{path:"/admin",component:Ot}],Ft=new y.ZP({routes:Dt});var $t=Ft,Bt=s(2250);a.ZP.use(Bt.Z);var Lt=new Bt.Z({icons:{iconfont:"fa"}});a.ZP.config.productionTip=!1,new a.ZP({router:$t,vuetify:Lt,render:t=>t(Z)}).$mount("#app")},7829:function(t,e,s){t.exports=s.p+"img/abashiri.802b2659.jpg"},8502:function(t,e,s){t.exports=s.p+"img/biei.65dbc07d.jpg"},8530:function(t,e,s){t.exports=s.p+"img/drop0.0f14d419.jpg"},8729:function(t,e,s){t.exports=s.p+"img/drop1.66db3a03.jpg"},5843:function(t,e,s){t.exports=s.p+"img/hokuryu.f07bcbf8.jpg"},540:function(t,e,s){t.exports=s.p+"img/poonhill.8bb17a99.jpg"},2905:function(t,e,s){t.exports=s.p+"img/varanasi.1abffb4a.jpg"},2144:function(t,e,s){t.exports=s.p+"img/profilePicture.ab1ccfa7.png"}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,o){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],o=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,o<i&&(i=o));if(n){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,r,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],n=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var d=l(s)}for(e&&e(a);c<i.length;c++)o=i[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},a=self["webpackChunkportfolio2_update3"]=self["webpackChunkportfolio2_update3"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(6471)}));a=s.O(a)})();
//# sourceMappingURL=app.10c641fd.js.map