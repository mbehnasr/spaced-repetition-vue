<template>
  <div class="about">
    <h1>Card</h1>
    <h2> study cards</h2>

    <div class="p-grid">
      <Card class="p-col-6 p-offset-3">
        <template #content>
          <h3 >
            {{ cards[0].question }}
          </h3>
          <h3 v-if="isFipped">
            {{ cards[0].answer }}
          </h3>
        </template>
        <template #footer>
          <Button
            v-if="!isFipped"
            @click="flipCard"
            label="Show Answer"
          />

          <span v-else class="p-buttonset">
            <Button
              label="Easy"
              class="p-button-success"
            />
            <Button
              label="Medium"
              class="p-button-warning"
            />
            <Button
              label="Hard"
              class="p-button-danger"
            />
          </span>
        </template>
      </Card>
     </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'Cards',
  components: {
    Card,
    Button
  },
  data () {
    return {
      currentCardIndex: 0,
      isFipped: false
    }
  },
  computed: {
    ...mapState(['cards'])
  },
  methods: {
    flipCard () {
      this.isFipped = !this.isFipped
    }
    compeleteCard () {
      //update bucket number

      //move to next card
      //if no next card, show completed screen
    }
  }
}
</script>
