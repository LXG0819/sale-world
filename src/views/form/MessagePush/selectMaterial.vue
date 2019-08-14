<template>
    <div class="selectMaterial">
         <a-form :form="form" @submit="selectMaterialSubmit">
            <a-form-item label="选择素材" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <div class="Material_library fl" @click="Materiallibraryclick">
                    <a-icon type="plus" />
                    <span>从素材库选择素材</span>
                </div>
                <div class="add_Material fl" @click="addMaterialclick">
                    <a-icon type="plus" />
                    <span>新建素材</span>
                </div>
            </a-form-item>
            
        </a-form>
        <a-modal v-model="Materiallibrary" width="1026px" 
             title="选择素材" :footer="null">
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
            <a-row class="commen_list_title">
                <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1, offset: 0 }"><span></span></a-col>
                <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 2, offset: 0 }"><span>素材编号</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 5, offset: 1 }"><span>素材名称</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4, offset: 1}"><span>素材标签</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 1, offset: 1 }"><span>状态</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4, offset: 1 }"><span>创建时间</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2, offset: 1 }"><span>创建人</span></a-col>
            </a-row>
            <a-row class="commen_list_ceation">
                <div class="list_ceation">
                    <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1, offset: 0 }"><span class="text_align"><a-radio></a-radio></span></a-col>
                    <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 2, offset: 0 }"><span>CH0000001</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 5, offset: 1 }"><span class="ellipsis_hidden title">文章最大标题文章最大标题…</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4, offset: 1 }">
                        <span class="ellipsis_hidden">
                            <a-tag color="pink">pink</a-tag>
                            <a-tag color="red">red</a-tag>
                            <a-tag color="orange">orange</a-tag>
                        </span>
                    </a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 1, offset: 1 }"><span>启用</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4, offset: 1 }"><span class="ellipsis_hidden">2014-12-24  23:12:00</span></a-col>
                    <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2, offset: 1 }"><span>张三四</span></a-col>
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
            <div class="footer_button">
                <a-button type="primary" class="Pushscope fr"  @click="PushscopeshowOK(index)">确定</a-button>
            </div>
        </a-modal>
    </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}

.Material_library,.add_Material{
    background: rgba(0,0,0,0.02);
    border: 1px solid rgba(0,0,0,0.15);
    text-align: center;
    position: relative;
    border-radius: 4px;
    width: 144px;
    height: 132px;
    margin-left: 18px;
    .anticon{
        position: absolute;
        top: 30%;
        left: 43%;
        font-size: 24px;
        margin:0 auto;
        height: 24px;
        color: #bfbfbf;
    }
    span{
        font-size: 14px;
        position: absolute;
        bottom: 30%;
        left: 10%;
        color: #3A8EDC;
        line-height: 22px;
    }
}
.add_Material span{
    left: 32%;
}
.commen_list_Pagination{
    padding: 13px;
    overflow: hidden;
    .souce_Pagination{
      float: right;
      margin: 24px;
      
    }

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
} 
.from_input{
    width: 224px;
    height: 32px;
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
.title{
    color: #3A8EDC
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
.commen_list_title{
    background: #EBECF0;
    font-size: 14px;
    color: #333333;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
}
 .commen_list_ceation{
    font-size: 14px;
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
               /*  padding-right: 15px; */
                width: 90%;
                height: 50px;
            }
        }
    }
}

</style>



<script>


export default {
    data(){
        return{
            formLayout: 'horizontal',
            form: this.$form.createForm(this),//表单
            Materiallibrary: false,//model
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            current: 1,
            pageSize: 10,
            total: 50,


        }
    },
    methods: {
        //素材库
        Materiallibraryclick() {
            this.Materiallibrary = true;

        },
        //
        PushscopeshowOK() {
            this.Materiallibrary = false;

        },
        //新增
        addMaterialclick(){

        },
        //表单
        selectMaterialSubmit(e){
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        },
        //选择框
        ontimerChange(date, dateString) {
            console.log(date, dateString)
        }, 
        //分页
        onShowSizeChange(current, pageSize) {
            this.pageSize = pageSize
        },
        onSoucePagination(pageNumber){
             console.log('Page: ', pageNumber)
        }
    }
}
</script>


