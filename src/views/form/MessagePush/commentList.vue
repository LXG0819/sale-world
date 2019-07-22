<template>
    <div class="commen_list">
        <a-row class="commen_list_seach">
            <a-col :xs="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }">
                <div class="">
                <span class="from_nameSpan">素材名称:</span> <a-input class="from_input" placeholder="请输入"/>
                </div>
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <span class="from_nameSpan">创建时间:</span> <a-range-picker class="from_input" @change="onChange" />
            </a-col>
            <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <div class="">
                    <a-button type="primary" class="fome_seach fl" >搜索</a-button>
                    <a-button type="primary" class="fome_Reset fl" >重置</a-button>
                    <a-button type="primary" class="fome_Export fl" >导出</a-button>
                </div>
            </a-col>
        </a-row>
        <a-row class="commen_list_title">
            <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1}"><span>序号</span></a-col>
            <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 3}"><span>素材编号</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span>素材名称</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span>评论内容</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2}"><span>用户账号</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2}"><span>创建人</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span>所属部门</span></a-col>
            <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span>创建时间</span></a-col>
        </a-row>
        <a-row class="commen_list_ceation">
            <div class="list_ceation">
                <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 1}"><span>1</span></a-col>
                <a-col :xs="{ span: 1, offset: 0.5 }" :lg="{ span: 3}"><span>CH0000001</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span class="ellipsis_hidden">文章最大标题文章最大标题…</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span class="ellipsis_hidden">文章最大标题文章最大标题…</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2}"><span>1233456</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 2}"><span>张三四</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span class="ellipsis_hidden">南宁商务中心桂柳分部-南宁…</span></a-col>
                <a-col :xs="{ span: 2, offset: 0.5 }" :lg="{ span: 4}"><span class="ellipsis_hidden">2014-12-24  23:12:00</span></a-col>
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
</template>

<style lang="less" scoped>
.ellipsis_hidden{
  overflow: hidden;
  word-break: normal;
  text-overflow: ellipsis;
}
.fl{
  float: left;
}
.commen_list{
    background: #fff;
    min-width: 1200px;
    width: 1200px;
}
.commen_list_seach{
    overflow: hidden;
    padding: 24px;
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
.fome_seach{
    background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
    border-radius: 4px;
    color: #fff;
    margin-left: 5px;
    }
.fome_Reset,.fome_Export{
    border: 1px solid #3A8EDC;
    margin-left: 20px;
    border-radius: 4px;
    width: 74px;
    height: 32px;
    background: #fff;
    color: #3A8EDC;
}
.commen_list .commen_list_title{
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
.commen_list .commen_list_ceation{
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
               /*  padding-right: 15px; */
                width: 90%;
                height: 50px;
            }
        }
    }
}
.commen_list .commen_list_Pagination{
    overflow: hidden;
    .souce_Pagination{
      float: right;
      margin: 24px;
      
    }

} 
</style>



<script>
export default {
    data(){
        return{
            current: 1,
            pageSize: 10,
            total: 50,
        }
    },
    methods:{
        //选择框
        onChange(date, dateString) {
            console.log(date, dateString)
        }, 
        //分页
        onShowSizeChange(current, pageSize) {
            this.pageSize = pageSize
        },
        onSoucePagination(pageNumber){
             console.log('Page: ', pageNumber)
        }
    },

}
</script>
