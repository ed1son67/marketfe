import types from './types';

export default {
    [types.USER_LOGIN]: (state, { level }) => {
        state.hadLogin = true;
        state.level = level;
    }
};
