<template>
  <div class="forgetPass ">
    <div class="cancel-head">
         <i class="fa fa-chevron-left" @click="hideDetail"></i>
         <div class="title">忘记密码</div>
      </div>
     <div class="detail-form">
        <p><span class="phone">手机</span><input type="number" name="fname" v-model="phone" placeholder="请输入手机号码" /></p>
        <p><span>验证码</span>
         <input type="number" name="fname" v-model="ver" placeholder="请输入验证码" class="ver-inp" />
            <mt-button type="default">发送</mt-button>
         </p>
        <p><span class="newPass">新密码</span><input type="password" name="fname" v-model="newPasS" placeholder="请输入新密码" /></p>
         <div style="text-align:center;margin-top:.4rem;">
            <mt-button type="default" class="sub">确定</mt-button>
        </div>
     </div>

  </div>
</template>

<script>
export default {
  name: 'forgetPass',
  data () {
    return {
      detailShow: true,
      phone:'',
      ver:'',
      newPasS:''
    }
  },
  methods:{
   hideDetail(){
      this.$emit('close',false);
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @fbg:#68C07F;
    .cancel-head{
         display: flex;
         font-size: .3rem;
         height: .8rem;
         border-bottom: 1px solid #ddd;
         align-items:center;
         .fa{
            margin-left: .1rem;
         }
         .title{
            margin-left: 2.75rem;
         }
      }
      .detail-form{
         font-size: .3rem;
      color: #999999;
      margin-top: .4rem;
      padding-left: .15rem;
      padding-right: .15rem;
         span{
         display: inline-block;
         line-height: .36rem;
         // margin-right: .15rem;
         }
         .phone{
            width: .86rem;
            text-align: right;
            margin-right: .12rem;
         }
         .newPass{
            margin-right: .08rem;
         }
         input{
            border:none;
            outline: medium;
            color: #666666;
            margin-left: .2rem;
            width: 80%;
         }
         button{
            width: 40%;
            height: .6rem;
            font-size: .3rem;
            background-color: @fbg;
            color: #fff;
            margin-left: .2rem;
         }
         .sub{
            width: 100%;
            height: .8rem;
            font-size: .36rem;
            background-color: @fbg;
            color: #fff;
            margin-left: 0;
         }
         .ver-inp{
            width: 30%;
         }
         p{
            border-bottom:1px solid #ddd;
            padding: .3rem .3rem;
         }
      }
</style>
