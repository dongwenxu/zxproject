<template>
  <div class="sharedetail">

      <button @click="share">分享</button>
      <button @click="hideDetail">关闭</button>
       <mt-popup v-model="popupVisible" position="bottom">
         <div class="shareBottom">
           <div id="nativeShare"></div>
         </div>
      </mt-popup>

  </div>
</template>

<script>
import nativeShare from '../config/nativeShare.js'

export default {
  name:'sharedetail',
  data(){
    return{
      popupVisible:false
    }
  },
  methods:{
    hideDetail(){
      this.$emit('close',false);

    },
    share(){
      this.popupVisible = true;
        var config = {
            url:'http://blog.wangjunfeng.com',// 分享的网页链接
            title:'王俊锋的个人博客',// 标题
            desc:'王俊锋的个人博客',// 描述
            img:'http://www.wangjunfeng.com/img/face.jpg',// 图片
            img_title:'王俊锋的个人博客',// 图片标题
            from:'王俊锋的博客'// 来源
        };
      let obj = nativeShare.nativeShare;
      var share_obj = new obj('nativeShare',config);
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  @import url(../config/nativeShare.css);
  .shareBottom{
    // width: 100%;
    width: 7.5rem;
    padding-top: .4rem;
    padding-bottom: .4rem;
  }



</style>
