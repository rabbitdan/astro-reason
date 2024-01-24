<script>
export default {
  data() {
    return {
      open: false,
      navLinks: [
        {
          url: '/',
          text: 'Home'
        },
        {
          url: '/what',
          text: 'What we do'
        },
        {
          url: '/divide',
          text: 'The digital divide'
        },
        {
          url: '/involved',
          text: 'Get involved'
        },
        {
          url: '/network',
          text: 'Our network'
        },
        {
          url: '/insights',
          text: 'Insights'
        },
      ]
    };
  },
  methods: {
    handleToggle(e) {
      e.stopPropagation();
      this.open = !this.open;
    }
  }
}
</script>

<template>
  <nav class="navigation">
    <div class="burger"
         @click="handleToggle">
      <div class="bar"/>
      <div class="bar"/>
      <div class="bar"/>
    </div>
    <div class="navigation__panel" :class="{open: open}" :open="open">
      <div class="navigation__close" @click="handleToggle" :open="open">&times;</div>
      <ul>
        <li v-for="navLink in navLinks">
          <a :href="navLink.url" class="navigation__link">{{ navLink.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .store {
    color: black;
  }
  .navigation {
    .burger {
      display: flex;
      @media (min-width: 1130px) {
        display: none;
      }
    }
    &__panel {
      background-color: rgba(0,0,0,0.8);
      bottom: 0;
      display: none;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 3000;
      @media (min-width: 1130px) {
        background-color: transparent;
        bottom: unset;
        display: flex;
        left: unset;
        position: relative;
        right: unset;
        top: unset;
        z-index: unset;
      }
      &.open {
        display: block;
      }
      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        list-style: none;
        @media (min-width: 1130px) {
          align-items: center;
          flex-direction: row;
          justify-content: flex-start;
        }
        li {
          margin: 1rem 0;
          @media (min-width: 1130px) {
            margin: 0;
          }
          .navigation__link {
            color: var(--vt-c-white);
            font-size: 2rem;
            padding: 0.25rem 1rem;
            @media (min-width: 1130px) {
              color: var(--vt-c-black);
              font-size: 1rem;
              padding: 0.25rem 1rem;
            }
          }
        }
      }
    }
    &__close {
      color: var(--vt-c-white);
      cursor: pointer;
      display: block;
      font-size: 4rem;
      position: absolute;
      right: 5rem;
      top: 1.5rem;
      z-index: 4000;
      @media (min-width: 1130px) {
        display: none;
      }
    }
  }
</style>
