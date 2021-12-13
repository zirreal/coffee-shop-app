<template>
  <div class="container">
      <div class="wrapper">
        <div class="coffee-card" v-for="card in cards" :key="card.id">
          <router-link :to="{name: 'Details', params: {id: card.id}}">
            <img src="../assets/img/aromistico-best.png" :alt="card.title">
            <h3 class=" coffee-card__title">{{ card.title }}</h3>
            <span class="coffee-card__country">{{ card.country }}</span>
            <span class="coffee-card__price">{{ card.price }} $</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {

  props: ['cards'],

  setup() {

    return {
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 260px);
    gap: 60px 70px;
    align-items: center;
    justify-items: center;
  }
  .coffee-card {
    width: 220px;
    padding: 37px 24px 22px;
    background: #FFFFFF;
    border-radius: 8px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;

    &:hover {
      transform: scale(1.2);
    }

    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 14px;
    }

    &__title {
      margin: 0;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #000;
    }

    span {
      display: block;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      color: #000;
    }

    &__country {
      margin-bottom: 10px;
      font-weight: 400;
    }

    &__price {
      font-weight: 700;
    }
  }
</style>