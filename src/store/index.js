import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  hadLogin: true,
  level: 1
};

const getters = {
  isAdmin (state) {
    // level为1是管理员权限，出供应商选项
    return state.level === 1;
  }
};

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {},
  state,
  getters
});
