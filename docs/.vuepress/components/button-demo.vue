<template>
  <div>
      <demo :code="code1">
    <template #title>基础用法</template>
    <template #subtitle>预览</template>
      <lb-button>default</lb-button>
      <lb-button type="warning">warning</lb-button>
      <lb-button type="success">success</lb-button>
      <lb-button type="danger">danger</lb-button>
      <lb-button type="info">info</lb-button>
      <lb-button type="primary">primary</lb-button>
  </demo>
      <demo :code="code2">
    <template #title>圆形按钮</template>
    <template #subtitle>使用 circle属性 和 icon属性 或者使用 round属性实现半圆按钮</template>
      <lb-button type="danger" circle icon="lb-icon-star"></lb-button>
      <lb-button type="primary" icon="lb-icon-star" round>我是文字</lb-button>
      <lb-button type="primary" round> primary </lb-button>
      <lb-button type="success" round> success </lb-button>
  </demo>
      <demo :code="code3">
    <template #title>禁用按钮</template>
    <template #subtitle>使用 disabled属性实现禁用按钮</template>
      <lb-button disabled>plant</lb-button>
      <lb-button disabled type="primary">primary</lb-button>
      <lb-button disabled type="danger">danger</lb-button>
  </demo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: `<lb-button> default </lb-button>
<lb-button type="warning"> warning </lb-button>
<lb-button type="success"> success </lb-button>
<lb-button type="danger"> danger </lb-button>
<lb-button type="info"> info </lb-button>
<lb-button type="primary"> primary </lb-button>
<lb-button type="primary" circle> 圆 </lb-button>`,
      code2: `<lb-button type="danger" circle icon="lb-icon-star"></lb-button>
<lb-button type="primary" circle icon="lb-icon-star"></lb-button>
<lb-button type="primary" round> primary </lb-button>
<lb-button type="success" round> success </lb-button>`,
      code3: `<lb-button disabled>plant</lb-button>
<lb-button disabled type="primary">primary</lb-button>
<lb-button disabled type="danger">danger</lb-button>`,
    };
  }
};
</script>
