import axios from 'axios';
export const auth = {
  methods: {
    async login(email, password) {
      try {
        const res = await axios.post(
          'http://localhost:3000/api/auth',
          { email, password },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        const { token } = await res.data;
        localStorage.setItem('token', token);

        let user = await axios.get('http://localhost:3000/api/auth', {
          headers: {
            'x-auth-token': token
          }
        });
        user = await user.data;
        localStorage.setItem('user', JSON.stringify(user));

        this.$store.commit('login', user);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
