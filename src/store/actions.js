import types from './types';
import * as api from '../api';

export default {
    async [types.USER_LOGIN] ({ commit, state }, data) {
        api.login(data).then((res) => {
            commit(types.USER_LOGIN, res.data);
        });
    }
};
