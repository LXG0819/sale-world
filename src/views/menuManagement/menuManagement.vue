<template>
<Page-view>
<div class="menu_management">
    <div class="navigation_crumbs">
        移动端菜单管理<span>/</span><span>销傲天下</span>
    </div>
    <div class="screen_form"  >
        <a-row>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }">
                <span class="from_nameSpan">菜单名称:</span> <a-input class="from_input" placeholder="请输入"/>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <span class="from_nameSpan">状态:</span>
                <a-dropdown>
                    <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                    <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                    <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px" class="from_input">
                    <span class="fl"> 请选择 </span><a-icon type="down" class="fr" />
                    </a-button>
                </a-dropdown>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <a-button type="primary" class="fome_seach fl" >搜索</a-button>
                <a-button type="primary" class="menu_Reset fl" >重置</a-button>
            </a-col>
        </a-row>
    </div>
    <div class="seach_Data">共搜索到4条数据</div>
    <div class="Add_delete">
        <div class="add_data fl" @click="menuManagementadd()"><span><a-icon type="plus" /></span> 新增</div>
        <div class="delete_data fl" @click="menuDeleteConfirm"><span><a-icon type="delete" /></span> 批量删除</div>
        
    </div>
    <div class="select_list">
        <span><a-icon type="info-circle" /></span>已选择<span>4</span>项
    </div>
    <a-table :dataSource="data"  :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick }"
       :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
          <a-table-column title="菜单编号" dataIndex="menuId" key="menuId" />
          <a-table-column title="菜单名称" dataIndex="menuName" key="menuName" >
            <template slot-scope="menuName">
              <div class="ellipsis_hidden Tapel_name" >
                <a-tooltip  placement="topLeft" >
                  <template slot='title' >
                    {{menuName}}
                  </template>
                    {{menuName}}
                </a-tooltip>
              </div>
            </template>
          </a-table-column>
          <a-table-column title="显示顺序" dataIndex="orderNum" key="orderNum" />
           <a-table-column title="上级菜单" dataIndex="parentName" key="parentName" />
          <a-table-column title="状态" dataIndex="status" key="status">
            <div slot-scope="status">
                 <span ><a-icon type="warning" :style="{color:[status=='Y'?'green':'red']}" />{{status=='Y'?'启用':'停用'}}</span>
            </div>
          </a-table-column>
          <a-table-column title="状态更新时间" dataIndex="statustime" key="statustime"/>
          <a-table-column title="操作人" dataIndex="modifier" key="modifier"/>
          <a-table-column title="操作" key="operation">
            <template slot-scope="data" >
              <div>
                <a href="javascript:;" class="btn_action" @click="menuRedactClick(data)">编辑</a>
                <a-divider type="vertical" />
                <a href="javascript:;" class="btn_action_Detele" @click="menuDeteleClick(data)">删除</a>
              </div>
            </template>
          </a-table-column>
      </a-table>
    
</div>
</Page-view>
</template>

<style lang="less" scoped>

.ellipsis_hidden{
  overflow: hidden;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.menu_management{
  background: #fff;
  font-size: 14px;
  .seach_Data{
    margin: 15px 24px 0;
    font-size: 12px;
    color: rgba(0,0,0,0.45);
  }
  .Add_delete{
    padding: 7px 24px 16px;
    overflow: hidden;
    p{
        font-size: 14px;
        color: rgba(0,0,0,0.65);
    }
    .Model_title{
        font-size: 16px;
        color: rgba(0,0,0,0.85);
    }
    .add_data{
      text-align: center;
      width: 104px;
      height: 40px;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 40px;
      background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
      border-radius: 4px;
      margin-right: 20px;
    }
    .delete_data{
      text-align: center;
      width: 104px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #3A8EDC;
      border-radius: 4px;
      font-size: 16px;
      color: #3A8EDC;
    }
  }
  .select_list{
    background: #E6F7FF;
    border: 1px solid #91D5FF;
    border-radius: 4px;
    height: 30px;
    line-height: 30px;
    margin:20px 24px ;
    color: rgba(0,0,0,0.65);
    padding: 0 16px;
    span{
        color: #1890FF;
    }
  }
  
}
.menu_management{
  .screen_form{
    overflow: hidden;
    padding: 24px;
    font-size: 14px;
    color: #595959;
    .ant-row{
      .ant-col-xs-7{
        margin: 8px 0;
        .from_nameSpan{
          margin-right: 10px;
        }
      }
    } 
    .from_input{
      width: 224px;
      height: 32px;
    }
    .fome_seach{
      background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      height: 32px;
      line-height: 32px;
      width: 74px;
      margin-right: 20px;
    }
    .menu_Reset{
        background: #FFFFFF;
        height: 32px;
        line-height: 32px;
        width: 74px;
        border: 1px solid #3A8EDC;
        border-radius: 4px;
        color: #3A8EDC;
    }
  }
}
.btn_action{
    color: #3a8edc;
    cursor: pointer;
}
.btn_action_Detele{
    color: #f44848;
    cursor: pointer;
}
.ant-table-row .Tapel_name{
  max-width: 150px;
  min-width: 0px;

}

</style>


<script>


import { mobileMenu, } from '../../api/DocumentsPost' //goldIdeaDelete,goldIdeaTop,goldIdeaStatus
import { PageView } from '@/layouts'

export default {
    components:{
        PageView
    },
    data() {
        return {
            data:[],//表格数据
            current:1,//请求页数
            length:10,//每页数据
            pageSize:10,//每页条数
            showQuickJumper:true,//分页跳转
            showSizeChanger:true,//分页数据变化
            total:10,//总数
            pageSizeOptions:['10', '20', '30', '40'],//
            selectedRowKeys: [], // Check here to configure the default column
            appId:'TV_XATX',//应用ID
            menuName:'',//菜单名称
            status: '',//状态
        }
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0
      }
    },
    methods: {
      //表格
      onSelectChange (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys
      },
      //多选
      SelectClick(record){

      },
      //状态下拉框
      handleMenuClick(e) {
        console.log('click', e);
      },
      //选择框
      onChange(date, dateString) {
        console.log(date, dateString)
      }, 

      //新增
      menuManagementadd(){
        this.$router.push({
          path: '/menuManagement/addManagement',
          query: {
             appId:this.appId
        }
          })
      },
      //编辑
        menuRedactClick(data){
          debugger  
           this.$router.push({
             path:'/menuManagement/editMenu',
             query:{
               menuId:data.menuId,
               appId:this.appId
             },
             
           })
        },
      //删除
      menuDeteleClick() {
        this.$confirm({
          title: '确认要删除这条菜单吗？',
          content: '删除这条菜单操作会在移动端删除这个菜单。',
          okText: '确定',
          okType: 'danger',
          cancelText: '取消',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      },
      //批量删除
      menuDeleteConfirm(){

      },
      //分页器
        PaginChang(pagination){
            this.current=pagination.current
            this.length=pagination.pageSize
            this.pageSize = pagination.pageSize
            this.total = pagination.total
            this.goldIdeaList()
        },
      //请求菜单列表
      mobileMenu(){
        var param = {
            appId:this.appId,//应用ID
            menuName:this.menuName,//菜单名称
            status: this.status,//状态
            page:this.current ,//分页数
            size:this.length ,//查询条数
        } 
        mobileMenu(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result.mobileMenu
                this.total =Number(res.result.total)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        })
      },


    },
    mounted(){
        this.mobileMenu()
        
    }
}
</script>