<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
      <router-link
        v-if="item.name != name && index != 1"
        :to="{ path: item.path === '' ? '/' : item.path }"
      >{{ item.meta.title }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      breadList: []
    }
  },
  created () {
    this.getBreadcrumb()
    this.breadList.splice(0,1)
    
  },
  methods: {
    getBreadcrumb () {
      this.breadList = []
      // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

      this.name = this.$route.name
       
      this.$route.matched.forEach(item => {
        // item.name !== 'index' && this.breadList.push(item)
        this.breadList.push(item)
        

      })
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
      this.breadList.splice(0,1)
     
    }
  }
}
</script>

<style scoped>
span .ant-breadcrumb-link span{
      color: #3A8EDC;

}
</style>
