import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'view-design/dist/styles/iview.css';
// 全局组件置于这里
import { Message, Icon } from 'view-design';

Vue.component('Icon', Icon);
Vue.prototype.$Message = Message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
