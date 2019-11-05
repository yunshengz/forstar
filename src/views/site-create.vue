<template>
  <a-row>
    <a-col :span="2"></a-col>
    <a-col :span="20">
      <a-divider>创建站点</a-divider>
      <a-button @click="clickHandle">创建</a-button>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('siteCreate', ['create']),
    async clickHandle() {
      await this.create()
    }
  }
}
</script>
