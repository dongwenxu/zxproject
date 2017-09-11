<template>
  <div class="main">
    <!-- <h1>{{ msg }}</h1> -->
   <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage>
          <div class="page-1 page">
            <p class="part-1" v-animate="'slideIn'">
              <div class="ask">咨询</div>
                <div class="mainImg-box mainImg-boxx">
                    <div class="mainImg">
                      <img src="../assets/img/logo.png"  alt="" class="logo">
                    </div>
                </div>
                <div class="main-lang">
                    <h1 class="main-lang-h1">IP行业领导者</h1>
                    <div class="main-lang-div1">一家高质量的IP供应商</div>
                    <div class="main-lang-div2">全国线路任选，独享宽带</div>
                </div>
            </p>
          </div>

          <div class="page-2 page">
            <p class="part-2" v-animate="'slideIn'">
              <div class="mainImg-box">
               <div class="mainImg">
                 <img src="../assets/img/a1.png" class="a1" alt="">
               </div>
              </div>
              <div class="main-lang main-lang1" v-if="this.currentView == 'child1'">
                  <h1 class="main-lang-h1">网络推广人员</h1>
                  <div class="main-lang-dis" style="margin-top:.3rem;">
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>投票点赞</div>
                  </div>
                   <div class="main-lang-dis">
                    <div><img src="../assets/img/right.png" alt=""></div>
                    <div>宝贝收藏</div>
                  </div>
                   <div class="main-lang-dis">
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>下载类</div>
                  </div>
                   <div class="main-lang-dis">
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>注册回访</div>
                  </div>
                   <div class="main-lang-dis">
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>优化任务</div>
                  </div>
                  <!-- <div class="main-lang-div1">投票点赞  宝贝收藏  下载类</div>
                  <div class="main-lang-div2">注册回访  优化任务</div> -->
              </div>
               <div class="main-lang main-lang1" v-if="this.currentView == 'child2'">
                 <h1 class="main-lang-h1">程序员</h1>
                  <div class="main-lang-dis" style="margin-top:.3rem;">
                    <div><img src="../assets/img/right.png" alt=""></div>
                    <div>高并发</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>无延迟</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>数量大</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>API接口</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>示例代码</div>
                  </div>
                 <!--  <div class="main-lang-div1">高并发  无延迟  数量大</div>
                  <div class="main-lang-div2">API接口  示例代码</div> -->
              </div>
               <div class="main-lang main-lang1" v-if="this.currentView == 'child3'">
                  <h1 class="main-lang-h1">网络营销人员</h1>
                  <div class="main-lang-dis" style="margin-top:.3rem;">
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>论坛发帖</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>问答推广</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png" alt=""></div>
                    <div>SEO</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png"  alt=""></div>
                    <div>人工注册</div>
                  </div>
                  <div class="main-lang-dis" >
                    <div><img src="../assets/img/right.png" alt=""></div>
                    <div>效果回访</div>
                  </div>
                <!--   <div class="main-lang-div1">论坛发帖  问答推广  SEO</div>
                  <div class="main-lang-div2">人工注册  效果回访</div> -->
              </div>
              <ul class="btn-select">
                 <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
                    {{tab.type}}
               </li>
              </ul>
            </p>
          </div>

          <div class="page-3 page">
            <p class="part-3" v-animate="'slideIn'">
               <div class="num3">
                <div class="num3-1">
                  <i class="fa fa-bar-chart ba" aria-hidden="true"></i>
                  <div class="num-3-1-in">可用IP量</div>
                </div>
                <div class="num3-num">378214</div>
                <div class="num3-1">
                  <i class="fa fa-pie-chart ba" aria-hidden="true"></i>
                  <div class="num-3-1-in">全国区域</div>
                </div>
                <div class="num3-num2">645</div>
              </div>
            </p>
          </div>
        </div>
      </div>
 <!--    <div v-if="num == 1">
       <div class="ask">咨询</div>
        <div class="mainImg-box">
            <div class="mainImg">讯代理主图</div>
        </div>
        <div class="main-lang">
            <h1 class="main-lang-h1">IP行业领导者</h1>
            <div class="main-lang-div1">一家高质量的IP供应商</div>
            <div class="main-lang-div2">全国线路任选，独享宽带</div>
        </div>
    </div> -->
 <!--    <div v-if="num == 2">
      <div class="mainImg-box">
            <div class="mainImg">讯代理主图</div>
        </div>
        <div class="main-lang" v-if="this.currentView == 'child1'">
            <h1 class="main-lang-h1">网络推广人员</h1>
            <div class="main-lang-div1">投票点赞  宝贝收藏  下载类</div>
            <div class="main-lang-div2">注册回访  优化任务</div>
        </div>
         <div class="main-lang" v-if="this.currentView == 'child2'">
           <h1 class="main-lang-h1">程序员</h1>
            <div class="main-lang-div1">高并发  无延迟  数量大</div>
            <div class="main-lang-div2">API接口  示例代码</div>
        </div>
         <div class="main-lang" v-if="this.currentView == 'child3'">
            <h1 class="main-lang-h1">网络营销人员</h1>
            <div class="main-lang-div1">论坛发帖  问答推广  SEO</div>
            <div class="main-lang-div2">人工注册  效果回访</div>
        </div>
        <ul class="btn-select">
           <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
              {{tab.type}}
         </li>
        </ul>
    </div>
    <div v-if="num == 3">
      <div class="num3">
        <div class="num3-1">
          <i class="fa fa-bar-chart" aria-hidden="true"></i>
          <div class="num-3-1-in">可用IP量</div>
        </div>
        <div style="text-align:center; margin-bottom: .5rem;
      margin-top: .5rem;">378214</div>
        <div class="num3-1">
          <i class="fa fa-pie-chart" aria-hidden="true"></i>
          <div class="num-3-1-in">全国区域</div>
        </div>
        <div style="text-align:center; margin-bottom: .5rem;
      margin-top: .5rem;">645</div>
      </div>
    </div> -->
    <div >
      <i class="fa fa-chevron-down symbol" aria-hidden="true"></i>
    </div>

  </div>
</template>

<script>
// import { Toast } from 'mint-ui';
import VueFullpage from 'vue-fullpage'

export default {
  name: 'main',
   watch: {
        change: {
          handler(curVal, oldVal) {　　　　　　　　　　　　
            console.log(curVal, oldVal)　　
          },
          deep: true
        }
    },
  mounted(){
    // console.log(VueFullpage.duration);
  },
  data () {
    return {
      msg: 'main',
      active: 0,
      next:true,
      aa:'',
      num:1,
      currentView: 'child1',
      tabs: [{
        type: '网络推广',
        view: 'child1'
      }, {
        type: '爬虫采集',
        view: 'child2'
      },
      {
        type: '营销补量',
        view: 'child3'
      }]

      }
   },
   methods:{
    toggle(i, v){
        this.active = i
       this.currentView = v
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@btncolor: #26A69A;
@fontcolor: #333333;
@color:#1FDBB6;
@num:#ff831b;
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height:11.54rem;
  // height: 34.62rem;
}
.page{
  height:11.54rem;
}
.page-1 {
  // background: #1bbc9b;
  // position: absolute;
  height: 11.54rem;
}
.page-2 {
  // background: red;
}
.page-3 {
  // background: #abc;
}
 @-webkit-keyframes float {
     0% {
         -webkit-transform: translateY(0);
         transform: translateY(0);
     }
     50% {
         -webkit-transform: translateY(.3rem);
         transform: translateY(.3rem);
     }
     100% {
         -webkit-transform: translateY(0);
         transform: translateY(0);
     }
 }
 @keyframes float {
     0% {
       -webkit-transform: translateY(0);
       transform: translateY(0);
     }
     50% {
       -webkit-transform: translateY(.3rem);
       transform: translateY(.3rem);
     }
     100% {
       -webkit-transform: translateY(0);
       transform: translateY(0);
     }
 }

    .main{
      position: relative;
      height: 10rem;
      margin-left: .15rem;
      margin-right: .15rem;
      // margin-top: .8rem;
    }
    .symbol{
        position: absolute;
        left: 48%;
        bottom: 0rem;
        -webkit-animation: float ease-in-out 2s infinite;
        animation: float ease-in-out 2s infinite;
        color: @color;
        }
    .ask{
      position: absolute;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      right: 0;
      top: .2rem;
      font-size: .22rem;
      border-radius: 50%;
      border:1px solid #ddd;
    }
    .mainImg-boxx{
      margin-top: .6rem;
    }
  .mainImg-box{
    display: flex;
    justify-content: center;
    // height: 50%;
    // padding-top: .6rem;
    .mainImg{
      width: 4.79rem;
      // flex:.6;
      height: 4.79rem;
      border-radius: 50%;
      .logo{
        width: 4.79rem;
        height: 4.79rem;
      }
      .a1{
        width: 4.8rem;
        height: 4.8rem;
      }
    }
  }
  .main-lang{
      margin-top:.3rem;
      font-size: .3rem;
      display: flex;
      color: #333333;
      flex-direction: column;
      .main-lang-h1{
        font-size: .6rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
      }
      .main-lang-dis{
        display: flex;
        justify-content: center;
        margin-bottom: .15rem;
        font-size: .36rem;
        img{
          width:.17rem;
          height: .17rem;
          margin-right: .14rem;
        }
      }
      .main-lang-div1{
        display: flex;
        justify-content: center;
        margin-top: .5rem;
        margin-bottom: .5rem;
        font-size: .36rem
      }
      .main-lang-div2{
        display: flex;
        justify-content: center;
        font-size: .36rem
      }
  }
  .main-lang1{
    margin-top: 0;
  }
  .btn-select{
    display: flex;
    justify-content: center;
    margin-top: .3rem;
    li{
      width: 1.6rem;
      height: .6rem;
      line-height: .6rem;
      background-color: #fff;
      text-align: center;
      padding: 0 0 ;
      border: 1px solid @color;
      border-radius: .06rem;
      font-size: .3rem;
      color: @color;
    }
     li:nth-of-type(2){
      margin-right: .3rem;
      margin-left: .3rem;
     }
    .active{
      background-color: @color;
      border: 1px solid @color;
      color:#fff;
    }
  }
  .num3{
    font-size: .36rem;
    margin-top: .5rem;
    .num3-num{
      font-size: .33rem;
      color: @num;
      text-align: center;
      margin-top: .4rem;
      margin-bottom: .7rem;
    }
    .num3-num2{
      text-align: center;
      color: @color;
      font-size: .33rem;
      margin-top: .4rem;
    }
  }
  .ba{
    color: #999999;
  }
  .num3-1{
    display: flex;
    justify-content: center;
    .num-3-1-in{
      font-size: .36rem;
      line-height: .46rem;
      margin-left: .15rem;
    }
  }
</style>
