<template>
  <div class="host">
    <div class="wrapper">
      <div class="info-holder">
        <div class="info-item">
          <img src="../assets/profile.png" alt="" />
        </div>
        <div class="info-item">
          <h4><span>Name: </span>{{ user.name | capitalize }}</h4>
          <h4><span>Email: </span>{{ user.email }}</h4>
          <h4><span>Joined: </span>{{ user.date | moment }}</h4>
        </div>
        <div class="info-item">
          <button class="btn" @click="logout()">Logout</button>
        </div>
      </div>

      <!-- <div class="link-wrapper">
        <a v-for="contact in contacts" :key="contact._id">
          <div>{{ contact.name }}</div>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Profile',

  computed: {
    user() {
      return this.$store.state.user;
    },
    contacts() {
      return this.$store.state.contacts;
    },
  },
  methods: {
    moment: () => moment(),
    logout() {
      this.$store.commit('logout');
      if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' });
    },
  },
  filters: {
    moment: (date) => moment(date).format('Do MMMM YYYY, h:mm '),
    capitalize: (str) => (str = str[0].toUpperCase() + str.slice(1)),
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;
.host {
  color: $lighter-color;
  background-attachment: fixed;
  background-image: url(../assets/static/profile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.link-wrapper {
  background-color: rgba($primary-color, 0.6);
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info-holder {
  background-color: rgba($primary-color, 0.6);
  margin-top: 10vh;
  width: 60%;
  border-radius: 10px;
  img {
    width: 250px;
    height: 250px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
  }
}
.contact-holder {
  display: flex;
  flex-direction: column;
}
.link {
  color: $lighter-color;
  border-radius: 10px;
  background-color: rgba($primary-color, 0.6);
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  width: 60%;
}
.btn {
  color: $secondary-color;
  font-weight: 900;
  border: 3px solid $secondary-color;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
}
@media only screen and (max-width: 768px) {
  .info-holder {
    width: 95%;
    box-sizing: border-box;

    padding: 10px;
    flex-direction: column;
    .info-item {
      width: 90%;
      text-align: center;
    }
  }
  .link {
    flex-direction: column;
    width: 95%;
  }
}
</style>
