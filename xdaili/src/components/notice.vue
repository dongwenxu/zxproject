<template>
  <div class="notice">
      <div class="cancel-head">
         <i class="fa fa-chevron-left" @click="hideDetail"></i>
         <div class="title">公告</div>
      </div>
     <ul class="notice-select">
       <li @click="toggle(index)" v-for="(tab,index) in tabs">
          <div class="notice-select-left">
            <div class="notice-select-left-title">{{tab.tittle}}</div>
            <div  class="notice-select-left-time">{{tab.updateTime}}</div>
          </div>
          <div class="notice-select-right">
            <i class="fa fa-angle-right icon" aria-hidden="true"></i>
          </div>
     </li>
    </ul>

      <!-- activedetail11 -->
      <transition name="slide-fade">
         <div v-show="detailShow1" class="active-tell1">
           <notice-detail @close="close" :detail="detail"></notice-detail>
           <!-- <regist @close="registClose" v-if="this.type == 'regist'"></regist> -->
         </div>
       </transition>
  </div>
</template>

<script>
import host from '../config.js'
import { MessageBox } from 'mint-ui';
import noticeDetail from './noticeDetail.vue'

export default {
  name: 'notice',
  components:{
      noticeDetail
    },
  mounted(){
    this.announceList(1);
  },
  data () {
    return {
      detailShow1:false,
      detail:'',
      tabs:[
          {
            title:'2017端午放假通知',
            time:'2017-01-03  12:30'
          },
           {
            title:'2017中秋放假通知',
            time:'2017-01-23  12:30'
          }
      ]
    }
  },
  methods:{
    hideDetail(){
      this.$emit('close',false);
    },
    close(i){
      this.detailShow1 = i;
    },
    toggle(i){
      this.detailShow1 = true;
      // console.log(i);
      this.detail = this.tabs[i].content;
    },
    announceList(page) {
        this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/announcement/listAnnouncement',
          params: {
            pageNumber: page
          }
        }).then(function(res) {
          let data = res.data;
          if (data.ERRORCODE == 0) {
              console.log(data);
              let list = data.RESULT.list;
                  this.tabs = list;
                  for (var i = 0; i < this.tabs.length; i++) {
                    this.tabs[i].updateTime = host.basic.formatDate(this.tabs[i].updateTime,2)
                  }
          } else {
            // this.$message.error(data.RESULT);
             MessageBox({
              title: '提示',
              message: data.RESULT
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
  .notice{
    width: 100%;
    float: left;
    .cancel-head{
      display: flex;
         font-size: .3rem;
         height: .8rem;
         border-bottom: 1px solid #ddd;
         align-items:center;
         color: #333333;
         .fa{
            margin-left:.15rem;
         }

         .title{
            margin-left: 2.95rem;
         }
    }
    .notice-select{
      li{
        height:1rem;
        font-size: .3rem;
        border-bottom: 1px solid #ddd;
        display: flex;
          padding-left: .4rem;
         padding-top: .2rem;
        .notice-select-left{
          display: flex;
          width: 90%;
          height: 1.2rem;
          // justify-content:center;
          flex-direction:column;

          .notice-select-left-title{
            font-size: .36rem;
            color: #333333;
            margin-bottom: .1rem;
          }
          .notice-select-left-time{
            color: #999999;
            font-size: .3rem;
            margin-top: .1rem;
          }
        }
        .notice-select-right{
          width: 10%;
           i{
            display: inline-block;
            line-height: .8rem;
            float: right;
            margin-right: .3rem;
            font-size: .56rem;
           }

        }
      }
    }
  }
   .active-tell1{
      position: fixed;
      float: left;
      width: 7.5rem;
      height: 13.34rem;
      // background-color: red;
      z-index: 1000;
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
      .slide-fade-enter-active{
        transition: all .5s ease;
      }
      .slide-fade-leave-active{
        transition: all .3s ease;

      }
      .slide-fade-enter, .slide-fade-leave-active{
        transform: translateX(100%)
      }
</style>
