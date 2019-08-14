<template>
<div class="Newadd_source">
    <div class="navigation_crumbs">
        菜单管理<span>/</span><span>新增菜单</span>
    </div>
  <a-form :form="form" @submit="SourceForm" class="menus_from" >
    <a-form-item label="试卷名称" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
      <a-input  v-decorator="[ 'menusNumbering']"  placeholder="请输入试卷名称"/>
    </a-form-item>
    <a-form-item label="考试时长" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入考试时长" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="总分" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入总分" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="及格线" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入及格线" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="可考次数" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
        <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
             placeholder="请输入可考次数" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="分类" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-select v-decorator="[ 'menusSuperior', {rules: [{ required: true, message: 'Please select your gender!' }]} ]"
        placeholder="请选择分类"  :style="{width: '65%'}"  @change="handleSelectChange" >
            <a-select-option  v-for="(item,index) in queryData" :key="index" :value="item.typeId">
                {{item.typeName}}
            </a-select-option>
      </a-select>
      <a-button class="add_classify fr" type="primary"><span><a-icon type="plus" /></span>新建分类</a-button>
    </a-form-item>
    <a-form-item label="学分" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入学分" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="作者" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
      <a-input  v-decorator="[ 'menusNumbering']"  placeholder="请输入作者"/>
    </a-form-item>
    <a-form-item label="导入试卷" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
            <a-upload action="http://localhost:8000/Exammanagement/addExammanagement" :multiple="true" :fileList="fileList" @change="handleChange" >
                <a-button :style="{width: '100%'}">
                请选择文件
                </a-button>
            </a-upload>
    </a-form-item>

    <a-form-item
      :wrapper-col="{ span: 12, offset: 12 }" class="menus_footer">
      <a-button type="primary" html-type="submit" class="footer_submit">
        保存
      </a-button>
      <a-button type="primary" html-type="submit" class="footer_submit">
        预览
      </a-button>
      <a-button type="primary" html-type="submit" class="footer_push" @click="CancelClick">
        取消
      </a-button>
      
    </a-form-item>
  </a-form>
</div>
</template>
<style lang="less" scoped>
.fr{float: right;}
.Newadd_source{min-width: 960px;width: 50%;background: #fff;margin: 0 auto; } 
.menus_from{
    padding: 0 20px;
}
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
.source_click{
      width: 144px;
      height: 100%;
      z-index: 99;
      top: 0;
      left: 0;
      position: absolute;
      background: red;
    }
.menus_footer{
    padding:20px 24px;
    border-top:1px solid #e8e8e8;
    margin: 0;
    .footer_push{
        height: 40px;
        line-height: 40px;
        width: 104px;
        text-align: center;
        color: #3A8EDC;
        border: 1px solid #3A8EDC;
        border-radius: 4px;
        background: #fff;
        margin-left: 22px;
        
    }
    .footer_submit{
        background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
        border-radius: 4px;
        margin-left: 22px;
        height: 40px;
        line-height: 40px;
        width:104px;
        color: #fff;
        text-align: center;
      
    }

}
.add_classify{
      text-align: center;
      width: 110px;
      height: 30px;
      margin:4px 0px ;
      line-height: 30px;
      border: 1px solid #3A8EDC;
      border-radius: 4px;
      font-size: 16px;
      color: rgba(0,0,0,0.65);
      background: #fff;
      
}




</style>



<script>

import { queryExamTypeList,queryExamDetailInfo } from '../../api/DocumentsPost' //goldIdeaDelete,goldIdeaTop,goldIdeaStatus
import { months } from 'moment';
import { debuglog } from 'util';

export default {
   components: {
    
  },
  data () {
    return {
      form :this.$form.createForm(this),
      formLayout: 'horizontal',
      queryData:[],//状态下拉数据
      menuName:'',//菜单名称
      orderNum:'',//显示顺序
      parentId:'',//上级菜单
      defaultId:'',//默认菜单
      statusRad:'',//状态
      modifier:'liangxingfu',//用户ID
      appId:'',//应用ID
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      }],//



    };
  },
  created() {
    
  },
  methods: {
    //表单
    SourceForm (e) {
      console.log(e)
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let param = {
            menuName: values.menuName,
            orderNum: values.orderNum,
            parentId: values.menusSuperior == '0' ? '' : values.menusSuperior,
            status: values.status,
            defaultId: values.caseDefaultMenu,
            modifier: this.username,
            appId:this.appId,//应用ID
          }
          console.log(param)
          //this.addMenu(param)
          console.log('Received values of form: ', values);
        }
      });
    },
    //上级菜单下拉框
    handleSelectChange (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    //显示顺序
    orderNumChange(value) {
        console.log('changed', value);
    },
    //上传文件
    handleChange(info) {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        //    Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. read from response and show file link
        fileList = fileList.map((file) => {
            if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
            }
            return file;
        });

        this.fileList = fileList
    },
    //取消
    CancelClick(){
      this.$router.go(-1)
    },
    //请求下拉菜单列表
      queryExamDetailInfo(){
        var param = {
            appId:this.appId,//应用ID
        } 
        queryExamDetailInfo(param).then((res)=>{
            if(res.code == 0){
                this.menusSuperiorData =res.result
            }else{
                this.$message.error('没有获取到菜单列表')
               
            }
        }).catch((err)=>{
                
        })
     },
     //请求新增菜单列表
      queryExamTypeList(){
          var param = {
           
        } 
        queryExamTypeList(param).then((res)=>{
            if(res.code == 0){
                this.queryData =res.result
            }else{
              this.$message.error('请求分类列表失败')
              this.$message.error(res.mag); 
              
            }
        }).catch((err)=>{
                
        })
     },


  },
  mounted(){
        this.queryExamTypeList()
        this.queryExamDetailInfo()
      
        
        
    }
};
</script>