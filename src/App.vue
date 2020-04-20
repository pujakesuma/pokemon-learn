<template>
  <div id="app">
    <!-- <router-link to="/">Go to Foo</router-link>
    <router-link to='/user/123123'>Go to Bar</router-link> -->
    <div class="button-group">
      <button @click="$router.push({ name: 'home'})"> Home </button>
      <button @click="$router.push({ name: 'user', params: { user: Math.ceil(Math.random() * 10) }})"> User </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

.button-group {
  display: flex;
  justify-content: center;
}

</style>