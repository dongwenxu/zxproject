<template>
  <div class="active">
      <div class="active-head">
         <img src="../assets/img/tell.png"  alt="公告" class="tell">
         <i class="active-head-i1">公告：</i>
         <div class="announcement">
            <div class="win">
                <span class="active-head-sp1">讯代理新版本上线了！！！</span>
            </div>
        </div>
         <!-- <span class="active-head-sp1" id="span1">讯代理新版本上线了！！！</span> -->
         <div class="active-head-right">
            <span @click="noticeShow">更多</span>
            <img src="../assets/img/ri.png"  alt="">
         </div>
      </div>
      <ul class="active-list">
        <li v-for="(tab,index) in tabs" @click="share(index)">
          <div :class="tab.bgClass"></div>
          <div :class="tab.btClass">{{tab.btCon}}</div>
        </li>

      </ul>

      <!-- activedetail -->
      <transition name="slide-fade">
         <div v-show="detailShow" class="active-tell">
           <notice @close="close" ></notice>
           <!-- <regist @close="registClose" v-if="this.type == 'regist'"></regist> -->
         </div>
       </transition>

       <!-- sharedetail -->
      <transition name="slide-fade">
         <div v-show="shareShow" class="share-tell">
           <share @close="shareClose" :class="{ shareBg1: isBg1, shareBg2: isBg2 }"></share>
           <!-- <regist @close="registClose" v-if="this.type == 'regist'"></regist> -->
         </div>
       </transition>

  </div>
</template>

<script>
import notice from './notice.vue'
import share from './share.vue'
import scroll from '../config/autoScroll.js'
export default {
  name: 'active',
  components:{
      notice,
      share
  },
  computed(){
    console.log(scroll.autoScroll.autoScroll);
  },
  data () {
    return {
      detailShow: false,
      detailShow1: false,
      shareShow:false,
      ulWidth:'0px',
      isBg1:false,
      isBg2:false,
      tabs:[
        {
          bgClass:'active-bg1',
          btClass:'active-bt1',
          btCon:'参与活动'
        },
        {
          bgClass:'active-bg2',
          btClass:'active-bt2',
          btCon:'参与活动'
        }
      ]
    }
  },
  methods:{
   noticeShow(){
      this.detailShow = true;
   },
    close(i){
      this.detailShow = i;
   },
   shareClose(i){
      this.shareShow = i;
   },
   share(i){
      this.shareShow = true;
      console.log(i);
      switch (i) {
        case 0:
          this.isBg1 = true;
          this.isBg2 = false;
          break;
        case 1:
          this.isBg2 = true;
          this.isBg1 = false;
          break;
        default:
          // statements_def
          break;
      }
      // var share_obj = nativeShare('nativeShare',config);
      // var UA = navigator.appVersion;
      // var isqqBrowser = UA.indexOf("MQQBrowser/");
      // var isucBrowser = UA.indexOf("UCBrowser/");
      // if(UA.indexOf("MQQBrowser/")> 0){
      //   alert('qq');
      // }else if(UA.indexOf("UCBrowser/") > 0){
      //   alert('uc');
      // }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    i{
       font-style: normal;
    }
      .active-head{
      height: .69rem;
      width: 100%;
      background-color: #FABA70;
      color: #fff;
      font-size: .26rem;
      display: flex;
      align-items:center;
      .tell{
         width: .3rem;
         height: .39rem;
         margin-left: .4rem;
         margin-right: 0.15rem;
      }
      .active-head-sp1{
         margin-right: 1rem;
      }
      .active-head-right{
         margin-left: .6rem;
         img{
            width: .12rem;
            height: .21rem;
         }
      }
   }
   .active-tell{
      position: fixed;
      float: left;
      width: 7.5rem;
      height: 13.34rem;
      // background-color: red;
      z-index: 100;
      top: 0;
      // margin-left: -0.15rem;
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
    .share-tell{
      position: fixed;
      float: left;
      width: 7.5rem;
      height: 13.34rem;
      // background-color: red;
      z-index: 100;
      top: 0;
      // margin-left: -0.15rem;
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
   // .active-tell1{
   //    position: fixed;
   //    float: left;
   //    width: 7.5rem;
   //    height: 13.34rem;
   //    // background-color: red;
   //    z-index: 100;
   //    top: 0;
   //    // margin-left: -0.15rem;
   //    overflow: auto;
   //    background: #fff;
   //    .cancel-head{
   //       display: flex;
   //       font-size: .3rem;
   //       height: .8rem;
   //       border-bottom: 1px solid #ddd;
   //       align-items:center;
   //    }
   // }
      .slide-fade-enter-active{
        transition: all .5s ease;
      }
      .slide-fade-leave-active{
        transition: all .3s ease;

      }
      .slide-fade-enter, .slide-fade-leave-active{
        transform: translateX(100%)
      }
      .active-list{
        margin-top: .3rem;
        margin-bottom: 1rem;
        li{
          height: 3.5rem;
          position: relative;
          padding-left: .27rem;
          // display: flex;
          // justify-content:center;
        }
      }
      .active-bg1{
        width: 6.95rem;
        height: 3rem;
        background: url(../assets/img/activeBg1.png) no-repeat 0 0;
        background-size: 100% 100%;
      }
      .active-bg2{
          width: 6.95rem;
          height: 3rem;
          background: url(../assets/img/activeBg2.png) no-repeat 0 0;
          background-size: 100% 100%;
        }
        .active-bt1{
          width: 1.83rem;
          height: .56rem;
          background: url(../assets/img/activeBt1.png) no-repeat 0 0;
          background-size: 100% 100%;
          position: absolute;
          left: 2.85rem;
          bottom: 0.2rem;
          font-size: .3rem;
          text-align: center;
          color: #fff;
          line-height: .65rem;
        }
        .active-bt2{
          width: 1.83rem;
          height: .56rem;
          background: url(../assets/img/activeBt2.png) no-repeat 0 0;
          background-size: 100% 100%;
          position: absolute;
          font-size: .3rem;
          color: #fff;
          text-align: center;
          line-height: .65rem;
           left: 2.85rem;
          bottom: 0.2rem;
        }


 @keyframes myfirst {
            0% {
                left: 100%;
            }
            100% {
                left: -80%;
            }
        }

        .announcement {
            display: inline-block;
            // margin-top: 33.5px;
            line-height: .6rem;
            width: 4rem;
            height: .6rem;
            background-origin: inherit;
            // background-color: red;
            z-index: 0;
        }
        .announcement span {
            position: absolute;
            overflow: hidden;
            top: 0.01rem;
            display: inline-block;
            width: 4rem;
            left: 0%;
            animation: myfirst 10s linear infinite;
        }

        .win {
            position: relative;
            width: 4rem;
            height: .6rem;
            overflow: hidden;
            margin-left: .1rem;
        }
        .shareBg1{
    height: 14.56rem;
    background: url(../assets/img/shareBg1.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .shareBg2{
    height: 16.95rem;
    background: url(../assets/img/shareBg2.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
</style>
