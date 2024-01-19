<script>
import CarteContact from '@/components/CarteContact.vue'
import FormContact from '@/components/FormContact.vue';
import { useContactStore } from '@/stores/contact'

export default {
  name: 'ContactView',
  setup() {
    const contactStore = useContactStore()
    return {
      contactStore
    }
  },
  computed: {
    contacts() {
      return this.contactStore.contacts
    }
  },
  components: {
    CarteContact,
    FormContact
  },
  data() {
    return {
      showForm: false
    }
  },
  methods: {
    ajoutContact(contact) {
      this.contacts.push(contact)
    }
    // appeler(contact) {
    //   this.$emit('appeler-contact', contact);
    // }
  }
}
</script>


<template>
  <div class="contacts">
    <h1>Vos contacts</h1>

    <button @click="showForm = !showForm">Ajouter un contact</button>
    <FormContact v-if="showForm" />

    <div class="cartes">
      <div class="card" v-for="contact in contacts" :key="contact.prenom">
        <CarteContact :contact="contact" /> <!-- nom de la variable et a droite valeur de la clé -->
        <!-- <button class="call">Appeler</button> -->
        <!-- <button class="call">Appeler</button> -->

      </div>
    </div>
  </div>
</template>


<style scoped>

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin-top: 10px;
  border-radius: 2px;
  border: none;
  background-color: rgb(237, 237, 240);
  color: rgb(0, 0, 0);
  font-size: 20px;
  cursor: pointer;

}

.cartes {
  display: flex;
  flex-direction: column;
  margin: 50px;
  gap: 20px;
  color: black;
  flex-wrap: wrap;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.call {
  margin-top: 10px;
  border-radius: 2px;
  border: none;
  background-color: rgb(237, 237, 240);
  color: rgb(0, 0, 0);
  font-size: 20px;
}

.error {
  color: red;
}

@media (max-width: 1025px) {
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>
