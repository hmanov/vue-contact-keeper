<template>
  <div class="host">
    <div class="jumbotron">
      <h1>Wellcome to Contact Keeeper!</h1>
      <p>
        The app to help you organize your contacts through the day!
      </p>
      <hr />

      <p>
        <router-link :to="{ name: 'Register' }">
          <button v-if="!user" type="button" class="btn-lg">
            Try Now!
          </button>
        </router-link>
        <router-link :to="{ name: 'CreateContact' }">
          <button v-if="user" type="button" class="btn-lg">
            Create Contact
          </button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;
.host {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/static/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
}

.jumbotron {
  color: $primary-color;
  background-color: rgba($lighter-color, 0.3);

  border-radius: 20px;
  margin: 100px 50% 0 10%;
  width: contain;
  height: contain;
  font-family: 'Roboto Mono', monospace;
  display: flex;
  flex-direction: column;
  border: none;
  box-sizing: border-box;
  padding: 50px;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
}
.btn-lg {
  display: block;
  margin-left: auto;
  height: 80px;
  width: 160px;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: $primary-color;
  color: $lighter-color;
  border: none;
  z-index: 1;
  &:hover {
    color: $secondary-color;
  }
  &:focus {
    outline: none;
  }
}

@media only screen and (max-width: 768px) {
  .jumbotron {
    margin: 100px 10px 50px 10px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
