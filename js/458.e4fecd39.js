"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[458],{8458:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-collapse-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{type:"flex",justify:"center"}},[s("section",{staticClass:"showcase"},[s("video",{attrs:{src:"https://vdn6.vzuu.com/HD/7c5c30ca-abad-11ea-b3fc-a6d83c2f2939.mp4?pkey=AAXiIkGWFYqOKlrflyu76GuSvCDXv4xsHXFJRd-e32CZwaBhUzqks3TjuMlmFOsQSP01JA3FZtfc3y_uPwB-b6P8&c=avc.0.0&f=mp4&pu=da4bec50&bu=http-da4bec50&expiration=1661418817&v=ks6",muted:"",loop:"",autoplay:""},domProps:{muted:!0}}),s("div",{staticClass:"overlay"}),s("div",{staticClass:"text"},[s("h2",[t._v("Utopia")]),s("h1",{staticStyle:{display:"inline-block"}},[t._v("广州软件学院")]),t._v("   "),s("p",{staticStyle:{display:"inline-block"}},[t._v("校园信息交流平台")]),s("br"),s("br"),s("p",[t._v(" 广州软件学院成立于2002年，2006年开始实施本科层次的学历教育，前身为广州大学华软软件学院。2020年12月，经教育部批准，广东省人民政府同意，转设更名为广州软件学院。学校董事长梁冠军先生是美国著名侨领、华裔知名实业家、中华海外联谊会副会长、中国侨联顾问、中国和平统一促进会常务理事、美国美东华人社团联合总会主席。 ")]),s("el-button",{on:{click:function(e){return t.login()}}},[t._v("登录/注册")]),s("el-button",{attrs:{type:"success"},on:{click:function(e){return t.guest()}}},[t._v("游客登录")])],1)])])],1)],1)])},i=[],n=s(2743),u=s(144);u["default"].component(n["default"].name,n["default"]);var a={data:()=>({show:!0}),methods:{getCookie(t){for(var e=t+"=",s=document.cookie.split(";"),o=0;o<s.length;o++){var i=s[o].trim();if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""},checkuserno(){var t=this.getCookie("user_no");""!=t&&(0==t?console.log("游客已登录"):this.$router.push({path:"/Wtbhome"}))},login(){this.show=!this.show,document.cookie="user_no=0",setTimeout((()=>{this.$router.push({path:"/Login"})}),500)},guest(){this.show=!this.show,document.cookie="user_no=0",setTimeout((()=>{this.$router.push({path:"/Wtbhome"})}),500)}},mounted(){this.checkuserno()}},c=a,l=s(1001),r=(0,l.Z)(c,o,i,!1,null,null,null),h=r.exports}}]);
//# sourceMappingURL=458.e4fecd39.js.map