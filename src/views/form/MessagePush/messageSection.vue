<template>
  <div class="messag_section">
    <a-row class="commen_list_seach">
        <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">素材名称:</span> <a-input class="from_input" placeholder="请输入"/>
        </a-col>
        <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="ontimerChange" />
        </a-col>
        <a-col :xs="{ span: 7, offset: 15 }" :lg="{ span: 8, offset: 1 }" >
          <a-button type="primary" class="fome_seach" >搜索</a-button>
          <a-button type="primary" class="fome_Reset" >重置</a-button>
        </a-col>
    </a-row>
    <!-- <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1671 }" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick }"
      :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang" >
      <a slot="查看日记" slot-scope="pushDiary" href="javascript:;">查看日记</a>
      <a slot="操作" slot-scope="operation" href="javascript:;">操作</a>
    </a-table> -->
    <a-table :dataSource="data"  :scroll="{ x: 1671 }"  :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
        <a-table-column title="素材编号" dataIndex="taId" key="taId" />
        <a-table-column title="素材名称" dataIndex="taTtile" key="taTtile" />
        <a-table-column title="素材标签" dataIndex="tagName" key="tagName" >
          <template slot-scope="tagName">
            <span>
              <a-tag v-show="tagName!==undefined" class="tagNameStype">{{tagName}}</a-tag>
            </span>
          </template>
        </a-table-column>
        <a-table-column title="状态" dataIndex="statusId" key="statusId"/>
        <a-table-column title="是否关联考试" dataIndex="Exam" key="Exam" />
        <a-table-column title="推送应用" dataIndex="taAppName" key="taAppName" />
        <a-table-column title="推送菜单" dataIndex="tmpModelsName" key="tmpModelsName">
          <template slot-scope="tmpModelsName">
            <span>
              <a-tag  v-show="tmpModelsName!==undefined" class="tmpModelsNameStype">{{tmpModelsName}}</a-tag>
            </span>
          </template>
        </a-table-column>
        <a-table-column title="创建时间" dataIndex="sendTime" key="sendTime"/>
        <a-table-column title="推送人" dataIndex="userName" key="userName"/>
        <a-table-column title="推送日记" dataIndex="tmpId" key="tmpId" fixed='right' width='88px' > 
          <template slot-scope="tmpId" width='88'>
            <span>
              <a href="javascript:;" width='88' class="btn_action" @click="pushDiaryModel(tmpId)">查看日记</a>
            </span>
          </template>
        </a-table-column>
         <a-table-column title="操作" key="operation" fixed='right' width='178px' >
          <template slot-scope="text , taId" width='178'>
            <span>
              <a href="javascript:;" class="btn_action"  @click="ReadingClick(taId)">阅读情况</a>
              <a-divider type="vertical" />
              <a href="javascript:;" class="btn_action">停用</a>
              <a-divider type="vertical" />
              <a href="javascript:;" class="btn_action_Detele">删除</a>
            </span>
          </template>
        </a-table-column>
    </a-table>
      <a-modal
        v-model="pushDiaryShow"
        width="1200px"
        title="推送状态"
      >
        <template slot="footer">
          <a-button key="back" @click="handleCancel">取消</a-button>
        </template>
        <push-diary :tmpIdData="tmpIdData"></push-diary>
      </a-modal>
      
  </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
.tmpModelsNameStype,.tagNameStype{
  background: #fff4f9;
  border: 1px solid #ffa7ce;
  color: #ec77ab;
  display: inline-block;
  text-align: center;
  min-width: 35px;
  height: 19px;
  padding: 0 5px;
  max-width: 130px;
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
.messag_section{
  background:#fff;
  padding:24px;
}
.commen_list_seach{
    overflow: hidden;
    font-size: 14px;
    color: #595959;
    .ant-col-xs-7{
      margin: 8px 0;
      .from_nameSpan{
          margin-right: 10px;
      }
    }
    .from_input{
    width: 224px;
    height: 32px;
  }
}
.fome_Reset{
    border: 1px solid #3A8EDC;
    margin-left: 20px;
    border-radius: 4px;
    width: 74px;
    height: 32px;
    background: #fff;
    color: #3A8EDC;
}
.fome_seach{
    background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
    border-radius: 4px;
    color: #fff;
    margin-left: 5px;
}
.footer_button{
    border-top: 1px solid #e8e8e8;
    overflow: hidden;
    padding-top: 20px;
    .Pushscope{
        background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
        border-radius: 4px;
        border-color:#fff;
        color: #fff;  
        font-size: 16px;
        width: 104px;
        height: 40px;
        line-height: 40px;
    }
}
</style>




<script>


import { queryMessagePushList } from '@/api/DocumentsPost'//请求
import pushDiary from './pushDiary'//查看日记
import { number } from 'prop-types';
import { debuglog } from 'util';
export default {
  components:{
    pushDiary,
  },
  data() {
    return {
      data:[],
      current:1,//请求页数
      length:10,//每页数据
      pageSize:10,//每页条数
      showQuickJumper:true,//分页跳转
      showSizeChanger:true,//分页数据变化
      total:10,//总数
      pageSizeOptions:['10', '20', '30', '40'],//
      selectedRowKeys: [], // Check here to configure the default column
      pushDiaryShow: false,//查看日记model
      tmpIdData:[],//日记id
     
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys
    },
    //选择框
    ontimerChange(date, dateString) {
        console.log(date, dateString)
    }, 
    //
    SelectClick(record){
    
    },
    
    //查看日记
    pushDiaryModel(tmpId){
      this.tmpIdData = tmpId
      this.pushDiaryShow = true;
      console.log(this.pushDiaryShow)
    },
    handleCancel(e) {
      this.pushDiaryShow = false;
    },
    //阅读情况
    ReadingClick(taId){
      console.log(taId.taId)
      this.$router.push({
        path: '/form/pushed-list' ,
        query:{
          taId:taId.taId,
        }
      })
    },
    //分页器
    PaginChang(pagination){
      this.current=pagination.current
      this.length=pagination.pageSize
      this.pageSize = pagination.pageSize
      this.total = pagination.total
      this.queryMessagePushList()
    },
    //查询文章推送列表
    queryMessagePushList(){
        var param = {
            status: '',
            findName: '',
            strDate:'2019-07-01',//开始时间
            endDate:'2019-07-28',//结束时间
            offset:this.current ,//分页数
            length:this.length ,//查询条数
        } 
        queryMessagePushList(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result
                this.total =Number(res.result[0].zCount)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        })
    },
  },
  mounted(){
      this.queryMessagePushList()
  }
}
</script>

