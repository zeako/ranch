<template>
  <q-card
    class="my-card"
    style="min-width: 200px"
  >
    <q-img
      src="restaurantImage"
      basic
    >
      <div class="absolute-bottom text-h6">
        {{ restaurantName }}
      </div>
    </q-img>

    <q-card-section>
      #{{ restaurantId }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      store: {
        restaurantName: 'foo'
      }
    }
  },
  props: {
    restaurantId: {
      type: Number,
      required: true
    },
    restaurantName: {
      type: String,
      required: true
    },
    restaurantImage: {
      type: String,
      required: true
    }
  }
}
</script>
