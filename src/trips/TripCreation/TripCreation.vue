<template>
  <div class="container">
    <h2>Create a New Trip</h2>

    <TripForm v-model="trip" />

    <button @click="saveTrip">Save Trip</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TripForm from "../shared/TripForm/TripForm.vue";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'TripCreation',
  components: {
    TripForm,
  },
  setup() {
    const store = useStore();

    let trip = ref({
      departureDate: '',
      cargoDetails: {
        cargoType: '',
        quantity: 0,
        weight: 0,
        description: '',
      },
      clientName: '',
      deliveryDestinations: '',
    });

    const saveTrip = () => {
      // Dispatch an action to save the trip to the store
      store.dispatch('saveTrip', {
        id: uuidv4(),
        departureDate: trip.value.departureDate,
        cargoDetails: { ...trip.value.cargoDetails },
        clientName: trip.value.clientName,
        deliveryDestinations: trip.value.deliveryDestinations,
      });

      // Clear the form after saving
      trip.value.departureDate = '';
      trip.value.cargoDetails = {
        cargoType: '',
        quantity: 0,
        weight: 0,
        description: '',
      };
      trip.value.clientName = '';
      trip.value.deliveryDestinations = '';
    };

    return { trip, saveTrip };
  },
};
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

button {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
</style>