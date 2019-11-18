<template>
  <a-spin :spinning="loading">
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
          更新
        </a-button>
      </a-form-item>
    </a-form>
  </a-spin>
</template>

<script>
import rules from '../lib/rules'
import { editAlbum, getAlbumDetail } from '../imports'
export default {
  props: {
    aid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      album: {},
      submitting: false
    }
  },
  computed: {
    decorators() {
      const { album = {} } = this
      const decorators = {
        title: ['title', { rules: rules.title, initialValue: album.title }],
        tags: ['tags', { rules: rules.tags, initialValue: album.tags }],
        desc: ['desc', { rules: rules.desc, initialValue: album.desc }]
      }
      return decorators
    }
  },
  watch: {
    aid(val) {
      if (val) {
        this.fetchDatas()
      }
    }
  },
  created() {
    this.form = this.$form.createForm(this)
    this.fetchDatas()
  },
  methods: {
    async fetchDatas() {
      await getAlbumDetail()
        .cross(() => (this.loading = true), () => (this.loading = false))
        .params({
          id: this.aid
        })
        .success(data => {
          this.album = data
        })
        .fetch()
    },
    submit() {
      this.form.validateFieldsAndScroll(async (err, fields) => {
        if (!err) {
          await editAlbum()
            .cross(
              () => (this.submitting = true),
              () => (this.submitting = false)
            )
            .success(() => {
              this.$router.push({ name: 'AlbumList' })
            })
            .params({
              id: this.aid
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
