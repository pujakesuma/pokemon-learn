import { App, Home, User } from './index'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home},
  { path: '/user/:user', component: User}
]
  
const router = new VueRouter({
  mode: 'history',
  routes
})

export { App, router }