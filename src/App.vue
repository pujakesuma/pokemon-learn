<template>
  <div id="app">
    <!-- <router-link to="/">Go to Foo</router-link>
    <router-link to='/user/123123'>Go to Bar</router-link>
    <router-link to='/user/123123'>Go to Bar</router-link> -->
    <div class="button-group" ref="start">
      <button @click="$router.push({ name: 'home'})"> Home </button>
      <button @click="$router.push({ name: 'user', params: { user: Math.ceil(Math.random() * 10) }})"> User </button>
    </div>
    <router-view></router-view>
    <div class="footer">
      <button @click="goToTop">^</button>
    </div>
  </div>
</template>

<script>
const App = {
  name: 'App',
  methods: {
      goToTop() {
      // console.log(this.$refs);
      this.$refs.start.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
export default App;
</script>

<style scoped>

.button-group, .footer {
  display: flex;
  justify-content: center;
}

</style>