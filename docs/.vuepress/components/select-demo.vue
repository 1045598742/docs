<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div class="test-value">value: {{ value }}</div>
      <lb-select v-model="value">
        <lb-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></lb-option>
      </lb-select>
    </demo>
    <demo :code="code2">
      <template #title>使用清除按钮</template>
      <template #subtitle>添加 clearable属性 使用清除按钮</template>
      <div class="test-value">value: {{ value1 }}</div>
      <lb-select v-model="value1" clearable>
        <lb-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></lb-option>
      </lb-select>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value1:0,
      option: [
        { label: "麻辣烫", value: 0 },
        { label: "过桥米线", value: 1 },
        { label: "扬州炒饭", value: 2 },
        { label: "西湖醋鱼", value: 3 },
        { label: "三鹿奶粉", value: 4 }
      ],
      code1: `<template>
  <lb-select v-model="value">
    <lb-option
      v-for="item in option"
      :key="item.id"
      :label="item.label"
      :value="item.value"
    ></lb-option>
  </lb-select>
</template>
<script>
data(){
  return{
    value: 0,
    option: [
     { label: "麻辣烫", value: 0 },
     { label: "过桥米线", value: 1 },
     { label: "扬州炒饭", value: 2 },
     { label: "西湖醋鱼", value: 3 },
     { label: "三鹿奶粉", value: 4 },
    ]
  }
}
<\/script>
`,
      code2: `<template>
  <lb-select v-model="value" clearable>
    <lb-option
      v-for="item in option"
      :key="item.id"
      :label="item.label"
      :value="item.value"
    ></lb-option>
  </lb-select>
</template>
<script>
data(){
  return{
    value: 0,
    option: [
     { label: "麻辣烫", value: 0 },
     { label: "过桥米线", value: 1 },
     { label: "扬州炒饭", value: 2 },
     { label: "西湖醋鱼", value: 3 },
     { label: "三鹿奶粉", value: 4 },
    ]
  }
}
<\/script>
`
    };
  }
};
</script>
