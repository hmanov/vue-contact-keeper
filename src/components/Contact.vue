<template>
  <div class="host">
    <div class="ss">
      <div class="img " @click="details"><p class="rotating">Contact Keeper</p></div>
      <div class="contact">
        <div @click="details">
          <div class="row">
            <h3>{{ contact.name }}</h3>
          </div>
          <div class="row">
            <p>{{ contact.email }}</p>
          </div>
          <div class="row">
            <p>{{ contact.phone }}</p>
          </div>
          <div class="row">
            <p>{{ contact.type }}</p>
          </div>
        </div>
        <div class="row btn-row">
          <button type="button" class="edit" @click="details">
            Details
          </button>

          <button @click="deleteContact(contact._id)" class="delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { contactsMixin } from '../mixins/contacts';
export default {
  mixins: [contactsMixin],
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    details() {
      this.$router.push({ name: 'Details', params: { contact: this.contact } });
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;
.host {
  display: flex;
  width: 30%;
  flex-direction: row;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
}
.ss {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  color: $lighter-color;
  background-color: rgba($color: $primary-color, $alpha: 0.5);
  border-radius: 10px;
  &:hover {
    background-color: $secondary-color;
  }
}

.img {
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 33%;
  background-color: $secondary-color;
  text-align: center;
  cursor: pointer;
  p {
    color: $lighter-color !important;
  }
}
.contact {
  margin-right: 15px;
  width: 66%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  &.btn-row {
    justify-content: flex-end;
  }
  p {
    margin: 5px;
  }
  h3 {
    margin: 5px;
  }

  .delete,
  .edit {
    margin: 5px;
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
    color: $secondary-color;
  }
  .delete {
    background-color: white;
    color: red;
  }
}
@media only screen and (max-width: 992px) {
  .host {
    width: 100%;
  }
  p {
    text-align: center;
  }
}
</style>
