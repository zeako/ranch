<template>
  <q-page padding>
    <!-- content -->
    <div>
      This is main page
    </div>
    <div>
      <q-btn color="secondary" label="Submit restaurnt" v-on:click="submit" :loading="loading"/>
    </div>
  </q-page>
</template>

<script>
import db from '../fb'

export default {
  // name: 'PageName',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true

      let restaurant = {
        name: 'Lusky',
        attenders: 5
      }

      console.log(db.collection('restaurants'))
      db.collection('restaurants').add(restaurant).then(() => {
        this.loading = false
        console.log(`added ${restaurant.name} to db`)
      })
    }
  }
}
</script>
