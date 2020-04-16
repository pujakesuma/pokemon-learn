import Vue from 'vue'
import VueRouter from 'vue-router'
import { App, router } from './Router/routes'

Vue.config.productionTip = true

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
