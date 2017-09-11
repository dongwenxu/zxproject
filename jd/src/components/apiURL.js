const DomainName = '/serverUrl' //http://10.60.10.77:8601 http://tapi.shujuzhihui.cn:18601 /serverUrl
// const DomainName = 'http://api.shujuzhihui.cn' //http://10.60.10.77:8601 http://tapi.shujuzhihui.cn:18601
// const DomainName = 'http://tapi.shujuzhihui.cn'
// const DomainName = 'http://10.60.10.77:8601'

//京东
export const socialSecurity = {

  login : DomainName + '/api/invokingApi/64158834-be15-47ec-b95f-80dd8f24c3e1',//登录接口
  sendMes : DomainName + '/api/invokingApi/05978746-858c-4048-9de9-a5cd16f6ce4f', //发送短信验证
  checkMes : DomainName + '/api/invokingApi/4e38a3b8-8002-46db-a40a-a1c2840da6fe', //短信验证
  getPictureVC : DomainName + '/api/invokingApi/96b84cbf-9654-40f3-954b-ede03eec3da6',//获取图片验证码接口
  pictureVC : DomainName + '/api/invokingApi/aaebdee0-a0e7-435b-bb13-b05e83436b6a',//图片验证码验证接口
  getData : DomainName + '/api/invokingApi/0a26d991-67ff-4245-a7fb-fc8a1e4b38db',//数据获取接口

}
//socialSecurity.channelNumber
//socialSecurity.licensingInformation
//socialSecurity.login
//socialSecurity.getPictureVC
//socialSecurity.pictureVC
//socialSecurity.getData