import types from './types';
import * as api from '../api';
import consola from 'consola';
import Vue from 'vue';

export default {
    async [types.LOGIN] ({ commit }, data) {
        return api.login(data).then((res) => {
            console.log(res);
            const { ok, level } = res;
            if (ok && ok === true) {
                consola.info('登陆成功');
                Vue.prototype.$Message.success('登陆成功！');
                commit(types.LOGIN, level);
            } else {
                Vue.prototype.$Message.error('登陆失败！');
            }
        });
    },
    async [types.ADD_USER] ({ commit }, data) {
        return api.addUser(data).then((res) => {
            Vue.prototype.$Message.success('添加用户成功！');
        });
    },
    async [types.ADD_BILL] ({ commit }, data) {
        return api.addOrder(data).then((res) => {
            Vue.prototype.$Message.success('添加账单成功！');
        });
    },
    async [types.ADD_PROVIDER] ({ commit }, data) {
        return api.addProvider(data).then((res) => {
            Vue.prototype.$Message.success('添加供应商成功！');
        });
    },
    async [types.DELETE_USER] ({ commit }, data) {
        return api.deleteUser(data).then((res) => {
            Vue.prototype.$Message.success('删除用户成功！');
        });
    },
    async [types.DELETE_BILL] ({ commit }, data) {
        return api.deleteOrder(data).then((res) => {
            Vue.prototype.$Message.success('删除账单成功！');
        });
    },
    async [types.DELETE_PROVIDER] ({ commit }, data) {
        return api.deleteProvider(data).then((res) => {
            Vue.prototype.$Message.success('删除用户成功！');
        });
    },
    async [types.GET_USERS] ({ commit }) {
        return api.getUsers().then((res) => {
            commit(types.GET_USERS, res);
        });
    },
    async [types.GET_BILLS] ({ commit }) {
        return api.getAllOrders().then((res) => {
            commit(types.GET_BILLS, res);
        });
    },
    async [types.GET_PROVIDERS] ({ commit }) {
        return api.getAllProviders().then((res) => {
            commit(types.GET_PROVIDERS, res);
        });
    },
    async [types.GET_BILLS_BY_PROVIDER_NAME] ({ commit }, name) {
        return api.getOrdersByProviderName(name).then((res) => {
            return res;
        });
    },
};
