<template>
  <a-row>
    <a-col :span="2"></a-col>
    <a-col :span="20">
      <a-divider>询盘列表</a-divider>
      <div>{{ loading }}</div>
      <div>{{ list }}</div>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('article', ['loading', 'list'])
  },
  async created() {
    const service = await this.getService()
    await service
      .on('netSuccess', data => {
        this.setList(data)
      })
      .on('netCompleted', () => {
        this.setLoading(false)
      })
      .fetch()
  },
  methods: {
    ...mapMutations('article', ['setLoading', 'setList']),
    ...mapActions('article', ['getService'])
  }
}
</script>
