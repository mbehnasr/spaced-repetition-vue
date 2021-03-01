<template>
  <div class="about">
    <h1>Card</h1>
    <h2> study cards</h2>

    <div class="p-grid">
      <Card class="p-col-6 p-offset-3">
        <template #content>
          <h3 >
            {{ cards[currentCardIndex].question }}
          </h3>
          <h3 v-if="isFipped">
            {{ cards[currentCardIndex].answer }}
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
              @click="completeCard(1)"
              label="Easy"
              class="p-button-success"
            />
            <Button
              @click="completeCard(0)"
              label="Medium"
              class="p-button-warning"
            />
            <Button
              @click="completeCard(-1)"
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
import { mapActions, mapState } from 'vuex'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { DateTime } from 'luxon'

export default {
  name: 'Cards',
  components: {
    Card,
    Button
  },
  data () {
    return {
      currentCardIndex: 0,
      isFipped: false,
      isCompleted: false
    }
  },
  computed: {
    ...mapState(['cards', 'bucketDays'])
  },
  methods: {
    ...mapActions(['updateCard']),
    flipCard () {
      this.isFipped = !this.isFipped
    },
    completeCard (difficalty) {
      // update bucket number
      // below card make liseten to vuex state.cards and that's work
      // const card = this.cards[this.currentCardIndex]
      const copyCard = { ...this.cards[this.currentCardIndex] }
      let newBucket = copyCard.bucket + difficalty

      if (newBucket > 5) {
        newBucket = 5
      } else if (newBucket < 1) {
        newBucket = 1
      }

      // update card  details in vuex
      // in luxon .plus({ days: this.bucketDays[newBucket -1]})
      const now = DateTime.local().toISO()
      const next = now.plus({ days: this.bucketDays[newBucket - 1] }).toISO()
      const payload = {
        cardIndex: this.currentCardIndex,
        cardDetails: {
          bucket: newBucket,
          nextReviewDate: next,
          lastReviewed: now
        }
      }
      console.log(payload)
      this.updateCard(payload)

      this.currentCardIndex += 1
      if (this.currentCardIndex >= this.cards.length) {
        this.isCompleted = true
        console.log('end')
      } else {
        this.flipCard()
      }
      // else
      // move to next card
      // if no next card, show completed scree
    }
  }
}
</script>
