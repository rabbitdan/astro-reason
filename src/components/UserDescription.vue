<script>
export default {
  data() {
    return {
      userTypes: ['A person', 'A researcher', 'A community organisation'],
      userGoals: ['Improve my online skills', 'Help', 'Work for you', 'Learn about the digital divide', 'Donate']
    }
  }
}
</script>

<template>
  <div class="description">
    <h3 class="subheading description__subheading">How can we help you?</h3>
    <p>Let us know who you are and what you're looking for, and we'll help you get to the right place</p>
    <div class="description__describe">
      I am an
      <select name="describe-who" id="describe__who" class="description__select">
        <option v-for="type in userTypes" :value="type">{{ type }}</option>
      </select>
      and I want to
      <select name="describe-what" id="describe__what" class="description__select">
        <option v-for="goal in userGoals" :value="goal">{{ goal }}</option>
      </select>
      <a href="/involved" class="button button--highlight button--round description__button">
        Start now
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .description {
    background-color: var(--vt-c-text-dark-2);
    color: var(--vt-c-black);
    padding: 3rem 2rem;
    @media (min-width: 1023px) {
      padding: 3rem 5rem;
    }
    &__subheading {
      font-size: 1.5rem;
    }
    p {
      margin: 0 0 1rem 0;
    }
    &__describe {
      align-items: flex-start;
      background-color: var(--vt-c-white);
      display: flex;
      flex-direction: column;
      font-size: 1.25rem;
      font-weight: 100;
      justify-content: flex-start;
      padding: 1.5rem 3rem;
      @media (min-width: 1200px) {
        align-items: center;
        flex-direction: row;
        justify-content: center;
      }
    }
    &__select {
      border: none;
      border-bottom: 2px solid var(--colour-secondary);
      color: var(--colour-secondary);
      display: inline-block;
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0;
      @media (min-width: 1200px) {
        margin: 0 2rem;
      }
    }
    &__button {
      margin: 1rem 0 0 0;
    }
  }
</style>
