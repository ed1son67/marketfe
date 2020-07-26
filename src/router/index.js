import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Login from '../pages/Login/Login.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (store.state.hadLogin !== true) {
    next(false);
  } else {
    next();
  }
});

export default router;
