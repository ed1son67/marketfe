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

export const addUser = (data) => {
    return axios.post('/addUser', data);
};

export const getUsers = () => {
    return axios.get('/getUsers');
};

export const deleteUser = (data) => {
    return axios.post('/deleteUser', data);
};

export const modifyUserPassword = (data) => {
    return axios.post('/modifyUserPassword', data);
};

export const getAllProviders = () => {
    return axios.get('/getAllProviders');
};

export const addProvider = (data) => {
    return axios.post('/addProvider', data);
};

export const deleteProvider = (data) => {
    return axios.post('/deleteProvider', data);
};

export const modifyProvider = (data) => {
    return axios.post('/modifyProvider', data);
};

export const getAllBills = (data) => {
    return axios.get('/getAllOrders');
};

export const addBill = (data) => {
    return axios.post('/addOrder', data);
};

export const modifyBill = (data) => {
    return axios.post('/modifyOrder', data);
};

export const deleteBill = (data) => {
    return axios.post('/deleteOrder', data);
};

export const getOrdersByProviderName = (name) => {
    return axios.get('/getOrdersByProviderName?providerName=' + name);
};
