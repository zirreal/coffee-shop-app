<template>
  <footer class="footer">
    <Navbar :beans=beans />
    <div class="divider">
      <img src="../assets/img/beans-logo-dark.svg" alt="coffee">
    </div>
  </footer>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  components: {Navbar},
  props: ['beans']
}
</script>

<style lang="scss">
  .footer {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;

    a {
      color: #000;
    }
  }
</style>