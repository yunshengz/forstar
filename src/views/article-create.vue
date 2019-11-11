<template>
  <a-row>
    <a-col :span="2"></a-col>
    <a-col :span="20">
      <a-divider>写文章</a-divider>
      <a-spin :spinning="false">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'title',
                {
                  rules: [{ required: true, message: '请输入标题!' }],
                  initialValue: 'title'
                }
              ]"
              placeholder="这是标题"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'content',
                {
                  rules: [{ required: true, message: '请输入内容!' }],
                  initialValue: '这是内容'
                }
              ]"
              placeholder="内容"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script>
import { createArticle } from '@/services'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          const { title, content } = values
          await createArticle()
            .params({
              title,
              content
            })
            .fetch()
        }
      })
    }
  }
}
</script>
