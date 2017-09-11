<template>
  <div class="hello">

    <header>学信网查询</header>
    <div class="con">
      <router-view></router-view>
    </div>
    <div class="bot">
      <img src="../assets/img/LOGO.png" alt="LOGO" style="width:60%;"></img>
    </div>


  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      okShow:0,
      backNavBtnShow:false
    }
  },
  methods : {
    back(){
      this.$router.push('/')

      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="less">

@media screen and (min-width: 750px) {
    #navbox{
      position: absolute;
    }
    .hello{
      margin:150px auto;
      width: 375px;
      height: 667px;
      border: 1px solid #555;
      overflow-y: scroll;
    }
}
header{
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bot{
  margin-top: 10px;

}
</style>
