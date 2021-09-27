<template>
  <button class="my-button" v-text="text" />
</template>

<script>
export default {
  props: { text: { required: true, type: String } },
}
</script>

<style>
.my-button {
  width: 140px;
  height: 42px;
  color: #ffffff;
  background-color: rgb(35, 178, 235);
  border: none;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;
}

.my-button:hover {
  background-color: rgb(100, 192, 228);
}
</style>
