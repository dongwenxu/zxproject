<template>
  <div id="app">
     <el-row class='main-title'>
       <el-col :span="24" class="panel-top">
          <el-col :span="20" style="font-size:26px;padding-left:30px;">
            <span>豪雅名车</span>
          </el-col>
           <el-tooltip class="item" effect="dark" content="点击退出系统" placement="bottom" style="margin-left:30px">
            <span v-on:click='logout' class='logout'>退出系统</span>
          </el-tooltip>
        </el-col>
     </el-row>
     <div class='main-content'>
        <div style='height:100%'>
            <el-menu  :default-active='active' class="el-menu-vertical-demo nav-menu"
             @open="handleOpen" @close="handleClose" theme="dark" @select="handleSelect">
            <!-- <el-submenu index="1">
              <template slot="title">导航一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu> -->
            <el-menu-item index="1">车辆管理</el-menu-item>
            <el-menu-item index="2">车辆添加</el-menu-item>
            <!-- <el-menu-item index="3">导航三</el-menu-item> -->
          </el-menu>
        </div>
        <div style="flex:1;overflow:auto">
          <router-view class="view"></router-view>
      </div>
     </div>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import host from './config.js'
export default {
  name: 'app',
 // beforeRouteEnter (to, from, next) {
 //      let val = sessionStorage.getItem('xunLogin');
 //      val ? next() : next({path: '/login'});
 //    },

  data() {
    return {
      active: '1'
    }
  },
  mounted() {

  },
  created(){
     this.active = '1';
     this.$router.push({path:'/'});
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key,keyPath){
      switch (key) {
          case '1':
            this.$router.push({path:'/'})
            break;
          case '2':
            this.$router.push({path:'/ex2'})
            break;
        }
    },
    logout() {
      let that = this;
      this.$confirm('你确定要退出登录嘛?, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      }).then(() => {
        that.$http.post( host.basic.basicUrl + '/login/userQuit').then(function(res) {
          let data = res.data;
          if (data.ERRORCODE == '0') {
            sessionStorage.removeItem('xunLogin');
            this.$router.replace({
              path: '/login'
            })
          } else {
            that.$notify({
              title: '退出失败',
              message: data.RESULT,
              type: 'error'
            });
          }
        })
        // sessionStorage.removeItem('xunLogin');
        // this.$router.replace({
        //       path: '/login'
        //     })
      }).catch(() => {});
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*margin-top: 60px;*/
}
html,body {
    font-family: Helvetica, sans-serif;
    margin: 0;
    overflow: auto;
    height: 100%;
  }
  #app{
    height: 100%;
  }
  .main-title{
    height: 10%;
    min-height: 70px;
  }
  .main-content{
    display:flex;
    flex:1;
    height: 90%;
  }
  .nav-menu{
    height: 100%;
    >li{
      font-size: 16px;
      width: 180px;
      min-height: 65px;
      line-height: 65px;
      background-color: #324057;
    }
  }
   .panel-top {
    height: 100%;
    background: #324057;
    color: #c0ccda;
    padding-top: 30px;
  }
  .nav-menu{
    height: 100%;
    >li{
      font-size: 16px;
      width: 180px;
      min-height: 65px;
      line-height: 65px;
      background-color: #324057;
    }
  }
  .logout{
    cursor: pointer;
  }
   .el-submenu__title{
    font-size: 16px!important;
  }
  .el-submenu .el-menu-item{
    padding:0!important;
    padding-left: 20px!important;
  }
</style>
