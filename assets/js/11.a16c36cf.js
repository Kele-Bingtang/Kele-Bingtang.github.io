(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{286:function(e,t,s){},340:function(e,t,s){"use strict";s(286)},357:function(e,t,s){"use strict";s.r(t);s(42);function o(e,t,s=50,o=3e3){var n=document.querySelectorAll(".global-tip"),i=(new Date).getTime(),r=0==n.length?0:n[n.length-1].getAttribute("data-top"),a=parseInt(r)+(0!=n.length?n[n.length-1].offsetHeight+17:s);let p=document.createElement("div");p.className=`global-tip tip-${t} ${i}`,p.style.top=parseInt(r)+"px",p.setAttribute("data-top",a),"info"==t||1==t?p.innerHTML=`<i class="iconfont icon-info icon"></i><p class="tip-info-content">${e}</p>`:"success"==t||2==t?p.innerHTML=`<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${e}</p>`:"danger"==t||3==t?p.innerHTML=`<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${e}</p>`:"warning"!=t&&4!=t||(p.innerHTML=`<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${e}</p>`),document.body.appendChild(p);let l=document.getElementsByClassName(i)[0];setTimeout(()=>{l.style.top=parseInt(a)+"px",l.style.opacity="1"},10),setTimeout(()=>{l.style.top="0px",l.style.opacity="0";var e=function(e){for(var t=[],s=e;s;s=s.nextSibling)1===s.nodeType&&s!==e&&t.push(s);return t}(l);for(let o=0;o<e.length;o++){var t=e[o],s=parseInt(t.getAttribute("data-top"))-t.offsetHeight-17;t.setAttribute("data-top",s),t.style.top=s+"px"}setTimeout(()=>{l.remove()},500)},o)}var n={data:()=>({username:"",password:"",privateInfo:{username:"",password:"",loginKey:"",expire:"",loginInfo:"",allLoginKey:"kbt"}}),mounted(){document.onkeyup=e=>{13==window.event.keyCode&&this.login()}},methods:{login(){let{privateInfo:e}=this,{username:t,password:s,loginKey:n,expire:i,firstLoginKey:r,loginInfo:a}=this.$themeConfig.privatePage;if(!n&&(n="vdoing_manager"),i=this.getExpire(i),!i&&(i=864e5),this.username&&this.password)if("first"==this.$route.query.verifyMode){e.expire=i,!r&&(r="vdoing_first_login");let p=!1;a&&a.hasOwnProperty(r)&&(p=this.checkLoginInfoAndJump(a[r],r)),p||this.username!=t||this.password!=s?p||(this.password="",o("用户名或者密码错误！请联系博主获取用户名和密码！","danger")):this.storageLocalAndJump(n,!0)}else{if("single"==this.$route.query.verifyMode)try{this.$filterPosts.forEach(t=>{if(t.path==this.$route.query.toPath)throw e.username=t.frontmatter.username,e.password=t.frontmatter.password,e.loginKey=t.frontmatter.permalink,e.expire=this.getExpire(t.frontmatter.expire)||i,e.loginInfo=t.frontmatter.loginInfo,new Error})}catch(e){}let r=!1;e.username||e.password||e.loginInfo||(e.loginKey=this.$route.query.toPath,e.loginInfo=a,!e.expire&&(e.expire=i)),e.loginInfo&&(Array.isArray(e.loginInfo)?r=this.checkLoginInfoAndJump(e.loginInfo):e.loginInfo.hasOwnProperty(this.$route.query.toPath)&&(r=this.checkLoginInfoAndJump(e.loginInfo[this.$route.query.toPath]))),r||(this.username==e.username&&this.password==e.password?this.storageLocalAndJump(this.privateInfo.loginKey,!0):this.username==t&&this.password==s?this.storageLocalAndJump(n,!0):(this.password="",o("用户名或者密码错误！请联系博主获取用户名和密码！","danger")))}else""==this.username&&""!=this.password?o("用户名不能为空！","warning"):""!=this.username&&""==this.password?o("密码不能为空！","warning"):o("您访问的文章是私密文章，请先输入用户名和密码！","info")},checkLoginInfoAndJump(e=this.privateInfo.loginInfo,t=this.privateInfo.loginKey){try{e.forEach(e=>{if(this.username==e.username&&this.password==e.password)throw this.storageLocalAndJump(t,!0),new Error})}catch(e){return!0}return!1},storageLocalAndJump(e=this.privateInfo.loginKey,t=!0){const s=JSON.stringify({username:this.username,password:this.password,time:(new Date).getTime(),expire:this.privateInfo.expire});window.localStorage.setItem(e,s),t&&(o("登录成功，正在跳转 ...","success"),this.$route.query.toPath?this.$router.push({path:this.$route.query.toPath}):this.$router.push({path:"/"}))},getExpire:e=>(e&&(e=-1!==e.indexOf("d")?24*parseInt(e.replace("d",""))*60*60*1e3:-1!==e.indexOf("h")?60*parseInt(e.replace("h",""))*60*1e3:1e3*parseInt(e)),e)}},i=(s(340),s(1)),r=Object(i.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-form"},[t("div",{staticClass:"form-header"},[e._v("用户名")]),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入用户名 ..."},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-header"},[e._v("密码")]),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入密码 ..."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"btn-row"},[t("button",{staticClass:"btn",on:{click:e.login}},[e._v("登录")])])])}),[],!1,null,null,null);t.default=r.exports}}]);