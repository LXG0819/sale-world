<template>
<Page-view>
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
                <div class="mine_tagslist">
                    <a-icon type="tag" class="mine_tagslist_left fl"/>
                    <span>六星级销代</span>
                    <a-popover  trigger="hover">
                        <template slot="content">
                        <p>Content</p>
                        <p>Content</p>
                        </template>
                        <a-icon type="dash"  class="mine_tagslist_right fr"/>
                    </a-popover>
                </div>
                
            </div>
        </div>
    </div>
    <div class="fl address_Datails">
        <div class="organization_DatailsList">
            <div class="organization_DatailsList_titl">
                <div class="organization_list_title fl" :class="organizationlistData==2?'stype':''">
                   11期飞鹰<span>1w</span>人
                </div>
                <div class="commen_list_addRemove fr" v-show="organizationlistData==2">
                    <div class="commen_list_add fl">添加部门/成员</div>
                    <div class="commen_list_Patchremove fl">批量移出</div>
                </div>
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
                    <div class="souce_operation fl" v-show="organizationlistData==1">
                        <div class="see fl">
                            <a-popover  placement="bottomRight" trigger='hover'>
                                <template slot="content">
                                    <div class="content_tags">
                                        标签
                                    </div>
                                    <div class="Tags_View_bottom">
                                        <div class="add_Tags fl">新增标签</div>
                                        <div class="compile_Tags fr">编辑</div>
                                        <div class="cancel_Tags fr">取消</div>
                                    </div>
                                </template>
                               <!--  <span slot="title">Title</span> -->
                                <span>查看</span>
                            </a-popover>
                        </div>
                        <div class="fl">|</div>
                        <div class="delete fl">
                            删除
                        </div>
                    </div>
                    <div class="commen_list_remove" v-show="organizationlistData==2">
                        <span>移出</span>
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
    
</div>
</Page-view>
</template>

<style lang="less" scoped>
.address_book{width:208px;}
.address_Datails{width:992px;}
.addressbook_PageView{
    overflow: hidden;
    background: #fff;
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
    min-width: 1200px;
    width: 1200px;
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
                border-radius: 4px 0px 0px 4px;
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
}
.addressbook_management .organization_TagsDatails{
    width: 208px;
    border-right: 1px solid #e8e8e8;
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
                color: #0C0000;
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
    .commen_list_title{
        margin: 0 14px;
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
                .see{
                    padding: 0 6px;
                    span{
                        width: 15px;
                        color: #3A8EDC;
                    }
                    
                }
                
                .delete{
                    padding: 0 6px;
                    color: #F44848;
                }
            }
            .commen_list_remove{
                color: #3A8EDC;
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
            current: ['mail'],
            openKeys: ['sub1'],
            visible: false,//
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
        //
        confirm () {
            message.info('Clicked on Yes.')
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
            }
        },
    watch: {
        openKeys (val) {
            console.log('openKeys', val)
        },
    },
}
</script>
