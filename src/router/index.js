import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/Contacts.vue'),
  },
  {
    path: '/details',
    name: 'Details',
    props: true,
    component: () => import(/* webpackChunkName: "Details" */ '@/views/Details.vue'),
  },
  {
    path: '/createcontact',
    name: 'CreateContact',
    props: true,
    component: () => import(/* webpackChunkName: "CreateContact" */ '@/views/CreateContact.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    props: true,
    component: () => import(/* webpackChunkName: "Profile" */ '@/views/Profile.vue'),
  },
  {
    path: '/404',
    name: '404',
    alias: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
