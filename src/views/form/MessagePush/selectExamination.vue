<template>
  <div>
    <a-row class="commen_list_seach">
        <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">素材标签:</span> <a-input class="from_input" placeholder="请输入"/>
        </a-col>
        <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">素材名称:</span> <a-input class="from_input" placeholder="请输入"/>
        </a-col>
        <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="ontimerChange" />
        </a-col>
        <a-col :xs="{ span: 7, offset: 15 }" :lg="{ span: 8, offset: 1 }" class="fr">
            <a-button type="primary" class="fome_Reset fr" >重置</a-button>
            <a-button type="primary" class="fome_seach fr" >搜索</a-button>
        </a-col>
    </a-row>
    <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick,type:'radio' }" :columns="columns" :dataSource="data"
      :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang" />
      <div class="footer_button">
        <a-button type="primary" class="Pushscope fr"  @click="SelectshowOK()">确定</a-button>
      </div>
  </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
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
const columns = [{
  title: '试卷名称',
  dataIndex: 'tatTitle',
}, {
  title: '学分',
  dataIndex: 'age',
}, {
  title: '考试时长',
  dataIndex: 'tatTime',
}, {
  title: '次数',
  dataIndex: 'tatCount',
}, {
  title: '及格分数',
  dataIndex: 'tatLine',
}, {
  title: '创建人',
  dataIndex: 'cn',
}, {
  title: '创建时间',
  dataIndex: 'pushDate',
}, ];

import { queryTrainExamList } from '@/api/DocumentsPost'//请求
import { number } from 'prop-types';
import { debuglog } from 'util';
export default {
  data() {
    return {
      data:[],
      columns,
      current:1,//请求页数
      length:10,//每页数据
      pageSize:10,//每页条数
      showQuickJumper:true,//分页跳转
      showSizeChanger:true,//分页数据变化
      total:11,//总数
      pageSizeOptions:['10', '20', '30', '40'],//
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      examinationData:false,//选择的试卷
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
    //分页器
    PaginChang(pagination){
      this.current=pagination.current
      this.length=pagination.pageSize
      this.pageSize = pagination.pageSize
      this.total = pagination.total
      this.queryTrainExamList()
    },
    //选择的试卷
    SelectClick(record){
      this.examinationData=true
      this.$emit("SelectClick",record)
    },
    //确定
    SelectshowOK(){
      if(this.examinationData==true){
        this.$emit("SelectshowOK",1)
      }else{
        this.$message.warning('请选择试卷');
      }
      
    },
    //查询文章考试列表
    queryTrainExamList(){
        var param = {
            id: '',
            findName: '',
            strDate:'2019-07-01',
            endDate:'2019-07-28',
            offset:this.current ,
            length:this.length ,
        } 
        queryTrainExamList(param).then((res)=>{
            if(res.code == 0){
                this.data =res.result.resList
                this.total =Number(res.result.zCount)
                console.log(this.data)
            }else{
                this.$message.error(res.mag); 
            }
        }).catch((err)=>{
                
        })
    },
  },
  mounted(){
      this.queryTrainExamList()
  }
}
</script>