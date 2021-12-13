<template>
  <section class="best">
    <div class="container">
      <h2 class="reset title best__title">
        Our best
      </h2>
      <div class="best-cards">
        <div class="best-card" v-for="card in bestCards" :key="card.title">
          <BestCard :coffeeImg="card.img" :coffeTitle="card.title" :coffeePrice="card.price" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BestCard from './BestCard.vue';
import getPosts from '../composables/getPosts';
export default {
  components: { BestCard },

  setup() {
    const bestCards= [
      {
        img: require('../assets/img/solimo-best.png'),
        title: 'Solimo Coffee Beans 2 kg',
        price: '10.73$'
      },
      {
        img: require('../assets/img/presto-best.png'),
        title: 'Presto Coffee Beans 1 kg',
        price: '15.99$'
      },
      {
        img: require('../assets/img/aromistico-best.png'),
        title: 'AROMISTICO Coffee 1 kg',
        price: '6.99$'
      }
    ];


    return {
      bestCards
    }
  }
}
</script>

<style lang="scss" scoped>
  .best {
    padding-top: 80px;
    padding-bottom: 110px;
    background-image: url('../assets/img/best-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &__title {
      margin-bottom: 40px;
      text-align: center;
    }

    &-cards {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-card {
      min-height: 240px;
      max-width: 220px;
      width: 100%;
      padding: 21px;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 8px;

      &:not(:last-child) {
        margin-right: 70px;
    }
    }
  }
</style>