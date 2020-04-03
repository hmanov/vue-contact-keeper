<template>
  <div class="host">
    <div class="form">
      <h1>LOGIN</h1>
      <form @submit.prevent="requestError(login(email, password))">
        <div class="form-group">
          <input
            type="text"
            v-model="email"
            @blur="validate('email')"
            class="form-control"
            placeholder=" Your Email * "
            autocomplete="username"
          />
          <template v-if="$v.email.$error">
            <div class="error" v-if="!$v.email.required">
              email is required
            </div>
            <div class="error" v-if="!$v.email.email">
              Invalid Email
            </div>
          </template>
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder=" Your Pasword *"
            autocomplete="new-password"
            @keydown="validate('password')"
            @blur="validate('password')"
          />
          <div class="error" v-if="errors">
            {{ serverErrors(errors) }}
          </div>
          <template v-if="$v.password.$error">
            <div class="error" v-if="!$v.password.required">
              password is required
            </div>
            <div class="error" v-if="!$v.password.minLength">
              password min length 6
            </div>
          </template>
        </div>

        <span> <span style="color: red;">*</span> Required Fileds </span>

        <div class="form-group">
          <button type="submit" class="btn" :disabled="$v.$invalid">SIGN IN</button>
        </div>
        <div class="form-group">
          <p>
            Don't have an account ?
            <router-link :to="{ name: 'Register' }">
              <a> Register here</a>
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import { auth } from '../mixins/auth';
export default {
  name: 'Login',
  mixins: [validationMixin, auth],
  data() {
    return {
      password: '',
      email: '',
      errors: ''
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },

  methods: {
    validate(input) {
      this.$v[input].$touch();
    },
    async requestError(a) {
      this.errors = await a;
    },
    serverErrors(err) {
      console.log(typeof err);
      return typeof err === 'object' ? err.map(e => e.msg).join(', ') : err;
    }
  }
};
</script>
<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;

.host {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/static/bg-register.jpg');
  background-attachment: fixed;
  background-size: cover;
}

button,
a {
  cursor: pointer;
}
.form {
  .error {
    padding: 5px 0;
    width: 100%;
    color: red;
    font-size: 12px;
    background-color: white;
    border: 1px red solid;
    border-radius: 5px;
  }
  margin-top: 10vh;
  width: 50%;
  height: fit-content;
  background-color: rgba($lighter-color, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input,
  label {
    text-align: left;
    padding: 20px;
    margin: 10px;
    width: 90%;
    border-radius: 5px;
    border: 1px solid $secondary-color;
    &:focus {
      border-radius: 0;
      outline: none;
    }
  }
  p {
    padding: 10px;
    width: 100%;
  }
  button {
    padding: 20px;
    margin: 20px 0;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.btn {
  transition: background-color 1s ease;
  font-size: 20px;
  font-weight: 700;
  background-color: $primary-color;
  color: white;
  &:disabled {
    background-color: lighten($color: #1d2228, $amount: 50%);
  }
}
.valid {
  border-color: green !important;
}
@media only screen and (max-width: 768px) {
  .form {
    width: 90%;
    input,
    label {
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
</style>
