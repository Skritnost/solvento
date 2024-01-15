<template>
  <header class="app-header">
    <router-link to="/" class="logo">Trip Management</router-link>
    <nav>
      <router-link to="/" class="nav-link">Trips</router-link>
      <router-link to="/trips/create" class="nav-link">Create a trip</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'TripsHeader',
};
</script>

<style scoped>
.app-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
}

nav {
  display: flex;
}

.nav-link {
  margin-left: 15px;
  color: #fff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
