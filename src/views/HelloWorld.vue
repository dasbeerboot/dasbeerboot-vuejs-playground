<template>
  <div>
    <h1>"Hello World"</h1>
    <router-link to="/"> <my-button /></router-link>
  </div>
</template>

<script>
import MyButton from '../components/button/MyButton.vue'
export default {
  components: { MyButton },
}
</script>
