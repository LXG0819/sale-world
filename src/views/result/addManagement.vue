<template>
<div class="Newadd_source">
    <div class="navigation_crumbs">
        菜单管理<span>/</span><span>新增菜单</span>
    </div>
  <a-form :form="form" @submit="SourceForm" class="menus_from" >
    <a-form-item label="菜单编号" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }"  >
      <a-input name="menusNumbering"
        v-decorator="[ 'menusNumbering',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="菜单名称" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="menusDesignation"
        v-decorator="[ 'menusDesignation',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="显示顺序" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="menusOrder"
        v-decorator="[ 'menusOrder',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="上级菜单" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }">
      <a-input name="menusSuperior"
        v-decorator="[ 'menusSuperior',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item  label="是否为默认菜单"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['caseDefaultMenu']" name="caseDefaultMenu">
        <a-radio value="a">是</a-radio>
        <a-radio value="b">否</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item  label="状态"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['status']" name="status">
        <a-radio value="a">启用</a-radio>
        <a-radio value="b">停用</a-radio>
      </a-radio-group>
    </a-form-item>
  
    <a-form-item
      :wrapper-col="{ span: 8, offset: 15 }" class="menus_footer">
      <a-button type="primary" html-type="submit" class="footer_push">
        保存并推送
      </a-button>
      <a-button type="primary" html-type="submit" class="footer_submit">
        提交
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
        
    }
    .footer_submit{
        background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
        border-radius: 4px;
        height: 40px;
        line-height: 40px;
        
        width:104px;
        color: #fff;
        text-align: center;
        margin-left: 22px;
    }

}
</style>



<script>








export default {
   components: {
    
  },
  data () {
    return {
      form :this.$form.createForm(this),

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
    SouLabel (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    //标签搜索
    onSouLabelSearch (value) {
      console.log(value)
    },

  }
};
</script>


