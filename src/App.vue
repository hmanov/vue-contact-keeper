<template>
  <div>
    <the-navigation />
    <router-view></router-view>
  </div>
</template>
<script>
import TheNavigation from './components/TheNavigation';

export default {
  components: {
    TheNavigation
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
* {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
