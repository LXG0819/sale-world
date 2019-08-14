<template>
    <div class="MessagePush">
        <div class="navigation_crumbs">
            消息管理<span>/</span><span>{{Messageadddata==1?'新建推送':'已推送'}}</span>
        </div>
        <div class="Message_addPush">
            <div @click="MessageaddPush(1)" :class="[Messageadddata==1?'addPush ':'']">新建推送</div>
            <div @click="MessageaddPush(2)" :class="[Messageadddata==2?'addPush':'']">已推送</div>
        </div>
        <div class="Message_add" v-show="Messageadddata==1">
            <a-form :form="form" @submit="MessageAddtive">
                <a-form-item label="选择推送应用" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                     <a-select v-decorator="[ 'gender', {rules: [{ required: true, message: 'Please select your gender!' }]} ]"
                        placeholder="请选择"
                        @change="appChange"
                     >
                        <a-select-option :value="item.applicationId" v-for="(item ,index) in PushappList" :key="index">{{item.applicationName}}</a-select-option>
                    </a-select>                   
                </a-form-item>
                <a-form-item label="销傲天下" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-cascader
                        v-decorator="[
                        'residence',{rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],}]"
                        :options="lableData"
                    />
                </a-form-item>
                <a-form-item label="选择推送范围" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"  >
                    <a-button type="primary" class="Pushscope"  @click="PushscopeshowModal">请选择</a-button>
                    <a-modal
                        title="选择发送范围"
                        width="676px"
                        :footer="null"
                        v-model="Treemodel"
                        >
                        <div class="Push_scope_left">
                            <a-input-search placeholder="input search text" class="search" @search="onSearch" />
                            <div class="organizational_structure">
                                <div class="structure fl">组织架构</div>
                                <div class="ladel fl">标签</div>
                            </div>
                            <div class="Tree">
                                 <a-tree
                                    :treeData="treeData"
                                    showIcon
                                    loadData
                                    checkable
                                    checkStrictly
                                    @check="checkBOXClick"
                                >
                                   
                                    <a-icon slot="smile" type="smile-o" />
                                    <a-icon slot="meh" type="smile-o" />
                                    <template slot="custom" slot-scope="{selected}">
                                    <a-icon :type="selected ? 'frown':'frown-o'" />
                                    </template>
                                </a-tree>
                            </div>
                        </div>
                        <div class="Push_scope_right">
                            <div class="title">已选择的部门、成员或者标签</div>
                            <div class="select">
                                <template v-for="(item, index) in TagsData">
                                    <a-tag :value="item" :key="index" closable  class="Tree_Tags" :afterClose="() => TagsDetele(item)">
                                        {{item.data.props.title}}
                                    </a-tag>
                                </template>
                            </div>
                            <div class="footer_button">
                                <a-button type="primary" class="Pushscope fr"  @click="PushscopeshowOK()">确定</a-button>
                            </div>
                        </div>
                        
                    </a-modal>
                </a-form-item>
                <select-material></select-material>
                <a-form-item label="关联试卷" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
                    <a-form-item v-show="TrainExamShow == 1 " >
                    <a-button type="primary" class="Pushscope"  @click="examinationshowModal" >请选择</a-button>
                    </a-form-item>
                    <a-form-item  v-show="TrainExamShow == 2 " >
                     <a-tag closable @close="TrainExamShow = 1" >{{TrainExamData.tatTitle}}</a-tag>    
                    </a-form-item>
                </a-form-item>
                <a-form-item label="发送设置" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-radio-group v-decorator="['ToDoMessage']" name="ToDoMessage">
                        <a-radio value="a">发送待办消息</a-radio>
                        <a-radio value="b">不发送待办消息</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 9, offset: 15 }" class="footer_item">
                    <div class="footer_button">
                        <a-button type="primary" class="fr" >推送</a-button>
                        <a-button type="primary" class="fr"  @click="previewshowModal" >预览</a-button>
                    </div>
                </a-form-item>
            </a-form>
        </div>
        <a-modal title="选择试卷" v-model="examination" width="1067px" :footer="null">
            <select-examination  @SelectClick="SelectClick" @SelectshowOK="SelectshowOK"></select-examination>
        </a-modal>
        <a-modal title="预览" v-model="preView" width="676px" :footer="null">
            <div class="preview_Model">

            </div>

        </a-modal>
        <message-section class="Message_Pushtion" v-show="Messageadddata==2"></message-section>
    </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
.Message_addPush{
    min-width:960px;
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
.Message_add{
    padding-top: 24px;
    min-width: 960px;
    background: #fff;
    .footer_item{
        border-top: #e8e8e8 solid 1px;
        .footer_button{
            overflow: hidden;
            width: 100%;
            padding: 20px 59px;
            button{
                background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
                border-radius: 4px;
                border-color:#fff;
                color: #fff;  
                font-size: 16px;
                width: 104px;
                height: 40px;
                line-height: 40px;
                margin-left: 22px;
            }
        }
    }
    
}
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
.Push_scope_left{
    width: 60%;
    float: left;
    border-right: 1px solid #e8e8e8;
    .search{
        width: 100%;
        padding: 13px;
    }
    .organizational_structure{
        padding: 0 13px;
        width: 100%;
        overflow: hidden;
        .structure{
            width: 90px;
            background: #3A8EDC;
            border: 1px solid #1890FF;
            border-radius: 4px 0px 0px 4px;
            font-size: 14px;
            height: 24px;
            text-align: center;
            padding: 0 6px;
            color: #FFFFFF;
            line-height: 24px;
        }
        .ladel{
            width: 90px;
            background: #fff;
            border: 1px solid #D9D9D9;
            border-radius: 0px 4px 4px 0px;
            font-size: 14px;
            height: 24px;
            text-align: center;
            padding: 0 6px;
            color: rgba(0,0,0,0.65);
            line-height: 24px;
            
        }
    }
    .Tree{
        height: 500px;
        overflow-y: scroll;


    }
}
.Push_scope_right{
    width: 40%;
    float: right;
    padding: 13px;
    .title{
        width: 100%;
        padding: 13px 0;
    }
    .select{
        width: 100%;
        height:500px;
    }
    .footer_button{
        padding: 13px 0;
        width: 100%;
    }
}
.Tree_Tags{
    height: 40px;
    line-height: 28px;
    width: 100%;
    color: rgba(0,0,0,0.65);
    font-size: 16px;
    border: none;
    background: none;
    padding: 6px 0;
}
.preview_Model{
    width: 375px;
    height: 667px;
    margin: 0 auto;
    padding-bottom: 20px;
}


</style>


<script>
import selectMaterial from './MessagePush/selectMaterial' //选择素材
import messageSection from './MessagePush/messageSection' //已推送
import selectExamination from './MessagePush/selectExamination' //已推送
import { AppList,queryModelList,queryDepartmentList,queryTrainExamList } from '../../api/DocumentsPost'//请求
import { constants } from 'crypto';
import { object } from 'prop-types';


export default {
    components:{
        selectMaterial,
        messageSection,
        selectExamination
        
    },
    data(){
       return{
            current:1,//试卷分页
            length:10,//条数
            userIdData:"liangxingfu",
            Messageadddata:2,//推送列表
            formLayout: 'horizontal',
            form: this.$form.createForm(this),//表单
            Treemodel: false,//Treemodel
            examination: false,//选择试卷model
            PushappList:[],
            selectAppId :'TV_XATX',
            lableData : [],
            treeData:[],//Tree
            TagsData:[],
            TrainExamData:{},//选择试卷
            TrainExamShow: 1 ,
            preView:false,//预览

            //tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
           
            
       }
    },
    methods:{
        //应用选择
        appChange(e){
            this.selectAppId = e
            this.queryModelList()
        },
        //应用标签选择
        labelChange(){
           
        },
        //推送
        MessageaddPush(index){
            this.Messageadddata=index
        },
        //表单
        MessageAddtive (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
            },
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        //推送范围
        PushscopeshowModal() {
            this.Treemodel = true
        },
        PushscopeshowOK(e) {
            console.log(e);
            this.Treemodel = false
        },
        //tree搜索
        onSearch(){

        },
        //Tree
        checkBOXClick (checkedKeys, info) {
            this.TagsData =info.checkedNodes
            console.log(this.TagsData)
        },
        //tags
        TagsDetele(removedTag){
            console.log(removedTag)
            const tags = this.TagsData.filter(item => item !== removedTag)
            console.log(tags)
            this.TagsData = tags
            console.log(this.TagsData)
        },
        //选择试卷
        examinationshowModal() {
            this.examination = true
        },
        SelectClick(record) {
            this.TrainExamData = record
        },
        //选择试卷Model确定
        SelectshowOK(index){
            if(index==1){
                this.examination=false
                this.TrainExamShow = 2
            }else{
                this.examination=true
            }
        },
        //预览Model
        PushscopeshowModal() {
            this.preView = true
        },
        //请求获取应用列表
        AppList(){
           var param = {
               userId :  this.userIdData
            } 
            AppList( param).then((res)=>{
                if(res.code == 0){
                    this.PushappList=res.result    
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            })
        },
        //应用标签列表
        queryModelList(){
           var param = {
               userId : this.userIdData,
               applicationId : this.selectAppId
            } 
            queryModelList(param).then((res)=>{
                if(res.code == 0){
                    this.lableData = res.result
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                   
            })
        },
        //获取组织架构
        queryDepartmentList(){
            var param = {
               userId :  this.userIdData,
            } 
            queryDepartmentList(param).then((res)=>{
                if(res.code == 0){
                    this.treeData = res.result
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
        },
        //
        init(){
            this.AppList()
            this.queryModelList()
            this.queryDepartmentList()
            this.form.setFieldsValue({
                gender: this.selectAppId,
            })            
        }
    },
    mounted(){
      this.init()

      
    }
}
</script>

