<template>
  <div class="person">
    <div class="person-head">
       <div class="person-logo">LOGO</div>
    </div>
    <div class="form-box">
      <div  class="form-sub">
        <p><span>手机</span><input type="number" name="fname" v-model="phone" placeholder="请输入手机号码" /></p>
        <p><span>密码</span><input type="text" name="lname" v-model="password" placeholder="请输入正确的密码" /></p>
        <div style="text-align:center;margin-top:.4rem;">
            <mt-button type="default">登录</mt-button>
        </div>
        <div class="form-a">
           <a href="javascript:;" @click="forgetDetail">忘记密码?</a>
           <a href="javascript:;" @click="registDetail">注册新用户</a>
        </div>
      </div>
    </div>

      <!-- 忘记密码 -->
      <transition name="slide-fade">
         <div v-show="detailShow" class="forget">
           <forget @close="forgetClose" v-if="this.type == 'forget'"></forget>
           <regist @close="registClose" v-if="this.type == 'regist'"></regist>
         </div>
       </transition>

  </div>
</template>

<script>
import { Button } from 'mint-ui'
import forget from './forget.vue'
import regist from './regist.vue'
export default {
   name: 'person',
   components:{
      forget,
      regist
   },
   data () {
      return {
         msg: 'person',
         phone:'',
         password:'',
         detailShow: false,
         type:''
      }
   },
   methods: {
      forgetDetail() {
         // alert(1);
         this.type = "forget";
         this.detailShow = true;

      },
      registDetail(){
         this.type = "regist";
         this.detailShow = true;
      },
      forgetClose(i){
         this.detailShow = i;
      },
      registClose(i){
         this.detailShow = i;
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">

   @fbg:#68C07F;
   .person{
    margin-left: .15rem;
    margin-right: .15rem;
   }
   .person-head{
      display: flex;
      justify-content:center;
      margin-top: .5rem;
      .person-logo{
         width: 2.5rem;
         height: 2.5rem;
         text-align: center;
         line-height: 2.5rem;
         font-size: .3rem;
         border: 1px solid #ddd;
         border-radius: 50%;
      }
   }
   .form-box{
      margin-top: 0.5rem;
      .form-a{
         margin-top: .4rem;
         a{
            color: @fbg;
            font-size: .28rem;
         }
         a:nth-of-type(1){
            float: left;
         }
          a:nth-of-type(2){
            float: right;
         }
      }
   }
   .form-sub{
      font-size: .3rem;
      color: #999999;
      span{
         display: inline-block;
         line-height: .36rem;
      }
      input{
         border:none;
         outline: medium;
         color: #666666;
         margin-left: .2rem;
         width: 80%;
      }
      p{
         border-bottom:1px solid #ddd;
         padding: .2rem .3rem;
      }
      button{
         width: 100%;
         height: .8rem;
         font-size: .38rem;
         background-color: @fbg;
         color: #fff;
      }
   }
   .forget{
      position: absolute;
      float: left;
      width: 7.5rem;
      height: 13.34rem;
      // background-color: red;
      z-index: 100;
      top: 0;
      margin-left: -0.15rem;
      overflow: auto;
      background: #fff;
      .cancel-head{
         display: flex;
         font-size: .3rem;
         height: .8rem;
         border-bottom: 1px solid #ddd;
         align-items:center;
      }
   }
      .slide-fade-enter-active{
        transition: all .5s ease;
      }
      .slide-fade-leave-active{
        transition: all .3s ease;

      }
      .slide-fade-enter, .slide-fade-leave-active{
        transform: translateX(100%)
      }
   ::-webkit-input-placeholder { /* WebKit browsers */
   font-size:.3rem;
   }
   :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   font-size:.3rem;
   }
   ::-moz-placeholder { /* Mozilla Firefox 19+ */
   font-size:.3rem;
   }
   :-ms-input-placeholder { /* Internet Explorer 10+ */
   font-size:.3rem;
   }
</style>
