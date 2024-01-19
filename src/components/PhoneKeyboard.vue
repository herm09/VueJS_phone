<script>
export default {
  props: ['contacts'],
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dialedNumber: ''
    }
  },
  computed: {
    contactName() {
      const contact = this.contacts.find(contact => contact.Numéro === this.dialedNumber);
      return contact ? contact.Prénom : '';
    }
  },
  methods: {
    dial(number) {
      this.dialedNumber += number;
    },
    effacer() {
      this.dialedNumber = this.dialedNumber.slice(0, -1);
    }
  }
}
</script>


<template>
    <div class="phone-keyboard">
        <div class="contact-name">{{ contacts }}</div>

        <div class="dialed-number">{{ dialedNumber }}</div>

        <button v-for="number in numbers" :key="number" @click="dial(number)">
        {{ number }}
        </button>
        <button @click="dial('*')">*</button>
        <button @click="dial('0')">0</button>
        <button @click="dial('#')">#</button>

        <button @click="effacer" class="delete">Effacer</button>
    </div>
</template>
  
  
  
<style scoped>
.phone-keyboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.dialed-number {
  grid-column: span 3;
  text-align: center;
  font-size: 25px;
}

button {
    height: 60px;
    width: 60px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
}

.delete {
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    grid-column: 2 / 3;
}

@media (max-width: 1025px) {
    .phone-keyboard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
}
</style>