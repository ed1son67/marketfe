
export default {
    isAdmin: (state) => {
        // level为1是管理员权限，出供应商选项
        return state.level === 1;
    }
};
