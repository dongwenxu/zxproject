<template>
  <div id="app">

    <mt-header fixed title="讯代理">讯代理</mt-header>
    <router-view class="view" v-on:action="action"></router-view>

      <mt-tabbar v-model="selected">
        <mt-tab-item id="main" >
          <!-- <div slot="icon" class="fa fa-home" aria-hidden="true"></div> -->
          <i slot="icon" class="fa fa-home faa" aria-hidden="true"></i>
          首页
        </mt-tab-item>
        <mt-tab-item id="buy">
        <!-- <img slot="icon" src=""> -->
          <i slot="icon" class="fa fa-shopping-cart faa" aria-hidden="true"></i>
          购买
        </mt-tab-item>
        <mt-tab-item id="active">
        <!-- <img slot="icon" src=""> -->
          <i slot="icon" class="fa fa-gift faa" aria-hidden="true"></i>
          活动
        </mt-tab-item>
        <mt-tab-item id="person">
        <!-- <img slot="icon" src=""> -->
          <i slot="icon" class="fa fa-user faa" aria-hidden="true"></i>
          个人中心
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      selected:'main',
      num:1
    }
  },
  mounted(){
    this.selected='main';
    this.$router.push({path:'/'});
  },
  watch:{
    selected: {
      handler(curVal, oldVal) {　　　　　　　　　　　　
        // console.log(curVal, oldVal)
        if(curVal == 'main'){
          this.$router.push({path:'/'});
        }
        if(curVal == 'buy') {this.$router.push({path:'/buy'})}　　　　　　　　　
        if(curVal == 'active'){this.$router.push({path:'/active'});}　　　　　　　　　
        if(curVal == 'person') {this.$router.push({path:'/person'});}　　　　　　　　　
      },
      deep: true
    }
  },
  methods:{
    action(i){
      console.log(i);
      this.selected = i;
    }
  }
}
</script>

<style lang="less">
body{
  position: relative;
}
@color:#1FDBB6;
@fa:#BCBCBC;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;
  color: #2c3e50;*/
  padding-top: .8rem;
  // padding-left: .15rem;
  // padding-right: .15rem;
  // position: relative;
  // overflow: scroll;
}
.view{
  // height: 13.34rem;
  // overflow-y: scroll;
  // display: flex;

}
.mint-tabbar{
  background-color: #fff !important;
  padding-top: .01rem;
  // border-top:1px solid #ddd;

}
.mint-tab-item{
  color: @fa;
  // padding-top: 7px;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: @color !important;
  background-color:#fff !important;

  // background-size:100% 0;
  // border-top:1px solid rgba(255,255,255,0);

}
.mint-header{
  height: .8rem;
  font-size: .36rem;
  background-color: @color;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.mint-tab-item-icon{
  margin-bottom: 0;
  width: .5rem;
  height: .5rem;
}
.mint-tab-item-icon > *{
  float: left;
  /*display: inline-block;*/
  /*color: #000;*/
}
.fa{
  font-size: .46rem;
  /*color: #000;*/
}
// .faa{
//   color: @fa;
// }
.mint-tabbar{
  position: fixed;
}
.mint-msgbox-title{
  font-size: .3rem;
}
.mint-msgbox-message{
  line-height: .6rem;
}
.mint-msgbox-btn{
  font-size: .3rem;
}
.mint-msgbox-content{
  padding:.2rem .2rem .3rem;
  min-height: .6rem;
}
</style>
