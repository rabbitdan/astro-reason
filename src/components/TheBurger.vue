<template>
  <div class="burger"
       @click="openMenu(true)"
       v-if="!isMenuOpen">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isMenuOpen = ref<boolean>(false)
const openMenu = (action: boolean) => {
  isMenuOpen.value = action;
}
</script>

<style lang="scss" scoped>
.burger {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-between;
  margin: 1.5rem 0;
  position: relative;
  width: 2rem;
  &--open {

  }
  .bar {
    background-color: var(--vt-c-black);
    display: block;
    height: 0.25rem;
    width: 2rem;
  }
}
</style>
