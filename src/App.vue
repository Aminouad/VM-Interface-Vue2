<template>
  <div id="app">
   
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {

  components: {
  },
  computed: {
    /* isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }, */
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
.app {
    display: flex;
    .main {
      width: 100vw;
    }
  }
}
</style>
