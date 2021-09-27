<template>
  <div class="hello-world-wrapper">
    <h1>"Hello World"</h1>
    <router-link to="/">
      <my-button text="prop test(go back)" />
    </router-link>
    <!-- <my-button text="open modal" @click="toggleIsModalOpen" />
    <modal :isModalOpen="isModalOpen">
      <div class="modal-content">
        <h1>my test modal</h1>
      </div>
    </modal>  -->
  </div>
</template>

<script>
import { ref } from 'vue'
// import Modal from '../components/modal/Modal.vue'
import MyButton from '../components/button/MyButton.vue'

export default {
  components: { MyButton },
  // components: { MyButton, Modal },
  setup() {
    const isModalOpen = ref(true)
    return { isModalOpen }
  },
  methods: {
    toggleIsModalOpen() {
      this.isModalOpen = false
    },
  },
}
</script>

<style>
.hello-world-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
