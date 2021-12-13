<template>
  <Navbar :beans="logoLight.src" />
  <router-view/>
  <Footer :beans="logoDark.src" />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: { Navbar, Footer },
  setup() {
    const logoDark = {
      src: require('./assets/img/beans-dark.svg')
    };

    const logoLight = {
      src: require('./assets/img/beans.svg')
    }

    return {
      logoLight, logoDark
    }
  },
}
</script>

<style lang="scss">

</style>
