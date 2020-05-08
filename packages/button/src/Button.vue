<template>
  <button class="lb-button lb-button_primary">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Lb-Button",
  methods: {
    haha() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
  .lb-button{
    border-radius: 2px;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;
    user-select: none;
    font-size: 14px;
    margin-right: 8px;
    margin-bottom: 12px;
    white-space: nowrap;
    text-align: center;
    padding: 4px 15px;
    height: 32px;
  }
</style>