"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[294],{7294:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"cennter",staticStyle:{"align-items":"center",height:"100%"}},[r("el-header",{staticStyle:{height:"130px",width:"100%"}},[r("el-image",{staticStyle:{height:"130px",width:"100%"},attrs:{src:s(3380),fit:" contain "}})],1),r("el-main",{staticStyle:{width:"980px"}},[r("div",{staticStyle:{width:"100%"}},[r("el-divider",[r("h1",[t._v("登录")])])],1),r("div",{staticStyle:{"padding-top":"20px","padding-bottom":"20px",display:"flex"}},[r("div",{staticClass:"center",staticStyle:{"flex-flow":"column","align-items":"center","border-right":"darkgray solid 1px",width:"50%"}},[r("div",[t._v("公众号二维码")]),r("br"),r("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{src:s(5343),fit:"fill"}})],1),r("div",{staticClass:"center",staticStyle:{"flex-flow":"column","align-items":"center",width:"50%"}},[r("div",[t._v("邮箱登录")]),r("br"),r("el-form",{ref:"login",attrs:{model:t.param,rules:t.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"user_no"}},[r("el-input",{attrs:{placeholder:"请输入邮箱"},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("i",{staticClass:"el-icon-user"})]},proxy:!0}]),model:{value:t.param.user_no,callback:function(e){t.$set(t.param,"user_no",e)},expression:"param.user_no"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("i",{staticClass:"el-icon-lock"})]},proxy:!0}]),model:{value:t.param.password,callback:function(e){t.$set(t.param,"password",e)},expression:"param.password"}})],1),r("div",{staticClass:"login-btn"},[r("div",{staticClass:"log-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.login()}}},[t._v("登录")])],1),r("div",{staticClass:"log-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.guest()}}},[t._v("游客登录")])],1),r("div",{staticClass:"reg-btn"},[r("el-button",{attrs:{type:"success"},on:{click:function(e){return t.register()}}},[t._v("注册  >")])],1)])],1)],1)]),r("br"),r("div",{staticStyle:{width:"100%","text-align":"center"}},[r("router-link",{attrs:{to:"/Reset"}},[t._v("⇛ 忘记密码，点此重置")])],1),r("br"),r("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(" 登录即代表你同意用户协议和隐私政策 ")])])],1)},i=[],a=(s(9669),s(4959)),n={data(){return{param:{user_no:"",password:"",date:""},rules:{user_no:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{guest(){this.show=!this.show,document.cookie="user_no=0",setTimeout((()=>{this.$router.push({path:"/Wtbhome"})}),500)},getCookie(t){for(var e=t+"=",s=document.cookie.split(";"),r=0;r<s.length;r++){var i=s[r].trim();if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""},checkuserno(){var t=this.getCookie("user_no");""!=t&&(0==t?console.log("游客已登录"):this.$router.push({path:"/Wtbhome"}))},getDate(){var t=this;let e=(new Date).getFullYear(),s=(new Date).getMonth()+1,r=(new Date).getDate(),i=(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),n=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();return t.gettime=e+"/"+s+"/"+r+" "+i+":"+a+":"+n,t.gettime},login(){this.date=this.getDate(),this.$refs.login.validate((t=>{if(!t)return this.$notify.error({title:"错误",message:"请输入邮箱和密码"}),!1;a.Z.clearCookie("user_no"),document.cookie="user_no=1",document.cookie="user_name=<=3",this.$notify({title:"成功",message:"成功",type:"success"}),this.$router.push({path:"/Wtbhome"})}))},register(){this.$router.push({path:"/Register"})}},mounted(){this.checkuserno()}},o=n,l=s(1001),u=(0,l.Z)(o,r,i,!1,null,null,null),c=u.exports},5343:function(t,e,s){t.exports=s.p+"img/WeChat.2a11f753.jpg"},3380:function(t,e,s){t.exports=s.p+"img/header.77941e89.jpg"}}]);
//# sourceMappingURL=294.7ea0116e.js.map