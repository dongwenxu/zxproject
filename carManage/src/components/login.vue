<template>
  <div id="Myheader">
    <el-dialog v-model="loginDialogVisible" size="full" :show-close='false'>
      <div class="content">
        <div class="panel-head">豪雅名车后台管理系统</div>
        <el-form class='form' :model="loginForm" :rules="loginRole" ref="loginForm" label-width="100px" label-position='left'>
          <el-form-item label="用户名" prop="user">
            <el-input type="text" v-model="loginForm.user" auto-complete="off"></el-input>
          </el-form-item>
          <div class="" v-on:keyup.13="handleSubmit">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import host from '../config.js'

export default {

  created(){

  },
  data() {
    return {
      loginDialogVisible:true,
      loginForm: {
        pass: '',
        user:''
      },
      loginRole: {
        pass: [
         { required: true, message: '请输入密码', trigger: 'blur' },
         { min: 5, max: 18, message: '长度在 5 到 18 位', trigger: 'blur' }
        ],
        user:[
          {required: true,message: '请输入用户名',trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    handleReset() {
      this.$refs.loginForm.resetFields();
    },
    handleSubmit(ev) {
      let that = this;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
              this.$http({
              method: 'POST',
              url:  host.basic.basicUrl + '/login/userLogin',
              params: {
                userName:this.loginForm.user,
                passWord:this.loginForm.pass
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                   this.$notify({
                      title: '登录成功',
                      message: '欢迎登录豪雅名车后台管理系统',
                      type: 'success'
                    });
                  sessionStorage.setItem('xunLogin', true);
                  this.$router.replace({
                    path: '/'
                  })
                  // window.location.reload();

              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
      });
    }
  }
}
</script>

<style lang='less'>
  #Myheader{
    position: relative;
    .el-dialog{
      background: #f6f5f5;
      background: url('../assets/login_1.png') no-repeat center center
    }
    .content{
      width: 500px;
      background: url('../assets/login_2.png') no-repeat center center;
      position: absolute;
      top:50%;
      left:50%;
      margin-top: -240px;
      margin-left: -250px;
      border: 1px solid #dfdfdf;
      -moz-border-radius: 8px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
      -moz-box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
      .panel-head{
        border-radius: 8px 8px 0 0;
        height: 56px;
        background: #58a0da;
        color:#fff;
        font-size: 20px;
        line-height: 56px;
        text-align: center
      }
      .form{
        margin:40px 60px;
        button{
          width: 100%;
          background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#438dc9), to(#1490f5));/*谷歌*/
          background:-moz-linear-gradient(top,#438dc9,#1490f5);/*火狐*/
          height: 44px;
          span{
            font-size: 18px;
          }
        }
        .el-form-item__label{
          color:#fff;
          font-size: 16px;
        }
      }
    }
  }
</style>

<!-- <li><router-link to='/second'>f1d12dd</router-link></li> -->
