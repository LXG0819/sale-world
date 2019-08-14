<template>
<Page-view>
<div class="menu_management">
    <div class="navigation_crumbs">
        考试管理<span>/</span><span>试卷列表</span>
    </div>
    <div class="screen_form"  >
        <a-row>
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }">
                <span class="from_nameSpan">名称:</span> <a-input class="from_input" placeholder="请输入"/>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <span class="from_nameSpan">分类:</span>
                <a-dropdown>
                    <a-menu slot="overlay" @click="handleMenuClick" >
                        <a-menu-item :key="item.typeId" v-for="item in classifydata "  >{{item.typeName}}</a-menu-item>
                        </a-menu>
                    <a-button style="margin-left: 8px" class="from_input">
                        <span class="fl"> 请选择 </span><a-icon type="down" class="fr" />
                    </a-button>
                </a-dropdown>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                <span class="from_nameSpan">发布时间:</span> 
                <a-range-picker class="from_input" @change="CreatiTimeChange" :defaultValue="[moment(strDate, dateFormat), moment(endDate, dateFormat)]"
                   :format="dateFormat" />
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <a-button type="primary" class="fome_seach fl" >查询</a-button>
                <a-button type="primary" class="menu_Reset fl" >重置</a-button>
            </a-col>
        </a-row>
    </div>
    <div class="seach_Data">共搜索到4条数据</div>
    <div class="Add_delete">
        <a-button class="add_data fl" type="primary" @click="menuManagementadd()"><span><a-icon type="plus" /></span>新建考试</a-button>
        <a-button class="delete_data fl" type="primary" @click="BatchExamnieDerive()"><span><a-icon type="delete" /></span> 批量导出</a-button>
        <a-button class="delete_data fl" type="primary" @click="BatchExamnieDetele()"><span><a-icon type="delete" /></span> 批量删除</a-button>
    </div>
    <div class="select_list">
        <span><a-icon type="info-circle" /></span>已选择<span>4</span>项
    </div>
    <a-table :dataSource="data"  :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick }"
       :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
          <a-table-column title="名称" dataIndex="tatTitle" key="tatTitle" width="200px" class="ellipsis_hidden" align='center'>
              <template slot-scope="tatTitle">
                <a-tooltip placement="top"   >
                    <template slot="title">
                        <span>{{tatTitle}}</span>
                    </template>
                    <span>{{tatTitle}}</span>
                </a-tooltip>
            </template>
          </a-table-column>
          <a-table-column title="分类" dataIndex="typeName" key="typeName" width="150px" align='center'  >
            <template slot-scope="typeName">
                <span  >
                    <a-tag class="Tapel_name ellipsis_hidden">{{typeName}}</a-tag>
                </span>
            </template>
          </a-table-column>
          <a-table-column title="学分" dataIndex="credit" key="credit" align='center' />
           <a-table-column title="考试时长(m)" dataIndex="tatTime" key="tatTime" align='center' />
          <a-table-column title="次数" dataIndex="tatCount" key="tatCount" align='center' />
          <a-table-column title="及格分数" dataIndex="tatLine" key="tatLine" align='center' />
          <a-table-column title="创建时间" dataIndex="pushDate" key="pushDate" align='center' />
          <a-table-column title="创建人" dataIndex="cn" key="cn" align='center' />
          <a-table-column title="操作" key="operation">
            <template slot-scope="data" >
              <div>
                <a href="javascript:;" class="btn_action" @click="ExamnieRedactClick(data)">编辑</a>
                <a-divider type="vertical" />
                 <a href="javascript:;" class="btn_action" @click="ExamnieDeriveClick(data)">导出</a>
                <a-divider type="vertical" />
                <a href="javascript:;" class="btn_action_Detele" @click="ExamnieDeteleClick(data)">删除</a>
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
  white-space: nowrap;
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
    padding: 7px 24px 0px;
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
      margin-right: 20px;
      line-height: 40px;
      border: 1px solid #3A8EDC;
      border-radius: 4px;
      font-size: 16px;
      color: #3A8EDC;
      background: #fff;
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
    padding-bottom: 0;
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
.Tapel_name{
    border: 1px solid #ffa7ce;
    background-color: #fff4f9;
    color: #ec77ab;
    max-height: 120px;
    

}

</style>


<script>


import {queryExamTypeList,queryTrainExamList  } from '../../api/DocumentsPost' //goldIdeaDelete,goldIdeaTop,goldIdeaStatus
import { PageView } from '@/layouts'
import moment from 'moment';



export default {
    components:{
        PageView
    },
    data() {
        return {
            dateFormat: 'YYYY-MM-DD',//默认日期格式
            data:[],//表格数据
            classifydata:[],//分类数据
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
            strDate:'',//初始时间
            endDate:{},//结束时间
        }
    },

    computed: {
        hasSelected() {
            return this.selectedRowKeys.length > 0
        }
    },
    methods: {
        moment,
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
        //发布时间
        CreatiTimeChange(date, dateString) {
            console.log(date, dateString)
        }, 
        //新增
        menuManagementadd(){
            
        },
        //批量导出
        BatchExamnieDerive(){

        },
        //批量删除
        BatchExamnieDetele(){

        },
        //编辑
        ExamnieRedactClick(data){
        
        },
        //导出
        ExamnieRedactClick(data){
        
        },
        //删除
        ExamnieDeteleClick() {
            
        },
        //分页器
        PaginChang(pagination){
            this.current=pagination.current
            this.length=pagination.pageSize
            this.pageSize = pagination.pageSize
            this.total = pagination.total
            this.goldIdeaList()
        },
        //请求文章考试列表
        queryTrainExamList(){
            var param = {
                id:'',//分类id
                findName:'',//查询名称
                endDate:this.endDate,//结束时间
                strDate: this.strDate,//开始时间
                offset:this.current ,//分页数
                length:this.length ,//查询条数
            } 
            queryTrainExamList(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result.resList
                    this.total =Number(res.result.resList.zCount)
                    console.log(this.data)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            })
        },
        //请求文章考试分类
        queryExamTypeList(){
            var param = {

            } 
            queryExamTypeList(param).then((res)=>{
                if(res.code == 0){
                    this.classifydata =res.result
                    console.log(this.classifydata)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            })
        },
        padding(num) {
            return num < 10 ? '0' + num : num
        },
        init(){
            
            var d = new Date()
           
            this.strDate =  d.getFullYear()+'-'+ this.padding((d.getMonth()+1))+'-'+ '01',
            this.endDate = d.getFullYear()+'-'+ this.padding((d.getMonth()+1))+'-'+ this.padding(d.getDate())
            console.log(this.strDate,this.endDate)

            
            

        },


   },
    mounted(){
        this.queryExamTypeList()
        this.queryTrainExamList()
        this.init()
        
    }
}
</script>