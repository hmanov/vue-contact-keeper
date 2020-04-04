<template>
  <div class="host">
    <div class="form" @submit.prevent="createContact({ name, email, phone, type })">
      <div class="container">
        <h1>CREATE CONTACT</h1>
        <form>
          <div class="form-group">
            <input
              :class="{ valid: !$v.name.$error && name !== '' }"
              type="text"
              class="form-control"
              placeholder="Contact Name *"
              v-model="name"
              @keydown="validate('name')"
              @blur="validate('name')"
            />
            <template v-if="$v.name.$error">
              <div class="error" v-if="!$v.name.required">
                name is required
              </div>
              <div class="error" v-if="!$v.name.minLength">
                min length is 3
              </div>
            </template>
          </div>

          <div class="form-group">
            <input
              :class="{ valid: !$v.email.$error && email !== '' }"
              type="text"
              class="form-control"
              placeholder="Contact Email *"
              v-model="email"
              @keydown="validate('email')"
              @blur="validate('email')"
            />
            <template v-if="$v.email.$error">
              <div class="error" v-if="!$v.email.required">
                email is required
              </div>
              <div class="error" v-if="!$v.email.email">
                invalid email
              </div>
            </template>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Phone" v-model="phone" :class="{ valid: phone !== '' }" />
          </div>

          <div class="form-group">
            <input type="radio" checked value="personal" v-model="type" />
            <label for="huey">Personal</label>
            <input type="radio" value="professional" v-model="type" />
            <label for="huey">Professional</label>
          </div>
          <span> <span style="color: red;">*</span> Required Fileds </span>

          <div class="form-group">
            <button type="submit" class="btn" :disabled.sync="$v.$invalid">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import { contactsMixin } from '../mixins/contacts';
export default {
  mixins: [contactsMixin, validationMixin],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    validate(input) {
      this.$v[input].$touch();
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
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/static/bg-register.jpg');
  background-attachment: fixed;
  background-size: cover;
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input,
  select {
    display: block;
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
  flex-direction: column;
  &:nth-last-child(3) {
    flex-direction: row;
  }
  justify-content: center;
  align-items: center;
  select > option {
    padding-top: 20px;
  }
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
input[type='radio'] {
  width: 8% !important;
  margin: 20px 5px;
  transform: scale(2);
}
.valid {
  border-color: green !important;
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
