<template>
  <nav class="navbar">
    <a type="button" class="branding">Contact Keeper</a>

    <ul class="nav" :class="{ 'nav-show': collapse, 'nav-hide': !collapse }">
      <li class="nav-item" @click="toggleNavbarMenu()">
        <router-link :to="{ name: 'Home' }">
          <a>Home</a>
        </router-link>
      </li>
      <li class="nav-item" v-if="user" @click="toggleNavbarMenu()">
        <a routerLink="/profile">Hello, {{ user }}!</a>
      </li>
      <li class="nav-item" v-if="user" @click="toggleNavbarMenu()">
        <router-link :to="{ name: 'Contacts' }">
          <a>My Contacts</a>
        </router-link>
      </li>
      <li v-if="!user" class="nav-item" @click="toggleNavbarMenu()">
        <router-link :to="{ name: 'Login' }">
          <a>Login</a>
        </router-link>
      </li>

      <li v-if="!user" class="nav-item" @click="toggleNavbarMenu()">
        <router-link :to="{ name: 'Register' }">
          <a>Register</a>
        </router-link>
      </li>

      <li
        v-if="user"
        class="nav-item"
        @click="
          toggleNavbarMenu();
          logout();
        "
      >
        <a>Logout</a>
      </li>
    </ul>
    <a
      class="toggleBtn"
      :class="{ toggleOn: collapse, toggleOff: !collapse }"
      @click="toggleNavbarMenu()"
      href="javascript:void(0)"
    >
      <div></div>
      <div></div>
      <div></div>
    </a>
  </nav>
</template>

<script>
export default {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         use: ['vue-style-loader', 'css-loader', 'sass-loader']
  //       }
  //     ]
  //   },
  name: 'TheNavigation',
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    toggleNavbarMenu() {
      this.collapse = !this.collapse;
    },
    logout() {
      this.$store.commit('logout');
      if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' });
    }
  },
  async mounted() {
    // const a = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(a);
  },
  created() {},
  computed: {
    user() {
      return this.$store.state.user ? this.$store.state.user.name : false;
    }
  }
};
</script>
<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;

nav {
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $primary-color;

  .branding {
    color: $secondary-color;

    padding: 10px;
    font-size: 1.4em;
    margin-left: 20px;

    display: flex;
    text-align: center;
    align-self: center;
  }
  .branding:hover {
    color: $lighter-color;
  }
  .nav {
    list-style: none;
    padding-inline-start: 0;
    width: 60%;
    display: flex;
    justify-content: flex-end;

    a {
      padding: 16px;
      text-decoration: none;
      cursor: pointer;
      color: $lighter-color;
      text-decoration: none;
    }
    a:hover {
      background-color: $lighter-color;
      color: $secondary-color;
    }
  }
}
@media only screen and (max-width: 768px) {
  nav {
    .nav-item {
      width: 100%;

      a {
        padding: 15px 0;
        display: block;
        cursor: pointer;
      }
      a:hover {
        background-color: $lighter-color;
      }
    }
    .nav {
      overflow: hidden;
      max-height: 0;
      padding-inline-start: 0;

      flex-direction: column;
      justify-content: end;
      flex-basis: 100%;
      align-items: center;
      margin: 0;
      box-sizing: border-box;
      text-align: center;
    }
    .toggleBtn {
      display: block;
      position: absolute;
      top: 6px;
      right: 6px;
      div {
        background-color: $lighter-color;
        border-radius: 3px;
        height: 4px;
        margin: 5px;
        width: 30px;
        border: 1px solid $lighter-color;
        visibility: hidden;
      }
    }
    .nav-show {
      max-height: 600px;
      transition: max-height 1.25s ease-out;
    }
    .nav-hide {
      max-height: 0px;
      transition: max-height 0.5s ease-out;
    }
    .toggleBtn div {
      visibility: visible;
    }

    .toggleOn {
      margin-left: auto;
      :nth-child(1) {
        transition: transform 0.5s;
        transform: rotate(45deg) translateX(6px);
        transform-origin: 20%;
        background-color: $secondary-color;
        border: 1px solid $secondary-color;
      }
      :nth-child(2) {
        visibility: visible;
        opacity: 0;
        transition: opacity 0.1s;
      }
      :nth-child(3) {
        transition: transform 0.5s;
        transform: rotate(-45deg) translateX(6px);
        transform-origin: 20%;
        background-color: $secondary-color;
        border: 1px solid $secondary-color;
      }
    }
    .toggleOff {
      margin-left: auto;
      :nth-child(1) {
        transition: transform 0.5s;
        transform: rotate(0deg) translateX(0px);
        transform-origin: 20%;
      }
      :nth-child(2) {
        visibility: visible;
        opacity: 1;
        transition: opacity 1s;
      }
      :nth-child(3) {
        transition: transform 0.5s;
        transform: rotate(0deg) translateX(0px);
        transform-origin: 20%;
      }
    }
  }
}
</style>
