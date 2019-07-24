<template>
<Page-view>
<div class="menu_management">
    <div class="navigation_crumbs">
        销傲天下<span>/</span><span>菜单管理</span>
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
        <div class="delete_data fl" @click="showDeleteConfirm"><span><a-icon type="delete" /></span> 批量删除</div>
        
    </div>
    <div class="select_list">
        <span><a-icon type="info-circle" /></span>已选择<span>4</span>项
    </div>
    <div class="goldenIdea_list">
        <a-row class="goldenIdea_list_title">
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}" class=""><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}"><span>菜单编号</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}" class=""><span>菜单名称</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>显示顺序</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>上级菜单</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>状态</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}"><span>创建时间</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>创建人</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}" class="title"><span>操作</span></a-col>
        </a-row>
        <a-row class="goldenIdea_list_cestion">
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}"><span>CH0000001</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}"><span class="ellipsis_hidden">文章最大标题文章最大标题标题标…</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span class="classify">分类</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>启用</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>2.0W</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}"><span class="ellipsis_hidden">2014-12-24  23:12:00</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span class="">张三四</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}">
                <div class="goldenIdea_list_operation fl">
                    <div class="blockUp fl">编辑</div>
                    <span class="fl">|</span>
                    <div class="delete fl" @click="showDeleteConfirm">删除</div>
                </div>
            </a-col>
        </a-row>
        
        <div class="commen_list_Pagination">
                <a-pagination
                    :pageSizeOptions="pageSizeOptions"
                    :total="total"
                    showSizeChanger
                    :pageSize="pageSize"
                    v-model="current"
                    size="16px"
                    showQuickJumper 
                    :defaultCurrent="2" 
                    @change="onSoucePagination" 
                    @showSizeChange="onShowSizeChange"
                >
                <a-pagination/>
                    <template slot='buildOptionText' slot-scope='props'>
                    <span v-if="props.value!=='50'">{{props.value}}条/页</span>
                    <span v-if="props.value==='50'">全部</span>
                    </template>
                </a-pagination>
            
        </div>
    </div>
    
</div>
</Page-view>
</template>

<style lang="less" scoped>

.ellipsis_hidden{
  overflow: hidden;
  word-break: normal;
  text-overflow: ellipsis;
}
.fl{
  float: left;
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
//
.menu_management .goldenIdea_list{
    overflow: hidden;
    padding: 0 24px;
    .goldenIdea_list_title{
        background: #EBECF0;
        height: 48px;
        font-size: 14px;
        font-weight: 600;
        line-height: 48px;
        color: #333333;
        div{
            text-align: center;
            .title_stype{
                text-align: left;
            }
        }
        
    }
    .goldenIdea_list_cestion{
        height: 50px;
        border-bottom:solid 1px #e8e8e8;
        line-height: 50px;
        div{
            text-align: center;
        }
        .ant-col-md-5 .title{
            color: #3A8EDC;
        }
        .classify{
            background: #FFF4F9;
            border: 1px solid #FFA7CE;
            border-radius: 4px;
            padding: 0 6px;
            text-align: center;
            font-size: 11px;
            color: #EC77AB;
        }
        div .goldenIdea_list_operation{
            overflow: hidden;
            div{
                padding: 0 8px;
            }
            .superior{
                color: #3A8EDC;
            }
            .blockUp{
                color: #3A8EDC;
            }
            .delete{
                color: #F44848;
            }
        }
        
    }
    .commen_list_Pagination{
        padding: 24px 0;
        float: right;
    }
}



</style>


<script>

import { PageView } from '@/layouts'

export default {
    components:{
        PageView
    },
    data() {
        return {
            //删除
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            current: 1,
            pageSize: 10,
            total: 50,
        }
        },
    methods: {
     
    },
  methods: {
    //状态下拉框
    handleMenuClick(e) {
      console.log('click', e);
    },
    //选择框
    onChange(date, dateString) {
      console.log(date, dateString)
     }, 

    //分页
    onShowSizeChange(current, pageSize) {
        this.pageSize = pageSize
    },
    onSoucePagination(pageNumber){
       console.log('Page: ', pageNumber)
    },
    //新增
    menuManagementadd(){
        this.$router.push({
            path: '/result/addManagement',
			query: {
			
			}
        })
    },
    //删除
    showDeleteConfirm() {
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
  }
}
</script>