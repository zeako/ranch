<template>
  <div>
    <div
      class="column q-gutter-lg"
      style="max-width: 800px"
    >
      <q-btn
        to="main"
        label="Main"
      />
      <q-btn
        label="Get Users"
        class="bg-primary"
        @click="onGetUsers"
      />
      <div
        v-if="userList.length > 0"
      >
        Users: {{ userList }}
      </div>
      <div
        v-if="currentUserId"
      >
        Current User: {{ currentUserId }}
      </div>
      <div
        v-if="currentUser"
      >
        currentUser={{ currentUser }}
      </div>

      <q-select
        v-if="userListOptions.length > 0"
        v-model="currentUserId"
        :options="userListOptions"
        map-options
        emit-value
      />
      <div
        v-if="currentUser"
      >
        Hello {{ currentUser.name }}
      </div>
      <div
        class="row q-gutter-sm"
      >
        <restaurant-item
          v-for="item in restaurantsList"
          :key="`item_${ item.id }`"
          :restaurant-id="item.id"
          :restaurant-image="item.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RestaurantItem from './RestaurantItem'

export default {
  // name: 'ComponentName',
  data () {
    return {
      currentUserId: null
    }
  },
  components: {
    RestaurantItem
  },
  computed: {
    userListOptions () {
      return (this.userList && this.userList.map(user => { return { value: user.id, label: user.name } })) || []
    },
    currentUser () {
      return this.currentUserId && this.userList && this.userList.find(x => x.id === this.currentUserId)
    },
    restaurantsList () {
      return (this.restaurantList && this.restaurantList.map(restaurant => { return { restId: restaurant.id, restName: restaurant.name, restImage: restaurant.image } }))
    },
    ...mapState('users', [
      'userList'
    ]),
    ...mapState('restaurants', [
      'restaurantList'
    ])
  },
  created () {
    this.onGetUsers()
    this.getRestaurantsAction()
  },
  methods: {
    onGetUsers () {
      console.log('get users')
      this.getUsersAction()
    },
    ...mapActions('users', [
      'getUsersAction'
    ]),
    ...mapActions('restaurants', [
      'getRestaurantsAction'
    ])
  }
}
</script>
