<script>
import ContactView from '@/components/ContactView.vue'
export default {
  name: 'JournalView',
  components: {
    ContactView
  },
  data() {
    return {
      journal: []
    }
  },
  methods: {
    ajouterAuJournal(contact) {
      this.journal.push(contact);
    }
  }
}
</script>


<template>
  <div class="journal">
    <h1>Journal d'appels</h1>
    <ContactView @appeler-contact="ajouterAuJournal" />

    <div class="journal-entries">
      <div v-for="(contact, index) in journal" :key="index">
        <!-- Remplacez ceci par la façon dont vous voulez afficher chaque contact -->
        <p>{{ contact.prenom }} - {{ contact.numero }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
@media (max-width: 1025px) {
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>