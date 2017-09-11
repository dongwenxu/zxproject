<template lang="html">
    <div class="stepOne">
        <div class="sel">
          <el-select v-model="type" placeholder="请选择测试类型" size="large" @change="changeVal">
            <el-option label="登录" value="0"></el-option>
            <el-option label="注册" value="2"></el-option>
            <el-option label="重置密码" value="1"></el-option>
          </el-select>
        </div>

        <!-- 登录 -->
        <div v-show="loginO" class="login">
          <el-form :model="loginForm"  :rules="loginRules" ref="loginForm" class="demo-ruleForm">
            <el-form-item  prop="account">
              <el-input  v-model="loginForm.account" auto-complete="off" placeholder="请输入账号"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="请输入密码"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="vc">
              <el-input v-model="loginForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" >
                 <!-- <template slot="append"><img :src="imgVC" alt=""></template> -->
              </el-input>
            </el-form-item>
            <el-form-item >
              <img :src="imgVC" alt="" @click="chargeIma">
              <div>（英文字母区分大小写）</div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="subLoginForm('loginForm')" class="loginBtn" size="large">登录</el-button>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>

        <!-- 注册 -->
        <div v-show="registO" class="regist">
          <el-form :model="regPhoneForm"  :rules="regPhoneRules" ref="regPhoneForm" class="demo-ruleForm" v-if="this.registStatus == 0">
            <el-form-item  prop="account" key="regPhoneFormAccount">
              <el-input type="number" v-model="regPhoneForm.account" auto-complete="off" placeholder="请输入手机号"  size="large"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="subRegistPhone('regPhoneForm')" class="loginBtn" size="large">验证手机号</el-button>
              <el-button type="primary" @click="next1" class="loginBtn" size="large">下一步</el-button>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>

          <el-form :model="regMesForm"  :rules="regMesRules" ref="regMesForm" class="demo-ruleForm" v-if="this.registStatus == 1">
            <el-form-item  prop="vc" key="regMesFormVc">
              <el-input  v-model="regMesForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large"></el-input>
            </el-form-item>
             <el-form-item >
              <img :src="imgVC" alt="" @click="chargeIma">
              <div>（英文字母区分大小写）</div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="subRegMesForm('regMesForm')" class="loginBtn" size="large">验证发送短信</el-button>
              <el-button type="primary" @click="next2" class="loginBtn" size="large">下一步</el-button>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>

          <el-form :model="regBasicMesForm"  :rules="regBasicMesRules" ref="regBasicMesForm" class="demo-ruleForm" v-if="this.registStatus == 2">
            <el-form-item  prop="realName" key="regBasicMesFormRealName">
              <el-input  v-model="regBasicMesForm.realName" auto-complete="off" placeholder="请输入真实姓名"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="cardId" key="regBasicMesFormCardId">
              <el-input  v-model="regBasicMesForm.cardId" auto-complete="off" placeholder="请输入身份证号"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="pass" key="regBasicMesFormPass">
              <el-input type="password" v-model="regBasicMesForm.pass"  auto-complete="off" placeholder="请输入密码"  size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="smsCode" key="regBasicMesFormSmsCode">
              <el-input type="number"  v-model="regBasicMesForm.smsCode" auto-complete="off" placeholder="请输入短信验证码"  size="large"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="subBasicMesForm('regBasicMesForm')" class="loginBtn" size="large">注册</el-button>
              <!-- <el-button type="primary" @click="next" class="loginBtn" size="large">下一步</el-button> -->
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>

        </div>

        <!-- 重置密码 -->
        <div v-show="resetPassO" class="reset">
              <!-- 账号 -->
            <el-form :model="resetAccForm"  :rules="resetAccRules" ref="resetAccForm" class="demo-ruleForm" v-if="this.resetStatus == 0">
              <el-form-item  prop="account" key="resetAccFormAccount">
                <el-input  v-model="resetAccForm.account" auto-complete="off" placeholder="请输入账号"  size="large"></el-input>
              </el-form-item>
              <el-form-item  prop="vc" key="resetAccFormVc">
              <el-input v-model="resetAccForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" >
                 <!-- <template slot="append"><img :src="imgVC" alt=""></template> -->
              </el-input>
            </el-form-item>
              <el-form-item >
                <img :src="imgVC" alt="" @click="chargeIma">
                <div>（英文字母区分大小写）</div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="subRetAccForm('resetAccForm')" class="loginBtn" size="large">验证账号</el-button>
                <el-button type="primary" @click="resetNext1" class="loginBtn" size="large">下一步</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
              </el-form-item>
            </el-form>
              <!-- 身份信息 -->
             <el-form :model="resetIdMesForm"  :rules="resetIdMesRules" ref="resetIdMesForm" class="demo-ruleForm" v-if="this.resetStatus == 1">
              <el-form-item  prop="realName" key="resetIdMesFormRealName">
                <el-input  v-model="resetIdMesForm.realName" auto-complete="off" placeholder="请输入真实姓名"  size="large"></el-input>
              </el-form-item>
              <el-form-item  prop="cardId" key="resetIdMesFormCardId">
                <el-input  v-model="resetIdMesForm.cardId" auto-complete="off" placeholder="请输入身份证号"  size="large"></el-input>
              </el-form-item>
              <el-form-item  prop="phone" key="resetIdMesFormPhone">
                <el-input  v-model="resetIdMesForm.phone" auto-complete="off" placeholder="请输入绑定的手机号"  size="large"></el-input>
              </el-form-item>
              <el-form-item  prop="vc" key="resetIdMesVc">
                <el-input v-model="resetIdMesForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" ></el-input>
              </el-form-item>
              <el-form-item >
                <img :src="imgVC" alt="" @click="chargeIma">
                <div>（英文字母区分大小写）</div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="subRetIdMesForm('resetIdMesForm')" class="loginBtn" size="large">验证身份信息</el-button>
                <el-button type="primary" @click="resetNext2" class="loginBtn" size="large">下一步</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
              </el-form-item>
            </el-form>
            <!-- 发送短信验证码 -->
            <el-form :model="resetMesForm"  :rules="resetMesRules" ref="resetMesForm" class="demo-ruleForm" v-if="this.resetStatus == 2">
              <el-form-item  prop="vc" key="resetMesFormVc">
              <el-input v-model="resetMesForm.vc" auto-complete="off" placeholder="请输入验证码"  size="large" class="inpVC" >
                 <!-- <template slot="append"><img :src="imgVC" alt=""></template> -->
              </el-input>
            </el-form-item>
              <el-form-item >
                <img :src="imgVC" alt="" @click="chargeIma">
                <div>（英文字母区分大小写）</div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="subRetMesForm('resetMesForm')" class="loginBtn" size="large">发送短信</el-button>
                <el-button type="primary" @click="resetNext3" class="loginBtn" size="large">下一步</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
              </el-form-item>
            </el-form>
            <!-- 重置新密码-->
            <el-form :model="resetPassForm"  :rules="resetPassRules" ref="resetPassForm" class="demo-ruleForm" v-if="this.resetStatus == 3">
              <el-form-item  prop="newPass" key="resetPassFormNewPass">
                <el-input type="password" v-model="resetPassForm.newPass" auto-complete="off" placeholder="请输入新密码"  size="large" class="inpVC" ></el-input>
              </el-form-item>
              <el-form-item  prop="smsCode" key="resetPassFormsSmsCode">
                <el-input type="number" v-model="resetPassForm.smsCode" auto-complete="off" placeholder="请输入短信验证码"  size="large" class="inpVC" ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="subRetPassForm('resetPassForm')" class="loginBtn" size="large">重置密码</el-button>
                <div><a href="#" style="color:#0072EB;" @click="resetNexta2">验证码失效，点击重新发送？</a></div>
                <!-- <el-button type="primary" @click="resetNext3" class="loginBtn" size="large">下一步</el-button> -->
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
              </el-form-item>
            </el-form>

        </div>
  <!-- :rules="loginRules" -->


    </div>
</template>
<script>
import host from '../../config.js'
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
      var validateRealName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        }
          callback();
        };
      var validateCardId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入身份证号'));
        }
          callback();
        };
        return {
          appKey:'',
          token:'',
          type:'',
          imgVC:null,
          loginO:false,
          registO:false,
          resetPassO:false,
          activeName2:"first",
          loginForm:{
            account:'',
            pass:'',
            vc:''
          },
          regPhoneForm:{
            account:'',
          },
          regMesForm:{
            vc:''
          },
          regBasicMesForm:{
            realName:'',
            cardId:'',
            pass:'',
            smsCode:''
          },
          registStatus:0,//验证注册状态

          resetAccForm:{
            account:'',
            vc:''
          },
          resetIdMesForm:{
            realName:'',
            cardId:'',
            phone:'',
            vc:''
          },
          resetMesForm:{
            vc:''
          },
          resetPassForm:{
            newPass:'',
            smsCode:''
          },
          resetStatus:0,//验证重置密码状态


          //测试登录
          loginRules:{
            account: [
              { validator: validateAccound, trigger: 'blur' },
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' },
            ],
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ]

          },

          //测试注册账号
          regPhoneRules:{
            account: [
              { validator: validatePhone, trigger: 'blur' },
              { validator: host.basic.checkMobile, trigger: 'blur' },
            ]
          },
          regMesRules:{
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ]
          },
          regBasicMesRules:{
            pass: [
              { validator: validatePass, trigger: 'blur' },
            ],
            smsCode: [
              { validator: validateVc, trigger: 'blur' },
            ],
            realName: [
              { validator: validateRealName, trigger: 'blur' },
            ],
            cardId: [
              { validator: validateCardId, trigger: 'blur' },
              { validator: host.basic.checkCard, trigger: 'blur' },
            ],
          },

          //测试重置密码
          resetAccRules:{
            account: [
              { validator: validateAccound, trigger: 'blur' },
            ],
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ]
          },
          resetIdMesRules:{
            realName: [
              { validator: validateRealName, trigger: 'blur' },
            ],
            cardId: [
              { validator: validateCardId, trigger: 'blur' },
              { validator: host.basic.checkCard, trigger: 'blur' },
            ],
            phone: [
              { validator: validatePhone, trigger: 'blur' },
              { validator: host.basic.checkMobile, trigger: 'blur' },
            ],
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ]
          },
          resetMesRules:{
            vc: [
              { validator: validateVc, trigger: 'blur' },
            ]
          },
          resetPassRules:{
            newPass:[
              { validator: validatePass, trigger: 'blur' },
            ],
            smsCode: [
              { validator: validateVc, trigger: 'blur' },
            ],
          }
        }
    },
    mounted() {
      this.appKey = this.getHrefString('appKey');

      // console.log(this.appKey);
    },
    methods: {
      changeVal(val){
        console.log(val);
        this.registStatus = 0;
        this.resetStatus = 0;
        if(val == 0){
          this.taskType(this.appKey,0);
          this.loginO = true;
          this.registO = false;
          this.resetPassO = false;


        }else if(val == 1){
          this.taskType(this.appKey,1);
          this.loginO = false;
          this.registO = false;
          this.resetPassO = true;

        }else if(val == 2){
          this.taskType(this.appKey,2);
          this.loginO = false;
          this.registO = true;
          this.resetPassO = false;
        }
      },
      //更换图形验证码
      chargeIma(){
         this.getPictureVC(this.appKey,this.token);
      },

      //验证登录
      subLoginForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let account = this.loginForm.account;
              let password = this.loginForm.pass;
              let code = this.loginForm.vc;
              this.login(appKey,token,account,password,code);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      //验证注册手机号
      subRegistPhone(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let phone = this.regPhoneForm.account;
              this.regisPhoneVC(appKey,token,phone);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      //验证注册发送短信
      subRegMesForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let code = this.regMesForm.vc;
              this.regisMesVC(appKey,token,code);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      subBasicMesForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let password = this.regBasicMesForm.pass;
              let smsCode = this.regBasicMesForm.smsCode;
              let realName = this.regBasicMesForm.realName;
              let cardId = this.regBasicMesForm.cardId;
              // let code = this.regMesForm.vc;
              this.regisBasicMesVC(appKey,token,password,smsCode,realName,cardId);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      //验证完注册手机号下一步
      next1(){
        // alert(1);
        this.registStatus = 1;
        this.getPictureVC(this.appKey,this.token);
      },
      //验证完注册发送短信下一步
      next2(){
        this.registStatus = 2;
        this.getPictureVC(this.appKey,this.token);
      },

      //验证重置账号
      subRetAccForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let account = this.resetAccForm.account;
              let code = this.resetAccForm.vc;
              this.resetAccountVC(appKey,token,account,code)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
       //验证重置密码账号信息
      subRetIdMesForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let realName = this.resetIdMesForm.realName;
              let cardId = this.resetIdMesForm.cardId;
              let phone = this.resetIdMesForm.phone;
              let code = this.resetIdMesForm.vc;
              // let account = this.resetAccForm.account;
              // let code = this.resetAccForm.vc;
              this.resetBasicMesVC(appKey,token,realName,cardId,phone,code);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      //重置密码发送短信
      subRetMesForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let code = this.resetMesForm.vc;
              // let account = this.resetAccForm.account;
              // let code = this.resetAccForm.vc;
              this.resetMesVC(appKey,token,code);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      //重置密码
      subRetPassForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let appKey = this.appKey;
              let token = this.token;
              let password = this.resetPassForm.newPass;
              let smsCode = this.resetPassForm.smsCode;
              this.resetPasVC(appKey,token,password,smsCode);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      },
      // 验证重置密码第一步账号
      resetNext1(){
        this.resetStatus = 1;
        this.getPictureVC(this.appKey,this.token);
      },
      resetNext2(){
        this.resetStatus = 3;
        // this.getPictureVC(this.appKey,this.token);
      },
      resetNexta2(){
        this.resetStatus = 2;
        this.getPictureVC(this.appKey,this.token);
      },
      resetNext3(){
         this.resetStatus = 3;
      },
      // 获取appkey
      getHrefString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      },
        // 获取会话Id
        taskType(appKey,type){
          this.$http({
              method: 'get',
              url: socialSecurity.taskType,
              params:{
                appKey:appKey,
                type: type
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               this.token = data.token;
               this.getPictureVC(this.appKey,this.token);
            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

         // 获取图像验证码
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
            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

         // 验证登录
        login(appKey,token,account,password,code){
          this.$http({
              method: 'get',
              url: socialSecurity.login,
              params:{
                appKey:appKey,
                token: token,
                account: account,
                password: password,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 10){
                this.$message.success(data.desc);
                setTimeout("window.location.reload()",2000);
               }else{
                this.$message.error(data.desc);
               }


            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

         // 验证注册手机号
        regisPhoneVC(appKey,token,phone){
          this.$http({
              method: 'get',
              url: socialSecurity.regisPhoneVC,
              params:{
                appKey:appKey,
                token: token,
                phone:phone
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 14){
                  this.$message.success(data.desc);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
         // 验证注册发送短信
        regisMesVC(appKey,token,code){
          this.$http({
              method: 'get',
              url: socialSecurity.regisMesVC,
              params:{
                appKey:appKey,
                token: token,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 15){
                  this.$message.success(data.desc);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

         // 验证填写注册信息
        regisBasicMesVC(appKey,token,password,smsCode,realName,cardId){
          this.$http({
              method: 'get',
              url: socialSecurity.regisBasicMesVC,
              params:{
                appKey:appKey,
                token: token,
                password:password,
                smsCode:smsCode,
                realName:realName,
                cardId:cardId
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 16){
                  this.$message.success(data.desc);
                 setTimeout("window.location.reload()",2000);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

        //验证重置密码 的账号
        resetAccountVC(appKey,token,account,code){
          this.$http({
              method: 'get',
              url: socialSecurity.resetAccountVC,
              params:{
                appKey:appKey,
                token: token,
                account:account,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 11){
                  this.$message.success(data.desc);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },

        //验证重置密码 的身份信息
        resetBasicMesVC(appKey,token,realName,cardId,phone,code){
          this.$http({
              method: 'get',
              url: socialSecurity.resetBasicMesVC,
              params:{
                appKey:appKey,
                token: token,
                realName:realName,
                cardId:cardId,
                phone:phone,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 12){
                  this.$message.success(data.desc);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
        //验证重置密码 发送短信
         resetMesVC(appKey,token,code){
          this.$http({
              method: 'get',
              url: socialSecurity.resetMesVC,
              params:{
                appKey:appKey,
                token: token,
                code:code
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               // if(data.status == 11){
               //    this.$message.success(data.desc);
               // }else{
               //    this.$message.error(data.desc);
               // }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },
        //验证重置密码
         resetPasVC(appKey,token,password,smsCode){
          this.$http({
              method: 'get',
              url: socialSecurity.resetPasVC,
              params:{
                appKey:appKey,
                token: token,
                password:password,
                smsCode:smsCode
              }
            }).then(function(res) {
               console.log(res);
               const data = res.body;
               if(data.status == 13){
                  this.$message.success(data.desc);
                  setTimeout("window.location.reload()",2000);
               }else{
                  this.$message.error(data.desc);
               }

            }, function(error) {

              this.$message.error('请求错误,请稍后再试');
            })
        },


    }
}
</script>
<style lang="less">
.stepOne{
    /*margin-top: 40px;*/
    /*text-align: left;*/
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
}
.tabb{
  margin-top: 15px;
}
.taskType button{
    margin-left: 10px;
    font-size: 16px;
}
.talk{
   margin-top: 20px;
}

.sel{
  margin-top: 10px;
  .el-select{
    // width:600px;
    /*display: block;*/
    // float: left;
    display: inline;
    width: 100%;
    input{
      border-color: #999;
    }
    .el-input .el-input__icon{
      color: #999;
    }
  }
}
.login{
  margin-top: 10px;
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
.regist{
  margin-top: 10px;
  input{
      border-color: #999;
    }
  .loginBtn{
    width: 98%;
    background-color: none;
    background: url(../../assets/img/btt.png)  0 0 no-repeat;
    background-size: 100% 100%;
    border: none;
    margin-left: 0;
    margin-bottom: 10px;
  }
}
.reset{
  margin-top: 10px;
  input{
      border-color: #999;
    }
  .loginBtn{
    width: 98%;
    background-color: none;
    background: url(../../assets/img/btt.png)  0 0 no-repeat;
    background-size: 100% 100%;
    border: none;
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>