<script setup>

</script>

<template>
  <div class="what">
    <h2 class="heading">What do we do?</h2>
    <p>You might not have heard of us, but we're the people behind the following impactful programmes.</p>
    <div class="offers">
      <div class="offer">
        <h3 class="offer__subheading">Get online week</h3>
        <p class="offer__para">Lorem ipsum dolor sit amet</p>
        <a href="#" class="button button--round button--default offer__button">Read more</a>
      </div>
      <div class="offer">
        <h3 class="offer__subheading">Learn my way</h3>
        <p class="offer__para">Lorem ipsum dolor sit amet</p>
        <a href="#" class="button button--round button--default offer__button">Read more</a>
      </div>
      <div class="offer">
        <h3 class="offer__subheading">Make it click</h3>
        <p class="offer__para">Lorem ipsum dolor sit amet</p>
        <a href="#" class="button button--round button--default offer__button">Read more</a>
      </div>
      <div class="offer">
        <h3 class="offer__subheading">Digital you</h3>
        <p class="offer__para">Lorem ipsum dolor sit amet</p>
        <a href="#" class="button button--round button--default offer__button">Read more</a>
      </div>
    </div>
    <a href="#" class="button button--round button--default what__button">More about what we do</a>
  </div>
</template>

<style lang="scss" scoped>
  .what {
    background-color: var(--colour-primary);
    color: var(--vt-c-white);
    padding: 3rem 2rem;
    @media (min-width: 1023px) {
      padding: 3rem 5rem;
    }
    &__button {
      margin: 0 auto;
      position: relative;
    }
  }
  .offers {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 100%;
    margin: 2rem 0;
    .offer {
      align-items: center;
      background-color: var(--vt-c-white);
      color: var(--vt-c-black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      &__subheading {
        font-weight: bold;
      }
      &__button {
        border: 1px solid var(--vt-c-black);
        margin: 1rem 0 0 0;
      }
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1023px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
