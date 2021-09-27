<template>
  <div class="home-wrapper">
    <h1>"Willkommen in {{ title }}'s Home"</h1>
    <div class="input-wrapper">
      <input type="text" v-model="inputDefault" v-on:keyup.enter="setHomeName" />
      <button type="button" @click="setHomeName">set</button>
    </div>
    <router-link to="/helloworld">
      <my-button />
    </router-link>
  </div>
</template>

<script>
import MyButton from '../components/button/MyButton.vue'
const date = new Date().toLocaleString()
export default {
  components: { MyButton },
  data() {
    return {
      title: 'dasbeerboot',
      inputDefault: 'dasbeerboot',
    }
  },
  methods: {
    setHomeName() {
      this.title = this.inputDefault
    },
  },
  beforeCreate() {
    console.log('beforeCreate', date)
  },
  created() {
    console.log('created', date)
  },
  beforeMount() {
    console.log('beforeMount', date)
  },
  mounted() {
    console.log('mounted', date)
  },
  beforeUpdate() {
    console.log('beforeUpdate', date)
  },
  updated() {
    console.log('updated', date)
  },
  beforeUnmount() {
    console.log('beforeUnmount', date)
  },
  unmounted() {
    console.log('unmounted', date)
  },
}
</script>

<style>
.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
