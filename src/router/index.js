import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Login from '../pages/Login/Login.vue';
import User from '../pages/User/User.vue';
import Bill from '../pages/Bill/Bill.vue';
import Provider from '../pages/provider/Provider';
import Welcome from '../pages/Welcome/Welcome.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: 'user',
        name: 'User',
        component: User
      },
      {
        path: 'bill',
        name: 'Bill',
        component: Bill
      },
      {
        path: 'provider',
        name: 'Provider',
        component: Provider
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // 如果没有登陆，强制跳转到登陆页面
  if (store.state.hadLogin !== true) {
    next(false);
  } else {
    next();
  }
});

export default router;
