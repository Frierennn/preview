(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[458],{8458:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{type:"flex",justify:"center"}},[n("section",{staticClass:"showcase"},[n("video",{attrs:{src:"https://vdn6.vzuu.com/HD/7c5c30ca-abad-11ea-b3fc-a6d83c2f2939.mp4?pkey=AAXiIkGWFYqOKlrflyu76GuSvCDXv4xsHXFJRd-e32CZwaBhUzqks3TjuMlmFOsQSP01JA3FZtfc3y_uPwB-b6P8&c=avc.0.0&f=mp4&pu=da4bec50&bu=http-da4bec50&expiration=1661418817&v=ks6",muted:"",loop:"",autoplay:""},domProps:{muted:!0}}),n("div",{staticClass:"overlay"}),n("div",{staticClass:"text"},[n("h2",[t._v("Utopia")]),n("h1",{staticStyle:{display:"inline-block"}},[t._v("广州软件学院")]),t._v("   "),n("p",{staticStyle:{display:"inline-block"}},[t._v("校园信息交流平台")]),n("br"),n("br"),n("p",[t._v(" 广州软件学院成立于2002年，2006年开始实施本科层次的学历教育，前身为广州大学华软软件学院。2020年12月，经教育部批准，广东省人民政府同意，转设更名为广州软件学院。学校董事长梁冠军先生是美国著名侨领、华裔知名实业家、中华海外联谊会副会长、中国侨联顾问、中国和平统一促进会常务理事、美国美东华人社团联合总会主席。 ")]),n("el-button",{on:{click:function(e){return t.login()}}},[t._v("登录/注册")]),n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.guest()}}},[t._v("游客登录")])],1)])])],1)],1)])},r=[],u=(n(8309),n(4916),n(3123),n(3210),n(2743)),o=n(144);o["default"].component(u["default"].name,u["default"]);var s={data:function(){return{show:!0}},methods:{getCookie:function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){var r=n[i].trim();if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""},checkuserno:function(){var t=this.getCookie("user_no");""!=t&&(0==t?console.log("游客已登录"):this.$router.push({path:"/Wtbhome"}))},login:function(){var t=this;this.show=!this.show,document.cookie="user_no=0",setTimeout((function(){t.$router.push({path:"/Login"})}),500)},guest:function(){var t=this;this.show=!this.show,document.cookie="user_no=0",setTimeout((function(){t.$router.push({path:"/Wtbhome"})}),500)}},mounted:function(){this.checkuserno()}},l=s,a=n(1001),c=(0,a.Z)(l,i,r,!1,null,null,null),h=c.exports},1589:function(t,e,n){var i=n(7854),r=n(1400),u=n(6244),o=n(6135),s=i.Array,l=Math.max;t.exports=function(t,e,n){for(var i=u(t),a=r(e,i),c=r(void 0===n?i:n,i),h=s(l(c-a,0)),f=0;a<c;a++,f++)o(h,f,t[a]);return h.length=f,h}},6135:function(t,e,n){"use strict";var i=n(4948),r=n(3070),u=n(9114);t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,u(0,n)):t[o]=n}},6091:function(t,e,n){var i=n(6530).PROPER,r=n(7293),u=n(1361),o="​᠎";t.exports=function(t){return r((function(){return!!u[t]()||o[t]()!==o||i&&u[t].name!==t}))}},3111:function(t,e,n){var i=n(1702),r=n(4488),u=n(1340),o=n(1361),s=i("".replace),l="["+o+"]",a=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),h=function(t){return function(e){var n=u(r(e));return 1&t&&(n=s(n,a,"")),2&t&&(n=s(n,c,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3123:function(t,e,n){"use strict";var i=n(2104),r=n(6916),u=n(1702),o=n(7007),s=n(7850),l=n(9670),a=n(4488),c=n(6707),h=n(1530),f=n(7466),v=n(1340),p=n(8173),d=n(1589),g=n(7651),m=n(2261),x=n(2999),b=n(7293),k=x.UNSUPPORTED_Y,w=4294967295,y=Math.min,_=[].push,C=u(/./.exec),P=u(_),R=u("".slice),E=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var u;return u="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var u=v(a(this)),o=void 0===n?w:n>>>0;if(0===o)return[];if(void 0===t)return[u];if(!s(t))return r(e,u,t,o);var l,c,h,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,x=new RegExp(t.source,p+"g");while(l=r(m,x,u)){if(c=x.lastIndex,c>g&&(P(f,R(u,g,l.index)),l.length>1&&l.index<u.length&&i(_,f,d(l,1)),h=l[0].length,g=c,f.length>=o))break;x.lastIndex===l.index&&x.lastIndex++}return g===u.length?!h&&C(x,"")||P(f,""):P(f,R(u,g)),f.length>o?d(f,0,o):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:p(e,t);return o?r(o,e,i,n):r(u,v(i),e,n)},function(t,i){var r=l(this),o=v(t),s=n(u,r,o,i,u!==e);if(s.done)return s.value;var a=c(r,RegExp),p=r.unicode,d=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(k?"g":"y"),m=new a(k?"^(?:"+r.source+")":r,d),x=void 0===i?w:i>>>0;if(0===x)return[];if(0===o.length)return null===g(m,o)?[o]:[];var b=0,_=0,C=[];while(_<o.length){m.lastIndex=k?0:_;var E,I=g(m,k?R(o,_):o);if(null===I||(E=y(f(m.lastIndex+(k?_:0)),o.length))===b)_=h(o,_,p);else{if(P(C,R(o,b,_)),C.length===x)return C;for(var S=1;S<=I.length-1;S++)if(P(C,I[S]),C.length===x)return C;_=b=E}}return P(C,R(o,b)),C}]}),!E,k)},3210:function(t,e,n){"use strict";var i=n(2109),r=n(3111).trim,u=n(6091);i({target:"String",proto:!0,forced:u("trim")},{trim:function(){return r(this)}})}}]);
//# sourceMappingURL=458-legacy.9bc9993b.js.map