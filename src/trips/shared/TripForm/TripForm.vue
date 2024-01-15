<template>
  <form class="form">
    <label for="departureDate">Departure Date:</label>
    <input v-model="trip.departureDate" type="date" id="departureDate" required />

    <label for="clientName">Client Name:</label>
    <input v-model="trip.clientName" type="text" id="clientName" required />

    <label for="deliveryDestinations">Delivery Destinations:</label>
    <textarea v-model="trip.deliveryDestinations" id="deliveryDestinations" required></textarea>

    <CargoDetails v-model="trip.cargoDetails" />
  </form>
</template>

<script>
import CargoDetails from '@/components/CargoDetails.vue';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'TripForm',
  components: {
    CargoDetails,
  },
  props: {
    modelValue: Object,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const trip = ref(props.modelValue);

    const saveTrip = () => {
      emit('update:modelValue', trip.value);
    };

    return { trip, saveTrip };
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
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