import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
import addressbkks from './modules/addressbkks'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: null,
    showloading: false,
  },
  mutations: {
    show_loading(state) {
      state.showloading = true
    },
    hide_loading(state) {
      state.showloading = false
    },
    setUserinfo(state, value) {
      state.userinfo = value;
    },
  },
  actions: {},
  modules: {
    user, addressbkks
  }
});
