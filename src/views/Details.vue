<template>
  <div class="host" v-if="contact">
    <div class="container">
      <form @submit.prevent="editContact(contact)">
        <h1>EDIT YOUR CONTACT</h1>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            value=""
            v-model="contact.name"
            placeholder="Name..."
            @focus="validate('name')"
            @keydown="validate('name')"
          />
          <template v-if="$v.contact.name.$error">
            <div class="error" v-if="!$v.contact.name.required">
              name is required
            </div>
          </template>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            value=""
            v-model="contact.email"
            placeholder="Email..."
            @focus="validate('email')"
            @keydown="validate('email')"
          />
          <template v-if="$v.contact.email.$error">
            <div class="error" v-if="!$v.contact.email.required">
              email is required
            </div>
            <div class="error" v-if="!$v.contact.email.email">
              Valid email is required
            </div>
          </template>
        </div>
        <div class="form-group">
          <input
            type="radio"
            :checked="contact.type === 'personal'"
            value="personal"
            v-model="contact.type"
          />
          <label for="huey">Personal</label>
          <input
            type="radio"
            value="professional"
            :checked="contact.type === 'professional'"
            v-model="contact.type"
          />
          <label for="huey">Professional</label>
        </div>
        <!-- <div class="form-group">
          
          <input type="text" class="form-control" value="" v-model="contact.type" />
        </div> -->
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            value=""
            v-model="contact.phone"
            placeholder="Phone..."
          />
        </div>
        <div class="form-group">
          <div class="btn-group">
            <button type="submit" class="edit green" :disabled.sync="$v.$invalid">
              Save
            </button>

            <button type="button" class="delete" @click="deleteContact(contact._id)">Delete</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { contactsMixin } from '../mixins/contacts';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
export default {
  mixins: [contactsMixin, validationMixin],
  props: {
    contact: {
      type: Object
    }
  },
  validations: {
    contact: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    validate(input) {
      this.$v.contact[input].$touch();
    }
  },
  created() {
    if (!this.contact) {
      this.$router.push({ name: 'Contacts' });
    }
  }
};
</script>
<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;
.host {
  background-image: url('../assets/static/contacts.jpg');
  background-size: cover !important;
  background-attachment: fixed !important;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
input[type='radio'] {
  width: 8%;

  margin: 20px 5px;
  transform: scale(2);
}
.container {
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    .error {
      padding: 5px 15px;
      margin: 5px 0;
      width: 100%;
      color: red;
      font-size: 12px;
      background-color: white;
      border: 1px red solid;
      border-radius: 5px;
    }
    h1 {
      color: $lighter-color;
    }
    width: 60%;
    height: fit-content;

    border: 1px $secondary-color solid;
    border-radius: 10px;
    background-color: rgba($primary-color, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn-group {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      width: 100%;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      padding: 20px;

      &:nth-child(4) {
        flex-direction: row;
      }
      .alert {
        padding: 5px 15px;
        border: 1px solid $lighter-color;
        display: block;
        width: 100%;
        margin-top: 10px;

        background-color: red;
        color: $lighter-color;
        div {
          display: block;

          padding: 5px;
          width: 100%;
        }
      }
      input {
        background-color: transparent;
        border: 1px #fb8122 solid;
        display: block;
        width: 100%;
        padding: 15px;
        color: $lighter-color;
        font-size: 16px;
        border-radius: 5px;
      }
    }
    .delete,
    .edit {
      margin: 5px 20px;
      padding: 5px;
      width: 50px;
      height: 50px;
      text-align: center;
      font-weight: 800;
      border-radius: 50%;
      font-size: 10px;
      border: 1px solid $secondary-color;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    .edit {
      background-color: white;
      color: green;
      &:disabled {
        color: gray;
      }
    }
    .delete {
      background-color: white;
      color: red;
    }
    .green {
      color: green;
    }
  }
}
input[type='radio'] {
  width: 8% !important;
  margin: 20px 5px;
  transform: scale(2);
}
label {
  color: $lighter-color;
  font-size: 16px;
}
@media only screen and (max-width: 768px) {
  form {
    h1 {
      font-size: 24px;
    }
    margin-top: 50px;
    width: 90% !important;
    min-height: fit-content;
    input {
      margin: 5px;
    }
  }
  .form-group {
    padding: 5px !important;
  }
}
</style>
