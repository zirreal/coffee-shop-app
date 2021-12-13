<template>
  <div class="container">
    <div class="coffee-types">
      <div class="left">
        <label>Looking for</label>
        <input @input="handleInput" class="input" type="text" placeholder="start typing country here..." v-model="coffeeType">
      </div>
      <div class="right">
        <span class="coffee-types__text">Or filter</span>
        <div class="tabs">
          <button @click="handlefilter" class="btn tabs__btn" :class="[current === 'brazil' ? 'active' : null ]">Brazil</button>
          <button @click="handlefilter" :class="[current === 'kenya' ? 'active' : null ]" class="btn tabs__btn">Kenya</button>
          <button @click="handlefilter" :class="[current === 'columbia' ? 'active' : null ]" class="btn tabs__btn">Columbia</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

  props: ['current'],

  setup(props, context) {
    const coffeeType = ref('');

    const handlefilter = (e) => {
      context.emit('filterCards', e)
    }

    const handleInput = (e) => {
      e = coffeeType.value;
      context.emit('cleanCurrent', e)
    }


    return {
      handlefilter, handleInput, coffeeType,
    }

  }
}
</script>

<style lang="scss" scoped>
  .coffee-types {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      display: inline-block;
      margin-right: 35px;
    }

    & .active {
      background-color: rgb(75, 44, 44);
      color: #fff;
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
</style>