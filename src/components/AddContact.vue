<script>
export default {
    name: 'PhoneKeyboard',
    props: ['contacts'],
    methods: {
        appeler(contact) {
        this.$emit('appeler-contact', contact);
        }
    }
}
</script>


<template>
    <div class="contact-view">
      <div v-for="contact in contacts" :key="contact.numero">
        <p>{{ contact.prenom }} - {{ contact.numero }}</p>
        <button @click="appeler(contact)">Appeler</button>
      </div>
    </div>

</template>


<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
</style>