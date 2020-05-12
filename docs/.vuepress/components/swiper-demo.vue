<template>
<div>
    <demo :code="code">
    <template #title>基础用法</template>
    <template #subtitle>预览</template>
    <lb-swiper autoPlay>
      <lb-swiper-item class="swiper-item_demo">1</lb-swiper-item>
      <lb-swiper-item class="swiper-item_demo">2</lb-swiper-item>
      <lb-swiper-item class="swiper-item_demo">3</lb-swiper-item>
    </lb-swiper>
  </demo>
</div>

</template>
<script>
export default {
  data() {
    return {
      code: `<swiper :autoPlay="true">
  <swiper-item class="swiper-item_demo"> 1 </swiper-item>
  <swiper-item class="swiper-item_demo"> 2 </swiper-item>
  <swiper-item class="swiper-item_demo"> 3 </swiper-item>
</swiper>`
    };
  }
};
</script>
<style lang="scss">
.swiper-item_demo {
  line-height: 300px;
  text-align: center;
  color: white;
  font-size: 20px;
}
.swiper-item_demo {
  background: #3eaf7c;
}
</style>
