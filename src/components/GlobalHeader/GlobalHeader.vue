<template>
  <transition name="showHeader">
    <div v-if="visible" class="header-animat">
      <a-layout-header v-if="visible" class="header_fixedHeader" :style="{ padding: '0' }">
        <div  :class="['nav_header_index', theme]">
          <div class="header_index_wide">
            <div class="header_index_left">
              <logo class="top-nav-header" :show-title="device !== 'mobile'"/>
              <s-menu v-if="device !== 'mobile'" mode="horizontal" class="Sment_list" :menu="menus" :theme="theme" 
              @click="ontitleclick('1')"/>
            </div>
            <user-menu class="header_index_right"></user-menu>
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.header-animat .header_fixedHeader{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.2s;
  height: 60px;
  line-height: 60px;
  background-image: linear-gradient(90deg, #EC77AB 0%, #7972F5 60%, #3A8EDC 100%);
  .nav_header_index{
    .header_index_wide{
      max-width: 1200px;
      margin: auto;
      padding-left: 0;
      display: flex;
      height: 64px;
      .header_index_left{
        flex: 0 1 1000px;
        display: flex;
        .Sment_list{
          margin-left: 210px;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          color: #fff;
          background: none;
          
        }
      }
      .header_index_right{
        flex: 1 0 auto;
        height: 60px;
        float: right;
        overflow: hidden;
      }
    }

  }
}

</style>

<script>
import UserMenu from '../tools/UserMenu'
import SMenu from '../Menu/'
import Logo from '../tools/Logo'
import { mixin } from '@/utils/mixin'

export default {
  name: 'GlobalHeader',
  components: {
    UserMenu,
    SMenu,
    Logo
  },
  mixins: [mixin],
  props: {
    mode: {
      type: String,
      // sidemenu, topmenu
      default: 'sidemenu'
    },
    menus: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    device: {
      type: String,
      required: false,
      default: 'desktop'
    }
  },
  data () {
    return {
      visible: true,
      oldScrollTop: 0
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  methods: {
    handleScroll () {
      if (!this.autoHideHeader) {
        return
      }

      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (!this.ticking) {
        this.ticking = true
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true
          }
          this.oldScrollTop = scrollTop
          this.ticking = false
        })
      }
    },
    toggle () {
      this.$emit('toggle')
    }
  },
  beforeDestroy () {
    document.body.removeEventListener('scroll', this.handleScroll, true)
  },
  ontitleclick(index){
      console.log(index)
  }
}
</script>