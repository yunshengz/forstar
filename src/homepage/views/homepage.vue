<template>
  <div>
    <h3>header</h3>
    <user-component />
    <br />
    <br />
    <div>
      <h3>
        main
      </h3>
      <a-divider />
      <a-button type="primary">
        <router-link :to="{ name: 'AlbumCreate' }">创建专辑</router-link>
      </a-button>
      <a-button style="margin-left: 20px;">
        <router-link :to="{ name: 'AlbumList' }">专辑列表</router-link>
      </a-button>
    </div>
  </div>
</template>
<script>
import { UserComponent } from '../imports'
export default {
  components: {
    UserComponent
  }
}
</script>
