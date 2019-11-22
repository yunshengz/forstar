<template>
  <a-form :form="form" @submit.prevent="submitHandle">
    <a-spin :spinning="submitting">
      <a-form-item label="用户名">
        <a-input
          v-decorator="decorators.username"
          placeholder="请输入喜欢的用户名"
        />
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-decorator="decorators.password" type="password" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" :disabled="submitting">
          注册
        </a-button>
      </a-form-item>
    </a-spin>
  </a-form>
</template>

<script>
import rules from '../lib/rules'
import { register } from '../api'
export default {
  data() {
    return {
      submitting: false
    }
  },
  created() {
    this.form = this.$form.createForm(this)
    this.decorators = {
      username: ['username', { rules: rules.username, initialValue: 'admin' }],
      password: ['password', { rules: rules.password, initialValue: '123456' }]
    }
  },
  methods: {
    async submitHandle() {
      this.form.validateFieldsAndScroll(async (err, fields) => {
        if (!err) {
          await register()
            .cross(
              () => (this.submitting = true),
              () => (this.submitting = false)
            )
            .params(fields)
            .success(() => {
              this.$router.push({ name: 'Homepage' })
            })
            .fetch()
        }
      })
    }
  }
}
</script>
