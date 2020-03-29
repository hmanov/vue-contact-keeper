<template>
  <div class="wrapper">
    <!-- <button class="create" routerLink="/contacts/create">
      Create Contact
    </button> -->
    <input
      type="text"
      class="search"
      @keyup="search($event.target.value)"
      placeholder="Search Contact Here..."
    />
    <div class="contactWrapper">
      <contact
        class="container"
        v-for="contact in contacts"
        :key="contact._id"
        :contact="contact"
      ></contact>
    </div>
  </div>
</template>

<script>
import Contact from '../components/Contact';
import { contactsMixin } from '../mixins/contacts';

export default {
  components: { Contact },
  mixins: [contactsMixin],
  data() {
    return {
      baseContacts: []
    };
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  },
  methods: {
    search(value) {
      const ct = Array.from(this.baseContacts).filter(e => {
        for (let field of Object.values(e)) {
          if (field.toString().includes(value)) {
            return true;
          }
        }
      });

      this.$store.commit('updateContacts', ct);
    }
  },
  async created() {
    this.baseContacts = Array.from(await this.getContacts());
  }
};
</script>
<style lang="scss" scoped>
$primary-color: #1d2228;
$secondary-color: #fb8122;
$lighter-color: #e1e2e2;

.modal {
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(#000000, 0);
  width: 100vw;
  height: 100vh;
  .frame {
    display: flex;
    position: relative;
    width: 40vw;
    height: 40vh;
    margin-bottom: 40vh;
  }
}
.wrapper {
  margin: 0;
  padding: 10vh 0 0 0;
  width: 100%;
  min-height: 90vh !important;
  display: flex;

  background-image: url('../assets/static/contacts.jpg');
  background-size: cover !important;
  background-attachment: fixed !important;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .create {
    border: 1px solid $secondary-color;
    margin-top: 13vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    align-self: center;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    background-color: $primary-color;
    color: $lighter-color;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .search {
    display: block;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    width: 30%;
    font-size: 18px;
    border: 1px solid $secondary-color;
    background-color: rgba($primary-color, 0.3);
    color: $lighter-color;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $lighter-color;
      font-size: 18px;
      text-align: center;
    }
  }
  min-height: 100%;
  .contactWrapper {
    margin: 8vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .create,
  .search {
    width: 90% !important;
    padding: 5px;
  }
  .search {
    &::placeholder {
      text-align: center;
    }
  }
}
</style>
