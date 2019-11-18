<template>
  <div>
    <h2 class="mb-2">
      专辑列表
    </h2>
    <a-divider />
    <a-spin v-if="loading" :spinning="true">
      数据加载中！
      <br /><br />
    </a-spin>
    <div v-else>
      <div v-if="!list.length">
        暂无数据
        <a-divider />
      </div>
      <div v-else>
        <div v-for="item in list" :key="item.id">
          <router-link :to="{ name: 'AlbumEdit', params: { aid: item.id } }">
            <h3>标题：{{ item.title }}</h3>
            <div>标签：{{ item.tags.join(' / ') }}</div>
            <div>描述：{{ item.desc }}</div>
          </router-link>
          <a-button
            type="danger"
            :loading="disables[item.id]"
            :disabled="disables[item.id]"
            @click="deleteHandle(item.id)"
            >删除</a-button
          >
          <a-divider />
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'AlbumCreate' }">
      <a-button>
        创建专辑
      </a-button>
    </router-link>
  </div>
</template>
<script>
import { listAlbum, deleteAlbum } from '../imports'
export default {
  data() {
    return {
      disables: {},
      loading: false,
      list: []
    }
  },
  async created() {
    await this.fetchDatas()
  },
  methods: {
    async fetchDatas() {
      await listAlbum()
        .cross(() => (this.loading = true), () => (this.loading = false))
        .success(data => {
          this.list = data.list
        })
        .fetch()
    },
    async deleteHandle(id) {
      await deleteAlbum()
        .params({ id })
        .cross(
          () => {
            this.$set(this.disables, id, true)
            console.log(this.disables.id)
          },
          () => {
            this.$set(this.disables, id, false)
          }
        )
        .success(async () => {
          this.list = this.list.filter(item => item.id !== id)
        })
        .fetch()
    }
  }
}
</script>
