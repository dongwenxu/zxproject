// const DomainName = '/serverUrl' //http://10.60.10.77:8601 http://tapi.shujuzhihui.cn:18601 /serverUrl
// const DomainName = 'http://api.shujuzhihui.cn' //http://10.60.10.77:8601 http://tapi.shujuzhihui.cn:18601
const DomainName = 'http://tapi.shujuzhihui.cn'
// const DomainName = 'http://10.60.10.77:8601'

//社保
export const socialSecurity = {

  taskType : DomainName + '/api/invokingApi/7B0DF98ACFDA277F9212A0F2C902C911',//任务类型查询接口
  getPdata : DomainName + '/api/invokingApi/c6912984f905485b95381cf3dfebba47', //获取爬取数据
  login : DomainName + '/api/invokingApi/F868C9EA9441FFCE1FA933219E0726A6', //登陆接口
  getPictureVC : DomainName + '/api/invokingApi/c20741e9ecca41f1ad62e077696f5988',//获取图片验证码接口

  regisPhoneVC:  DomainName + '/api/invokingApi/63d9694a535449b38340983516a7da06', //注册手机号验证
  regisMesVC:  DomainName + '/api/invokingApi/e320205670ec411bb415d6b388a7b5cf',//注册短信验证
  regisBasicMesVC:  DomainName + '/api/invokingApi/16ab1207679d48fcb4c4f2fcd9e289f4', //注册信息验证

  resetAccountVC:  DomainName + '/api/invokingApi/57a89277fca4417caf04a161727f2c6c', //重置密码验证账号
  resetBasicMesVC:  DomainName + '/api/invokingApi/ecc58fd2c7e443c9a3f8c7518a6e0697', //重置密码验证身份信息
  resetPasVC:  DomainName + '/api/invokingApi/b28b5c445a244f1f99c32b534c1eaeb3', //重置密码
  resetMesVC:  DomainName + '/api/invokingApi/d1fd3455976c4cba9e5c11e08c7437e0', //重置密码发送短信验证码


}
//socialSecurity.channelNumber
//socialSecurity.licensingInformation
//socialSecurity.login
//socialSecurity.getPictureVC
//socialSecurity.pictureVC
//socialSecurity.getData