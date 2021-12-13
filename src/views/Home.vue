<template>
  <div class="home">
    <Hero/>
    <About/>
    <OurBest/>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import OurBest from '../components/OurBest.vue';
export default {
  name: 'Home',
  components: {Hero, About, OurBest},

  setup() {

  }
}
</script>

<style scoped>
</style>
