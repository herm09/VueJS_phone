<script>
export default {
    name: 'ContactView',
    methods: {
        ajoutContact(contact) {
            this.contacts.push(contact)
        },
        appeler(contact) {
            this.$emit('appeler-contact', contact);
        }
}
}
</script>


<template>
    <div class="cartes">
        <div class="card" v-for="contact in contacts" :key="contact.prenom">
        <CarteContact :contact="contact" />
        <button class="call" @click="appeler(contact)">Appeler</button>
        </div>
    </div>
</template>
