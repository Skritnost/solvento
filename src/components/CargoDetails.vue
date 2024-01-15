<template>
  <div data-cy="cargo-details-component">
    <h3>Cargo Details</h3>
    <label for="cargoType">Cargo Type:</label>
    <input data-cy="cargoType" v-model="cargoDetails.cargoType" type="text" id="cargoType" required />

    <label for="quantity">Quantity:</label>
    <input data-cy="cargoQuantity" v-model="cargoDetails.quantity" type="number" id="quantity" required />

    <label for="weight">Weight:</label>
    <input data-cy="cargoWeight" v-model="cargoDetails.weight" type="number" id="weight" required />

    <label for="description">Description:</label>
    <textarea data-cy="cargoDescription" v-model="cargoDetails.description" id="description" required></textarea>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'CargoDetails',
  props: {
    modelValue: Object,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const cargoDetails = ref(props.modelValue);

    const updateCargoDetails = () => {
      emit('update:modelValue', cargoDetails.value);
    };

    return { cargoDetails, updateCargoDetails };
  },
});
</script>

<style scoped>
h3 {
  color: #333;
  margin-bottom: 1rem;
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
</style>