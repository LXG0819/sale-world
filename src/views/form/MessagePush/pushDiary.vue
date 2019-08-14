<template>
  <div>
    <a-row class="commen_list_seach">
        <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan">素材标签:</span> <a-input class="from_input" placeholder="请输入"/>
        </a-col>
        <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <span class="from_nameSpan fl">素材名称:</span>
            <a-input-group compact style="width:60%" class="fl">
                <a-select class="from_input "  defaultValue="entire">
                    <a-select-option value="entire">全部</a-select-option>
                    <a-select-option value="succeed">成功</a-select-option>
                    <a-select-option value="unsuccessful">失败</a-select-option>
                </a-select>
            </a-input-group>
        </a-col>
        <a-col :xs="{ span: 7, offset: 15 }" :lg="{ span: 8, offset: 1 }" class="fr">
            <a-button type="primary" class="fome_Reset " >重置</a-button>
            <a-button type="primary" class="fome_seach " >搜索</a-button>
        </a-col>
    </a-row>
    <a-table :dataSource="data"  :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
        <a-table-column title="素材编号" dataIndex="taId" key="taId" />
        <a-table-column title="素材名称" dataIndex="taTtile" key="taTtile" />
        <a-table-column title="推送菜单" dataIndex="tmpModelsName" key="tmpModelsName">
          <template slot-scope="tmpModelsName">
            <span>
              <a-tag  v-show="tmpModelsName!==undefined" class="tmpModelsNameStype">{{tmpModelsName}}</a-tag>
            </span>
          </template>
        </a-table-column>
        <a-table-column title="推送状态" dataIndex="pushStatus" key="pushStatus"/>
        <a-table-column title="推送应用" dataIndex="taAppName" key="taAppName" />
        <a-table-column title="创建时间" dataIndex="pushDate" key="pushDate"/>
        <a-table-column title="接收人" dataIndex="userName" key="userName"/>
    </a-table>
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
          height: 32px;
          line-height: 32px;
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

import { queryUserPushLog } from '@/api/DocumentsPost'//请求
import { number } from 'prop-types';
import { debuglog } from 'util';
export default {
    props:{
        tmpIdData:{
            type:String,
            default:false,
        }
    },
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
    //分页器
    PaginChang(pagination){
      this.current=pagination.current
      this.length=pagination.pageSize
      this.pageSize = pagination.pageSize
      this.total = pagination.total
      this.queryUserPushLog()
    },
    //查询文章考试列表
    queryUserPushLog(){
        var param = {
            status:'',//状态 Y:启用，N:停用
            findName: '',//搜索内容
            id:this.tmpIdData,//推送文章ID
            offset:this.current ,//分页
            length:this.length ,//每页数据
        } 
        queryUserPushLog(param).then((res)=>{
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
       
      this.queryUserPushLog()
  }
}
</script>
