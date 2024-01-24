<script setup>
import SiteLogo from './SiteLogo.vue'
import TheNavigation from './TheNavigation.vue'
</script>

<template>
  <header class="header">
    <SiteLogo />
    <TheNavigation />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
  @media (min-width: 1023px) {
    padding: 0 5rem;
  }
}
</style>
