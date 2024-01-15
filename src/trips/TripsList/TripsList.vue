<template>
  <div class="container">
    <h2 class="header">Trips List</h2>
    <ul>
      <li v-for="trip in trips" :key="trip.id">
        <strong>{{ trip.departureDate }}</strong>
        <p>Cargo Type: {{ trip.cargoDetails.cargoType }}</p>
        <p>Client Name: {{ trip.clientName }}</p>
        <p>Delivery Destinations: {{ trip.deliveryDestinations }}</p>
        <router-link :to="{ name: 'trip-details', params: { id: trip.id } }">
          <button>View Details</button>
        </router-link>
      </li>
    </ul>

    <h3 v-if="!trips.length" class="info">
      There are no trips, start adding
    </h3>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TripsList',
  computed: {
    trips() {
      return this.$store.state.trips;
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header {
  color: #333;
  margin-bottom: 1rem;
}

.info {
  color: green;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

li {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
