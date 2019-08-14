<template>
<div class="source_main">
  <div class="navigation_crumbs">
      素材列表<span>/</span><span>素材管理</span>
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
    <div class="add_data fl" @click="NewaddSource()"><span><a-icon type="plus" /></span> 新增</div>
    <div class="delete_data fl"><span><a-icon type="delete" /></span> 批量删除</div>
  </div>
  <a-row class="source_list_title">
    <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1 ,offset: 0}" class="title_textAlign" ><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
    <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 2 ,offset: 1}"><span>素材编号</span></a-col>
    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 5 ,offset: 1}"><span>素材名称</span></a-col>
    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}"><span>素材标签</span></a-col>
    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}"><span>创建时间</span></a-col>
    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 1 ,offset: 1}"><span>创建人</span></a-col>
    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}"><span>操作</span></a-col>
  </a-row>
  <div class="source_list_ceation">
    <a-row v-for="(item,index) in 10" :key="index">
            <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1 ,offset: 0}" class="title_textAlign" ><span><a-checkbox @change="onChange"></a-checkbox></span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 2 ,offset: 1}"><span>CH0000001</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 5 ,offset: 1}">
              <a-popover placement="bottomRight" overlayClassName="title_tooltip">
                <template slot="content"  >
                  文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题
                </template>
                <div class="ellipsis_hidden row_name">
                  文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题文章最大标题
                </div>
              </a-popover>
            </a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}">
              
              <a-popover placement="bottomRight" overlayClassName="">
                <template slot="content">
                    <div class="souce_Label ellipsis_hidden fl">
                      <div class="label_one">标签1</div>
                      <div class="label_two">标签2</div>
                      <div class="label_Three">标签3</div>
                    </div>
                </template>
                <div class="souce_Label ellipsis_hidden fl">
                  <div class="label_one">标签1</div>
                  <div class="label_two">标签2</div>
                  <div class="label_Three">标签3</div>
                </div>
              </a-popover>
            </a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}"><span>2014-12-24  23:12:00</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 1 ,offset: 1}"><span>张三四</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 3 ,offset: 1}">
              <div class="souce_operation fl">
                <div class="see fl">查看</div>
                <span class="fl">|</span>
                <div class="edit fl">编辑</div>
                <span class="fl ">|</span>
                <div class="delete fl">删除</div>
              </div>
            </a-col>
    </a-row>
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
</template>

<style lang="less" scoped>

.ellipsis_hidden{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}
.source_main{
  background: #fff;
  min-width: 1200px;
  font-size: 14px;
  width: 75px;
  color: rgba(0,0,0,0.65);
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
      background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
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
}
.source_list_title{
  overflow: hidden;
  margin: 0 24px;
  background: #EBECF0;
  height: 48px;
  height: 50px;
  font-weight: 600;
  line-height: 50px; 
  .title_textAlign{
    text-align: center;
  }
}
.source_list_ceation{
  padding: 0 24px;
  .ant-row{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e8e8e8;
    .title_textAlign{
      text-align: center;
    }
    div .row_name{
        width: 90%;
        color: #3A8EDC;
    }
    .souce_operation{
      .see,.edit{
        color: #3A8EDC;
        margin: 0 8px ;
      }
      .delete{
        color: #F44848;
        margin: 0 8px ;
      }
    }
  }
  .souce_Label{
    width: 142px;
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
}
.title_tooltip{
  width: 330px;
  padding: 15px 15px;
}
.souce_Pagination{
  float: right;
  background: #fff;
  padding : 24px;
  width: 100%;
  ul{
    float: right;
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

</style>


<script>


export default {
  data() {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
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
    },
    //请求金点子列表
      /* goldIdeaList(parameter){
            goldIdeaList(parameter).then((res)=>{
                if(res.code == 0){
                        console.log(res.result)
                        
                }else{
                      this.$message.error(res.mag); 
                       console.log("123")
                }
            }).catch((err)=>{
                     console.log("123")
            })
      } */
  }
}
</script>