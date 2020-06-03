<template>
  <div>
    <label>用户名</label>
    <Input v-model="userAccount" placeholder="请输入" style="width:200px" />
    <label>用户名</label>
    <Input v-model="userPassword" placeholder="请输入" style="width:200px" type="password" />
    <Button type="primary" @click="login()">登录</Button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userAccount: '',
      userPassword: ''
    }
  },
  methods: {
    login () {
      this.$http.postStringify('/biz-api/fish/sysLogin/v1/info/sysLogin', { userAccount: this.userAccount, userPassword: this.userPassword }).then(
        (res) => {
          debugger
          var code = res.data.code
          console.log(code)
        }
      )
    }
  }
}
</script>

<style>

</style>
