<template lang="html">
<div class="stepOne1">
        <!-- 登录 -->
        <div class="login" v-show="loginShow">
          <el-form :model="loginForm"  :rules="loginRules" ref="loginForm" class="demo-ruleForm">
            <el-form-item  prop="account">
              <el-input  v-model="loginForm.account" auto-complete="off" placeholder="请输入账号"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="请输入密码"  size="large"></el-input>
            </el-form-item>
           <!--  <el-form-item  prop="vc" v-show="vcShow">
              <el-input v-model="loginForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" >
              </el-input>
            </el-form-item>
            <el-form-item v-show="vcShow">
              <img :src="imgVC" alt="" @click="chargeIma">
              <div>（英文字母区分大小写）</div>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="subLoginForm('loginForm')" class="loginBtn" size="large">登录</el-button>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
        <!-- 短信验证码 -->
        <div class="MesVc" v-show="MesVc">
             <el-form :model="smsForm"  :rules="smsRules" ref="smsForm" class="demo-ruleForm">
            <el-form-item  prop="smsCode">
              <el-input type="number" v-model="smsForm.smsCode" auto-complete="off" placeholder="请输入验证码"  size="large"></el-input>
            </el-form-item>
            <div style="margin-bottom:10px;">
                <a href="#" style="color:#0072EB;" @click="sendMesAgain">未收到？重新发送</a>
            </div>
            <el-form-item>
              <el-button type="primary" @click="subSmsForm('smsForm')" class="loginBtn" size="large">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 图形验证码 -->
         <div class="MesVc" v-show="imgVc">
             <el-form :model="imgVcForm"  :rules="imgVcRules" ref="imgVcForm" class="demo-ruleForm">
             <el-form-item  prop="vc">
              <el-input v-model="imgVcForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" >
              </el-input>
            </el-form-item>
            <el-form-item>
              <img :src="imgVC" alt="" @click="chargeIma">
              <div>（英文字母区分大小写）</div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="subImgVcForm('imgVcForm')" class="loginBtn" size="large">登录</el-button>
            </el-form-item>
          </el-form>
        </div>

</div>
</template>
<script>
import {
  socialSecurity
} from '../apiURL.js'
export default {
    data() {
        var validateAccound = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入账号'));
            }
              callback();
            };
        var validatePhone = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入手机号'));
            }
              callback();
            };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            }
              callback();
            };
        var validateVc = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入验证码'));
            }
              callback();
            };
        return {
            loginShow:true,
            MesVc:false,
            imgVc:false,
            appKey:'',
            token:'',
            vcShow:false,
            imgVC:'',
            loginForm:{
                account:'',
                pass:''
            },
            smsForm:{
                smsCode:''
            },
            imgVcForm:{
                vc:''
            },
        //测试登录
          loginRules:{
            account: [
              { validator: validateAccound, trigger: 'blur' },
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' },
            ]
          },
          //短信验证
          smsRules:{
            smsCode: [
              { validator: validateVc, trigger: 'blur' },
            ],
          },
          //图形验证码
          imgVcRules:{
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ],
          }

        }
    },
    mounted() {
        this.appKey = this.getHrefString('appKey');
    },
    methods: {

        //登录
        subLoginForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  let appKey = this.appKey;
                  // let token = this.token;
                  let account = this.loginForm.account;
                  let password = this.loginForm.pass;
                  // let code = this.loginForm.vc;
                  this.login(appKey,account,password);
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        //验证短信验证码
        subSmsForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let appKey = this.appKey;
                     let token = this.token;
                     let smsCode = this.smsForm.smsCode;
                    this.checkMes(appKey,token,smsCode);
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        //验证图形验证码
        subImgVcForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let appKey = this.appKey;
                     let token = this.token;
                     let code = this.imgVcForm.vc;
                     this.pictureVC(appKey,token,code);
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },

        //重发验证码
        sendMesAgain(){
            let appKey = this.appKey;
            let token = this.token;
            this.sendMes(appKey,token);
        },
        chargeIma(){
            this.getPictureVC(this.appKey,this.token)
        },
        // 获取appkey
      getHrefString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      },

        //登录
        login(appKey,account,password){
          this.$http({
              method: 'POST',
              url: socialSecurity.login,
              params:{
                appKey:appKey,
                account: account,
                password: password
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               this.token = data.token;
               if(data.status == 12){
                //需要短信
                this.$message.success(data.desc);
                this.loginShow = false;
                this.imgVc = false;
                this.MesVc = true;
               }else if(data.status == 10){
                // 需要图形
                this.getPictureVC(this.appKey,this.token);
                this.loginShow = false;
                this.imgVc = true;
                this.MesVc = false;
                this.$message.success(data.desc);

               }else if(data.status == 1){
                // 需要图形
                this.$message.success("登陆成功！");
               }


            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
        //发送短信验证
         sendMes(appKey,token){
          this.$http({
              method: 'get',
              url: socialSecurity.sendMes,
              params:{
                appKey:appKey,
                token: token
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 203){
                this.$message.error(data.desc);
                this.loginShow = true;
                this.MesVc = false;
               }else if(data.status == 11){
                    this.$message.success("发送成功！");
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
        //短信验证
         checkMes(appKey,token,smsCode){
          this.$http({
              method: 'get',
              url: socialSecurity.checkMes,
              params:{
                appKey:appKey,
                token: token,
                smsCode:smsCode
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
                this.$message.success(data.desc);
               if(data.status == 203){
                this.$message.error(data.desc);
                this.loginShow = true;
                this.MesVc = false;
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
         //获取图片验证
         getPictureVC(appKey,token){
          this.$http({
              method: 'get',
              url: socialSecurity.getPictureVC,
              params:{
                appKey:appKey,
                token: token
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               this.imgVC = data.bcode;
               if(data.status == 203){
                    this.$message.error(data.desc);
                    this.loginShow = true;
                    this.imgVc = false;
                   }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
        //图片验证
         pictureVC(appKey,token,code){
          this.$http({
              method: 'get',
              url: socialSecurity.pictureVC,
              params:{
                appKey:appKey,
                token: token,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
                this.$message.success(data.desc);
                 if(data.status == 203){
                    this.$message.error(data.desc);
                    this.loginShow = true;
                    this.imgVc = false;
                   }
               // if(data.status == 10){
               //  this.$message.success(data.desc);
               //  setTimeout("window.location.reload()",2000);
               // }else{
               //  this.$message.error(data.desc);
               // }


            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        }



    }
}
</script>
<style lang="less">
.stepOne1{
    /*margin-top: 40px;*/
    padding-left:15px;
    padding-right:15px;
    ::-webkit-input-placeholder { /* WebKit browsers */
          color:    #999;
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color:    #999;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color:    #999;
      }
      :-ms-input-placeholder { /* Internet Explorer 10+ */
          color:    #999;
      }
    input{
      border-color: #999;
    }
      .loginBtn{
        width: 98%;
        background-color: none;
        background: url(../../assets/img/btt.png)  0 0 no-repeat;
        background-size: 100% 100%;
        border: none;
      }
}

</style>