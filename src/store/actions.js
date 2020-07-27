import types from './types';
import * as api from '../api';
import consola from 'consola';
import Vue from 'vue';

export default {
    async [types.LOGIN] ({ commit, state }, data) {
        return api.login(data).then((data) => {
            console.log(data);
            const { ok, level } = data;
            if (ok && ok === true) {
                consola.info('登陆成功');
                Vue.prototype.$Message.success('登陆成功！');
                commit(types.LOGIN, level);
            } else {
                Vue.prototype.$Message.error('登陆失败！');
            }
        });
    }
};
