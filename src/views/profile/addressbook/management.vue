<template>
<Page-view>
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
                <a-menu @click="handleClick" :defaultSelectedKeys="['1']" :openKeys.sync="openKeys" mode="inline" >
                    <a-sub-menu key="sub1" @titleClick="titleClick">
                        <span slot="title"><a-icon type="caret-down" /><span>Navigation One</span></span>
                        <a-menu-item-group key="g1">
                            <template slot="title"><a-icon type="qq" /><span>Item 1</span></template>
                            <a-menu-item key="1">Option 1</a-menu-item>
                            <a-menu-item key="2">Option 2</a-menu-item>
                        </a-menu-item-group>
                        <a-menu-item-group key="g2" title="Item 2">
                            <a-menu-item key="3">Option 3</a-menu-item>
                            <a-menu-item key="4">Option 4</a-menu-item>
                        </a-menu-item-group>
                    </a-sub-menu>
                    <a-sub-menu key="sub2" @titleClick="titleClick">
                        <span slot="title"><a-icon type="caret-down" /><span>Navigation Two</span></span>
                        <a-menu-item key="5">Option 5</a-menu-item>
                        <a-menu-item key="6">Option 6</a-menu-item>
                        <a-sub-menu key="sub3" title="Submenu">
                            <a-menu-item key="7">Option 7</a-menu-item>
                            <a-menu-item key="8">Option 8</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>
                    <a-sub-menu key="sub4">
                        <span slot="title"><a-icon type="caret-down" /><span>Navigation Three</span></span>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                        <a-menu-item key="11">Option 11</a-menu-item>
                        <a-menu-item key="12">Option 12</a-menu-item>
                    </a-sub-menu>
                </a-menu>

            </div>
            <div class="organization_TapsDatails" v-show="organizationlistData==2">

            </div>
        </div>
    </div>
    <div class="fl address_Datails">
        <div class="organization_DatailsList">
            <div class="organization_DatailsList_titl">
                <span></span>
            </div>
            <a-row class="commen_list_title">
                <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span>序号</span></a-col>
                <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>姓名</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span>账号</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span>部门</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span>职位</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span>标签</span></a-col>
            </a-row>
            <a-row class="commen_list_ceation">
                <div class="list_ceation">
                    <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 1, offset: 0}"><span>1</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 2, offset: 1}"><span>张三四</span></a-col>
                    <a-col :xs="{ span: 1, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span>CH0000001</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span class="ellipsis_hidden">财务管理部</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}"><span class="ellipsis_hidden">费用核算专员</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :md="{ span: 3, offset: 2}">
                    <div class="souce_operation fl">
                        <div class="see fl">查看</div>
                        <span class="fl">|</span>
                        <div class="delete fl">删除</div>
                    </div>
                </a-col>
                </div>
            </a-row>
            <div class="commen_list_Pagination">
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
    </div>
</Page-view>
</template>

<style lang="less" scoped>
.address_book{width:208px;}
.address_Datails{width:992px;}


.ellipsis_hidden{
  overflow: hidden;
  word-break: normal;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}

.addressbook_management{
    min-width: 1200px;
    width: 1200px;
    background: #fff;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
}
.addressbook_management .organization_structure{
    width: 208px;
    border-right: 1px solid #e8e8e8;
    .organization_seach{
        padding: 20px 15px 0;
        height: 52px;
        width: 208px;
        .ant-input-suffix{
            right: 25px;
            font-size: 20px;
            top: 35px;
        }
    }
    .organization_list{
        padding:16px 13px 16px 14px;
        overflow: hidden;
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
                border-radius: 4px 0px 0px 4px;
                color: #fff;
            }
        }
    }
    
}
.addressbook_management .organization_listDatails{
     width: 208px;
}
.organization_DatailsList {
    width: 992px;
    .organization_DatailsList_titl{
        margin: 20px 22px 12px 14px;
        background: #E6F7FF;
        height: 30px;
        line-height: 30px;
        width: 954px;
        border: 1px solid #91D5FF;
        border-radius: 4px;
        span{
            font-size: 16px;
            color: #0C0000;
            letter-spacing: 0;
        }
    }
    .commen_list_title{
        margin: 0 24px;
        background: #EBECF0;
        font-size: 14px;
        color: #333333;
        font-weight: 600;
        height: 48px;
        line-height: 48px;
        div:nth-child(1){
            text-align: center;
        }
    }
    .commen_list_ceation{
        font-size: 14px;
        margin: 0 24px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e8e8e8;
        color: rgba(0,0,0,0.65);
        .list_ceation{
            div:nth-child(1){
                text-align: center;
            }
            div {
                span{
                    width: 90%;
                    height: 50px;
                }
            }
            .souce_operation {
                width: 100%;
                span{
                    width: 15px;
                }
                .delete{
                    color: #F44848;
                }
            }
        }
    }




    .commen_list_Pagination{
        overflow: hidden;
        .souce_Pagination{
            float: right;
            margin: 24px;
        }
    }
}





</style>



<script>

import { PageView } from '@/layouts'

export default {
    components:{
        PageView
    },
    data(){
        return{
            organizationlistData:1,//组织标签
            current: ['mail'],
            openKeys: ['sub1'],
        }
    },
    methods: {
        //组织标签搜索
        organizationSeach (value) {
            console.log(value)
        },
        //组织标签
        organizationlistClick(index){
            this.organizationlistData=index
        },
        //二级导航
        handleClick (e) {
           console.log('click', e)
        },
        titleClick (e) {
           console.log('titleClick', e)
        },
    },
    watch: {
        openKeys (val) {
            console.log('openKeys', val)
        },
    },
}
</script>
