/**
 * Doesn't work with TypeScript
 * due https://github.com/nuxt-community/router-module/issues/13
 */
import Vue from 'vue';
import Router from 'vue-router';

import { clientUrls } from 'common/urls/clientUrls';
import scrollBehavior from '../.nuxt/router.scrollBehavior';

Vue.use(Router);

/**
 * Snippet for dynamic import with nuxt
 */
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
        name: 'home',
        meta: {
          title: 'Home',
        },
      },
      {
        path: clientUrls.login,
        component: Login,
        name: 'login',
        meta: {
          title: 'Login',
        },
      },
      {
        path: clientUrls.passwordReset,
        component: Login,
        name: 'password-reset',
        meta: {
          title: 'Password reset',
        },
      },
      {
        path: clientUrls.analytics,
        component: Analytics,
        name: 'analytics',
        meta: {
          title: 'Analytics',
        },
      },
      {
        path: clientUrls.settings,
        component: Settings,
        name: 'settings',
        meta: {
          title: 'Settings',
        },
      },
      {
        path: clientUrls.profile,
        component: Profile,
        name: 'profile',
        meta: {
          title: 'Profile',
        },
      },
      {
        path: clientUrls.vehicles,
        component: Vehicles,
        name: 'vehicles',
        meta: {
          title: 'Vehicles',
        },
      },
      {
        path: clientUrls.reminders,
        component: Reminders,
        name: 'reminders',
        meta: {
          title: 'Service',
        },
      },
      {
        path: clientUrls.map,
        component: Map,
        name: 'map',
        meta: {
          title: 'Map',
        },
      },
      {
        path: clientUrls.mapWithId,
        component: Map,
        name: 'map-id',
        meta: {
          title: 'Map',
        },
      },
      {
        path: clientUrls.chat,
        component: Chat,
        name: 'chat',
        meta: {
          title: 'Chat',
        },
      },
      {
        path: clientUrls.chatWithUserById,
        component: Chat,
        name: 'chat-id',
        meta: {
          title: 'Chat',
        },
      },
    ],
  });
}
