<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div>value: {{value}}</div>
      <lb-input type="text" v-model="value" style="width:400px"></lb-input>
    </demo>
    <demo :code="code2">
      <template #title>使用清除按钮</template>
      <template #subtitle>添加 clearable属性 使用清除按钮</template>
      <div>value: {{value}}</div>
      <lb-input type="text" v-model="value" style="width:400px" clearable ></lb-input>
    </demo>
    <demo :code="code3">
      <template #title>使用清除按钮</template>
      <template #subtitle>添加 readonly属性禁止输入</template>
      <div>value: {{value}}</div>
      <lb-input type="text" v-model="value" style="width:400px" readonly ></lb-input>
    </demo>
    <demo :code="code4">
      <template #title>切换输入框类型</template>
      <template #subtitle>改变 type属性 进行修改输入框类型</template>
      <div>value: {{value}}</div>
      <lb-input type="text" v-model="value" style="width:400px;margin-bottom:20px"></lb-input>
      <lb-input type="textarea" v-model="value" style="width:400px"></lb-input>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      code1: `<template>
  <div>value: {{value}}</div>
  <lb-input type="text" v-model="value" style="width:400px"></lb-input>
</template>

<script>
  data(){
    return{
      value:''
    }
  }
<\/script>
`,
      code2: `<template>
  <div>value: {{value}}</div>
  <lb-input type="text" v-model="value" style="width:400px" clearable></lb-input>
</template>

<script>
  data(){
    return{
      value:''
    }
  }
<\/script>
`,
      code3: `<template>
  <div>value: {{value}}</div>
  <lb-input type="text" v-model="value" style="width:400px" readonly></lb-input>
</template>

<script>
  data(){
    return{
      value:''
    }
  }
<\/script>
`,
      code4: `<template>
  <div>value: {{value}}</div>
  <lb-input type="text" v-model="value" style="width:400px"></lb-input>
  <lb-input type="textarea" v-model="value" style="width:400px"></lb-input>
</template>

<script>
  data(){
    return{
      value:''
    }
  }
<\/script>
`,
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
