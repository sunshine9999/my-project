<template>
  <div>
    <login v-if="isLogin===false"></login>
  </div>
</template>

<script>
import login from '@/components/index/login'
export default {
  name: 'index',
  components: {
    login
  },
  data () {
    return {
      isLogin: false
    }
  }
}
</script>

<style>

</style>
