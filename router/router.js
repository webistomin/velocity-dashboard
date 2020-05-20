// doesn't work with TypeScript due https://github.com/nuxt-community/router-module/issues/13

import Vue from 'vue';
import Router from 'vue-router';
import { clientUrls } from 'common/urls/clientUrls';
import scrollBehavior from '../.nuxt/router.scrollBehavior';

Vue.use(Router);

const interopDefault = (promise) => {
  return promise.then((m) => m.default || m);
};

const Main = () => interopDefault(import('~/pages/Main'));
const Login = () => interopDefault(import('~/pages/Login'));
const Analytics = () => interopDefault(import('~/pages/Analytics'));
const Settings = () => interopDefault(import('~/pages/Settings'));
const Profile = () => interopDefault(import('~/pages/Profile'));
const Vehicles = () => interopDefault(import('~/pages/Vehicles'));
const Reminders = () => interopDefault(import('~/pages/Reminders'));
const Map = () => interopDefault(import('~/pages/Map'));
const Chat = () => interopDefault(import('~/pages/Chat'));

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    fallback: false,
    routes: [
      {
        path: clientUrls.home,
        component: Main,
      },
      {
        path: clientUrls.login,
        component: Login,
      },
      {
        path: clientUrls.analytics,
        component: Analytics,
      },
      {
        path: clientUrls.settings,
        component: Settings,
      },
      {
        path: clientUrls.profile,
        component: Profile,
      },
      {
        path: clientUrls.vehicles,
        component: Vehicles,
      },
      {
        path: clientUrls.reminders,
        component: Reminders,
      },
      {
        path: clientUrls.map,
        component: Map,
      },
      {
        path: clientUrls.chatWithUserById,
        component: Chat,
      },
      {
        path: '/chat/:id',
        component: Chat,
      },
    ],
  });
}
