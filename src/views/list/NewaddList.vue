<template>
<div class="Newadd_source">
  <div class="navigation_crumbs">
      素材列表<span>/</span><span>新增素材</span>
    </div>
  <a-form :form="form" @submit="SourceForm"  >
    <a-form-item label="素材编号" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
      <a-input name="SouNumbering"
        v-decorator="[ 'SouNumbering',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="素材名称" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="SouName"
        v-decorator="[ 'SouName',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="总时长" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="SouDuration"
        v-decorator="[ 'SouDuration',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="学分" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="SouCredit"
        v-decorator="[ 'SouCredit',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="标签" :labelCol="{ md: {span: 3}, sm: {span: 3} }" :wrapperCol="{ md: {span: 19}, sm: {span: 19} }" >
      <a-select name="SouLabel" v-decorator="[ 'SouLabel', {rules: [{ required: true, message: 'Please select your gender!' }] } ]"
        placeholder="请选择" @change="SouLabelClick(value)">
       <!--  <a-select-option value="search">
          <a-input-search placeholder="input search text" @search="onSouLabelSearch"/>
        </a-select-option> -->
        <a-select-option value="femal">
          female
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item  label="素材设置"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['SouSeeting']" name="SouSeeting">
        <a-radio value="99">无</a-radio>
        <a-radio value="a">置顶</a-radio>
        <a-radio value="b">精华</a-radio>
      </a-radio-group>
    </a-form-item>
    <sou-examination></sou-examination>
    <a-form-item label="封面图" :labelCol="{md: {span:3}, sm: {span: 3}}" name="SouCoverPicture"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
        <div class="clearfix">
          <a-modal :visible="previewVisible" :footer="null" @cancel="SouCoverPicture" class="SouCoverPictureImg">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
          <a-upload
            class="SouCoverPictureUpload"
            action="##" 
            listType="picture-card"
            :fileList="fileList"
            @customRequest="customRequestClick"
            @preview="SouCoverPicturePreview"
            @change="SouCoverPictureChange"
          >
          <div class="source_click"></div>
            <div v-if="fileList.length < 3">
              <a-icon type="plus"  class="upload_icon"/>
              <div class="ant-upload-text">上传图片</div>
              <div class="upload_type"><span>支持扩展名:png .jpg...</span><span> 大小:长320 宽300</span></div>
            </div>
          </a-upload>
        </div>
    </a-form-item>
    <a-form-item label="摘要" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 19}, sm: {span: 19} }">
      <a-textarea name="SouSummary" :rows="4"
        v-decorator="[ 'SouSummary',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
     
    </a-form-item>
    <a-form-item label="作者" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="SouAuthor"
        v-decorator="[ 'SouAuthor',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item  label="素材设置"  :labelCol="{ md: {span: 3}, sm: {span: 3} }" :wrapperCol="{ md: {span: 19}, sm: {span: 19} }">
      <a-radio-group v-decorator="['SouUploadSeeting']"  name="SouUploadSeeting" @change="onSouUploadSeeting">
        <a-radio value="z">图文</a-radio>
        <a-radio value="x" >文字</a-radio>
        <a-radio value="c" >视频</a-radio>
      </a-radio-group>
      <a-textarea name="SouGraphic" :rows="8" v-show="UploadDATA == 'z'"
         v-decorator="[ 'SouGraphic',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
         placeholder="图文样式"/>
      <a-textarea name="SouText" :rows="8" v-show="UploadDATA == 'x'"
         v-decorator="[ 'SouText',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
         placeholder="文字样式"/>
         
        <a-upload name="avatar" listType="picture-card" class="avatar-uploader" :showUploadList="false" action="" 
            :beforeUpload="beforeUpload" @change="Uploadvideo"  >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
        
        
    </a-form-item>
  </a-form>
  <div class="footer_botton">
    <a-button type="primary" class="botton">预览</a-button>
    <a-button type="primary" class="botton">保存并推送</a-button>
    <a-button type="primary" class="botton">保存</a-button>
  </div>
</div>
</template>
<style lang="less" scoped>
.Newadd_source{min-width: 960px;width: 50%;background: #fff;margin: 0 auto;}
.Newadd_source .ant-form{
  padding-top: 24px;
  font-size: 14px;
  color: rgba(0,0,0,0.65);
}
  .SouCoverPictureUpload{
   color: rgba(0,0,0,0.65);
    .upload_icon{
      width: 24px;
      height: 24px;
    }
    .ant-upload-text{
      font-size: 14px;
    }
    .upload_type{
      font-size: 12px;
      color: rgba(0,0,0,0.35);
    }
    
  }
.footer_botton{
  padding: 20px 60px;
  color: #FFFFFF;
  font-size: 16px;
  overflow: hidden;
  .botton{
    width: 104px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
    border-radius: 4px;
    margin-left: 22px;
    float: right;
  }
  
}
</style>



<script>


import SouExamination from './NewaddList/SouExamination'  //关联试卷



function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}



export default {
   components: {
    souExamination:SouExamination,
  },
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      previewVisible: false,//上传
      previewImage: '',
      UploadDATA:'z',//上传样式
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],//上传封面图
      loading: false,
      imageUrl: '',//上传视频

    };
  },
  methods: {
    //表单
    SourceForm (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    //标签
    SouLabelClick (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    
    //上传封面图
    SouCoverPicture () {
      this.previewVisible = false
    },
    SouCoverPicturePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
      console.log(file)
    },
    SouCoverPictureChange ({ fileList }) {
      this.fileList = fileList
      console.log(fileList)
    },
    customRequestClick(){
      console.log('123')
    },
    
    //上传素材样式
    onSouUploadSeeting(e) {
      console.log('radio checked', e.target.value)
        this.UploadDATA =e.target.value
    },
    //上传视频
    Uploadvideo(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJPG && isLt2M
    },

  
    
  }
};
</script>


