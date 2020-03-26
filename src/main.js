import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')),
    contacts: []
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    getContacts(state, contacts) {
      state.contacts = contacts;
    },
    logout(state) {
      state.user = '';
      localStorage.clear();
    },
    deleteContact(state, value) {
      state.contacts = value;
    },
    updateContacts(state, contacts) {
      state.contacts = contacts;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
