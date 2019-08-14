<template>
<Page-view>
<div class="source_main">
    <div class="navigation_crumbs">
      金点子管理<span>/</span><span>金点子列表</span>
    </div>
    <div class="screen_form"  :style="{ maxHeight: FormmaxHeight+'px'}" >
        <a-row>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }" :style="{ display: actionDisplay}">
                <div class="">
                <span class="from_nameSpan">编号:</span> <a-input class="from_input" :class="[OpenCollapse?'Intup':'']" placeholder="请输入"/>
                </div>
            </a-col>

            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                <span class="from_nameSpan">名称:</span> <a-input class="from_input" :class="[OpenCollapse?'Intup':'']" placeholder="请输入名称"/>
            </a-col>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }" >
                <span class="from_nameSpan fl">分类</span> 
                <a-input-group compact class="from_input fl" :class="[OpenCollapse?'Intup':'']">
                    <a-select class="from_input"   defaultValue="" :class="[OpenCollapse?'Intup':'']">
                      <a-select-option  v-for="(item,index) in Category"  :key="index"  :value="item.titId">{{item.titName}}</a-select-option>
                  </a-select>
                </a-input-group>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }"  :style="{ display: actionDisplay}">
                <span class="from_nameSpan fl">状态:</span>
                <a-input-group compact class="from_input fl" :class="[OpenCollapse?'Intup':'']">
                    <a-select class="from_input"   defaultValue="" :class="[OpenCollapse?'Intup':'']">
                      <a-select-option value="entire">全部</a-select-option>
                      <a-select-option value="initiateMode">启用</a-select-option>
                      <a-select-option value="deadStatus">停用</a-select-option>
                  </a-select>
                </a-input-group>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" :style="{ display: actionDisplay}">
                <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="CreatiTimeChange" />
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                <div class="" >
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
      <a-table :dataSource="data"  :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick }"
       :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
          <a-table-column title="编号" dataIndex="goldIdeaId" key="goldIdeaId" />
          <a-table-column title="名称" dataIndex="name" key="name" >
            <template slot-scope="name, data">
              <div class="ellipsis_hidden Tapel_name" @click="goldenIdeaDatails(data)">
                <a-tooltip  placement="topLeft" >
                  <template slot='title' >
                    {{name}}
                  </template>
                  <span v-show="data.top=='Y'" :style="{color:'red'}"><a-icon type="exclamation-circle" />置顶</span>
                    {{name}}
                </a-tooltip>
              </div>
            </template>
          </a-table-column>
          <a-table-column title="分类" dataIndex="classify" key="classify" >
            <template slot-scope="classify">
              <div>
                <a-tag v-show="classify!==undefined" class="tagNameStype">{{classify}}</a-tag>
              </div>
            </template>
          </a-table-column>
          <a-table-column title="状态" dataIndex="status" key="status">
            <div slot-scope="status">
                 <span ><a-icon type="warning" :style="{color:[status=='Y'?'green':'red']}" />{{status=='Y'?'启用':'停用'}}</span>
            </div>
          </a-table-column>
          <a-table-column title="阅读量" dataIndex="readingVolume" key="readingVolume" />
          <a-table-column title="创建时间" dataIndex="createTime" key="createTime"/>
          <a-table-column title="创建人" dataIndex="creater" key="creater"/>
          <a-table-column title="操作" key="operation">
            <template slot-scope="text , data" >
              <div>
                <a href="javascript:;" class="btn_action"  @click="goldenIdeaTopClick(data)"><a-icon type="to-top" /></a>
                <a-divider type="vertical" />
                <a href="javascript:;" class="btn_action" @click="goldenIdeaStatusClick(data)">{{data.status=='Y'?'停用':'启用'}}</a>
                <a-divider type="vertical" />
                <a href="javascript:;" class="btn_action_Detele" @click="goldenIdeaDeteleClick(data)">删除</a>
              </div>
            </template>
          </a-table-column>
      </a-table>
    </div>
    
</div>
</Page-view>
</template>

<style lang="less" scoped>

.ellipsis_hidden{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}
.source_main{
  background: #fff;
  font-size: 14px;
  min-width: 1200px;
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
      &.Intup{
        width: 254px;
        height: 32px;
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
.tmpModelsNameStype,.tagNameStype{
  background: #fff4f9;
  border: 1px solid #ffa7ce;
  color: #ec77ab;
  display: inline-block;
  text-align: center;
  height: 19px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  font-size: 11px;
  margin-right: 8px;
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
  max-width: 200px;
  min-width: 0px;
  color: #1890ff;
}
.Tooltip_sty{
  background: azure
}




</style>


<script>

import { PageView } from '@/layouts'
import { goldIdeaList,goldIdeaCategory, } from '../../api/DocumentsPost' //goldIdeaDelete,goldIdeaTop,goldIdeaStatus


export default {
    components:{
        PageView
    },
    data() {
        return {
            FormmaxHeight:128,//搜索展开
            OpenCollapse:false,//搜索展开
            actionDisplay : 'none',  //搜索
            data:[],//表格数据
            current:1,//请求页数
            length:10,//每页数据
            pageSize:10,//每页条数
            showQuickJumper:true,//分页跳转
            showSizeChanger:true,//分页数据变化
            total:10,//总数
            pageSizeOptions:['10', '20', '30', '40'],//
            selectedRowKeys: [], // Check here to configure the default column
            Category:'',//类别
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
      //分页器
      PaginChang(pagination){
          this.current=pagination.current
          this.length=pagination.pageSize
          this.pageSize = pagination.pageSize
          this.total = pagination.total
          this.goldIdeaList()
      },
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
        }else{
          this.actionDisplay ='none'
          this.FormmaxHeight =128
        }
      },
      //状态搜索框
      StatusSearch(value){
         console.log(value)
      },
      //创建时间
      CreatiTimeChange(date, dateString) {
        console.log(date, dateString)
      }, 
      //详情
      goldenIdeaDatails(data){
       
        this.$router.push({
          path:'/goldenIdea/goldenIdeaDatails',
          query:{
            goldIdeaId : data.goldIdeaId
          }
        })
      },
      //置顶
      goldenIdeaTopClick(data){
           var param = {
             goldIdeaId : 10,//金点子编号
             top : "data.top"//是否置顶（N不置顶，Y置顶） 
           }
            
        this.goldIdeaTop(param,data)

      },
      //停用
      goldenIdeaStatusClick(data){
       
         var param = {
            goldIdeaId : data.goldIdeaId ,
            status : data.status,
         }
           
       
        this.goldIdeaStatus(param,data)
      },
      //删除
      goldenIdeaDeteleClick(data){
          var param = {
            goldIdeaId:data.goldIdeaId
          }
            
      
         this.goldIdeaDelete(param,data)
      },

      //请求金点子列表
      goldIdeaList(){
        var param = {
            goldIdeaId:'',//金点子编号
            name:'',//名称
            classify:'',//分类
            status: '',//状态
            startDate:'',//开始时间
            endDate:'',//结束时间
            page:this.current ,//分页数
            size:this.length ,//查询条数
        } 
        goldIdeaList(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result.goldenIdea
                this.total =Number(res.result.total)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        })
       },
       //请求金点子置顶
      goldIdeaTop(param,data){
        if(param.goldIdeaId==data.goldIdeaId&&param.top==data.top){
          if(param.top=='Y'){
                data.top='N'
            }else{
                data.top='Y'
            }
          this.$message.success('置顶成功');
        }else{
           this.$message.error('置顶失败');
        }
        /* goldIdeaTop(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result
                this.total =Number(res.result[0].zCount)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        }) */
       },
       //请求金点子删除
      goldIdeaDelete(param,data){
        
          if(param.goldIdeaId==data.goldIdeaId){
              this.$message.success('删除成功');
              
          }else{
              this.$message.error('删除失败');
          }
        /* goldIdeaDelete(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result
                this.total =Number(res.result[0].zCount)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        }) */
       },
       //请求金点子状态修改
      goldIdeaStatus(param,data){
        
        if(param.goldIdeaId==data.goldIdeaId&&param.status==data.status){
            if(param.status=='Y'){
                data.status='N'
            }else{
                data.status='Y'
            }
            this.$message.success('状态修改成功');
        }else{
            this.$message.error('状态修改失败');
        }
        /* goldIdeaStatus(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result
                this.total =Number(res.result[0].zCount)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        }) */
       },
       //请求金点子类别
      goldIdeaCategory(){
        var param = {
            
        } 
        goldIdeaCategory(param).then((res)=>{
            if(res.code == 0){
                this.Category =res.result
                console.log(this.Category)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        })
       },

    },
    mounted(){
      this.goldIdeaList()
      this.goldIdeaCategory()
    }
}
</script>