<script setup>
import TheSearch from './TheSearch.vue'
import UserPurpose from './UserPurpose.vue'
</script>

<template>
  <div class="utility">
    <TheSearch />
    <UserPurpose />
  </div>
</template>

<style lang="scss" scoped>
  .utility {
    border-bottom: 1px solid #cdcdcd;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
    @media (min-width: 1023px) {
      padding: 0 5rem;
    }
  }
</style>
