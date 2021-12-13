<template>
  <section class="about-item">
    <div class="container">
      <div class="about-item__wrapper">
        <div class="about-item__img">
          <img src="../assets/img/aromastico.jpg" alt="photo">
        </div>
        <div class="about-item__about">
          <h2 class="reset title about-item__title">About it</h2>
          <div class="divider">
            <img src="../assets/img/beans-logo-dark.svg" alt="coffee">
          </div>
          <div class="about-item__country"><span>Country: </span>{{ card.country }}</div>
          <p class="reset about-item__descr"><span>Desription: </span>{{ card.description }}</p>
          <div class="about-item__price"><span>Price: </span>{{ card.price }}$</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  props: ['card'],


}
</script>

<style lang="scss" scoped>
  .about-item {
    padding-top: 70px;
    padding-bottom: 60px;
    position: relative;

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 335px;
      gap: 80px;
    }

    &__about {
      text-align: center;
    }

    &__title {
      margin-bottom: 20px;
    }

    .divider {
      margin-bottom: 25px;
    }

    &__country {
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      text-align: left;
    }

    &__descr {
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      text-align: left;
    }

    &__price {
      font-weight: 400;
      font-size: 24px;
      line-height: 35px;
      text-align: left;
    }

    span {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
    }

    &__img {
      img {
        height: 100%;
      }
    }

  }
</style>