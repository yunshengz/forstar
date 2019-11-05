<template>
  <div>
    message socket
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.subscribe()
  },

  methods: {
    ...mapActions('message-socket', ['subscribe'])
  }
}
</script>
