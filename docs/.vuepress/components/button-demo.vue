<template>
  <div>
      <demo :code="code">
    <template #title>基础用法</template>
    <template #subtitle>预览</template>
        <lb-button>default</lb-button>
      <lb-button type="warning">warning</lb-button>
      <lb-button type="success">success</lb-button>
      <lb-button type="danger">danger</lb-button>
      <lb-button type="info">info</lb-button>
      <lb-button type="primary">primary</lb-button>
      <lb-button type="primary" circle>圆</lb-button>
  </demo>
  </div>

</template>
<script>
import demo from "../../../src/demo";
import lbButton from "../../../src/button";
export default {
  components: {
    lbButton,
    demo
  },
  data() {
    return {
      code: `<lb-button> default </lb-button>
<lb-button type="warning"> warning </lb-button>
<lb-button type="success"> success </lb-button>
<lb-button type="danger"> danger </lb-button>
<lb-button type="info"> info </lb-button>
<lb-button type="primary"> primary </lb-button>
<lb-button type="primary" circle> 圆 </lb-button>`
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
