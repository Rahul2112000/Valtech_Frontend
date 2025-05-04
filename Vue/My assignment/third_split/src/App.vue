<template>
  <div class="container mt-3">
    <nav class="btn-group mb-4">
      <router-link class="btn btn-primary" to="/">Home</router-link>
      <router-link class="btn btn-primary" to="/expenses">Expenses</router-link>
      <router-link class="btn btn-primary" to="/summary">Summary</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped></style>
