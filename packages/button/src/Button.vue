<template>
  <button @click="haha">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "WyButton",
  methods: {
    haha() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>