<script>
export default {
    name: 'CarteContact',
    props: [
        'contact' //nom qui se situe à gauche de se qu'on a envoyé. Passer un élément parent à enfant
    ],
    methods: {
        appeler(contact) {
            this.$emit('appeler-contact', contact);
        } 
    }
}
</script>


<template>
    <div>
        <h2>{{ contact.prenom }}</h2>
        <p>{{ contact.numero }}</p>
        <button @click="appeler(contact)" class="call">📞</button>
    </div>
</template>


<style scoped>
div {
    width: 400px;
    margin: 0 auto;
    height: 100px;
    background-color: rgb(115, 111, 212);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.call {
  border-radius: 2px;
  border: none;
  background-color: rgb(115, 111, 212);
  color: rgb(0, 0, 0);
  font-size: 20px;
  width: 80px;
  cursor: pointer;
}
</style>
