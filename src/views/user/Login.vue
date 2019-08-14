<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-tabs
        :activeKey="customActiveKey"
        :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
        @change="handleTabClick"
      >
        <a-tab-pane key="tab1" tab="账号密码登录" v-if="false">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="账户: admin"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
              ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="false"
              placeholder="密码: admin or ant.design"
              v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
          <img src="" alt="">
        </a-tab-pane>
        <a-tab-pane key="tab2" tab="Tlink扫码登录">
          <!-- <a-form-item>
            <a-input size="large" type="text" placeholder="手机号" v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item>
                <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                class="getCaptcha"
                tabindex="-1"
                :disabled="state.smsSendBtn"
                @click.stop.prevent="getCaptcha"
                v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
              ></a-button>
            </a-col>
          </a-row> -->
          <!-- <div class="loginBox">
            <span>二维码已过期</span>
            <span>重新登录</span>
          </div> -->
          <div class="login_modal">
              <div class="img_box">
                  <div class="zhezhao" style="width:100%;background:rgba(0,0,0,.6)" v-show="scanningCode == 401 || scanningCode == 404">
                    <span>{{scanningCode == '401' ? '请在app端确认' : scanningCode == '404' ? '二维码已过期' : scanningCode == '000' ? '登录成功' : ''}}</span>
                  </div>
                  <img :src="Qrcode.url" alt="" style="width:100%;display:inline-block">
              </div>

          </div>
          
        </a-tab-pane>
      </a-tabs>

      <!-- <a-form-item>
        <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>
        <router-link
          :to="{ name: 'recover', params: { user: 'aaa'} }"
          class="forge-password"
          style="float: right;"
        >忘记密码</router-link>
      </a-form-item> -->

      <a-form-item style="margin-top:24px" v-show="customActiveKey != 'tab2'">
        <a-button 

          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >登录</a-button>
      </a-form-item>
      <a-form-item style="margin:auto;margin-top:24px;width:270px" v-show="customActiveKey == 'tab2' && (scanningCode == '404' ||scanningCode == '403' ||scanningCode == '401')">
        <a-button           
        :block="true"  
        size="large"
        type="primary"
        @click="againLogin()"
        >重新登录</a-button>
      </a-form-item>
      <!-- <div class="user-login-other">
        <span>其他登录方式</span>
        <a>
          <a-icon class="item-icon" type="alipay-circle"></a-icon>
        </a>
        <a>
          <a-icon class="item-icon" type="taobao-circle"></a-icon>
        </a>
        <a>
          <a-icon class="item-icon" type="weibo-circle"></a-icon>
        </a>
        <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>
      </div> -->
    </a-form>

    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>
<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
.login_modal{
  position: relative;
  left: 0;
  top: 0;
  .img_box{
    position: relative;
    .zhezhao{
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: red;
      z-index: 9;
      span{
        display: inline-block;
        color: #fff;
        margin: auto
      }
    }
  }
}
</style>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix, welcome} from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'
import { openQRCode2, getQrCodeView ,querylogin,loginVerify} from '@/api/DocumentsPost'
import { debug } from 'util';
export default {
  components: {
    TwoStepCaptcha
  },
  data () {
    return {
      customActiveKey: 'tab2',
      scanningCode: '',
      interval:null,
      againRequest : false,
      Qrcode : {
        code:'',
        url : ''
      },
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created () {
    // get2step({ })
    //   .then(res => {
    //     this.requiredTwoStepCaptcha = res.result.stepCode
    //   })
    //   .catch(() => {
    //     this.requiredTwoStepCaptcha = false
    //   })
    this.requiredTwoStepCaptcha = true
  },
  mounted () {
    this.createopenQRCode2()
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    // handler
    /**
     * 创建二维码
    */
    createopenQRCode2(){
        let param = {
            caller : '培训中心后台管理'
        } 
        openQRCode2(param).then(res => {
            if(res.code == 0){
                clearInterval(this.interval)
                this.Qrcode.code = res.data.uuid 
                this.Qrcode.url = res.data.imgUrl
            }else{
                this.$message.error(res.msg);
            }
           this.interval = setInterval(()=>{
              this.querylogin()
            },1000)
        }).catch(err => {
                this.$message.error(err);
        })
    },
    againLogin(){
       this.scanningCode = ''
       this.createopenQRCode2()
    },
    setenddate(hours){
      var d = new Date();
      d.setTime(d.getTime()+(hours*60*60*1000));
      return d
    },
    /**
     * 查询扫码确认
    */
    querylogin(){
      if(this.againRequest){
          return
      }
      let param = {
          uuid : this.Qrcode.code
        } 
        querylogin(param).then(res => {
            this.scanningCode = res.code
            if(res.code == '000'){//成功
                this.againRequest = true
                clearInterval(this.interval)
                loginVerify({userId : res.data.userId}).then((data)=>{
                    if(data.code == 0){
                        if(!data.result){
                          this.$message.error('该账户无权限登录');
                          this.againLogin()
                           return
                        }
                        this.Login(res.data)
                        .then((ress) =>{
                          var endDate = this.setenddate(0.5)
                          console.log(endDate)
                          document.cookie="userName" + "=" + res.data.userName + "; expires=" + endDate + "; path=/"
                          document.cookie="userId" + "=" + res.data.userId + "; expires=" + endDate + "; path=/"
                          this.loginSuccess(res)
                        } )
                        .catch(err => this.requestFailed(err))
                        .finally(() => {
                      })

                    }
                }).catch((err)=>{
                    console.log(err)
                }) 
            }else if(res.code == '401'){//待确认
                
            }else if(res.code == '403'){//登录已取消
                clearInterval(this.interval)
            }else if(res.code == '404'){//二维码已过期
                clearInterval(this.interval)
            }
            
        }).catch(err => {
        })
    },
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey,
        Login
      } = this
      state.loginBtn = true

      const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          const loginParams = { ...values }
          delete loginParams.username
          loginParams[!state.loginType ? 'email' : 'username'] = values.username
          loginParams.password = md5(values.password)
                var endDate = this.setenddate(0.5)
                  console.log(endDate)
                  document.cookie="userName" + "=" + '穆静' + "; expires=" + endDate + "; path=/";
                  document.cookie="userId" + "=" + 'muj' + "; expires=" + endDate + "; path=/";
          Login(loginParams)
            .then((res) => {
              this.loginSuccess(res)})
            .catch(err => this.requestFailed(err))
            .finally(() => {
              state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    getCaptcha (e) {
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)
          getSmsCaptcha({ mobile: values.mobile }).then(res => {
            setTimeout(hide, 2500)
            this.$notification['success']({
              message: '提示',
              description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              duration: 8
            })
          }).catch(err => {
            setTimeout(hide, 1)
            clearInterval(interval)
            state.time = 60
            state.smsSendBtn = false
            this.requestFailed(err)
          })
        }
      })
    },
    stepCaptchaSuccess () {
      this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    },
    loginSuccess (res) {
      clearInterval(this.interval)
      console.log(res)
      this.$router.push({ name: 'material' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    },
    requestFailed (err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>