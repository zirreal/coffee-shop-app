<template>
    <div class="best-card__img">
      <img :src="coffeeImg" alt="coffee">
    </div>
    <h3 class="reset title best-card__title">
      {{ coffeTitle }}
    </h3>
    <span class="price">
      {{ coffeePrice }}
    </span>
</template>

<script>
export default {
  props: ['coffeeImg', 'coffeTitle', 'coffeePrice']
}
</script>

<style lang="scss" scoped>
  .best-card {
    &__img {
      margin-bottom: 14px;
      min-height: 151px;
      img {
        display: block;
        margin: 0 auto;
      }
    }

    &__title {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      text-align: center;
    }

    .price {
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      text-align: right;
    }
  }
</style>