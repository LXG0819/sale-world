import Vue from 'vue'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

/**
 * 临时添加跳过登录
 */
// const result = {
//   'id': '4291d7da9005377ec9aec4a71ea837f',
//   'name': '天野远子',
//   'username': 'admin',
//   'password': '',
//   'avatar': '/avatar2.jpg',
//   'status': 1,
//   'telephone': '',
//   'lastLoginIp': '27.154.74.117',
//   'lastLoginTime': 1534837621348,
//   'creatorId': 'admin',
//   'createTime': 1497160610259,
//   'merchantCode': 'TLif2btpzg079h15bk',
//   'deleted': 0,
//   'roleId': 'admin',
//   'role': {}
// }
import result from './userInfo'

const user = {
  state: {
    token: '',
    name: '穆静',
    username : 'muj',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_USERNAME: (state,  username) => {
      state.username = username
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, data ,type) {
      if(data.userName){
        commit('SET_NAME',{name: data.userName, welcome: welcome()})
      }
      if(data.userId){
        commit('SET_USERNAME', data.userId)   
      }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            Vue.ls.set(ACCESS_TOKEN, data, 0.5 * 60 * 60 * 1000)
            commit('SET_TOKEN', data)
            resolve()
            if (!data) {
              reject(new Error())
            }
          }, 100)
          // login(userInfo).then(response => {
          //   const result = response.result
          //   Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          //   commit('SET_TOKEN', result.token)
          //   resolve()
          // }).catch(error => {
          //   reject(error)
          // })
        })
    },
    // 获取cookie设置
    setinfo({ commit },data){
      if(data.userName){  
        commit('SET_NAME',{name: data.userName, welcome: welcome()})
      }
      if(data.userId){
        commit('SET_USERNAME', data.userId)   
      }
    },
    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const response = {
            code: 0,
            message: '',
            result,
            timestamp: 1560479153760
          }
          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
  
          // commit('SET_NAME', { name: result.name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)
  
          resolve(response)
        }, 100)
      })
    },
    // GetInfo ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo().then(response => {
    //       const result = response.result
    //       console.log(response)
    //       if (result.role && result.role.permissions.length > 0) {
    //         const role = result.role
    //         role.permissions = result.role.permissions
    //         role.permissions.map(per => {
    //           if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
    //             const action = per.actionEntitySet.map(action => { return action.action })
    //             per.actionList = action
    //           }
    //         })
    //         role.permissionList = role.permissions.map(permission => { return permission.permissionId })
    //         commit('SET_ROLES', result.role)
    //         commit('SET_INFO', result)
    //       } else {
    //         reject(new Error('getInfo: roles must be a non-null array !'))
    //       }

    //       commit('SET_NAME', { name: result.name, welcome: welcome() })
    //       commit('SET_AVATAR', result.avatar)

    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)
        var endDate = new Date()
        endDate.setTime(endDate.getTime() - (6*24*60*60*1000))  
       
        document.cookie='userName' + '=' + '' + '; expires=' + endDate +'; path=/'
        document.cookie='userId' + '=' + '' + '; expires=' + endDate +'; path=/'
         console.log( document)
        // logout(state.token).then(() => {
          resolve()
        // }).catch(() => {
        //    resolve()
        // })
      })
    }

  }
}

export default user
