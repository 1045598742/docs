<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览 默认满分五星</template>
      <div class="test-value">value：{{value}}</div>
      <lb-rate v-model="value"></lb-rate>
    </demo>
    <demo :code="code2">
      <template #title>禁用修改</template>
      <template #subtitle>使用 disable属性禁止修改数值</template>
      <lb-rate v-model="value1" disable></lb-rate>
    </demo>
    <demo :code="code3">
      <template #title>评分文字</template>
      <template #subtitle>使用 showText属性显示评分对应文字</template>
      <div class="test-value">value：{{value3}}</div>
      <lb-rate v-model="value3" showText></lb-rate>
    </demo>
    <demo :code="code4">
      <template #title>评分范围</template>
      <template #subtitle>使用 max属性限定评分范围</template>
      <div class="test-value">value：{{value4}}</div>
      <lb-rate v-model="value4" :max="10"></lb-rate>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:3.5,
      value1:3,
      value3:3.3,
      value4:5.6,
      code1: `<template>
  <lb-rate v-model="value"></lb-rate>
</template>

<script>
  data() {
    return{
      value:3.5
    } 
  }
<\/script>
`,
      code2: `<template>
  <lb-rate v-model="value" disable></lb-rate>
</template>

<script>
  data() {
    return{
      value:3
    } 
  }
<\/script>
`,
      code3: `<template>
  <lb-rate v-model="value" showText></lb-rate>
</template>

<script>
  data() {
    return{
      value:3.3
    } 
  }
<\/script>
`,
      code4: `<template>
  <lb-rate v-model="value" :max="10"></lb-rate>
</template>

<script>
  data() {
    return{
      value:5.6
    } 
  }
<\/script>
`,
    };
  },
  methods: {
    nodeClick(data,node){
      console.log(data,node);
    }
  }
};
</script>
