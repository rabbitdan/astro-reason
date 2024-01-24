<script setup>
import IconSearch from './icons/IconSearch.vue'
</script>

<template>
  <button class="button button--default button--search">
    <IconSearch />
    Search
  </button>
</template>

<style lang="scss" scoped>
  .button--search {
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
  }
</style>
