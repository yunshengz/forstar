<template>
  <a-form :form="form" @submit.prevent="submit">
    <a-form-item label="账号">
      <a-input
        v-decorator="decorators.account"
        placeholder="用户名 / 邮箱 / 手机"
      />
    </a-form-item>
    <a-form-item label="密码">
      <a-input v-decorator="decorators.password" type="password" />
    </a-form-item>
    <a-form-item>
      <a-button
        html-type="submit"
        type="primary"
        :disabled="submitting"
        :loading="submitting"
      >
        登陆
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import rules from '../lib/rules'
import { login } from '../api'
export default {
  data() {
    return {
      submitting: false
    }
  },
  created() {
    this.form = this.$form.createForm(this)
    this.decorators = {
      account: ['account', { rules: rules.account, initialValue: 'admin' }],
      password: ['password', { rules: rules.password, initialValue: '123456' }]
    }
  },
  methods: {
    submit() {
      this.form.validateFieldsAndScroll(async (err, fields) => {
        if (!err) {
          await login()
            .cross(
              () => (this.submitting = true),
              () => (this.submitting = false)
            )
            .success(() => {
              this.$router.push({ name: 'Homepage' })
            })
            .params(fields)
            .set('form', this.form)
            .fetch()
        }
      })
    }
  }
}
</script>
