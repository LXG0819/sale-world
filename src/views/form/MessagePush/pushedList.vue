<template>
    <div class="pushed_list">
        <div class="navigation_crumbs">
            消息推送<span>/</span><span>{{ pushedListData==1 ? '评论列表' : pushedListData==2 ? '点赞列表': pushedListData==3 ? '未读列表':'已读列表' }}</span>
        </div>
         <div class="Message_addPush">
            <div @click="pushedListPush(1)" :class="[pushedListData==1?'addPush ':'']">评论列表</div>
            <div @click="pushedListPush(2)" :class="[pushedListData==2?'addPush':'']">点赞用户列表</div>
            <div @click="pushedListPush(3)" :class="[pushedListData==3?'addPush':'']">已读用户列表</div>
            <div @click="pushedListPush(4)" :class="[pushedListData==4?'addPush':'']">未读用户列表</div>
        </div>
        <div class="secting_list">
            <a-row class="commen_list_seach">
                <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 8, offset: 0 }">
                    <span class="from_nameSpan">素材标签:</span> <a-input class="from_input" placeholder="请输入"/>
                </a-col>
                <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 8, offset: 0 }">
                    <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="ontimerChange" />
                </a-col>
                <a-col :xs="{ span: 7, offset: 15 }" :lg="{ span: 8, offset: 1 }" class="fr">
                    <a-button type="primary" class="fome_seach " >搜索</a-button>
                    <a-button type="primary" class="fome_Reset " >重置</a-button>
                    <a-button type="primary" class="fome_Reset " >导出</a-button>
                    
                </a-col>
            </a-row>
            <a-table  :columns="columns" :dataSource="data"
                :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang " />
                
        </div>
    </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
.commen_list_seach{
    overflow: hidden;
    font-size: 14px;
    padding-bottom: 15px;
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
.Message_addPush{
    min-width:1200px;
    overflow: hidden;
    div{
        width: 120px;
        float: left;
        margin-right: 6px;
        height: 40px;
        line-height: 40px;
        background: rgba(0,0,0,0.02);
        border: 1px solid rgba(0,0,0,0.15);
        font-size: 14px;
        text-align: center;
        color: rgba(0,0,0,0.65);
        box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.09);
        &.addPush{
            border: 1px solid #fff;
            background: #fff;
            font-size: 14px;
            color: #3A8EDC;
        }
    }
}
.secting_list{
    min-width: 1200px;
    padding: 24px;
    background: #fff;
}
</style>


<script>
const columns = [{
  title: '序号',
  dataIndex: 'row',
}, {
  title: '素材编号',
  dataIndex: 'taId',
}, {
  title: '素材名称',
  dataIndex: 'taTtile',
}, {
  title: '用户账号',
  dataIndex: 'uId',
}, {
  title: '用户姓名',
  dataIndex: 'cn',
}, {
  title: '所属部门',
  dataIndex: 'departmentsPositions',
}, {
  title: '创建时间',
  dataIndex: 'tadCreateDate',
}, ];


import { queryTrainCommentList,queryTrainAppreList,queryTrainNotReadList,queryTrainReadList } from '@/api/DocumentsPost'//请求
import { number } from 'prop-types';
import { debuglog } from 'util';

export default {
    components:{
        
    },
    data(){
        return{
            pushedListData:1,
            data:[],
            columns,
            taId:1,
            current:1,//请求页数
            length:10,//每页数据
            pageSize:10,//每页条数
            showQuickJumper:true,//分页跳转
            showSizeChanger:true,//分页数据变化
            total:11,//总数
            pageSizeOptions:['10', '20', '30', '40'],//
            selectedRowKeys: [], // Check here to configure the default column

        }
    },
    computed: {
        hasSelected() {
        return this.selectedRowKeys.length > 0
        }
    },
    methods:{
        //推送
        pushedListPush(index){
            this.pushedListData=index
            if(index==1){
                this.queryTrainCommentList()
            }else if(index==2){
                this.queryTrainAppreList()
            }else if(index==3){
                this.queryTrainNotReadList()
            }else if(index==4){
                this.queryTrainReadList()
            }

        },
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
            if(this.pushedListData==1){
                this.queryTrainCommentList()
            }else if(this.pushedListData==2){
                this.queryTrainAppreList()
            }else if(this.pushedListData==3){
                this.queryTrainNotReadList()
            }else if(this.pushedListData==4){
                this.queryTrainReadList()
            }
        },
        //选择的试卷
        SelectClick(record){

        },

        //查询文章评论列表
        queryTrainCommentList(){
            var param = {
                id: this.taId,//推送文章ID 否
                findName: '',//搜索内容 否
                strDate:'2019-07-01',//开始时间
                endDate:'2019-07-28',//结束时间
                offset:this.current ,//分页数
                length:this.length ,//查询条数
            } 
            queryTrainCommentList(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result
                    this.total =Number(res.result[0].zCount)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                        
            })
        },
        //查询文章点赞列表
        queryTrainAppreList(){
            var param = {
                id: this.taId,//推送文章ID 否
                findName: '',//搜索内容 否
                strDate:'2019-07-01',//开始时间
                endDate:'2019-07-28',//结束时间
                offset:this.current ,//分页数
                length:this.length ,//查询条数
            } 
            queryTrainAppreList(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result
                    this.total =Number(res.result[0].zCount)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                        
            })
        },
        //查询文章未读列表
        queryTrainNotReadList(){
            var param = {
                id: this.taId,//推送文章ID 否
                findName: '',//搜索内容 否
                offset:this.current ,//分页数
                length:this.length ,//查询条数
            } 
            queryTrainNotReadList(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result
                    this.total =Number(res.result[0].zCount)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                        
            })
        },
        //查询文章已读列表
        queryTrainReadList(){
            var param = {
                id: this.taId,//推送文章ID 否
                findName: '',//搜索内容 否
                strDate:'2019-07-01',//开始时间
                endDate:'2019-07-28',//结束时间
                offset:this.current ,//分页数
                length:this.length ,//查询条数
            } 
            queryTrainReadList(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result
                    this.total =Number(res.result[0].zCount)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                        
            })
        },
    },
    mounted(){
        this.taId = this.$route.query.taId
        this.queryTrainCommentList()
    }
}
</script>
