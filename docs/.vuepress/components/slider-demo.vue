<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>可设置横向和纵向滑块，因文档原因demo会卡顿，项目运行时是正常的</template>
      <div class="test-value">
          <div>value: {{value}}</div>
      </div>
      <lb-slider lang="300px" v-model="value"/>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
        value:0,
      code1: `<template>
  <lb-slider lang="300px" v-model="value"/>
</template>

<script>
data(){
  return{
    value:0  
  }
}
<\/script>
`,
    };
  },
  methods: {
  
  }
};
</script>
