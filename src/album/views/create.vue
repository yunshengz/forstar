<template>
  <a-form :form="form" @submit.prevent="submit">
    <a-form-item label="标题">
      <a-input v-decorator="decorators.title" />
    </a-form-item>
    <a-form-item label="设置标签">
      <a-select
        v-decorator="decorators.tags"
        mode="tags"
        not-found-content="输入后按回车键确认"
        placeholder="回车键设置多个"
      />
    </a-form-item>
    <a-form-item label="专辑描述">
      <a-textarea
        v-decorator="decorators.desc"
        placeholder="请输入专辑描述信息"
        :rows="4"
      />
    </a-form-item>
    <a-form-item>
      <a-button
        html-type="submit"
        type="primary"
        :disabled="submitting"
        :loading="submitting"
      >
        创建
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import rules from '../lib/rules'
import { createAlbum } from '../imports'
export default {
  data() {
    return {
      submitting: false
    }
  },
  created() {
    this.form = this.$form.createForm(this)
    this.decorators = {
      title: ['title', { rules: rules.title }],
      tags: ['tags', { rules: rules.tags }],
      desc: ['desc', { rules: rules.desc }]
    }
  },
  methods: {
    submit() {
      this.form.validateFieldsAndScroll(async (err, fields) => {
        if (!err) {
          await createAlbum()
            .cross(
              () => (this.submitting = true),
              () => (this.submitting = false)
            )
            .success(() => {
              this.$router.push({ name: 'AlbumList' })
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
