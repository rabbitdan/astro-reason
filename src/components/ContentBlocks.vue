<script setup>
import TheFingerprint from '../components/TheFingerprint.vue'
</script>

<template>
<div class="blocks">
  <div class="block block--image">
    <img src="https://placekitten.com/800/400" alt="Kitten!" class="block__image">
  </div>
  <div class="block block--text">
    <h3 class="subheading block__subheading">We are a social change charity, helping people through to improve their lives through digital.</h3>
    <p class="para para--white block__para">We tackle the most presing issues of our time, working with partners in thousands of communities across the UK and further afield.</p>
    <a href="/learn" class="button button--round button--transparent">Learn more about us</a>
    <TheFingerprint class="block__fingerprint"></TheFingerprint>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .blocks {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
    @media (min-width: 1023px) {
      grid-template-columns: 50% 50%;
    }
    .block {
      &__subheading {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 0 0 1rem 0;
      }
      &__image {
        display: block;
        height: 100%;
        object-fit: cover;
        max-width: 100%;
        width: 100%;
      }
      &--text {
        background-color: var(--colour-secondary);
        color: var(--vt-c-white);
        padding: 2rem;
      }
      &__para {
        margin: 0 0 1rem 0;
      }
      &__fingerprint {
        bottom: 0;
        position: absolute;
        right: 0;
      }
    }
  }
</style>
