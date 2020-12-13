import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'YhLogin',
    component: () => import('../components/login/YhLogin')
  },
  {
    path: '/register',
    name: 'YhRegister',
    component: () => import('../components/login/YhRegister')
  },
  {
    path: '/forgotPass',
    name: 'YhForgotPass',
    component: () => import('../components/login/YhForgotPass')
  }
]

const router = new VueRouter({
  routes
})

export default router
