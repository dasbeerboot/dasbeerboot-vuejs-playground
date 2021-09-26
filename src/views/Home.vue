<template>
  <div class="home-wrapper">
    <h1>"Willkommen in {{ title }}'s Home"</h1>
    <div class="input-wrapper">
      <input type="text" v-model="inputDefault" v-on:keyup.enter="setHomeName" />
      <button type="button" @click="setHomeName">set</button>
    </div>
    <router-link to="/helloworld">
      <button class="go-next-button">click</button>
    </router-link>
  </div>
</template>

<script>
const date = new Date().toLocaleString()
export default {
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

.go-next-button {
  width: 140px;
  height: 42px;
  color: #ffffff;
  background-color: rgb(35, 178, 235);
  border: none;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;
}
.go-next-button:hover {
  background-color: rgb(100, 192, 228);
}
</style>
