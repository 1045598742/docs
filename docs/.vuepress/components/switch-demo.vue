<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div class="test-value">value: {{ value }}</div>
      <lb-switch v-model="value"></lb-switch>
    </demo>
    <demo :code="code2">
      <template #title>绑定数据</template>
      <template #subtitle>通过 custom-value规定开关对应数据  on：开启 off：关闭</template>
      <div class="test-value">value: {{ value2 }}</div>
      <lb-switch 
        v-model="value2"
        :custom-value="{ on: 1, off: 0 }"
      ></lb-switch>
    </demo>
    <demo :code="code3">
      <template #title>改变颜色</template>
      <template #subtitle>通过 on-color，off-color，flag-color规定开启和关闭的背景色以及按钮颜色</template>
      <div class="test-value">
        on-color: {{ onColor }}
        <lb-button type="success" @click="colorChange('onColor')">随机切换on状态背景色</lb-button>
      </div>
      <lb-switch 
        v-model="value3"
        :custom-value="{ on: 1, off: 0 }"
        :on-color="onColor"
        :off-color="offColor"
        :flag-color="flagColor"
      ></lb-switch>
    </demo>
    <demo :code="code4">
      <template #title>禁用按钮</template>
      <template #subtitle>通过 disable属性禁用按钮</template>
      <div class="test-value">
        <lb-button type="success" @click="disable=!disable">{{disable?'启用':'禁用'}}开关</lb-button>
      </div>
      <lb-switch 
        v-model="value4"
        :disable="disable"
      ></lb-switch>
    </demo>
    <demo :code="code5">
      <template #title>添加文本</template>
      <template #subtitle>通过 slot插槽添加开关对应的文本</template>
      <lb-switch 
        v-model="value5"
      >
        <!-- 开启状态的文本 -->
        <template #on>开启</template>
        <!-- 关闭状态的文本 -->
        <template #off>关闭</template>
      </lb-switch>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      value2:1,
      value3:1,
      value4:true,
      value5:true,
      onColor:'blue',
      offColor:'red',
      flagColor:'white',
      disable:true,
      colorCollector:'0123456789abcdef',
      code1: `<template>
  <lb-switch v-model="value"></lb-switch>
</template>

<script>
  data(){
    return{
      value: true
    }
  }
<\/script>
`,
      code2: `<template>
  <lb-switch 
    v-model="value"
    :custom-value="{ on: 1, off: 0 }"
  ></lb-switch>
</template>

<script>
  data(){
    return{
      value: 1
    }
  }
<\/script>
`,
      code3: `<template>
  <lb-switch 
    v-model="value"
    :custom-value="{ on: 1, off: 0 }"
    onColor:'blue',
    offColor:'red',
    flagColor:'black',
  ></lb-switch>
</template>

<script>
  data(){
    return{
      value: 1
    }
  }
<\/script>
`,
      code4: `<template>
  <lb-switch 
    v-model="value"
    :disable="disable"
  ></lb-switch>
</template>

<script>
  data(){
    return{
      value: true,
      disable: true
    }
  }
<\/script>
`,
      code5: `<template>
  <lb-switch 
    v-model="value"
  >
    <!-- 开启状态的文本 -->
    <template #on>开启</template>

    <!-- 关闭状态的文本 -->
    <template #off>关闭</template>
  </lb-switch>
</template>

<script>
  data(){
    return{
      value: true
    }
  }
<\/script>
`,
    }
  },
  methods: {
    colorChange(key){
      let str = '#'
      for(let i = 0;i<6;i++){
        str+= this.colorCollector[Math.floor(Math.random()*16)]
      };
      this[key] = str;
    }
  }
};
</script>
