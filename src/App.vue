<template>
  <div id="app">
    <router-link to="/">Go to Foo</router-link>
    <router-link to='/user/123123'>Go to Bar</router-link>
    <button @click="$router.push({ name: 'home'})"> Home </button>
    <button @click="$router.push({ name: 'user', params: { user: Math.ceil(Math.random() * 10) }})"> User </button>
    <router-view></router-view>
  </div>
</template>