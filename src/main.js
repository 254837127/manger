import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  const beforePage = localStorage.getItem('new')
  if (beforePage) {
    const tempRouter = router.options.routes
    const dtRouter = tempRouter.find(v => v.path === '/home')
    if (beforePage === to.path && dtRouter.children.length === 0) {
      store.dispatch('setDtRouterAction', {
        dtRouter: store.state.allRouter,
        currentMenuIndex: to.name
      })
      next(to.path)
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  localStorage.setItem('new', to.path)
  store.commit('setCurrentMenuIndex', to.name)
  const routerList = to.matched
  const list = []
  routerList.forEach(item => {
    if (item.meta.name) {
      list.push(item.meta.name)
    }
  })
  store.commit('setCrumbList', list)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
