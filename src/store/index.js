import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: '',
    userInfo: ''
  },
  getters: {
    getUser: function (state) {
      if (!state.userInfo) {
        state.userInfo = JSON.parse(localStorage.getItem('loda_study_user'))
      }
      return state.userInfo
    },
    getToken: function (state) {
      if (!state.userInfo) {
        state.userToken = localStorage.getItem('loda_study_token')
      }
      return state.userToken
    },
    isLogin: function (state) {
      if (!state.userToken) {
        state.userToken = localStorage.getItem("loda_study_token")
      }
      if (state.userToken) {
        return true
      } 
      return false
    } 
  },
  mutations: {
    setToken(state, token) {
      state.userToken = token
      localStorage.setItem('lida_study_token', token)
    },
    delToken(state) {
      state.userToken = ''
      localStorage.removeItem('lida_study_token')
    },
    setUser(state, user) {
      state.userInfo = user
      localStorage.setItem('lida_study_user',JSON.stringify(user))
    },
    delUser(state) {
      state.userInfo = null
      localStorage.removeItem('lida_study_user')
    }
  },
  actions: {
  },
  modules: {
  }
})
