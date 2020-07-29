import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const state = {
  users: [],
  bills: [],
  providers: [],
  hadLogin: false,
  level: 1
};

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters
});
