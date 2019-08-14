<template>
<Page-view>
    <div class="navigation_crumbs">
        通讯录<span>/</span><span>通讯录管理</span>
    </div>
<div class="addressbook_PageView">
    <div class="fl address_book">
        <div class="addressbook_management">
            <div class="organization_structure">
                <a-input-search class="organization_seach" placeholder="input search text"  @search="organizationSeach"/>
                <div class="organization_list">
                    <div class="organization_Manag fl" @click="organizationlistClick(1)" 
                    :class="[organizationlistData==1?'organization_stype':'']">
                        组织架构
                    </div>
                    <div class="organization_taps fl"  @click="organizationlistClick(2)" 
                    :class="[organizationlistData==2?'organization_stype':'']">
                        标签
                    </div>
                </div>
            </div>
            <div class="organization_listDatails" v-show="organizationlistData==1">
                <a-tree
                    :treeData="treeData"
                    showIcon
                    selectable
                    checkStrictly
                    @select="SelectClick"
                >
            </a-tree>
            </div>
            <div class="organization_TagsDatails" v-show="organizationlistData==2">
                <div class="mine_tags">
                    <span>我的标签</span>
                    <div class="mine_tags_ivu fr" @click="TagsshowModal"><a-icon type="plus"  class="icon_addtags"/></div>
                    <a-modal title="新增标签" v-model="visible" @ok="TagshandleOk" width="483px">
                        <p>标签名称:</p>
                        <a-select showSearch placeholder="如行政/财务/华南区/领导" optionFilterProp="children" style="width:100%;"
                            @focus="handleFocus"  @blur="handleBlur" @change="handleChange" :filterOption="filterOption">
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="tom">Tom</a-select-option>
                        </a-select>
                    </a-modal>
                </div>
                <div class="mine_tagslist" v-for=" (item,index) in LabelListData" :key="index">
                    <a-icon type="tag" class="mine_tagslist_left fl"/>
                    <div class="fl" :style="{width:'80%'}" @click="LabeltitleClick(item)">{{item.title}}</div>
                    <a-popover   trigger="click" :overlayStyle="{width:'88px',padding:'16px,12px'}"  placement="bottom">
                        <template slot="content">
                        <p>修改名称</p>
                        <p>删除</p>
                        </template>
                        <a-icon type="dash"  class="mine_tagslist_right fr"/>
                    </a-popover>
                </div>
                
            </div>
        </div>
    </div>
    <div class="fr address_Datails">
        <div class="organization_DatailsList" v-show="selectShow==true">
            <div class="organization_DatailsList_titl">
                <div class="organization_list_title fl" :class="organizationlistData==2?'stype':''">
                  {{organization}} <span>{{Manag}}</span>人
                </div>
                <div class="commen_list_addRemove fr" v-show="organizationlistData==2">
                    <div class="commen_list_add fl">添加部门/成员</div>
                    <div class="commen_list_Patchremove fl">批量移出</div>
                </div>
            </div>
            <a-table :dataSource="data"  :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect:SelectClick }"
                :pagination="{ pageSizeOptions: pageSizeOptions, showQuickJumper,showSizeChanger,total,pageSize}" @change="PaginChang">
                    <a-table-column title="姓名" dataIndex="userName" key="userName" />
                    <a-table-column title="账号" dataIndex="userId" key="userId" />
                    <a-table-column title="部门" dataIndex="department" key="department" />
                    <a-table-column title="职位" dataIndex="position" key="position" />
                    <a-table-column title="操作" key="data">
                        <template slot-scope="data" >
                        <div>
                            <a-tooltip placement="bottom" trigger="click" @visibleChange="(visible)=>ExamineClick(data)" >
                                <template slot="title">
                                    <span>{{labeldata.length==0?'暂无标签':labeldata}}</span>
                                </template>
                                <span :style="{color: '#0086ff'}">查看</span>
                            </a-tooltip>
                            <a-divider type="vertical" />
                            <a href="javascript:;" class="btn_action" @click="menuRedactClick(data)">编辑</a>
                        </div>
                        </template>
                    </a-table-column>
                </a-table>
        </div>
        <div class="select_staff" v-show="selectShow==false">请选择成员/部门或标签</div>
    </div>
    
</div>
</Page-view>
</template>

<style lang="less" scoped>
.address_book{width:238px;padding:20px 15px;border-right: 1px solid #e8e8e8;}
.address_Datails{width:992px;}
.addressbook_PageView{
    overflow: hidden;
    background: #fff;
    min-width: 1250px;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
}

.ellipsis_hidden{
  overflow: hidden;
  word-break: normal;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}
.fr{
    float: right;
}

.addressbook_management{
    width: 100%;
}
.addressbook_management .organization_structure{
    width: 208px;
    
    .organization_seach{
        height: 32px;
        width: 208px;
    }
    .organization_list{
        padding:16px 13px 16px 14px;
        overflow: hidden;
        border-bottom: 1px solid #e8e8e8;
        text-align: center;
        .organization_Manag,.organization_taps{
            background: #FFFFFF;
            border: 1px solid #D9D9D9;
            width: 90px;
            height: 24px;
            line-height: 24px;
            border-radius: 4px 0px 0px 4px;
            &.organization_stype{
                background: #3A8EDC;
                border: 1px solid #1890FF;
                color: #fff;
            }
        }
        .organization_taps{
            border-radius: 0px 4px  4px 0px;
        }
    }
    
}
.addressbook_management .organization_listDatails{
     width: 208px;
     min-height: 500px;
     overflow-x: auto;
     height: 100%;


}
.addressbook_management .organization_TagsDatails{
    width: 208px;
    .mine_tags{
        height: 45px;
        line-height: 24px;
        padding: 13px 14px 8px;
        width: 207px;
        color: #595959;
        font-size: 14px;
        .mine_tags_ivu{
            width: 24px;
            height: 24px;
            background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
            border-radius: 4px;
            text-align: center;
            .icon_addtags{
                line-height: 24px;
                color: #fff;
                font-size: 16px;
            }
        }
    }
    .mine_tagslist{
        width: 207px;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        .mine_tagslist_left{
            color: #7972F5;
            font-size: 14px;
            padding-right: 6px;
            height: 40px;
            line-height: 40px;
        }
        span{
            color: rgba(0,0,0,0.85);
            font-weight: 600;

        }
        .mine_tagslist_right{
            color: #7972F5;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
    }
}
.organization_DatailsList {
    width: 992px;
    .organization_DatailsList_titl{
        margin: 20px 22px 12px 14px;
        overflow: hidden;
        .organization_list_title{
            background: #E6F7FF;
            height: 30px;
            width: 100%;
            line-height: 30px;
            border: 1px solid #91D5FF;
            border-radius: 4px;
            &.stype{
                width: 696px;
            }
            span{
                font-size: 16px;
                color: #0086ff;
                letter-spacing: 0;
            }
        }
        .commen_list_addRemove{
            .commen_list_add,.commen_list_Patchremove{
                border: 1px solid #3A8EDC;
                border-radius: 4px;
                width: 109px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                color: #3A8EDC;
                text-align: center;
                margin-left: 20px;
            }
        }
        
    }
}
.select_staff{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height:600px;
    min-height: 600px;
}

</style>



<script>

import {organizationTree,orgPersonnel,personnelLabel,labelList,labelUser } from '../../api/DocumentsPost'//请求

import { PageView } from '@/layouts'
import { message } from 'ant-design-vue'

export default {
    components:{
        PageView
    },
    data(){
        return{
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            organizationlistData:1,//组织标签
            visible: false,//
            treeData:[],////Tree
            userIdData:"liangxingfu",
            selectShow:false,//选择人员
            organization:'',//机构名称
            Manag:'',//机构人数
            orgId:'',//
            data:[],//查询组织机构下拉树
            current:1,//请求页数
            length:10,//每页数据
            pageSize:10,//每页条数
            showQuickJumper:true,//分页跳转
            showSizeChanger:true,//分页数据变化
            total:10,//总数
            pageSizeOptions:['10', '20', '30', '40'],//
            selectedRowKeys: [], // Check here to configure the default column
            labeldata:[],//人员绑定标签查看
            personnelId:'',//人员绑定id
            LabelListData:[],//
            labelId:'',//标签绑定人员列表
            Labeltotal:'',//标签绑定人员列表总数
            Labeldata:[],//标签绑定人员列表数据
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
        //组织标签搜索
        organizationSeach (value) {
            console.log(value)
        },
        //组织标签
        organizationlistClick(index){
            this.organizationlistData=index
        },
        //添加标签
        TagsshowModal() {
            this.visible = true
        },
        TagshandleOk(e) {
            console.log(e);
            this.visible = false
            
        },
        //添加标签输入框
        handleChange (value) {
            console.log(`selected ${value}`);
        },
        handleBlur() {
            console.log('blur');
        },
        handleFocus() {
            console.log('focus');
        },
        filterOption(input, option) {
            return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            
        },
        //Tree
        SelectClick(checkedKeys, info) {
            this.orgId= info.node.eventKey
            this.organization= info.node.title
            this.selectShow=true
            this.orgPersonnel()
        },
        //编辑
        menuRedactClick(data){
         
           
        },
        //查看
        ExamineClick(data){
            this.personnelId=data.userId
            this.personnelLabel()
            console.log(data)
        },
        //分页器
        PaginChang(pagination){
            this.current=pagination.current
            this.length=pagination.pageSize
            this.pageSize = pagination.pageSize
            this.total = pagination.total
            this.goldIdeaList()
        },
        //Labeltitle
        LabeltitleClick(data){
            console.log(data)
            this.labelId=data.key
            this.labelUser()
        },
        //获取组织架构
        organizationTree(){
            var param = {
              
            } 
            organizationTree(param).then((res)=>{
                if(res.code == 0){
                    this.treeData = res.result
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
        },
        //标签列表
        
        labelList(){
            var param = {
              userId:this.userIdData,
            } 
            labelList(param).then((res)=>{
                if(res.code == 0){
                    this.LabelListData = res.result
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
        },
        //标签绑定人员列表
        labelUser(){
            var param = {
                labelId:this.labelId,
                page:this.current ,//分页数
                size:this.length ,//查询条数
            } 
            labelUser(param).then((res)=>{
                if(res.code == 0){
                    this.labeldata = res.result.personnel
                    console.log(this.labeldata)
                    this.Labeltotal=res.result.total
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
        },
        //人员绑定标签查看
        personnelLabel(){
            var param = {
                userId:this.userIdData,
                personnelId:this.personnelId,
            } 
            personnelLabel(param).then((res)=>{
                if(res.code == 0){
                    this.labeldata = res.result
                    console.log(this.labeldata)
                   
                    
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{

            })
        },
        
        init(){
            this.organizationTree()   
            this.labelList()       
        },
    },
    mounted(){
      this.init()

      
    }
}
</script>
