import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist

router.beforeEach((to, from, next) => {

  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
          var cookieStr = document.cookie
        function getCook(cname)
          {
            var name = cname + '='
            var ca = cookieStr.split(';')
            for(var i=0; i<ca.length; i++) 
            {
              var c = ca[i].trim()
              if (c.indexOf(name)==0) return c.substring(name.length,c.length)
            }
            return ''
          }
          var name = getCook('userName')
          var id = getCook('userId')
  //Vue.ls.get(ACCESS_TOKEN)
  if (id) {
    /* has token */
    if (to.path === '/') {
      next({ path: '/list/Source-list' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {

          store.dispatch('setinfo',{userName:name ,userId :id})  
        store
          .dispatch('GetInfo',)
          .then(res => {
            const roles = res.result && res.result.role
            console.log(roles)
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters)
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              console.log(redirect)
              if (to.path === redirect) {
                // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: redirect })
              }
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            store.dispatch('Logout').then(() => {
              next({ path: '/user/login', query: { redirect: to.fullPath } })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})