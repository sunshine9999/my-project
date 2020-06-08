<template>
  <div>
    <login v-if="isLogin === false"></login>
  </div>
</template>

<script>
import login from './login'
export default {
  name: 'Index',
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
