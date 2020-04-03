const store = Store =>
  new Store({
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
export default store;
