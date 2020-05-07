<template>
  <demo :code="code">
    <swiper autoPlay>
      <swiper-item class="swiper-item_demo">1</swiper-item>
      <swiper-item class="swiper-item_demo">2</swiper-item>
      <swiper-item class="swiper-item_demo">3</swiper-item>
    </swiper>
  </demo>
</template>
<script>
import demo from "../../../src/demo";
import swiper from "../../../src/swiper";
import swiperItem from "../../../src/swiper-item";
export default {
  components: {
    swiper,
    swiperItem,
    demo
  },
  data() {
    return {
      code: `<swiper :autoplay="true">
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
