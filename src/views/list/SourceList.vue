<template>
<div class="source_main">
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
          <a-button type="primary fl" class="fome_seach" >搜索</a-button>
          <div class="fome_open fl" @click="seachOpen()">{{OpenCollapse?'收起':'展开'}}<a-icon :type="OpenCollapse? 'up':'down'" /></div>
        </div>
      </a-col>
    </a-row>
  </div>
  <div class="seach_Data">共搜索到4条数据</div>
  <div class="Add_delete">
    <div class="add_data fl" @click="NewaddSource()"><span><a-icon type="plus" /></span> 新增</div>
    <div class="delete_data fl"><span><a-icon type="delete" /></span> 批量删除</div>
  </div>
  <div class="source_list_data">
    <div class="souce_seachList_data">
      <div class="souce_seachContent" >
        <div class="souce_title ">
          <ul class="">
            <li><a-checkbox @change="onChange"></a-checkbox></li>
            <li>素材编号</li>
            <li>素材名称</li>
            <li>素材标签</li>
            <li>创建时间</li>
            <li>创建人</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="souce_seachList" v-for="(item,index) in 10" :key="index">
          <ul>
            <li>
              <div class="souce_checkbox fl"><a-checkbox @change="onChange"></a-checkbox></div>
              <div class="souce_id fl">CH0000001</div>
              <div class="souce_name  fl"  >
                <a-tooltip class="ellipsis_hidden" placement="bottomRight" title="Prompt Text" overlayClassName ="ant-btn-default">
                  <a-button>文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题</a-button>
                </a-tooltip>
              </div>
              <div class="souce_Label ellipsis_hidden fl">
                <div class="label_one">标签1</div>
                <div class="label_two">标签2</div>
                <div class="label_Three">标签3</div>
              </div>
              <div class="souce_timer ellipsis_hidden fl">2014-12-24  23:12:00</div>
              <div class="souce_Founder ellipsis_hidden fl">张三四</div>
              <div class="souce_operation fl">
                <div class="see ">查看</div>
                <span class="fl">|</span>
                <div class="edit">编辑</div>
                <span class="fl">|</span>
                <div class="delete">删除</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="souce_Pagination">
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
  .seach_Data{
    margin: 15px 24px 0;
    font-size: 12px;
    color: rgba(0,0,0,0.45);
  }
  .Add_delete{
    padding: 7px 24px 16px;
    overflow: hidden;
    .add_data{
      text-align: center;
      width: 104px;
      height: 40px;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 40px;
      background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
      border-radius: 4px;
    }
    .delete_data{
      text-align: center;
      width: 104px;
      margin-left: 22px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #3A8EDC;
      border-radius: 4px;
      font-size: 16px;
      color: #3A8EDC;
    }
  }
  .source_list_data{
    overflow: hidden;
    .souce_seachList_data{
      margin: 0 24px;
      overflow-y: auto;
      white-space: nowrap;
      .souce_seachContent{
        min-width: 1152px;
        .souce_title{
          background: #EBECF0;
          ul{
            white-space: nowrap;
            overflow: hidden;
            padding: 0;
            height: 48px;
            margin: 0;
            li{
              float: left;
              font-size: 14px;
              list-style: none;
              color: #333333;
              line-height: 48px;
            }
            li:nth-child(1){margin-left: 24px;}
            li:nth-child(2){margin-left: 31px;}
            li:nth-child(3){margin-left: 142px;}
            li:nth-child(4){margin-left: 127px;}
            li:nth-child(5){margin-left: 135px;}
            li:nth-child(6){margin-left: 152px;} 
            li:nth-child(7){margin-left: 125px;} 
          }
        }
        .souce_seachList{
          ul{
            white-space: nowrap;
            overflow: hidden;
            padding: 0;
            margin: 0;
            li{
              float: left;
              height: 50px;
              width: 100%;
              line-height: 50px;
              border-bottom: 1px solid #e8e8e8;
              .souce_checkbox {
                margin-left: 24px;
                .ant-checkbox{
                  border: 1px solid rgba(0,0,0,0.15);
                  border-radius: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .souce_id{
                font-size: 14px;
                width: 75px;
                color: rgba(0,0,0,0.65);
                margin-left: 21px;
              }
              .souce_name{
                width: 262px;
                font-size: 14px;
                color: #3A8EDC;
                margin-left: 30px;
                .ant-btn-default{
                  width: 100%;
                  font-size: 14px;
                  color: #3A8EDC;
                  border: none;
                }
              }
              .souce_Label{
                width: 142px;
                margin-left: 24px;
                height: 100%;
                div{
                  border-radius: 4px;
                  float: left;
                  margin: 15px 0;
                  margin-right: 8px;
                  height: 19px;
                  padding: 0 2px;
                  line-height: 19px;
                  text-align: center;
                  font-size: 11px;
                }
                .label_one{
                  background: #FFF4F9;
                  border: 1px solid #FFA7CE;
                  color: #EC77AB;
                }
                .label_two{
                  background: #FCFCFF;
                  border: 1px solid #B2ADFF;
                  color: #7972F5;
                }
                .label_Three{
                  color: #3A8EDC;
                  background: #F3F9FF;
                  border: 1px solid #9ECFFC;
                }
              }
              .souce_timer{
                width: 136px;
                font-size: 14px;
                color: rgba(0,0,0,0.65);
                margin-left: 49px;
              }
              .souce_Founder{
                font-size: 14px;
                width: 68px;
                color: rgba(0,0,0,0.65);
                margin-left: 72px;
              }
              .souce_operation{
                margin-left: 46px;            
                div{
                  float: left;
                  padding: 0 8px;
                  line-height: 22px;
                  height: 22px;
                  font-size: 13px;
                  margin: 15px 0;
                }
                .see,.edit{
                  color: #3A8EDC;
                }
                .delete{
                  color: #F44848;
                }
                span{
                  color: rgba(0,0,0,0.09);
                  height: 14px;
                }
              }
            }
          }
        }
      }
      
    }
    
    .souce_Pagination{
      float: right;
      margin: 24px 24px 24px 24px;
      
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
.ant-pagination{
        .ant-pagination-item{
          background: red;
          font-size: 12px;
          color: #4A4A4A;
        }
        .ant-pagination-item.ant-pagination-item-active{
          width: 22px;
          height: 22px;
          background: #3A8EDC;
          border-radius: 2px;
        }
}

</style>


<script>

import DatePicker from 'ant-design-vue/lib/date-picker';  // 加载 JS
import 'ant-design-vue/lib/date-picker/style/css';        // 加载 CSS
// import 'ant-design-vue/lib/date-picker/style';         // 加载 LESS

export default {
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
    //新增素材
    NewaddSource(){
      this.$router.push({
        path:'/list/Newadd-list',
        query:{
          
        }
      })
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
    }
  }
}
</script>