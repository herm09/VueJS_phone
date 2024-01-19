<script>
import { useContactStore } from '@/stores/contact'

export default {
    name: 'FormContact',
    setup() {
        const contactStore = useContactStore()
        return {
            contactStore
        }
    },
    data() {
        return {
            formContact: {
                prenom: '',
                numero: ''
            },
        }
    },
    methods: {
        ajoutContact() {
            this.contactStore.ajoutContact(this.formContact) //on utilise le personnageStore puis le ajoutPerso en envoyant formPerso
            this.formContact = {
                prenom: '',
                numero: ''
            };
        }
    },
}
</script>


<template>

    <form @submit.prevent="ajoutContact()">
        <label for="Prénom">Prénom</label>
        <input type="text" id="Prénom" v-model="formContact.prenom">
        <label for="Numéro">Numéro</label>
        <input type="tel" id="Numéro" v-model="formContact.numero">
        <button type="submit">Ajouter</button>
    </form>

</template>

<style scoped>
form {
    background-color: rgb(115, 111, 212);
    width: 50vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #9939bc;
    color: black;
    font-weight: bold;
}
</style>