<template>
<div class="Newadd_source">
    <div class="navigation_crumbs">
        菜单管理<span>/</span><span>新增菜单</span>
    </div>
  <a-form :form="form" @submit="SourceForm" class="menus_from" >
    <a-form-item label="菜单编号" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
      <a-input 
        v-decorator="[ 'menusNumbering']"
        placeholder="菜单编号默认生成" disabled
      />
    </a-form-item>
    <a-form-item label="菜单名称" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input  name="menuName"
        v-decorator="[ 'menuName',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入菜单名称" 
      />
    </a-form-item>
    <a-form-item label="显示顺序" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input-number :min="1"  v-decorator="[ 'orderNum',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入显示顺序" @change="orderNumChange"  :style="{width: '100%'}"  />
    </a-form-item>
    <a-form-item label="上级菜单" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-select v-decorator="[ 'menusSuperior', {rules: [{ required: true, message: 'Please select your gender!' }]} ]"
        placeholder="请选择上级菜单"  
        @change="handleSelectChange" >
        <a-select-option value='0'>
           无
        </a-select-option>
        <a-select-option  v-for="(item,index) in menusSuperiorData" :key="index" :value="item.menuId">
          {{item.menuName}}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item  label="是否为默认菜单"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['caseDefaultMenu',{initialValue:'Y'}]" >
        <a-radio value="Y" >是</a-radio>
        <a-radio value="N">否</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item  label="状态"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['status',{initialValue:'Y'}]"    >
        <a-radio value="Y">启用</a-radio>
        <a-radio value="N">停用</a-radio>
      </a-radio-group>
    </a-form-item>
  
    <a-form-item
      :wrapper-col="{ span: 8, offset: 15 }" class="menus_footer">
      <a-button type="primary" html-type="submit" class="footer_submit">
        提交
      </a-button>
      <a-button type="primary" html-type="submit" class="footer_push" @click="CancelClick">
        取消
      </a-button>
      
    </a-form-item>
  </a-form>
</div>
</template>
<style lang="less" scoped>
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
        height: 40px;
        line-height: 40px;
        width:104px;
        color: #fff;
        text-align: center;
      
    }

}
</style>



<script>

import { menuSpinner, } from '../../api/DocumentsPost' //goldIdeaDelete,goldIdeaTop,goldIdeaStatus
import { months } from 'moment';

export default {
   components: {
    
  },
  data () {
    return {
      form :this.$form.createForm(this),
      formLayout: 'horizontal',
      menusSuperiorData:[],//状态下拉数据
      menuName:'',//菜单名称
      orderNum:'',//显示顺序
      parentId:'',//上级菜单
      defaultId:'',//默认菜单
      statusRad:'',//状态
      modifier:'liangxingfu',//用户ID
      appId:''//应用ID



    };
  },
  created() {
    if (!this.$route.query.appId) {
      this.$message.error('没有获取到应用类型')
      this.CancelClick()
      return 
    }
    this.appId = this.$route.query.appId
    this.menuSpinner()
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
    //取消
    CancelClick(){
      this.$router.go(-1)
    },
    //请求下拉菜单列表
      menuSpinner(){
        var param = {
            appId:this.appId,//应用ID
        } 
        menuSpinner(param).then((res)=>{
            if(res.code == 0){
                this.menusSuperiorData =res.result
            }else{
                this.$message.error('没有获取到菜单列表')
                this.CancelClick()
            }
        }).catch((err)=>{
                
        })
     },
     //请求新增菜单列表
      addMenu(){
        addMenu(param).then((res)=>{
            if(res.code == 0){
                this.menusSuperiorData =res.result
            }else{
              this.$message.error('新增菜单列表失败')
              this.$message.error(res.mag); 
              
            }
        }).catch((err)=>{
                
        })
     },

  },
  mounted(){
        this.menuSpinner()
        
    }
};
</script>


