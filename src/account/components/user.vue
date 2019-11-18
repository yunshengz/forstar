<template>
  <a-dropdown v-if="userinfo.username">
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="logout">退出</a-menu-item>
    </a-menu>
    <a-button :loading="loading">
      {{ userinfo.username }} <a-icon type="down" />
    </a-button>
  </a-dropdown>
</template>
<script>
import { getUserinfo, logout } from '../imports'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  async created() {
    await this.fetchDatas()
  },
  watch: {
    async 'userinfo.username'(val) {
      if (!val) {
        await this.fetchDatas()
      }
    }
  },
  methods: {
    ...mapMutations(['setUserinfo']),
    async fetchDatas() {
      await getUserinfo()
        .cross(() => (this.loading = true), () => (this.loading = false))
        .success(data => {
          this.profile = data
          this.setUserinfo(data)
        })
        .fetch()
    },
    async handleMenuClick(e) {
      if (e.key === 'logout') {
        await logout()
          .success(() => {
            this.setUserinfo({})
          })
          .fetch()
      }
    }
  }
}
</script>
