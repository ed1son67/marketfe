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
    async [types.ADD_USER] ({ dispatch }, data) {
        return api.addUser(data).then((res) => {
            Vue.prototype.$Message.success('添加用户成功！');
            dispatch(types.GET_USERS);
        });
    },
    async [types.ADD_BILL] ({ dispatch }, data) {
        return api.addBill(data).then((res) => {
            Vue.prototype.$Message.success('添加账单成功！');
            dispatch(types.GET_BILLS);
        });
    },
    async [types.ADD_PROVIDER] ({ dispatch }, data) {
        return api.addProvider(data).then((res) => {
            Vue.prototype.$Message.success('添加供应商成功！');
            dispatch(types.GET_PROVIDERS);
        });
    },
    async [types.DELETE_USER] ({ dispatch }, data) {
        return api.deleteUser(data).then((res) => {
            Vue.prototype.$Message.success('删除用户成功！');
            dispatch(types.GET_USERS);
        });
    },
    async [types.DELETE_BILL] ({ dispatch }, data) {
        return api.deleteBill(data).then((res) => {
            Vue.prototype.$Message.success('删除账单成功！');
            dispatch(types.GET_BILLS);
        });
    },
    async [types.DELETE_PROVIDER] ({ dispatch }, data) {
        return api.deleteProvider(data).then((res) => {
            Vue.prototype.$Message.success('删除供应商成功！');
            dispatch(types.GET_PROVIDERS);
        });
    },
    async [types.MODIFY_PASSWORD] ({ dispatch }, data) {
        return api.modifyUserPassword(data).then((data) => {
            Vue.prototype.$Message.success('修改密码成功！');
            dispatch(types.GET_USERS);
        });
    },
    async [types.MODIFY_BILL] ({ dispatch }, data) {
        return api.modifyBill(data).then((data) => {
            Vue.prototype.$Message.success('修改密码成功！');
            dispatch(types.GET_BILLS);
        });
    },
    async [types.MODIFY_PROVIDER] ({ dispatch }, data) {
        return api.modifyBill(data).then((data) => {
            Vue.prototype.$Message.success('修改密码成功！');
            dispatch(types.GET_PROVIDERS);
        });
    },
    async [types.GET_USERS] ({ commit }) {
        return api.getUsers().then((res) => {
            commit(types.GET_USERS, res);
        });
    },
    async [types.GET_BILLS] ({ commit }) {
        return api.getAllBills().then((res) => {
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
            commit(types.GET_PROVIDERS, res);
        });
    }
};
