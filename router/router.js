// doesn't work with TypeScript due https://github.com/nuxt-community/router-module/issues/13

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const interopDefault = (promise) => {
  return promise.then((m) => m.default || m);
};

const Main = () => interopDefault(import('~/pages/Main'));
const Login = () => interopDefault(import('~/pages/Login'));

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        path: '/',
        component: Main,
      },
      {
        path: '/login',
        component: Login,
      },
    ],
  });
}
