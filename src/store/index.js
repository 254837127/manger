import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'
import router1 from '@/util/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'woshishui'
    })
  ],
  state: {
    allRouter: router1,
    collapse: false,
    currentMenuIndex: '',
    crumbList: [],
    tabs: []
  },
  getters: {},
  mutations: {
    setCollapse(state, collapse) {
      state.collapse = collapse
    },
    setDtRouter(state, router123) {
      state.allRouter = router1
    },
    setCurrentMenuIndex(state, payload) {
      state.currentMenuIndex = payload
    },
    setCrumbList(state, payload) {
      state.crumbList = payload
    },
    setTabs(state, payload) {
      state.tabs = payload
    }
  },
  actions: {
    setDtRouterAction(context, payload) {
      context.commit('setDtRouter', payload.dtRouter)
      const tempRouter = router.options.routes
      const dtRouter = tempRouter.find((v) => v.path === '/home')
      if (dtRouter.children.length === 0) {
        dtRouter.children.push(...router1)
        router1.forEach((item) => {
          router.addRoute('home', item)
        })
      }
    }
  },
  modules: {}
})
