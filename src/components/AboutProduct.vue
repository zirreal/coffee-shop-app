<template>
  <section class="about-product">
    <div class="container">
      <div class="about-product__wrapper">
        <div class="about-product__img">
          <img :src="productPhoto" alt="photo">
        </div>
        <div class="about-product__about">
          <h2 class="reset title about-product__title">{{productTitle}}</h2>
          <div class="divider">
            <img src="../assets/img/beans-logo-dark.svg" alt="coffee">
          </div>
          <p class="reset about-product__descr">{{productDescr1}}</p>
          <p class="reset about-product__descr">{{productDescr2}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['productPhoto', 'productTitle', 'productDescr1', 'productDescr2']
}
</script>

<style lang="scss">
  .about-product {
    padding-top: 70px;
    padding-bottom: 60px;
    position: relative;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 80px;
    }

    &__about {
      text-align: center;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 20%;
      height: 2px;
      background-color: #000;
      transform: translateX(-50%);
    }

    &__title {
      margin-bottom: 20px;
    }

    .divider {
      margin-bottom: 25px;
    }

    &__descr {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #000;
      text-align: center;
      &:first-of-type {
        margin-bottom: 25px;
      }
    }

    &__img {
      img {
        height: 100%;
      }
    }

  }
</style>