<template>
  <div class="noticeDeatl">
      <p class="noticeDeatl-p1" v-html="detail"></p>
      <div>
        <mt-button type="danger"  @click="hideDetail" class="isplane">关闭</mt-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'noticeDeatl',
  props:['detail'],
  data () {
    return {

    }
  },
  methods:{
    hideDetail(){
      this.$emit('close',false);
    }
  },
  filters:{
    unescape:function (html) {
      return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .noticeDeatl{
    padding:.5rem .3rem;
    .noticeDeatl-p1{
      font-size: .3rem;
      color: #333333;
      text-indent: 2em;
      line-height: .5rem;
      // width: 100%;
    }
  }
  .isplane{
        // border: 1px solid #5a5a5a;
        // background-color: transparent;
        // box-shadow: none;
        // color: #5a5a5a;
        font-size: .32rem;
        height: .8rem;
        width: 100%;
  }
</style>
