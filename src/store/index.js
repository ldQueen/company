import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import home from './module/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
  },
  getters,
})

export default store