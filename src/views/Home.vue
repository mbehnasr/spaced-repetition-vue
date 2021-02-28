<template>
  <div class="home p-grid">
    <Card class="p-col-6 p-offset-3">
      <template #content>
        <form @submit.prevent="submitNewCardForm" class="p-fluid">
          <div class="p-field">
            <label for="question">Question</label>
            <InputText
              id="question"
              v-model="question"
              class="p-field p-mb-3"
            />
          </div>
          <div class="p-field">
            <label for="answer">Answer</label>
            <InputText id="answer" v-model="answer" class="p-field p-mb-3" />
          </div>
          <Button type="submit" label="Add New Car" />
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from 'vuex'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Card from 'primevue/card'
export default {
  name: 'Home',
  components: {
    InputText,
    Button,
    Card
  },
  data () {
    return {
      question: '',
      answer: ''
      // fuck:[]
    }
  },
  computed: {
    // ...mapState({ fuck: 'cards' })
    ...mapState(['cards'])

  },
  methods: {
    ...mapActions(['createCard']),
    submitNewCardForm () {
      const payload = {
        question: this.question,
        answer: this.answer
      }
      this.createCard(payload)
      this.answer = ''
      this.question = ''
    }
  }
}
</script>
