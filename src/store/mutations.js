import types from './types';

export default {
    [types.LOGIN]: (state, { level }) => {
        state.hadLogin = true;
        state.level = level;
    },
    [types.GET_USERS]: (state, { users }) => {
       state.users = users;
    },
    [types.GET_PROVIDERS]: (state, { providers }) => {
        state.providers = providers;
    },
    [types.GET_ORDERS]: (state, { orders }) => {
        state.orders = orders;
    }
};
