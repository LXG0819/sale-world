<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <img src="../../images/logo.png" alt="">
    </router-link>
  </div>
</template>
<style lang="less" scoped>
.header-animat .ant-layout-header .top-nav-header-index .header-index-wide .header-index-left .logo .router-link-active img{
  width: 60px;
  height: 37px;
}
</style>


<script>
/* import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: 'Ant Design Pro',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
} */
</script>
