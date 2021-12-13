<template>
  <div class="container">
      <nav class="nav">
      <ul class="reset nav__list">
        <li class="nav__item">
          <router-link class="link logo-link" :to="{ name: 'Home' }">
            <img :src=beans alt="logo">
            Coffee house
          </router-link> 
        </li>
        <li class="nav__item">
          <router-link class="link" :to="{ name: 'About' }">Our coffee</router-link> 
        </li>
        <li class="nav__item">
          <router-link class="link" :to="{ name: 'Products' }">For your pleasure</router-link> 
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['beans']
}
</script>

<style lang="scss">
  .nav {
    &__list {
      display: inline-flex;
      align-items: center;
      list-style: none;
    }

    &__item {
      &:not(:last-child) {
        margin-right: 40px;
      }

      a {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .logo-link {
        display: inline-flex;
        align-items: center;
        padding-top: 10px;
      }

      // .router-link-active {
      //   color: red;
      // }
    }
  }
</style>