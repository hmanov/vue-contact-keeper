import axios from 'axios';
import * as cookies from 'vue-cookies';
// const url = 'http://localhost:3000/api/auth';
// const registerUrl = 'http://localhost:3000/api/users';
const url = 'https://hmanov.herokuapp.com/api/auth';
const registerUrl = 'https://hmanov.herokuapp.com/api/users';
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
    cookies.set('user', user, '1h');

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
        const res = await axios.post(url, credentials, {
          postHeaders
        });
        const { token } = await res.data;
        cookies.set('token', token, '1h');
        getUser(token, this.$store, this.$router);
      } catch (err) {
        return err.response.data.errors || err.response.data.msg;
      }
    },
    async register(registrationData) {
      try {
        const res = await axios.post(registerUrl, registrationData, postHeaders);
        const { token } = await res.data;
        cookies.set('token', token, '1h');
        getUser(token, this.$store, this.$router);
      } catch (err) {
        return err.response.data;
      }
    },
    async requestError(a) {
      this.errors = await a;
    },
    serverErrors() {
      // setTimeout(() => (this.errors = ''), 5000);
      return typeof this.errors === 'object' ? this.errors.map(e => e.msg).join(', ') : this.errors;
    }
  }
};
