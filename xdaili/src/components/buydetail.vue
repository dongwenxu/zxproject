<template>
  <div class="buydetail" >
    <div class="cancel-head">
         <i class="fa fa-chevron-left" @click="hideDetail"></i>
         <div class="title">购买套餐</div>
      </div>
      <div class="buyForm">
         <div class="buyForm1">
           <div class="title">已选产品</div>
           <div class="con" @click="selectProduct">{{selectProduct1}}<i class="fa fa-angle-right icon" aria-hidden="true"></i></div>
         </div>
         <div class="buyForm1" v-show="timeType">
           <div class="title">选择类型</div>
           <div class="con" @click="selectType">{{selectType1}}<i class="fa fa-angle-right icon" aria-hidden="true"></i></div>
         </div>
          <div class="buyForm1" v-show="type">
           <div class="title">选择类型</div>
           <div class="con" @click="selectType2">{{selectType22}}<i class="fa fa-angle-right icon" aria-hidden="true"></i></div>
         </div>
         <p class="p1" v-show="type1">*标准版需要约15秒左右的拨号时间</p>
         <p class="p1" v-show="type2">*秒切版不需要拨号时间</p>
         <div class="buyForm1" v-show="hour">
           <div class="title">选择时长</div>
           <div class="con" @click="selectTime">{{selectTime1}}<i class="fa fa-angle-right icon" aria-hidden="true"></i></div>
         </div>
         <div class="buyForm1">
           <div class="title">每日提取</div>
           <div class="con con11">
                <i class="fa fa-minus " aria-hidden="true" @click="minus1"></i>
                <input type="number" v-model="num1" class="con-num-inp">
               <i class="fa fa-plus " aria-hidden="true" @click="add1"></i>
            </div>
         </div>
          <p class="p1" v-show="discount">*满100000条享受9折优惠，满500000条享受8折优惠</p>
          <div class="buyForm1">
           <div class="title">优惠券</div>
           <div class="con" @click="selectCoupon">{{selectCoupon1}}<i class="fa fa-angle-right icon" aria-hidden="true"></i></div>
         </div>
          <div class="buyForm1">
           <div class="title">需要支付</div>
           <div class="con conpay" >￥{{pay}}</div>
         </div>
          <div class="payList">
          <ul class="payType">
             <li @click="toggle(index)" v-for="(tab,index) in tabs" :class="{active:active===index}" >
                <!-- <div class="tab.imgSrc"><div> -->
                <img src="../assets/img/pay.png" height="50" width="50" alt="" class="imgPay">
                <div class="payType1">
                    <div :class="tab.imgSrc"></div>
                    <div class="titlePay">{{tab.type}}</div>
                </div>
           </li>
          </ul>
          <div class="payBut">
            <mt-button type="default">支付</mt-button>
          </div>
       </div>
       </div>

      <mt-popup v-model="popupVisible" position="bottom">
        <div class="bot-itenms" v-if="this.select == 1">
          <mt-picker :slots="slotsProduct"  @change="onProductChange"></mt-picker>
        </div>
         <div class="bot-itenms" v-if="this.select == 2">
          <mt-picker :slots="slotsType" @change="onTypeChange"></mt-picker>
        </div>
        <div class="bot-itenms" v-if="this.select == 3">
          <mt-picker :slots="slotsTime" @change="onTimeChange"></mt-picker>
        </div>
        <div class="bot-itenms" v-if="this.select == 4">
          <mt-picker :slots="slotsCoupon" @change="onCouponChange"></mt-picker>
        </div>
        <div class="bot-itenms" v-if="this.select == 5">
          <mt-picker :slots="slotsType2" @change="onType2Change"></mt-picker>
        </div>
      </mt-popup>
        <!-- <div>{{dataType}}</div> -->

  </div>
</template>

<script>
// import { Group,Selector } from 'vux'
import { Picker } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Radio } from 'mint-ui';
export default {
  name: 'buydetail',
  props: ['dataType'],
  watch: {
        dataType: {
          handler(curVal, oldVal) {　　　　　　　　　　　　
            console.log(curVal, oldVal)
            if(curVal == 0){
              this.slotsProduct[0].defaultIndex = 0;
            };
            if(curVal == 1){
              this.slotsProduct[0].defaultIndex = 1;
            };
            if(curVal == 2){
              this.slotsProduct[0].defaultIndex = 2;
            };　　
          },
          deep: true
        }
    },
  // components: {
  //   Selector,
  //   Group
  // },
  data () {
    return {
      active: 0,
      tabs: [{
        imgSrc: 'imgSrc1',
        type: '支付宝'
      }, {
        imgSrc: 'imgSrc2',
        type: '微信支付'
      },
      {
        imgSrc: 'imgSrc3',
        type: '余额支付'
      }],
      detailShow: true,
      popupVisible:false,
      timeType:true,
      discount:false,
      type:false,
      type1:false,
      type2:false,
      hour:true,
      phone:'',
      ver:'',
      newPasS:'',
      select:1,
      defaultValue:'',
      selectProduct1:'',
      selectType1:'',
      selectType22:'',
      selectTime1:'',
      num1:0,
      selectCoupon1:'',
      pay:0,
      payType:'',
      payOptions:[
      {
        label: '微信支付',
        value: '1'
      },
      {
        label: '支付宝',
        value: '2'
      },
      {
        label: '钱包余额',
        value: '3'
      }
      ],
      slotsProduct:[
        {
          flex: 1,
          values: ['优质代理', '独享动态', '动态混拨'],
          defaultIndex: 0,
          className: 'slotsProduct',
          textAlign: 'center'
        }
      ],
      slotsType:[
        {
          flex: 1,
          values: ['包时', '定量'],
          className: 'slotsType',
          textAlign: 'center'
        }
      ],
      slotsType2:[
        {
          flex: 1,
          values: ['标准', '秒切'],
          className: 'slotsType2',
          textAlign: 'center'
        }
      ],
      slotsTime:[
        {
          flex: 1,
          values: ['包天', '包月','包半年','包年'],
          className: 'slotsTime',
          textAlign: 'center'
        }
      ],
      slotsCoupon:[
        {
          flex: 1,
          values: ['5元'],
          className: 'slotsCoupon',
          textAlign: 'center'
        }
      ]
    }
  },
  methods:{
   hideDetail(){
      this.$emit('close',false);
   },
   selectProduct(){
      this.select = 1;
      this.popupVisible = true;
   },
   selectType(){
      this.select = 2;
      this.popupVisible = true;
   },
   selectType2(){
      this.select = 5;
      this.popupVisible = true;
   },
   selectTime(){
      this.select = 3;
      this.popupVisible = true;
   },
   selectCoupon(){
    this.select = 4;
    this.popupVisible = true;
   },
   onProductChange(index,values){
      this.selectProduct1 = values[0];
      if(this.selectProduct1 == '动态混拨'){
        this.type = false;
        this.timeType = false;
        this.discount = false;
        this.hour = false;
        this.type1 = false;
          this.type2 = false;
      }else if(this.selectProduct1 == '独享动态'){
        this.type = true;
        this.hour = false;
        this.timeType = false;
        this.discount = false;
        if(this.selectType22 == '标准'){
          this.type1 = true;
          this.type2 = false;
        }else if(this.selectType22 == '秒切'){
          this.type1 = false;
          this.type2 = true;
        }

      }else{
        this.type = false;
        this.type1 = false;
        this.type2 = false;
        this.timeType = true;
        this.discount = true;
        if(this.selectType1 == '定量'){
          this.hour = false;
        }else{
          this.hour = true;
        }

      };
   },
   onTypeChange(picker,values){
      this.selectType1 = values[0];
      if(this.selectType1 == '定量'){
        this.hour = false;
      }else{
        this.hour = true;
      }
   },
   onType2Change(picker,values){
      this.selectType22 = values[0];
      if(this.selectType22 == '标准'){
        this.type1 = true;
        this.type2 = false;
      }else{
        this.type2 = true;
        this.type1 = false;
      }
   },
   onTimeChange(picker,values){
      this.selectTime1 = values[0];
   },
    onCouponChange(picker,values){
      this.selectCoupon1 = values[0];
   },
   toggle(i){
      this.active = i;
   },
   // 优质代理增减
   add1(){
      if(this.selectProduct1 == '独享动态'){
        this.num1 += 1;
      }else if(this.selectProduct1 == '动态混拨'){
        this.num1 += 5;
      }else{
        this.num1 += 1000;
      }
   },
   minus1(){
      if(this.selectProduct1 == '独享动态'){
        this.num1 -= 1;
      }else if(this.selectProduct1 == '动态混拨'){
        this.num1 -= 5;

      }else{
        this.num1 -= 1000;
      }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  @fbg:#68C07F;
  .buydetail{
    width: 100%;
    float: left;
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
      .buyForm{
        // margin-top: .4rem;
        // padding-left: .15rem;
        // padding-right: .15rem;
        height: auto;
        .buyForm1{
          // font-size: .32rem;
          padding:0rem .3rem;
          // border-top:1px solid #ddd;
          border-bottom:1px solid #ddd;
          display: flex;
          align-items:center;
          height: 1rem;
          .title{
            flex:.3;
            line-height: .8rem;
            font-size: .36rem;
            // font-size: .26rem;
            color: #333333;
            // display: flex;
            //  align-items:center;
          }
          .con{
            flex:.7;
            height: .8rem;
            // border:1px solid #ddd;
            line-height: .8rem;
            text-align: right;
            font-size: .36rem;
            border-radius: .1rem;
            color: #999999;
            // display: flex;
            // align-items:center;
            .icon{
              float: right;
              padding-top: .15rem;
             padding-right: .15rem;
             margin-left: .1rem;
             // font-size: .28rem;
            }

            .con-num-inp{
              width: 30%;
              border:1px solid #ddd;
              text-align: center;
              margin-left: .15rem;
              margin-right: .15rem;
              height: .5rem;
            }
          }
          .conpay{
            color: 0.28rem;
            color: #ff831b;
            padding-right: .15rem;
          }
        }
      }
  }
.bot-itenms{
  width: 7.6rem !important;
}
.p1{
  font-size: .22rem;
  text-align: right;
  margin-top: .15rem;
  color: @fbg;
}
.payList{
  margin-bottom: .2rem;
  // margin-bottom: .9rem;
  height: 6rem;
  // float: left;
//   .mint-cell{
//   min-height: .7rem !important;
// }
  .payType{
    margin-top: .3rem;
    margin-left: .65rem;
    li{
      font-size: .36rem;
      color: #333333;
      width: 5.76rem;
      height: .88rem;
      border:1px solid #ddd;
      margin-bottom: .3rem;
      position: relative;
      .payType1{
        height: .88rem;
        display: flex;
        align-items:center;
        padding-left: .3rem;
        .titlePay{
          margin-left:.3rem;
        }
      }
      .imgPay{
        position: absolute;
        right: 0;
        top: 0;
        width: .5rem;
        height: .5rem;
        display: none;
      }
      .imgSrc1{
        width: .54rem;
        height: .54rem;
        background: url(../assets/img/zfb.png) no-repeat 0 0;
        background-size: 100% 100%;
      }
      .imgSrc2{
        width: .54rem;
        height: .54rem;
        background: url(../assets/img/wx.png) no-repeat 0 0;
        background-size: 100% 100%;
      }
      .imgSrc3{
        width: .54rem;
        height: .54rem;
        background: url(../assets/img/qi.png) no-repeat 0 0;
        background-size: 100% 100%;
      }
    }
    .active img{
      display: block;
    }
  }
}
.payBut{
  display: flex;
  justify-content:center;
  button{
    width:6.15rem;
    height: .92rem;
    color: #fff;
    // background-color: #26A69A;
    font-size: .36rem;
    background: url(../assets/img/payBt.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
}

.con11{
      display: flex;
      align-items:center;
      justify-content:center;
    }
</style>
