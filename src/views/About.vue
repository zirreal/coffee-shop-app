<template>
  <div class="about">
    <OurCoffee />
    <AboutProduct 
      :productPhoto="aboutBeansData.img" 
      :productTitle="aboutBeansData.title"
      :productDescr1="aboutBeansData.descr1" 
      :productDescr2="aboutBeansData.descr2" 
    />
    <FilterNav @click="filterCards" @cleanCurrent="cleanCurrent" :current="current"/>
    <div class="error" v-if="error">{{ error }}</div>
    <CoffeeCards :cards="filterTypes" v-if="posts.length"/>
    <Spinner v-else />
  </div>
</template>

<script>
import OurCoffee from '../components/OurCoffee.vue';
import AboutProduct from '../components/AboutProduct.vue';
import CoffeeCards from '../components/CoffeeCards.vue';
import FilterNav from '../components/FilterNav.vue';
import Spinner from '../components/Spinner.vue';
import { computed, ref } from '@vue/reactivity';
import getPosts from '../composables/getPosts';
export default {
  name: 'Home',
  components: {OurCoffee, AboutProduct, CoffeeCards, Spinner, FilterNav},

  setup() {
    const aboutBeansData = {
      title: 'About our beans',
      img: require('../assets/img/our-beans.jpg'),
      descr1: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
      descr2: 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
    };


    const coffeeType = ref('');
    const current = ref('');

    const { error, posts, load } = getPosts('coffeeCards');

    load();


    const filterTypes = computed(() => {
      if(current.value === 'brazil') {
        return posts.value.filter(card => {
         return card.country.toLowerCase().includes('brazil')
        });
      } else if (current.value === 'kenya') {
        return posts.value.filter(card => {
         return card.country.toLowerCase().includes('kenya')
        });
      } else if (current.value === 'columbia') {
          return posts.value.filter(card => {
            return card.country.toLowerCase().includes('columbia')
          });
      } else {
          return posts.value.filter(card => {
           return card.country.toLowerCase().includes(coffeeType.value)
          });
      }
    });

    const filterCards = (e) => {
      current.value = e.target.textContent.toLowerCase();
    }

    const cleanCurrent = (e) => {
      current.value = '';
      coffeeType.value = e;
    }


    return {
      aboutBeansData, coffeeType, filterTypes, filterCards, cleanCurrent,posts, error, current
    }
  }
}
</script>

<style lang="scss">
  .coffee-types {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      display: inline-block;
      margin-right: 35px;
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;

  .tabs {
    &__btn {
      padding: 10px 15px;
      color: #000;
      background-color: #fff;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px 0px 0px 4px;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
  }

  label {
    display: inline-block;
    margin-right: 20px;
  }

  .input {
    padding: 10px 20px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 1px solid transparent;
    text-align: center;
    transition: border 0.3s ease-in-out;

    &:focus {
      outline: none;
      border: 1px solid rgb(75, 44, 44);
    }
  }



</style>