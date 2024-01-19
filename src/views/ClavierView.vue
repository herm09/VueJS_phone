<script>
import PhoneKeyboard from '@/components/PhoneKeyboard.vue'
export default {
  name: 'ClavierView',
  components: {
    PhoneKeyboard
  },
  data() {
    return {
      contacts: []
    }
  }
}
</script>


<template>
    <div class="clavier-view">
        <PhoneKeyboard :contacts="contacts" />
    </div>
</template>

<style scoped>
.clavier-view {
    display: flex;
}

@media (max-width: 1025px) {
    .clavier-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }
}
</style>