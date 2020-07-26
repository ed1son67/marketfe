import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  hadLogin: true,
  level: 0
};

export default new Vuex.Store({
  state: state,
  mutations: {},
  actions: {},
  modules: {}
});
