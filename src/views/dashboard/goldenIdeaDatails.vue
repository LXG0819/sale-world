<template>
<Page-view>
    <div class="goldenIdea_datails">
        <div class="datails_title">
            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
        </div>
        <div class="datails_subheading">
            <span>置顶</span>
            <span>2019-06-13</span>
            <span>长沙商务中心岳阳分步五星销售代表</span>
        </div>
        <div class="datails_centent">
            国内高端智能电视产品不能满足国内日渐庞大的高端用户群体的使用需求，市场亟待一款除了具有旗舰视
            听属性的产品外，还需要在外观和功能上都有着可与之需求匹配的产品出现。10月30日，“中国品牌·世
            界共享”2018大国品牌年度峰会在京召开，会上，TCL联合国美举办了一场中国首发仪式，发布了旗
            下最新款原色量子点电视TCL X8 QLED TV
        </div>
        <div class="datails_footer">
            <div class="footer_icon">
                <span><a-icon type="eye" /></span>
                <span><a-icon type="message" /></span>
                <span><a-icon type="like" /></span>
            </div>
            <div class="footer_button"> 
                <a-button type="primary" class="fr">停用</a-button>
                <a-button type="primary" class="fr">删除</a-button>
            </div>
        </div>
        <div class="datails_review">
            <p>往期回顾</p>
            <a href="##">往期回顾标题往期回顾标题往期回顾标题往期回顾标题</a>
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
    min-width: 960px;
    background: #fff;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
   
}
.fl{float: left;}
.fr{float: right;}
.datails_title{
  font-size: 18px;
  padding: 13px 100px 0;
  font-weight: 600;
  color: #333333;
  line-height: 34px;
}
.datails_subheading{
    padding: 0 100px ;
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
    padding: 0 100px ;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
    line-height: 22px;
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
    padding: 0 100px 50px;
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
            
        }
    },
    methods:{

    },
}
</script>
