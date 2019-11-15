<template>
  <a-row>
    <a-col :span="2"></a-col>
    <a-col :span="20">
      <a-divider>注册页</a-divider>
      {{ loading }} - {{ datas }}
      <a-spin :spinning="loading">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [{ required: true, message: '请输入用户名!' }],
                  initialValue: 'zhangsan'
                }
              ]"
              placeholder="用户名"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '请输入密码!' }],
                  initialValue: '123456'
                }
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">
              注册
            </a-button>
            <a-divider />
            已有账号
            <router-link to="/account/login">
              <a-button>
                请登陆
              </a-button>
            </router-link>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script>
import { account } from '@/services'
export default {
  // created() {
  //   console.log('created!')
  //   this.$service()
  // },
  props: {
    a: {
      type: Number,
      default: 3
    }
  },
  destroyed() {
    console.log('destroyed!', this.m)
  },
  data() {
    console.log('props: ', this.a)
    this.form = this.$form.createForm(this, { name: 'normal_login' })
    this.service = this.$service(account.reg())
    return {}
  },
  mounted() {
    console.log('this.a: ', this.a)
  },
  computed: {
    serviceDatas: vm => vm.service.store,
    loading: vm => vm.serviceDatas.loading,
    datas: vm => vm.serviceDatas.datas
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.service.params(values).fetch()
        }
      })
    }
  }
}
</script>
