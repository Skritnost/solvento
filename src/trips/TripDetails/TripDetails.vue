<template>
  <div class="container">
    <h2>Trip Details</h2>

    <TripForm v-model="trip"/>

    <div>
      <button @click="updateTrip">Update Trip</button>

      <button @click="deleteTrip">Delete Trip</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import TripForm from '../shared/TripForm/TripForm.vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'TripDetails',
  components: {
    TripForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter()
    const route = useRoute()

    const tripId = route.params.id;
    let trip = ref(store.getters.getTripById(tripId));
    const updateTrip = () => {
      store.commit('updateTrip', {
        id: trip.value.id,
        departureDate: trip.value.departureDate,
        cargoDetails: { ...trip.value.cargoDetails },
        clientName: trip.value.clientName,
        deliveryDestinations: trip.value.deliveryDestinations,
      });
    };

    const deleteTrip = () => {
      store.commit('deleteTrip', trip.value.id);

      router.push({ path: '/' })
    };

    return { trip, updateTrip, deleteTrip };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}
</style>
