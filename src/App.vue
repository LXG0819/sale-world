<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
  #app {
    height: 100%;
  }
 .navigation_crumbs{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background: #F2F2F2;
    color: rgba(0,0,0,0.45);
    span:nth-child(1){
      margin:0 6px;
    }
    span:nth-child(2){
      color: #3A8EDC;
    }
    
  }
</style>
