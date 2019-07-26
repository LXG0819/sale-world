<template>
<Page-view>
<div class="source_main">
    <div class="navigation_crumbs">
      金点子管理<span>/</span><span>金点子列表</span>
    </div>
    <div class="screen_form"  :style="{ maxHeight: FormmaxHeight+'px'}" >
        <a-row>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }" :style="{ textAlign: Textalign}">
                <div class="">
                <span class="from_nameSpan">素材名称:</span> <a-input class="from_input" placeholder="请输入"/>
                </div>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" :style="{display: actionDisplay, textAlign: Textalign}">
                <div class="from_status"  >
                <span class="from_nameSpan">状态:</span>
                <a-dropdown>
                    <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                    <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                    <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px" >
                    <span> 请选择 </span><a-icon type="down" class="anticon" />
                    </a-button>
                </a-dropdown>
                </div>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" :style="{ display: actionDisplay,textAlign: Textalign}">
                <span class="from_nameSpan">素材标签:</span> <a-input class="from_input" placeholder="请输入"/>
            </a-col>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }" :style="{display: actionDisplay, textAlign: Textalign}">
                <span class="from_nameSpan">是否关联考试：</span> <a-input class="from_input" placeholder="请输入"/>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" :style="{ textAlign: Textalign}">
                <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="onChange" />
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" :style="{ textAlign: Textalign}">
                <div class="" :style="{  float: Textalign}">
                <a-button type="primary" class="fome_seach fl" >搜索</a-button>
                <div class="fome_open fl" @click="seachOpen()">{{OpenCollapse?'收起':'展开'}}<a-icon :type="OpenCollapse? 'up':'down'" /></div>
                </div>
            </a-col>
        </a-row>
    </div>
    <div class="seach_Data">共搜索到4条数据</div>
    <div class="Add_delete">
        <div class="delete_data fl"><span><a-icon type="delete" /></span> 批量删除</div>
    </div>
    <div class="goldenIdea_list">
        <a-row class="goldenIdea_list_title">
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}" class="title_stype"><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}"><span>编号</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 5, offset: 0}" class="title_stype"><span>名称</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span>分类</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>状态</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>阅读量</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}"><span>创建时间</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>创建人</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}"><span>操作</span></a-col>
        </a-row>
        <a-row class="goldenIdea_list_cestion">
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 0}"><span>CH0000001</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 5, offset: 0}"><span class="title ellipsis_hidden">文章最大标题文章最大标题标题标…</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span class="classify">分类</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>启用</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 1}"><span>2.0W</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}"><span class="ellipsis_hidden">2014-12-24  23:12:00</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span class="">张三四</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 1}">
                <div class="goldenIdea_list_operation fl">
                    <div class="superior fl"><a-icon type="to-top" /></div>
                    <span class="fl">|</span>
                    <div class="blockUp fl">停用</div>
                    <span class="fl">|</span>
                    <div class="delete fl">删除</div>
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
.source_main{
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
}
.source_main{
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
    .from_status{
      .ant-btn{
        color: #BFBFBF;
        text-align: left;
        position: relative;
        width: 224px;
        height: 32px;
        .anticon{
          position: absolute;
          top: 10px;
          right: 15px;
        }
      }
    }
    .fome_seach{
      background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
      margin-left: 5px;
    }
    .fome_open{
      margin-left: 16px;
      line-height: 32px;
      height: 32px;
      font-size: 12px;
      color: #3A8EDC;
      .anticon {
        margin-left: 6px;
      }
    }
  }
}
//
.source_main .goldenIdea_list{
    overflow: hidden;
    padding: 0 24px;
    .goldenIdea_list_title{
        background: #EBECF0;
        height: 48px;
        font-size: 14px;
        font-weight: 600;
        line-height: 48px;
        color: #333333;
        .title_stype{
            text-align: center;
        }
    }
    .goldenIdea_list_cestion{
        height: 50px;
        border-bottom:solid 1px #e8e8e8;
        line-height: 50px;
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
import { goldIdeaPost } from '../../api/DocumentsPost'


export default {
    components:{
        PageView
    },
    data() {
        return {
            FormmaxHeight:128,
            OpenCollapse:false,
            Textalign:'left',
            actionDisplay : 'none',  //搜索
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            current: 1,
            pageSize: 10,
            total: 50,
        }
    },
    methods: {
      //状态下拉框
      handleMenuClick(e) {
        console.log('click', e);
      },
      //搜索展开
      seachOpen(){
        this.OpenCollapse=!this.OpenCollapse
      
        if(this.OpenCollapse==true){
          this.actionDisplay ='block'
          this.FormmaxHeight =160
          this.Textalign = 'right'
        }else{
          this.actionDisplay ='none'
          this.FormmaxHeight =128
          this.Textalign = 'left'
        }
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
      //请求金点子列表
      goldIdeaList(){
            Login(param).then((res)=>{
                if(res.code == 0){
                        console.log(res.result)
                        
                }else{
                      this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
      }
      
    },
    mounted(){
      this.goldIdeaList()
    }
}
</script>