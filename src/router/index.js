import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
// import MenuOne from '../views/MenuOne.vue'
// import MenuTwo from '../views/MenuTwo.vue'
// import router1 from '@/util/menu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    // redirect: '/menuone',
    component: HomeView,
    children: []
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
