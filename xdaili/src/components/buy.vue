<template>
  <div class="buy">
     <div style="padding-bottom:1rem;">
        <div class="buy-type"  v-for="(tab,index) in tabs" :class="tab.bgClass">
         <div class="buy-type-head">{{tab.title}}</div>
         <div class="buy-type-con">
            <p>{{tab.con1}}</p>
            <p>{{tab.con2}}</p>
            <p>{{tab.con3}}</p>
         </div>
         <div class="buy-type-btn">
            <mt-button type="default"  @click="list(index)" :class="tab.btClass">立即购买</mt-button>
         </div>
       </div>
     </div>
      <!-- buydetail -->
      <transition name="slide-fade">
         <div v-show="detailShow" class="forget">
           <buy-detail @close="close" :dataType="dataType"></buy-detail>
           <!-- <regist @close="registClose" v-if="this.type == 'regist'"></regist> -->
         </div>
       </transition>
  </div>
</template>

<script>
import host from '../config.js'
import { MessageBox } from 'mint-ui'
import buyDetail from './buydetail.vue'
export default {
  name: 'buy',
  components:{
    buyDetail
  },
  mounted(){

  },
  data () {
    return {
      msg: 'buy',
      isTrue:true,
      dataType:0,
      detailShow:false,
      tabs: [{
         title: '优质代理',
         con1:'单词最对提取20个（可定制）',
         con2:'每天提取上限1000个（可定制）',
         con3:'有效时长5~30分钟',
         bgClass: 'bg1',
         btClass:'bt1'
      }, {
         title: '独享动态',
         con1:'单词最对提取20个（可定制）',
         con2:'每天提取上限1000个（可定制）',
         con3:'有效时长5~30分钟',
         bgClass:'bg2',
         btClass:'bt2'
      }, {
         title: '动态混拨',
         con1:'单词最对提取20个（可定制）',
         con2:'每天提取上限1000个（可定制）',
         con3:'有效时长5~30分钟',
         bgClass:'bg3',
         btClass:'bt3'
      }]
    }
  },

  methods:{
   list(i){
      // console.log(i);
      this.ynLogin();

   },
   close(i){
      this.detailShow = i;

   },
   ynLogin(){
      this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/user/login',
          params: {
            mobile: '',
            password:''
          }
        }).then(function(res) {
          // console.log(res.body.success);
          if(res.body.success == true){
              this.detailShow = true;
              this.dataType = i;
          }else{
            MessageBox({
              title: '未登录无法购买',
              message: '去登录？',
              showCancelButton: true
            }).then((action) => {
                if(action == 'confirm'){
                  this.$router.push({path:'/person'});
                  this.$emit('action','person');
                }
              });
          }

        }, function(error) {
          // alert('数据获取失败,请稍后再试');
          MessageBox({
            title: '提示',
            message: '数据获取失败,请稍后再试'
          });
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">


   .buy{
     padding-top: .4rem;
     margin-left: .15rem;
     // float: left;
   }

  .forget{
      position: fixed !important;
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
   .buy-type{
      // width: 6.8rem;
      // height: 4rem;
      // border:1px solid #ddd;
      // margin-left: .2rem;
      // font-size: .3rem;
      margin-bottom: .3rem;
      margin-left: .5rem;
      .buy-type-head{
         // height: .8rem;
         line-height: 1.2rem;
         // border-bottom:1px solid #ddd;
         text-align: center;
         color: #fff;
         font-size: .32rem;
      }
      .buy-type-con{
         padding-left: 1rem;
         margin-top: .2rem;
         // margin-bottom: .2rem;
         font-size: .32rem;
         color: #666666;
         // text-align: center;
         p:nth-of-type(2){
            margin-top:.15rem;
            margin-bottom:.15rem;
         }
      }
      .buy-type-btn{
         text-align: center;
         display: flex;
         justify-content:center;
         margin-top: .2rem;
         .bt1{
            width: 4.55rem;
            height: .76rem;
            background: url(../assets/img/bt1.png) no-repeat 0 0;
            background-size: 100% 100%;
         }
         .bt2{
            width: 4.55rem;
            height: .76rem;
            background: url(../assets/img/bt2.png) no-repeat 0 0;
            background-size: 100% 100%;
         }
         .bt3{
            width: 4.55rem;
            height: .76rem;
            background: url(../assets/img/bt3.png) no-repeat 0 0;
            background-size: 100% 100%;
         }
         button{
            // width: 4rem;
            // height: .66rem;
            font-size: .3rem;
            text-align: center;
            // line-height: .66rem;
            // border: 1px solid #ddd;
            padding: 0 .12rem;
            color: #fff;
            background-color: #26A69A;
         }
         .mint-button--default{
            box-shadow:0 0 1px #fff;
         }
      }
   }
  .bg1{
    width: 6.21rem;
    height: 4.02rem;
    background: url(../assets/img/b1.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .bg2{
    width: 6.21rem;
    height: 4.02rem;
    background: url(../assets/img/b2.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .bg3{
    width: 6.21rem;
    height: 4.02rem;
    background: url(../assets/img/b3.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
</style>
