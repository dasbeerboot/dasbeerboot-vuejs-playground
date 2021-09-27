<template>
  <transition name="modal-animation">
    <div v-show="isModalOpen" class="test-modal">
      <transition name="modal-animation-inner">
        <div class="test-modal-inner">
          <div v-show="isModalOpen">
            opened!
            <slot />
            <my-button text="close" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import MyButton from '../button/MyButton.vue'

export default {
  components: { MyButton },
  props: [{ isModalOpen: { type: Boolean } }],
  setup() {},
  methods: {
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>

<style></style>
