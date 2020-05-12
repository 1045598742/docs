<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div style="margin-bottom:20px">value: {{ value }}</div>
      <lb-date-picker v-model="value"></lb-date-picker>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      code1: `<template>
  <lb-date-picker v-model="value"></lb-date-picker>
</template>

<script>
data(){
  return{
    value: ''
  }
}
<\/script>
`,
    };
  }
};
</script>
