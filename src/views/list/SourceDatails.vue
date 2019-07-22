<template>
  <div class="source_datails">
    <div class="datails_title">
      标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
    </div>
    <div class="datails_times">
      <span>总时长:20分钟</span>
      <span>学分:20分钟</span>
    </div>
    <div class="datails_label">
      <div class="label_one">标签1</div>
      <div class="label_two">标签2</div>
      <div class="label_Three">标签3</div>
    </div>
    <div class="datails_centent">

    </div>
    <div class="datails_footer">
      <div class="footer_button">
        <a-button type="primary fr">确定</a-button>
        <a-button type="primary fr">取消</a-button>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.source_datails{min-width: 960px;background: #fff;}
.fl{float: left;}
.fr{float: right;}
.datails_title{
  font-size: 18px;
  color: #333333;
  height: 28px;
  line-height: 28px;
}
.datails_times{
  font-size: 14px;
  color: rgba(0,0,0,0.65);
  line-height: 22px;
  height: 22px;
  margin: 6px 0; 
}
.datails_label{
  width: 142px;
  margin-left: 24px;
  height: 100%;
  div{
    border-radius: 4px;
    float: left;
    margin: 15px 0;
    margin-right: 8px;
    height: 19px;
    padding: 0 2px;
    line-height: 19px;
    text-align: center;
    font-size: 11px;
  }
  .label_one{
    background: #FFF4F9;
    border: 1px solid #FFA7CE;
    color: #EC77AB;
  }
  .label_two{
    background: #FCFCFF;
    border: 1px solid #B2ADFF;
    color: #7972F5;
  }
  .label_Three{
    color: #3A8EDC;
    background: #F3F9FF;
    border: 1px solid #9ECFFC;
  }
}
.datails_centent{
  font-size: 14px;
  color: rgba(0,0,0,0.65);
  line-height: 22px;
}
.footer_button{
  border-top: #e8e8e8 solid 1px;
  overflow: hidden;
  width: 100%;
  padding: 20px 59px;
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
</style>



<script>
export default {
  data(){

  },
  methods:{

  },
}
</script>

