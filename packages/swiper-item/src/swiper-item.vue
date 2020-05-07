<template>
  <transition name="swiper" v-if="$parent.$options.name==='swiper'">
    <div class="swiper-item" v-show="isShow" :class="{reverse: reverse,show: isShow}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "swiperItem",
  data() {
    const children = this.$parent.$children.filter(
      e => e.$options.name === "swiperItem"
    );
    return {
      index: children.length - 1
    };
  },
  computed: {
    isShow() {
      return this.$parent.activeIndex === this.index;
    },
    reverse: {
      get() {
        return this.$parent.reverse === true;
      }
    }
  }
};
</script>
<style lang="scss">
.swiper-item {
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }
}

.swiper-enter-active,
.swiper-leave-active {
  transition: all 0.4s linear;
}
.swiper-enter {
  transform: translateX(100%);
}
.swiper-leave-to {
  transform: translateX(-100%);
}
.swiper-enter.reverse {
  transform: translateX(-100%);
}
.swiper-leave-to.reverse {
  transform: translateX(100%);
}
</style>