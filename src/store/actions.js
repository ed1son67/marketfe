import types from './types';
import * as api from '../api';

export default {
    async [types.USER_LOGIN] () {
        api.login().then((res) => {
        });
    }
};
