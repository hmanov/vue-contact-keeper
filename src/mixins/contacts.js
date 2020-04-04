import axios from 'axios';
import * as cookies from 'vue-cookies';

const url = 'https://hmanov.herokuapp.com/api/contacts/';
// const url = 'http://localhost:3000/api/contacts/';
const token = cookies.get('token');

const headers = { headers: { 'x-auth-token': token, 'Content-Type': 'application/json' } };
export const contactsMixin = {
  methods: {
    async createContact(data) {
      try {
        const res = await axios.post(url, data, headers);
        this.$router.push({ name: 'Contacts' });
        return await res.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    async getContacts() {
      try {
        const res = await axios.get(url, headers);
        const data = await res.data;

        this.$store.commit('getContacts', data);

        return data;
      } catch (err) {
        console.error(err.response);
      }
    },
    async editContact(data) {
      try {
        const res = await axios.put(url + data._id, data, headers);

        this.$router.push({ name: 'Contacts' });
        return await res.data;
      } catch (err) {
        console.error(err.response);
      }
    },
    deleteContact(id) {
      if (confirm('Are you sure to delete this contact')) {
        try {
          axios.delete(url + id, headers);
          const deleted = this.$store.state.contacts.filter((e) => e._id !== id);

          this.$store.commit('deleteContact', deleted);
        } catch (error) {
          console.log(error.response);
        }
      }
    },
  },
};
