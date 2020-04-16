import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/routes'

Vue.config.productionTip = true

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
