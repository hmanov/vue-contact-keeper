import axios from 'axios';

const token = localStorage.getItem('token');
const url = 'https://hmanov.herokuapp.com/api/contacts/';
const headers = { 'x-auth-token': token };
export const contactsMixin = {
  methods: {
    async createContact(data) {
      const res = await axios.post(url, { headers, data });
      return await res.data;
    },
    async getContacts() {
      try {
        const res = await axios.get(url, { headers });
        const data = await res.data;

        this.$store.commit('getContacts', data);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    async editContact(data) {
      try {
        const res = await axios.put(url + data._id, data, { headers });
        return await res.data;
      } catch (err) {
        console.error(err);
      }
    },
    deleteContact(id) {
      if (confirm('Are you sure to delete this contact')) {
        try {
          axios.delete(url + id, {
            headers,
          });
          const deleted = this.$store.state.contacts.filter((e) => e._id !== id);

          this.$store.commit('deleteContact', deleted);
        } catch (error) {
          console.log(error.msg);
        }
      }
    },
  },
};
