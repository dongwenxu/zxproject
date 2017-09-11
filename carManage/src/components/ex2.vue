<template>
  <div id="ex2">

   <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" :inline="true" >
     <el-form-item label="销量排序" prop="num" >
       <el-input type="number" v-model="ruleForm2.num" auto-complete="off" ></el-input>
     </el-form-item>
      <el-form-item label="联系人" prop="contacts">
       <el-input type="text" v-model="ruleForm2.contacts" auto-complete="off"></el-input>
     </el-form-item><br>
     <el-form-item label="车辆名称" prop="name">
       <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="联系人电话" prop="contactsPhone">
       <el-input type="number" v-model="ruleForm2.contactsPhone" auto-complete="off"></el-input>
     </el-form-item><br>
     <el-form-item label="价格" prop="price">
       <el-input type="text" v-model="ruleForm2.price" auto-complete="off"></el-input>
     </el-form-item><br>
     <el-form-item label="产品介绍" prop="detail">
       <el-input type="textarea" v-model="ruleForm2.detail" :maxlength="200" style="width:500px;"></el-input>
     </el-form-item></br>
     <el-form-item label="配置说明" prop="introduce">
       <el-input type="textarea" v-model="ruleForm2.introduce"  style="width:500px;"></el-input>
     </el-form-item>
   </el-form>
 <!--   <div class="main-page">
      <el-col style="font-size:16px; color:#666666;margin-bottom:15px;">主图图片</el-col>
      <el-upload
          action="sys/saveCarDetail"
          list-type="picture-card"
          :on-success="handleSuccess"
          :on-preview="handlePictureCardPreview"
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
   </div> -->

   <div style="margin-bottom: 20px;border:1px solid #e5e5e5;padding:15px 15px;margin-top: 20px;">
      <el-upload
          action="http://10.60.10.69:8080/haoya/sys/uploadFile"
          list-type="picture-card"
          :file-list="ruleForm2.fileList"
          :on-success="handleSuccess"
          :on-preview="handlePictureCardPreview"
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          <div slot="tip" style="margin-bottom:10px;margin-top:10px;padding-left:50px;" class="el-upload__tip">主图图片</div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
   </div>
   <div>
     <el-button type="primary" @click="saveMessage('ruleForm2')">保存</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
   </div>
  </div>
</template>

<script>
import host from '../config.js'

export default {
   data(){
      return{
         dialogVisible: false,
         dialogImageUrl: '',
         fileLength:'',
         ruleForm2: {
          num: '',
          contacts:'',
          contactsPhone:'',
          price:'',
          name: '',
          detail: '',
          introduce:'',
          fileList:[],
          fileList1:''
        },
        rules2: {
          contacts: [
            { required: true, message:'请输入联系人', trigger: 'blur' }
          ],
          name: [
            { required: true, message:'请输入车辆名称', trigger: 'blur' }
          ],
          contactsPhone: [
            { required: true, message:'请输入联系人电话', trigger: 'blur' }
          ],
          price: [
            { required: true, message:'请输入价格', trigger: 'blur' }
          ],
          detail: [
            { required: true,  message:'请输入产品简介', trigger: 'blur' },
            { min: 1, max: 200, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          introduce: [
            { required: true,  message:'请输入配置说明', trigger: 'blur' }
          ]
        }
      }
   },
   methods:{
       //图片限制
   beforeAvatarUpload(file,fileList) {

      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      // const isLt2M = file.size / 1024 / 1024 < 2;
      const isNum = this.fileLength < 6;
      // console.log(this.fileLength);
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
      }
      if (!isNum) {
        this.$message.error('上传图片数量不能超过 6张!');
      }
      return  isJPG || isPNG && isNum;
       // && isNum
    },
     // 上传图片处理回调
      handleRemove(file, fileList) {
        this.fileLength = fileList.length;
      },
      handlePictureCardPreview(file) {
         this.dialogImageUrl = file.url;
         this.dialogVisible = true;
      },
      handleSuccess(response,file,fileList){
        if(response.ERRORCODE == 0){
          file.uid = response.RESULT.id
          file.url = response.RESULT.picture
        }
        this.fileLength = fileList.length;
        if(fileList.length == 1){
          this.ruleForm2.fileList1 = fileList[0].uid;
        }
        if(fileList.length == 2){
          this.ruleForm2.fileList1 = fileList[0].uid + ',' + fileList[1].uid;
        }
        if(fileList.length == 3){
          this.ruleForm2.fileList1 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid;
        }
        if(fileList.length == 4){
          this.ruleForm2.fileList1 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid;
        }
        if(fileList.length == 5){
          this.ruleForm2.fileList1 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid;
        }
        if (fileList.length == 6) {
          this.ruleForm2.fileList1 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid + ',' + fileList[5].uid
          console.log(this.ruleForm2.fileList1);
        }
      },
      saveMessage(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$http({
              method: 'POST',
              url: host.basic.basicUrl + 'sys/saveCarDetail',
              params: {
                sort: this.ruleForm2.num,
                contacts: this.ruleForm2.contacts,
                carName: this.ruleForm2.name,
                telephone: this.ruleForm2.contactsPhone,
                price: this.ruleForm2.price,
                parameter: this.ruleForm2.introduce,
                presentation: this.ruleForm2.detail,
                fileIdList: this.ruleForm2.fileList1
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                this.$message.success('添加成功！');

              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
   }
}
</script>

<style lang='less'>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
   #ex2{
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
      .main-page{
         padding-left: 15px;
      }

   }
</style>

<!-- <li><router-link to='/second'>f1d12dd</router-link></li> -->
