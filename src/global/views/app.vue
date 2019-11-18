<template>
  <a-locale-provider :locale="zhCn">
    <div id="app">
      <router-view />
      <auth-dialog />
    </div>
  </a-locale-provider>
</template>
<script>
import { AuthDialog } from '../imports'
import zhCn from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  components: {
    AuthDialog
  },
  data() {
    return {
      zhCn
    }
  }
}
</script>
