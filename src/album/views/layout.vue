<template>
  <div>
    <user-component />
    <router-view />
  </div>
</template>
<script>
import { UserComponent } from '../imports'
export default {
  components: {
    UserComponent
  },
  data() {
    return {}
  }
}
</script>
