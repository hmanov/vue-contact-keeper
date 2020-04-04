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
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
