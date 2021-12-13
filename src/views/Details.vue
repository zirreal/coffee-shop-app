<template>
  <div class="details">
    <OurCoffee />
    <div v-if="post">
      <SingleItem :card="post" />
    </div> 
    <Spinner v-else />
  </div>
</template>

<script>
import OurCoffee from '../components/OurCoffee.vue';
import SingleItem from '../components/SingleItem.vue';
import Spinner from '../components/Spinner.vue';
import getPost from '../composables/getPost';
import { useRoute, } from 'vue-router';

export default {
  components: {OurCoffee, SingleItem, Spinner},

  setup() {
    const route = useRoute();
    const { post, error, load} = getPost(route.params.id);

    load();
    

    return {post, error}
  }
}
</script>

<style>

</style>