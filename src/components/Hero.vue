<template>
  <section class="hero">
    <div class="container">
      <h1 class="reset title">Everything You Love About Coffee</h1>
      <div class="divider">
        <img src="../assets/img/beans-logo-light.svg" alt="coffee">
      </div>
      <p class="reset descr">We makes every day full of energy and taste</p>
      <p class="reset descr">Want to try our beans?</p>
      <button class="btn"> More </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .hero {
    margin-top: -150px;
    min-height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('../assets/img/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .title {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 40px;
      line-height: 58px;
      color: #fff;
    }

    .descr {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      color: #fff;
    } 
  }

  @media(max-width: 550px) {
    .hero {
      margin-top: -128px;
    }
  }

</style>