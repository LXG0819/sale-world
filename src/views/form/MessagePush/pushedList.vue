<template>
    <div class="pushed_list">
         <div class="Message_addPush">
            <div @click="pushedListPush(1)" :class="[pushedListData==1?'addPush ':'']">评论列表</div>
            <div @click="pushedListPush(2)" :class="[pushedListData==2?'addPush':'']">点赞用户列表</div>
            <div @click="pushedListPush(3)" :class="[pushedListData==3?'addPush':'']">已读用户列表</div>
            <div @click="pushedListPush(4)" :class="[pushedListData==4?'addPush':'']">未读用户列表</div>
        </div>
        <comment-list  v-show="pushedListData==1"></comment-list>
    </div>
</template>

<style lang="less" scoped>
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
</style>


<script>


import commentList from './commentList'

export default {
    components:{
        commentList
    },
    data(){
        return{
            pushedListData:1
        }
    },
    methods:{
        //推送
        pushedListPush(index){
            this.pushedListData=index
        },
    }
}
</script>
