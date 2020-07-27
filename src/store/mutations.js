import types from './types';

export default {
    [types.LOGIN]: (state, { level }) => {
        state.hadLogin = true;
        state.level = level;
    }
};
