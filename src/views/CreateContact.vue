<template>
  <div class="form">
    <div class="container">
      <h1>CREATE CONTACT</h1>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Contact Name *" v-model="name" />
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Contact Email *" v-model="email" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Phone" v-model="phone" />
        </div>

        <div class="form-group">
          <input type="radio" checked value="personal" v-model="type" />
          <label for="huey">Personal</label>
          <input type="radio" value="professional" v-model="type" />
          <label for="huey">Professional</label>
        </div>
        <span> <span style="color: red;">*</span> Required Fileds </span>

        <div class="form-group">
          <button type="submit" class="btn">
            CREATE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      type: '',
    };
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;

:host {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/static/bg-register.jpg');
  background-attachment: fixed;
  background-size: cover;
}

.form {
  font-family: 'Roboto Mono', monospace;
  width: 40%;
  background-color: rgba($lighter-color, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100px auto;
  box-sizing: border-box;

  input,
  select {
    padding: 20px;
    margin: 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid $secondary-color;
    &:focus {
      border-radius: 0;
      outline: none;
    }
  }

  label {
    padding: 0;
  }

  p {
    padding: 10px;
    width: 100%;
  }
  button {
    padding: 20px;
    margin: 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid $secondary-color;
  }
  a {
    color: black;
    font-weight: 700;
  }
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 80%;
}
.form-group {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  select > option {
    padding-top: 20px;
  }
}
.btn {
  font-size: 20px;
  font-weight: 700;
  background-color: $primary-color;
  color: white;
}
input[type='radio'] {
  display: block;
  width: 8% !important;

  margin: 20px 5px;
  transform: scale(2);
}
@media only screen and (max-width: 768px) {
  .form {
    width: 90%;
    input,
    select {
      padding: 5px;
      margin: 10px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid $secondary-color;
      &:focus {
        border-radius: 0;
        border: 2px solid $secondary-color;
      }
    }
    button {
      padding: 10px;
      margin: 10px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid $secondary-color;
      font-size: 15px;
    }
    p {
      padding: 10px;
      margin: 0 10px 10px 10px;
      width: 100%;
      font-size: 15px;
    }
    h1 {
      font-size: 1rem;
    }
  }
}
.green:focus {
  border-color: green !important;
}
.red {
  &:focus {
    border-color: red !important;
  }
}
.disabled:disabled {
  background-color: #dddddd;
}
/* style the items (options), including the selected item: */
.box {
  position: relative;
}
.box select {
  padding: 20px;
  width: 200px;
}
</style>
