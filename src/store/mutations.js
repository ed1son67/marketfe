import types from './types';

export default {
    [types.LOGIN]: (state, level) => {
        state.hadLogin = true;
        state.level = level;
    },
    [types.GET_USERS]: (state, users) => {
       state.users = users;
    },
    [types.GET_PROVIDERS]: (state, providers) => {
        state.providers = providers;
    },
    [types.GET_BILLS]: (state, bills) => {
        state.bills = bills;
    }
};
