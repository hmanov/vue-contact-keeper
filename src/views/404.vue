<template>
  <div class="host">
    <div class="not-found">
      <h1>
        404
      </h1>
      <h2>Not Found!</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.host {
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-found {
  width: 100vw;
  height: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 100px;
  margin: 0;
}
h2 {
  margin: 0;
  font-size: 60px;
}
</style>
