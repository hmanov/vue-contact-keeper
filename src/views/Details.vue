<template>
  <div class="host" v-if="contact">
    <div class="container">
      <form @submit.prevent="editContact(contact)">
        <h1>EDIT YOUR CONTACT</h1>
        <div class="form-group">
          <input type="text" class="form-control" value="" v-model="contact.name" />
          <!-- <div class="alert">
            <div v-if="name.errors.required">
              Name is required.
            </div>
            <div v-if="name.errors.minlength">
            Name must be at least 4 characters long.
            </div>
            <div v-if="name.errors.forbiddenName">
            Name cannot be Bobi.
            </div>
          </div> -->
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="" v-model="contact.email" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="" v-model="contact.type" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="" v-model="contact.phone" />
        </div>
        <div class="form-group">
          <div class="btn-group">
            <button type="submit" class="edit green" value="">
              edit
            </button>

            <button type="button" class="delete">Delete</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { contactsMixin } from '../mixins/contacts';
export default {
  mixins: [contactsMixin],
  props: {
    contact: {
      type: Object
    }
  },
  beforeMount() {
    console.log(this.contact._id);
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
.container {
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
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
        font-size: 14px;
        font-weight: 700;
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

@media only screen and (max-width: 768px) {
  form {
    width: 90% !important;

    min-height: fit-content;
  }
}
</style>
