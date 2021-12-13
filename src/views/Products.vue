<template>
  <OurPleasure />
  <AboutProduct 
    :productPhoto="aboutGoodsData.img" 
    :productTitle="aboutGoodsData.title"
    :productDescr1="aboutGoodsData.descr1" 
    :productDescr2="aboutGoodsData.descr2" 
  />
  <div class="error" v-if="error">{{ error }}</div>
  <CoffeeCards :cards="posts" v-if="posts.length" />
  <Spinner v-else/>
</template>

<script>
import OurPleasure from '../components/OurPleasure.vue';
import AboutProduct from '../components/AboutProduct.vue';
import CoffeeCards from '../components/CoffeeCards.vue';
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts';
export default {
  components: {OurPleasure, AboutProduct, CoffeeCards, Spinner},

  setup() {
    const aboutGoodsData = {
      title: 'About our goods',
      img: require('../assets/img/goods.jpg'),
      descr1: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
      descr2: 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
    };

    const { error, posts, load } = getPosts('coffeeCards');

    load();

    return {
      aboutGoodsData, posts, error
    }
  }
}
</script>

<style>

</style>