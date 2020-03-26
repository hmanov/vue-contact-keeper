import axios from 'axios';

const token = localStorage.getItem('token');
const url = 'http://localhost:3000/api/contacts/';
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
        return await res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async editContact(id, data) {
      try {
        const res = await axios.put(url + id, { headers, data });
        return await res.data;
      } catch (err) {
        console.error(err);
      }
    }
  }
};
