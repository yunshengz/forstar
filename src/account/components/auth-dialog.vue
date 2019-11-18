<template>
  <a-modal
    v-model="isShow"
    :closable="false"
    :mask-closable="false"
    :keyboard="false"
    title="请登录"
    :z-index="10000"
    :footer="null"
  >
    <a-form :form="form" @submit.prevent="loginHandle">
      <a-form-item label="账号">
        <a-input v-decorator="decorators.username" placeholder="用户名" />
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
        <a-button>
          <router-link :to="{ name: 'AccountRegister' }">
            注册
          </router-link>
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { login, dequeue } from '../imports'
import rules from '../lib/rules'
export default {
  name: 'AccountAuthDialog',
  data() {
    return {
      submitting: false
    }
  },
  computed: {
    isShow: {
      set(val) {
        this.$store.commit('updateAccountDialogDisplay', val)
      },
      get() {
        return this.$store.state.accountDialogDisplay
      }
    }
  },
  watch: {
    $route() {
      this.isShow = false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
    this.decorators = {
      username: ['username', { rules: rules.username, initialValue: 'admin' }],
      password: ['password', { rules: rules.password, initialValue: '123456' }]
    }
  },
  methods: {
    loginHandle() {
      this.form.validateFieldsAndScroll(async (err, fields) => {
        if (!err) {
          await login()
            .cross(
              () => (this.submitting = true),
              () => (this.submitting = false)
            )
            .params(fields)
            .set('form', this.form)
            .on('success', async () => {
              this.isShow = false
              await dequeue()
            })
            .fetch()
        }
      })
    }
  }
}
</script>
