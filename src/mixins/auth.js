import axios from 'axios';
import * as cookies from 'vue-cookies';
const url = 'http://localhost:3000/api/auth';
const getUserUrl = 'http://localhost:3000/api/users';
const postHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const getUser = async (token, store, router) => {
  try {
    const headers = {
      headers: {
        'x-auth-token': token
      }
    };

    let user = await axios.get(url, headers);
    user = await user.data;
    cookies.set('user', JSON.stringify(user));

    store.commit('login', user);
    router.push({ name: 'Home' });
  } catch (error) {
    console.log(error);
  }
};
export const auth = {
  data() {
    return { errors: '' };
  },
  methods: {
    async login(credentials) {
      try {
        const res = await axios.post(url, credentials, { postHeaders });
        const { token } = await res.data;
        localStorage.setItem('token', token);
        getUser(token, this.$store, this.$router);
      } catch (err) {
        return err.response.data.errors || err.response.data.msg;
      }
    },
    async register(registrationData) {
      try {
        const res = await axios.post(getUserUrl, registrationData, { postHeaders });
        const { token } = await res.data;
        getUser(token, this.$store, this.$router);
      } catch (err) {
        return err.response.data.errors || err.response.data.msg;
      }
    },
    async requestError(a) {
      this.errors = await a;
    },
    serverErrors(err) {
      console.log(err);
      return typeof err === 'object' ? err.map(e => e.msg).join(', ') : err;
    }
  }
};
