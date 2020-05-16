<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <lb-swiper>
        <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
          <img
            :src="$withBase(`/assets/img/${index}.jpg`)"
            alt
            style="object-fit:cover;height:100%;width:100%"
          />
        </lb-swiper-item>
      </lb-swiper>
    </demo>
    <demo :code="code1">
      <template #title>设置自动轮播</template>
      <template #subtitle>添加 autoPlay属性设置自动轮播</template>
      <lb-swiper autoPlay>
        <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
          <img
            :src="$withBase(`/assets/img/${index}.jpg`)"
            alt
            style="object-fit:cover;height:100%;width:100%"
          />
        </lb-swiper-item>
      </lb-swiper>
    </demo>
    <demo :code="code2">
      <template #title>添加 mode属性设置轮播主轴</template>
      <template #subtitle>horizontal: X轴 vertical: Y轴</template>
      <div class="test-value">
        <lb-button type="success" @click="directionType">点击切换主轴</lb-button>
        <span>当前方向：{{ direction }}</span>
      </div>
      <lb-swiper autoPlay :mode="direction">
        <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
          <img
            :src="$withBase(`/assets/img/${index}.jpg`)"
            alt
            style="object-fit:cover;height:100%;width:100%"
          />
        </lb-swiper-item>
      </lb-swiper>
    </demo>
    <demo :code="code3">
      <template #title>设置各类指示器是否显示</template>
      <template #subtitle>showAllow: 是否使用主轴两侧轮播控制按钮 showPoint: 是否使用轮播列表索引</template>
      <div class="test-value">
        <lb-button type="success" @click="showAllow=!showAllow">{{showAllow?'关闭':'开启'}}主轴两侧轮播控制按钮</lb-button>
        <lb-button type="success" @click="showPoint=!showPoint">{{showPoint?'关闭':'开启'}}轮播列表索引列表</lb-button>
      </div>
      <lb-swiper :showAllow="showAllow" :showPoint="showPoint">
        <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
          <img
            :src="$withBase(`/assets/img/${index}.jpg`)"
            alt
            style="object-fit:cover;height:100%;width:100%"
          />
        </lb-swiper-item>
      </lb-swiper>
    </demo>
    <demo :code="code4">
      <template #title>设置幻灯片模式</template>
      <template #subtitle>使用 slide属性设置切换为幻灯片列表格式</template>
      <lb-swiper slide height="200" autoPlay>
        <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
          <img
            :src="$withBase(`/assets/img/${index}.jpg`)"
            alt
            style="object-fit:cover;height:100%;width:100%;border-radius:10px"
          />
        </lb-swiper-item>
      </lb-swiper>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      direction: "horizontal",
      showAllow: true,
      showPoint: true,
      code1: `<template>
  <lb-swiper>
    <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
      <img :src="index.jpg" alt="" style="object-fit:cover;height:100%;width:100%">
    </lb-swiper-item>
  </lb-swiper>
</template>
`,
      code2: `<template>
  <lb-swiper :autoPlay="autoPlay" :mode="direction">
    <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
      <img :src="index.jpg" alt="" style="object-fit:cover;height:100%;width:100%">
    </lb-swiper-item>
  </lb-swiper>
</template>

<script>
  data(){
    return{
      autoPlay: true,
      direction: 'horizontal'
    }
  }
<\/script>
`,
      code3: `<template>
  <lb-swiper :showAllow="showAllow" :showPoint="showPoint">
    <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
      <img :src="index.jpg" alt="" style="object-fit:cover;height:100%;width:100%">
    </lb-swiper-item>
  </lb-swiper>
</template>

<script>
  data(){
    return{
      showAllow: true,
      showPoint: true
    }
  }
<\/script>
`,
      code4: `<template>
  <lb-swiper :slide="slide" autoPlay height="200">
    <lb-swiper-item class="swiper-item_demo" v-for="index in 6">
      <img :src="index.jpg" alt="" style="object-fit:cover;height:100%;width:100%;border-radius:10px">
    </lb-swiper-item>
  </lb-swiper>
</template>

<script>
  data(){
    return{
      slide: true
    }
  }
<\/script>
`
    };
  },
  methods: {
    directionType() {
      this.direction =
        this.direction == "horizontal" ? "vertical" : "horizontal";
    }
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
</style>
