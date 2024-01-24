<script setup>

</script>

<template>
  <div class="hero">
    <h1 class="heading hero__heading">Get online week 2021</h1>
    <p class="text hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <RouterLink to="/involved" class="button button--default button--round">Get involved now!</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    align-items: flex-start;
    background-image: url('http://placekitten.com/1920/600');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 30rem;
    justify-content: center;
    padding: 0 2rem;
    @media (min-width: 1023px) {
      padding: 0 5rem;
    }
  }
  .hero__heading {
    background-color: var(--colour-primary);
    color: var(--vt-c-white);
    display: block;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
  }
  .hero__text {
    background-color: var(--vt-c-white);
    color: var(--colour-secondary);
    display: block;
    margin: 0 0 1rem 0;
    max-width: 30rem;
    padding: 1rem;
  }
</style>
