const store = (Store, Cookies) =>
  new Store({
    state: {
      user: Cookies.get('user'),
      contacts: [],
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
        Cookies.remove('user');
        Cookies.remove('token');
      },
      deleteContact(state, value) {
        state.contacts = value;
      },
      updateContacts(state, contacts) {
        state.contacts = contacts;
      },
    },
  });
export default store;
