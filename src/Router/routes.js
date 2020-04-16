import { App, Home } from './index'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home}
]
  
const router = new VueRouter({
  mode: 'history',
  routes
})

export { App, router }