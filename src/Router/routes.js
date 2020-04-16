import { Home, User, NotFound } from './index'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home, name: 'home'},
  { path: '/user/:user', component: User, name: 'user'},
  { path: '*', component: NotFound}
]
  
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;