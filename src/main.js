import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';
import store from './store/store';
Vue.config.productionTip = false;
Vue.use(Vuex, VueCookies);

new Vue({
  router,
  store: store(Vuex.Store, VueCookies),
  render: h => h(App)
}).$mount('#app');
