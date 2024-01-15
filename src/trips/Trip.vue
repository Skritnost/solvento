<template>
  <div id="trip" data-cy="trip-component">
    <TripsHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import TripsHeader from '@/trips/TripsHeader/TripsHeader.vue';

export default {
  name: 'TripView',
  components: {
    TripsHeader,
  },
};
</script>

<style>
</style>