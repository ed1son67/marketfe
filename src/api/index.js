import axios from 'axios';
import consola from 'consola';
import Vue from 'vue';

const url = '';

axios.defaults.baseURL = url;

// 添加全局错误拦截器
axios.interceptors.response.use((res) => {
    if (res.code !== 200) {
        Vue.prototype.$Message.error(res.message);
        consola.error(res.message);
    }
  },
  (err) => {
    // 网络错误会走到这里
      Vue.prototype.$Message.error(err.message);
      consola.error(err.message);
  }
);
