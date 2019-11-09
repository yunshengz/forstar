<template>
  <a-row>
    <a-col :span="2"></a-col>
    <a-col :span="20">
      <a-divider>注册页</a-divider>
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
            已有账号 {{ loading ? 'loading' : 'loaded!' }}
            <a-button>
              请登陆
            </a-button>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { account } from '@/services'
export default {
  beforeCreate() {
    this.chain = account.reg()
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  computed: {
    loading() {
      return this.chain.state.loading
    }
    // ...mapState('account-reg', ['submitting'])
  },
  methods: {
    // ...mapActions('account-reg', ['submit']),
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          // await this.submit(values)
          await this.chain.fetch()
        }
      })
    }
  }
}
</script>
