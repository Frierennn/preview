(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[46],{1665:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"logo"},[e._v("Utopia")]),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",[n("el-avatar",{attrs:{src:e.imgUrl,fit:"scale-down",size:"medium"}})],1),n("el-dropdown",{staticClass:"user-name",on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.name)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{name:"dropdown"}},[n("el-dropdown-item",{attrs:{command:"退出登录"}},[e._v("退出登录")])],1)],1)],1)])])},i=[],o=(n(4916),n(3123),n(3210),n(8309),n(4959)),a=(n(9669),{data:function(){return{imgUrl:n(7549),name:"游客",message:2}},computed:{collapse:function(){return this.$store.state.collapse}},methods:{logout:function(){o.Z.clearCookie("user_no"),o.Z.clearCookie("user_name"),o.Z.clearCookie("state"),o.Z.clearCookie("date"),o.Z.set("refresh","true")},handleCommand:function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n],i=r.indexOf("="),o=i>-1?r.substr(0,i):r;document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}this.$message(e),this.$router.push("/")},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var i=n[r].trim();if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""},getUserdata:function(){this.getCookie("user_name")&&(this.name=decodeURI(this.getCookie("user_name"))),this.getCookie("img")&&(this.imgUrl=unescape(this.getCookie("img")))}},mounted:function(){this.getUserdata()}}),s=a,u=n(1001),l=(0,u.Z)(s,r,i,!1,null,"46832a60",null),c=l.exports},6391:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("el-menu",{ref:"menu",staticClass:"el-menu-demo",staticStyle:{width:"980px"},attrs:{"default-active":e.$route.path,mode:"horizontal",router:""}},[n("el-menu-item",{attrs:{index:"/vipnews"}},[e._v("广软新闻")]),n("el-menu-item",{attrs:{index:"/vipnewsedit"}},[e._v("广软新闻编辑")]),n("el-menu-item",{attrs:{index:"/vipActivity"}},[e._v("广软活动中心")]),n("el-menu-item",{attrs:{index:"/vipActivityedit"}},[e._v("广软活动中心编辑")]),n("el-menu-item",{attrs:{index:"/vipFblog"}},[e._v("广软社区分享编辑")]),n("el-menu-item",{attrs:{index:"/vipusers"}},[e._v("用户管理")]),n("el-menu-item",{attrs:{index:"/vipfriends"}},[e._v("我的消息")]),n("el-menu-item",{attrs:{index:"/vipinfo"}},[e._v("个人中心")])],1),n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.nav,expression:"nav"}]})],1)},i=[],o={data:function(){return{nav:!0,activePath:"/vipnews"}},methods:{}},a=o,s=n(1001),u=(0,s.Z)(a,r,i,!1,null,"64beb410",null),l=u.exports},7046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("v-header"),n("vipnavbar"),n("div",{staticClass:"container"},[n("el-page-header",{attrs:{content:"新闻文章发布"},on:{back:e.goBack}}),n("br"),n("div",{staticClass:"form-box"},[n("el-form",{ref:"form",attrs:{"label-width":"160px",model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[n("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"发布分区"}},[n("el-select",{attrs:{placeholder:"发布分区"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"轮播",value:"0"}}),n("el-option",{attrs:{label:"快讯",value:"1"}}),n("el-option",{attrs:{label:"视频",value:"2"}}),n("el-option",{attrs:{label:"媒体",value:"3"}})],1)],1),n("el-form-item",{attrs:{label:"发布者"}},[n("el-input",{attrs:{disabled:!0,e:"width: 160px"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1),n("el-form-item",{attrs:{label:"发布日期"}},[n("el-input",{attrs:{disabled:!0,e:"width: 160px"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),n("el-form-item",{attrs:{label:"文章简略"}},[n("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.form.text,callback:function(t){e.$set(e.form,"text",t)},expression:"form.text"}})],1),n("el-form-item",{staticStyle:{width:"980px"},attrs:{label:"正文"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.detail,expression:"form.detail"}],attrs:{id:"summernote",name:"editordata",rows:"5"},domProps:{value:e.form.detail},on:{input:function(t){t.target.composing||e.$set(e.form,"detail",t.target.value)}}})]),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("表单提交")])],1)],1)],1)],1)],1)},i=[],o=(n(4916),n(3123),n(3210),n(1038),n(8783),n(1539),n(4747),n(6391)),a=n(1665),s=n(9755),u=n.n(s),l=n(9669),c=n.n(l),f={name:"vipbaseform",data:function(){return{form:{title:"",user_name:decodeURI(this.getCookie("user_name")),date:"",detail:"",region:"0",text:"",user_no:unescape(this.getCookie("user_no"))},rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:3,message:"最小长度为 3  个字符",trigger:"blur"}]}}},methods:{getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var i=n[r].trim();if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""},goBack:function(){this.$router.go(-1)},getdate:function(){var e=this,t=(new Date).getFullYear(),n=(new Date).getMonth()+1,r=(new Date).getDate(),i=(new Date).getHours(),o=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),a=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();e.gettime=t+"/"+n+"/"+r+" "+i+":"+o+":"+a,this.form.date=e.gettime},onSubmit:function(e){var t=this;this.form.detail=u()("#summernote").summernote("code"),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;c().post("/upload/adddd",t.form).then((function(e){var n=e.data;1==n.affectedRows&&(t.$message.success("提交成功！"),t.$router.push("/vipnews"))})).catch((function(e){console.log(e)}))}))}},mounted:function(){this.getdate(),u()(document).ready((function(){u()("#summernote").summernote({height:200,placeholder:"请添加文字内容",toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],callbacks:{onImageUpload:function(e){var t=new FormData;e=Array.from(e),e.forEach((function(e){t.append("pic",e)})),c().post("/upload/up",t).then((function(e){e.data.forEach((function(e){var t="\\"+e;u()("#summernote").summernote("insertImage",t)}))})).catch((function(e){console.log(e)}))}}})}))},components:{vipnavbar:o.Z,vHeader:a.Z}},m=f,d=n(1001),v=(0,d.Z)(m,r,i,!1,null,"6ea411a0",null),p=v.exports},8533:function(e,t,n){"use strict";var r=n(2092).forEach,i=n(9341),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},8457:function(e,t,n){"use strict";var r=n(7854),i=n(9974),o=n(6916),a=n(7908),s=n(3411),u=n(7659),l=n(4411),c=n(6244),f=n(6135),m=n(8554),d=n(1246),v=r.Array;e.exports=function(e){var t=a(e),n=l(this),r=arguments.length,p=r>1?arguments[1]:void 0,h=void 0!==p;h&&(p=i(p,r>2?arguments[2]:void 0));var g,x,b,w,k,_,C=d(t),y=0;if(!C||this==v&&u(C))for(g=c(t),x=n?new this(g):v(g);g>y;y++)_=h?p(t[y],y):t[y],f(x,y,_);else for(w=m(t,C),k=w.next,x=n?new this:[];!(b=o(k,w)).done;y++)_=h?s(w,p,[b.value,y],!0):b.value,f(x,y,_);return x.length=y,x}},2092:function(e,t,n){var r=n(9974),i=n(1702),o=n(8361),a=n(7908),s=n(6244),u=n(5417),l=i([].push),c=function(e){var t=1==e,n=2==e,i=3==e,c=4==e,f=6==e,m=7==e,d=5==e||f;return function(v,p,h,g){for(var x,b,w=a(v),k=o(w),_=r(p,h),C=s(k),y=0,E=g||u,$=t?E(v,C):n||m?E(v,0):void 0;C>y;y++)if((d||y in k)&&(x=k[y],b=_(x,y,w),e))if(t)$[y]=b;else if(b)switch(e){case 3:return!0;case 5:return x;case 6:return y;case 2:l($,x)}else switch(e){case 4:return!1;case 7:l($,x)}return f?-1:i||c?c:$}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},7475:function(e,t,n){var r=n(7854),i=n(3157),o=n(4411),a=n(111),s=n(5112),u=s("species"),l=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===l||i(t.prototype))?t=void 0:a(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?l:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},3411:function(e,t,n){var r=n(9670),i=n(9212);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(a){i(e,"throw",a)}}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},6091:function(e,t,n){var r=n(6530).PROPER,i=n(7293),o=n(1361),a="​᠎";e.exports=function(e){return i((function(){return!!o[e]()||a[e]()!==a||r&&o[e].name!==e}))}},3111:function(e,t,n){var r=n(1702),i=n(4488),o=n(1340),a=n(1361),s=r("".replace),u="["+a+"]",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(e){return function(t){var n=o(i(t));return 1&e&&(n=s(n,l,"")),2&e&&(n=s(n,c,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1038:function(e,t,n){var r=n(2109),i=n(8457),o=n(7072),a=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:i})},3123:function(e,t,n){"use strict";var r=n(2104),i=n(6916),o=n(1702),a=n(7007),s=n(7850),u=n(9670),l=n(4488),c=n(6707),f=n(1530),m=n(7466),d=n(1340),v=n(8173),p=n(1589),h=n(7651),g=n(2261),x=n(2999),b=n(7293),w=x.UNSUPPORTED_Y,k=4294967295,_=Math.min,C=[].push,y=o(/./.exec),E=o(C),$=o("".slice),D=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=d(l(this)),a=void 0===n?k:n>>>0;if(0===a)return[];if(void 0===e)return[o];if(!s(e))return i(t,o,e,a);var u,c,f,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,x=new RegExp(e.source,v+"g");while(u=i(g,x,o)){if(c=x.lastIndex,c>h&&(E(m,$(o,h,u.index)),u.length>1&&u.index<o.length&&r(C,m,p(u,1)),f=u[0].length,h=c,m.length>=a))break;x.lastIndex===u.index&&x.lastIndex++}return h===o.length?!f&&y(x,"")||E(m,""):E(m,$(o,h)),m.length>a?p(m,0,a):m}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=l(this),a=void 0==t?void 0:v(t,e);return a?i(a,t,r,n):i(o,d(r),t,n)},function(e,r){var i=u(this),a=d(e),s=n(o,i,a,r,o!==t);if(s.done)return s.value;var l=c(i,RegExp),v=i.unicode,p=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),g=new l(w?"^(?:"+i.source+")":i,p),x=void 0===r?k:r>>>0;if(0===x)return[];if(0===a.length)return null===h(g,a)?[a]:[];var b=0,C=0,y=[];while(C<a.length){g.lastIndex=w?0:C;var D,Z=h(g,w?$(a,C):a);if(null===Z||(D=_(m(g.lastIndex+(w?C:0)),a.length))===b)C=f(a,C,v);else{if(E(y,$(a,b,C)),y.length===x)return y;for(var R=1;R<=Z.length-1;R++)if(E(y,Z[R]),y.length===x)return y;C=b=D}}return E(y,$(a,b)),y}]}),!D,w)},3210:function(e,t,n){"use strict";var r=n(2109),i=n(3111).trim,o=n(6091);r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},4747:function(e,t,n){var r=n(7854),i=n(8324),o=n(8509),a=n(8533),s=n(8880),u=function(e){if(e&&e.forEach!==a)try{s(e,"forEach",a)}catch(t){e.forEach=a}};for(var l in i)i[l]&&u(r[l]&&r[l].prototype);u(o)},7549:function(e,t,n){"use strict";e.exports=n.p+"img/img.66757dfc.jpg"}}]);
//# sourceMappingURL=46-legacy.c38d0df2.js.map