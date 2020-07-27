import axios from 'axios';
import consola from 'consola';
import Vue from 'vue';

const url = 'http://localhost:8090';

axios.defaults.baseURL = url;

// 添加全局错误拦截器
axios.interceptors.response.use((res) => {
    const { code, msg, data } = res.data;
    if (code !== 200) {
        Vue.prototype.$Message.error(msg);
        consola.error(msg);
    }
    // 将data解析出来往下传
    return data;
  },
  (err) => {
    // 网络错误会走到这里
      Vue.prototype.$Message.error(err.message);
      consola.error(err.message);
  }
);

export const login = (data) => {
    return axios.post('/login', data);
};
