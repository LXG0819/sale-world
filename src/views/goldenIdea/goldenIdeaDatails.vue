<template>
<Page-view>
    <div class="goldenIdea_datails">
        <div class="datails_title">
            {{data.title}}
        </div>
        <div class="datails_subheading">
            <span v-show="data.top=='Y'"  >置顶</span>
            <span>{{data.createTime}}</span>
            <span>{{data.position}}</span>
        </div>
        <div class="datails_centent">
            {{data.content}}
        </div>
        <div class="centent_img"  v-for="(item,index) in data.imageUrl" :key="index">
            <img   :src="item"  width="100%" alt="data.title" controls="controls" />
        </div>
        <div class="centent_video"  v-for="(item,index) in data.videoUrl" :key="index">
            <video  :poster="item.image"
            :src="item.video"  width="100%" controls="controls"></video>
        </div>
        <div class="datails_footer">
            <div class="footer_icon">
                <span><a-icon type="eye" />{{data.browse}}</span>
                <span><a-icon type="message" />{{data.comment}}</span>
                <span><a-icon type="like" />{{data.approve}}</span>
            </div>
            <div class="footer_button"> 
                <a-button type="primary" class="fr" @click="goldIdeaStatusClick()">{{data.status=='Y'?'停用':'启用'}}</a-button>
                <a-button type="primary" class="fr" @click="goldenIdeaDeteleClick()">删除</a-button>
            </div>
        </div>
        <div class="datails_review">
            <p>往期回顾</p>
            <a :href="'/goldenIdea/goldenIdeaDatails?goldIdeaId='+item.goldIdeaId" v-for="(item,index) in data.review" :key="index">{{item.title}}</a>
        </div>
    </div>
</Page-view>
</template>

<style lang="less" scoped>

.fr{
    float: right;
}
.fl{
  float: left;
}
.goldenIdea_datails{
    max-width: 960px;
    min-width: 960px;
    padding: 13px 100px 0;
    background: #fff;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
   
}
.fl{float: left;}
.fr{float: right;}
.datails_title{
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  line-height: 34px;
}
.datails_subheading{
    height: 30px;
    line-height: 30px;
    span{
        margin-right:30px;
    }
    span:nth-child(1){
        color: #F44848;;
        margin-right: 15px;
    }

}
.datails_centent{
    font-size: 14px;
    color: rgba(0,0,0,0.65);
    line-height: 22px;
}
.centent_img img,.centent_video  video{
    max-height: 500px;
    max-width: 960px;
    
}
.datails_footer {
    border-top: #e8e8e8 solid 1px;
    overflow: hidden;
    width: 100%;
    padding: 20px 59px 20px 100px;
    .footer_icon{
        color: #666666;
        float: left;
        span{
            margin-right: 72px;
        }
    }
    .footer_button{
        
        button{
            background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
            border-radius: 4px;
            color: #fff;  
            font-size: 16px;
            width: 104px;
            height: 40px;
            line-height: 40px;
            margin-left: 22px;
        }
    }
}
.datails_review{
    p{
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        height: 22px;
        line-height: 22px;
        padding: 3px 0;

    }
    a{
        color: #3A8EDC;
        line-height: 34px;
        height: 34px;
        display: block;
        width: 100%;
        padding:13px 0;
    }
}

</style>



<script>


import { goldIdeaDetails } from '@/api/DocumentsPost' //goldIdeaDelete，goldIdeaStatus
//测试阶段，发版请删除if判断
import { PageView } from '@/layouts'

export default {
    components:{
        PageView
    },
    data(){
        return{
            data:[],
        }
    },
    methods:{
        //删除
        goldenIdeaDeteleClick(){
            this.goldIdeaDelete()
        },
        //状态修改
        goldIdeaStatusClick(){
            this.goldIdeaStatus()
        },
        //详情
        goldIdeaDetails(){
            var param = {
                goldIdeaId:this.$route.query.goldIdeaId
            }
            goldIdeaDetails(param).then((res)=>{
                if(res.code == 0){
                    this.data =res.result
                    console.log(this.data)
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            })
        },
        //删除
        goldIdeaDelete(){
            var param = {
                goldIdeaId:this.$route.query.goldIdeaId
            }
            if(param.goldIdeaId==this.data.goldIdeaId){
                this.$message.success('删除成功');
                this.$router.push({
                    path:'/goldenIdea/goldenIdea',
                    query:{

                    }
                })
            }else{
                this.$message.error('删除失败');
            }
           /*  goldIdeaDelete(param).then((res)=>{
                if(res.code == 0){
                    this.$message.success(res.result+'成功');
                    this.$$router.push({
                        path:'/goldenIdea/goldenIdea',
                        query:{

                        }
                    })
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            }) */
        },
        //状态修改
        goldIdeaStatus(){
            var param = {
                goldIdeaId:this.data.goldIdeaId,
                status:this.data.status
            }
            if(param.goldIdeaId==this.data.goldIdeaId&&param.status==this.data.status){
                if(param.status=='Y'){
                    this.data.status='N'
                }else{
                    this.data.status='Y'
                }
                this.$message.success('状态修改成功');
            }else{
                this.$message.error('状态修改失败');
            }
            /* goldIdeaStatus(param).then((res)=>{
                if(res.code == 0){
                    this.goldIdeaDetails()
                }else{
                    this.$message.error(res.mag); 
                }
            }).catch((err)=>{
                    
            }) */
        },

    },
    mounted(){
        this.goldIdeaDetails()
    }
}
</script>
