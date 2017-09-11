<template>
  <div class="index">
    <el-row>
      <el-date-picker
      v-model="selectDate"
      type="date"
      placeholder="选择日期"
      @change = "dateChange"
      :picker-options="pickerOptions0">
    </el-date-picker>
    </el-row>
    <el-row class="table">
      <el-table :data="tableData" border style="width: 100%" v-loading.body="loading">
         <el-table-column
          prop="sort"
          label="销量排序"
          align="center">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="日期"
          align="center">
        </el-table-column>
        <el-table-column
          prop="carName"
          label="名称"
          align="center">
        </el-table-column>
        <el-table-column
          prop="price"
          align="center"
          label="价格/万">
        </el-table-column>
         <el-table-column
          prop="presentation"
          align="center"
          label="产品介绍">
        </el-table-column>
         <el-table-column
          prop="contacts"
          align="center"
          label="联系人">
        </el-table-column>
         <el-table-column
          prop="telephone"
          align="center"
          label="联系电话">
        </el-table-column>
         <el-table-column
         align="center"
          label="操作">
          <template scope="scope">
          <el-button
            size="small"
            type="info"
            @click="handleCheck(scope.$index, scope.row)">详情</el-button>
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button  size="small" type="danger" @click="handleOff(scope.$index, scope.row)" v-if="scope.row.isDel == 1">下架</el-button>
          <el-button size="small" type="success" @click="handleAdd(scope.$index, scope.row)" v-if="scope.row.isDel == 0">上架</el-button>
        </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!-- 分页 -->
      <div class="block bottom">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="current"
          layout="total,prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>

      <!-- 详情 -->
      <el-dialog title="" v-model="dialogVisible" >
           <el-form :model="ruleForm3"  label-width="100px" :inline="true" >
               <el-form-item label="销量排序" prop="num" >
                 <el-input type="number" v-model="ruleForm3.num" auto-complete="off" :disabled="true"></el-input>
               </el-form-item>
                <el-form-item label="联系人" prop="contacts">
                 <el-input type="text" v-model="ruleForm3.contacts" auto-complete="off" :disabled="true"></el-input>
               </el-form-item><br>
               <el-form-item label="车辆名称" prop="name">
                 <el-input type="text" v-model="ruleForm3.name" auto-complete="off" :disabled="true"></el-input>
               </el-form-item>
               <el-form-item label="联系人电话" prop="contactsPhone">
                 <el-input type="number" v-model="ruleForm3.contactsPhone" auto-complete="off" :disabled="true"></el-input>
               </el-form-item><br>
               <el-form-item label="价格/万" prop="price">
                 <el-input type="text" v-model="ruleForm3.price" auto-complete="off" :disabled="true"></el-input>
               </el-form-item><br>
               <el-form-item label="产品介绍" prop="detail">
                 <el-input type="textarea" v-model="ruleForm3.detail" :maxlength="200" style="width:500px;" :disabled="true"></el-input>
               </el-form-item></br>
               <el-form-item label="配置说明" prop="introduce">
                 <el-input type="textarea" v-model="ruleForm3.introduce"  style="width:500px;" :disabled="true"></el-input>
               </el-form-item>
             </el-form>
             <div style="margin-bottom: 20px;border:1px solid #e5e5e5;padding:15px 15px;margin-top: 20px;">
                <img v-for="(fileList,index) in fileList" :src="fileList.picture" alt="" class="img-responsive" @click="scale(index)">
            </div>
      </el-dialog>

<!-- 修改 -->
      <el-dialog title="" v-model="dialogVisibleAdd" >
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
               <el-form-item label="价格/万" prop="price">
                 <el-input type="text" v-model="ruleForm2.price" auto-complete="off"></el-input>
               </el-form-item><br>
               <el-form-item label="产品介绍" prop="detail">
                 <el-input type="textarea" v-model="ruleForm2.detail" :maxlength="200" style="width:500px;"></el-input>
               </el-form-item></br>
               <el-form-item label="配置说明" prop="introduce">
                 <el-input type="textarea" v-model="ruleForm2.introduce"  style="width:500px;"></el-input>
               </el-form-item>
             </el-form>
             <div style="margin-bottom: 20px;border:1px solid #e5e5e5;padding:15px 15px;margin-top: 20px;">
              <el-upload
                  action="http://10.60.10.69:8080/haoya/sys/uploadFile"
                  list-type="picture-card"
                  :file-list="fileList1"
                  :on-success="handleSuccess"
                  :on-preview="handlePictureCardPreview"
                  :before-upload="beforeAvatarUpload"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
                </el-upload>
            </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleAdd = false">取 消</el-button>
            <el-button type="primary" @click="editeOk">确 定</el-button>
          </span>
      </el-dialog>
      <!-- 修改放大图片 -->
       <el-dialog v-model="dialogVisible1" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <!-- 详情放大图片 -->
        <el-dialog v-model="dialogVisible2" size="tiny">
          <img width="100%" :src="dialogImageUrl2" alt="">
        </el-dialog>
  </div>
</template>

<script>
import host from '../config.js'
export default {
  name: 'index',

  data () {
    return {
      pickerOptions0: {
        disabledDate(time) {
          // return time.getTime() >= Date.now() - 8.64e7;
        }
      },
      selectDate:"",
      tableData: [],
      date:'',
      files:[],
      total:4,
      current:1,
      loading:true,
      dialogVisible: false,
      dialogVisibleAdd:false,
      dialogImageUrl: '',
      dialogVisible1: false,
      dialogVisible2: false,
      dialogImageUrl2:'',
      fileList1:[],
      fileLength:'',
      fileList11:'',
      carId:'',
        fileList: [],
        ruleForm2: {
          num: '',
          contacts:'',
          contactsPhone:'',
          price:'',
          name: '',
          detail: '',
          introduce:'',
        },
        ruleForm3: {
          num: '',
          contacts:'',
          contactsPhone:'',
          price:'',
          name: '',
          detail: '',
          introduce:'',
        },
        rules2: {
          num: [
            { required: true, message:'请输入销量排序', trigger: 'blur' }
          ],
          name: [
            { required: true, message:'请输入车辆名称', trigger: 'blur' }
          ],
          detail: [
            { required: true,  message:'请输入产品简介', trigger: 'blur' },
            { min: 1, max: 200, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          introduce: [
            { required: true,  message:'请输入配置说明', trigger: 'blur' }
          ],
          contacts: [
            { required: true,  message:'请输入联系人', trigger: 'blur' }
          ],
          price: [
            { required: true,  message:'请输入价格', trigger: 'blur' }
          ],
          contactsPhone:[
            { required: true,  message:'请输入联系人电话', trigger: 'blur' }
          ]
        }
    }
  },
  mounted(){
    this.getIps(1);
  },
  methods: {
    // 请求列表
    getIps(page,date) {
      this.$http({
        method: 'POST',
        url: host.basic.basicUrl + '/sys/sysShowCar',
        params: {
          pageNumber: page,
          createTime: date
        }
      }).then(function(res) {
        let data = res.data;
        this.tableData = data.RESULT.content;
        this.total = data.RESULT.totalElements;
        this.loading = false

      }, function(error) {
        this.$message.error('数据获取失败,请稍后再试');
        this.loading = false
      })
    },
    dateChange(date){
      console.log(date);
      this.date = date;
      this.$http({
        method: 'POST',
        url:  host.basic.basicUrl + '/sys/sysShowCar',
        params: {
          pageNumber:1,
          createTime: date
        }
      }).then(function(res) {
        let data = res.data;
        if(data.ERRORCODE == 0){
          this.getIps(this.current,this.date);
        }else{
          this.$message.error(data.RESULT);
        }

      }, function(error) {
        this.$message.error('数据获取失败,请稍后再试');
      })

    },
    handleCheck(index,row){
      console.log(index, row);
      this.dialogVisible = true;
      this.ruleForm3.num = row.sort;
      this.ruleForm3.contacts = row.contacts;
      this.ruleForm3.contactsPhone = row.telephone;
      this.ruleForm3.price = row.price ;
      this.ruleForm3.name = row.carName;
      this.ruleForm3.detail = row.presentation;
      this.ruleForm3.introduce = row.parameter;
      this.fileList = row.files;

    },
    handleEdit(index,row){
      console.log(index, row);
      this.fileList1 = [];
      this.dialogVisibleAdd = true;
      this.ruleForm2.num = row.sort;
      this.ruleForm2.contacts = row.contacts;
      this.ruleForm2.contactsPhone = row.telephone;
      this.ruleForm2.price = row.price;
      this.ruleForm2.name = row.carName;
      this.ruleForm2.detail = row.presentation;
      this.ruleForm2.introduce = row.parameter;
      this.carId = row.carId;
      if (row.files.length > 0) {
        for (var i = 0; i < row.files.length; i++) {
          let obj = {
            url: '',
            uid: ''
          };
          this.fileList1.push(obj);
          this.fileList1[i].url = row.files[i].picture;
          this.fileList1[i].uid = row.files[i].id;
        }
        this.fileLength = this.fileList1.length;
      }

    },
    editeOk(){
      console.log(this.fileList1);
      this.$http({
        method: 'POST',
        url: host.basic.basicUrl +  '/sys/updateCar',
        params: {
          carId:this.carId,
          sort: this.ruleForm2.num,
          contacts: this.ruleForm2.contacts,
          carName: this.ruleForm2.name,
          telephone: this.ruleForm2.contactsPhone,
          price: this.ruleForm2.price,
          parameter: this.ruleForm2.introduce,
          presentation: this.ruleForm2.detail,
          fileIdList: this.fileList11
        }
      }).then(function(res) {
        let data = res.data;
        if(data.ERRORCODE == 0){
          this.$message.success('修改成功');
          this.dialogVisibleAdd = false;
          this.getIps(this.current);
        }else{
          this.$message.error(data.RESULT);
        }

      }, function(error) {
        this.$message.error('数据获取失败,请稍后再试');
      })


    },
    handleOff(index,row){
       this.$http({
        method: 'POST',
        url: host.basic.basicUrl + '/sys/updateSoldOut',
        params: {
          carId:row.carId,
        }
      }).then(function(res) {
        let data = res.data;
        if(data.ERRORCODE == 0){
          this.$message.success('下架成功！');
          this.getIps(this.current);
        }else{
          this.$message.error(data.RESULT);
        }
      }, function(error) {
        this.$message.error('数据获取失败,请稍后再试');
      })
    },
    handleAdd(index,row){
      this.$http({
        method: 'POST',
        url: host.basic.basicUrl + '/sys/updatePutAway',
        params: {
          carId:row.carId,
        }
      }).then(function(res) {
        let data = res.data;
        if(data.ERRORCODE == 0){
          this.$message.success('上架成功！');
          this.getIps(this.current);
        }else{
          this.$message.error(data.RESULT);
        }
      }, function(error) {
        this.$message.error('数据获取失败,请稍后再试');
      })
    },
    // 跳转页
    handleSizeChange(val) {
      this.loading = true;
      this.getIps(val,this.date);
    },
    // 点击页
    handleCurrentChange(val) {
      this.loading = true;
      this.getIps(val,this.date);
      this.current = val;
    },
         //图片限制
    beforeAvatarUpload(file,fileList) {
      console.log(this.fileList1);
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      // const isLt2M = file.size / 1024 / 1024 < 2;
      const isNum = this.fileLength < 6;
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
      }
      // if (!isLt2M) {
      //   this.$message.error('上传图片大小不能超过 2MB!');
      // }
      if (!isNum) {
        this.$message.error('上传图片数量不能超过 6张!');
      }
      return  isJPG || isPNG && isNum;
       // && isNum
    },
     // 上传图片处理回调
      handleRemove(file, fileList) {
        this.fileLength = fileList.length;
          if(fileList.length == 1){
          this.fileList11 = fileList[0].uid;
        }
        if(fileList.length == 2){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid;
        }
        if(fileList.length == 3){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid;
        }
        if(fileList.length == 4){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid;
        }
        if(fileList.length == 5){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid;
        }
        if (fileList.length == 6) {
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid + ',' + fileList[5].uid
        }

      },
      handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            // this.dialogVisible = false;
            this.dialogVisible1 = true;
      },
      handleSuccess(response,file,fileList){
        if(response.ERRORCODE == 0){
          file.uid = response.RESULT.id
          file.url = response.RESULT.picture
        }
        // this.fileLength = this.fileList1.length;
        if(fileList.length == 1){
          this.fileList11 = fileList[0].uid;
          // console.log(this.fileList11);
        }
        if(fileList.length == 2){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid;
        }
        if(fileList.length == 3){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid;
        }
        if(fileList.length == 4){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid;
        }
        if(fileList.length == 5){
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid;
        }
        if (fileList.length == 6) {
          this.fileList11 = fileList[0].uid + ',' + fileList[1].uid + ',' + fileList[2].uid + ',' + fileList[3].uid + ',' + fileList[4].uid + ',' + fileList[5].uid
          // console.log(this.fileList11);
        }
        this.fileLength = fileList.length;
      },
      scale(index){
        this.dialogVisible2 = true;
        this.dialogImageUrl2 = this.fileList[index].picture;
        console.log(index);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .index{
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    .table{
      margin-top: 15px;
    }
    .img-responsive {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 15px;
      height: auto;
      max-width: 30%;
      cursor: pointer;
    }
    .bottom{
      text-align: right;
      margin-top:20px;
    }
  }
.navList{
  display:flex;
  flex:1;
  height: 90%;
}
</style>
