<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="http://8.210.38.19:8088/biz-api/fish/sysDragon/v1/info/getAll?pageNumber=1&pageSize=10"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <form enctype="multipart/form-data" name="fileinfo" id="myForm">
        <input type="file" id="people-export" ref="inputer" @change="fileUpload"/>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // 方法
    fileUpload (event) {
      // 上传文件
      console.log(event)
      debugger
      let files = event.target.files
      let formData = new FormData()
      // formData.append('file', file[0])
      formData.append('files', files[0])
      console.log(formData.get('files'))
      // 文件上传
      this.$axios.post('http://127.0.0.1:8088/biz-api/fish/sysFile/v1/info/multiUpload', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((res) => {
        debugger
        let data = res.data
        if (data.success) {
          console.log(data)
        } else {
          this.$message.error(data.message || '操作失败')
        }
        this.uploadLoading = false
      }).catch((e) => {
        this.uploadLoading = false
        alert(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
