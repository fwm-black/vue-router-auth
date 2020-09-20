<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="clicklogin">点击获取登陆权限</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    clicklogin() {
      this.$store.commit("setUser", "woshishabi");
      this.$store.commit("setToken", "niyeshishabi");
    }
  }
}
</script>
