const basic = {
     // basicUrl : 'http://manage.test.meidewuye.com/wuye-manage',
     // basicUrl : 'http://10.60.10.77:8501',
     basicUrl : '/serverUrl',
     basicApi : '/serverApi',
     serverData: '/serverData/order',
     // basicUrl : 'http://tweb.shujuzhihui.cn',
     // basicApi : 'http://tweb.shujuzhihui.cn',
     // serverData : 'http://tweb.shujuzhihui.cn/order',
     // basicUrl : 'http://www.shujuzhihui.cn',
     // basicApi : 'http://www.shujuzhihui.cn',
     // serverData : 'http://www.shujuzhihui.cn/order',
     // basicUrl : 'http://10.60.10.77:8501',
     // basicApi : 'http://10.60.10.77:8501',
     // serverData : 'http://10.60.10.77:8501/order',

    // basicUrl : 'http://10.60.10.74:8081/wuye-manage',
    // basicUrl : 'http://10.60.20.12:8080/wuye-manage',
    formatDate(str,type) {
      var oDate = new Date(str), oYear = oDate.getFullYear(), oMonth = oDate.getMonth() + 1, oDay = oDate.getDate(), oHour = oDate.getHours();
      var oMin = oDate.getMinutes(), oSen = oDate.getSeconds(), oTime = oYear + '-' + oMonth + '-' + oDay;// 最后拼接时间
      oHour = oHour >= 10 ? oHour : '0'+oHour;
      oMin = oMin >= 10 ? oMin : '0'+oMin;
      oDay = oDay >= 10 ? oDay : '0'+oDay;
      if(type && type == 2){
        return oYear + '-' + oMonth + '-' + oDay + ' ' + oHour + ':' + oMin;
      }
      return oTime;
    },
    checkMobile(rule, value, callback){
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号码'));
      }
      callback();
    },
    checkNum(rule, value, callback){
      if (!/^[0-9]\d*$/.test(value)) {
        callback(new Error('请输入正整数'));
      }
      callback();
    },
    checkNum11(rule, value, callback){
      if (!/\S/.test(value)) {
        callback(new Error('请输入非零正整数'));
      }
      callback();
    },
    checkNum2(rule, value, callback){
      if (!/^[0-9]+(.[0-9]{0,2})?$/.test(value)) {
        callback(new Error('请输入正确的金额,最多2位小数'));
      }
      if (value > 100000) {
        callback(new Error('请不要输入过大的金额'));
      }
      callback();
    },
    checkStr(rule, value, callback){
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('请输入正确的字符,英文或数字'));
      }
      callback();
    },
    checkName(rule, value, callback){
      if (!/^[\u4E00-\u9FA5]{1,6}$/.test(value)) {
        callback(new Error('请输入正确的中文名字,1～6位'));
      }
      callback();
    },
    checkCard(rule, value, callback){
      if (!/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value)) {
        callback(new Error('请输入正确的身份证号码'));
      }
      callback();
    },
    json(rule, value, callback){
      // console.log(value);
        try {
            JSON.parse(value);
        } catch (e) {
            callback(new Error('请输入正确的json格式'));
        }
        callback();
    },
   checkUrl(rule, value, callback){
      if (!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/.test(value)) {
        callback(new Error('请输入正确的URL'));
      }
      callback();
    },
    clone(myObj){
      if(typeof(myObj) != 'object') return myObj;
      if(myObj == null) return myObj;
      var myNewObj = new Object();
      for(var i in myObj){
        myNewObj[i] = this.clone(myObj[i]);
      }
      return myNewObj;
    },

}

export default {
  basic
};
