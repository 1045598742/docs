<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div class="test-value">默认返回base64编码的图片数据,默认返回切片750*500的图片,返回值请看控制台</div>
      <lb-clip-image @finish="finish"></lb-clip-image>
      <img v-for="(item,index) in imgList" :key="index" :src="item" alt="" style="display:block;">
    </demo>
    <demo :code="code2">
      <template #title>选择图片格式和图片尺寸</template>
      <template #subtitle>maxWidth和maxHeight属性 选择裁切图片的宽度和高度</template>
      <div class="test-value">也可以控制切块图片的每一块的宽高，尺寸不够宽度优先,返回值请看控制台</div>
      <lb-clip-image @finish="finish1"  :maxWidth="200" :maxHeight="200"></lb-clip-image>
      <img v-for="(item,index) in imgList1" :key="index" :src="item" alt="" style="display:block;">
    </demo>
    <demo :code="code3">
      <template #title>选择图片格式和图片尺寸</template>
      <template #subtitle>type属性 选择切片的图片格式，可选值：base64，file，formData</template>
      <div class="test-value">返回值请看控制台</div>
      <lb-clip-image @finish="finish2"  type="file"></lb-clip-image>
    </demo>
    <demo :code="code4">
      <template #title>选择是否使用切片功能，默认开启</template>
      <template #subtitle>slice属性 控制是否使用切片</template>
      <lb-clip-image @finish="finish3" :slice="false"></lb-clip-image>
      <img :src="imgList3" alt="" style="display:block;">
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList:[],
      imgList1:[],
      imgList3:'',
      code1: `<template>
  <lb-clip-image @finish="finish"></lb-clip-image>
  <img v-for="(item,index) in imgList" :key="index" :src="item" alt="" style="display:block;">
</template>

<script>
  methods: {
    finish(fileList){
      this.imgList = fileList;
      console.log(fileList,'返回的base64数据');
    }    
  }
<\/script>
`,
      code2: `<template>
  <lb-clip-image @finish="finish" type="file" :maxWidth="200" :maxHeight="200"></lb-clip-image>
  <img v-for="(item,index) in imgList" :key="index" :src="item" alt="" style="display:block;">
</template>

<script>
  methods: {
    finish(fileList){
      this.imgList = fileList;
    }    
  }
<\/script>
`,
      code3: `<template>
  <lb-clip-image @finish="finish" type="file"></lb-clip-image>
</template>

<script>
  methods: {
    finish(fileList){
      console.log(fileList,'返回的file数据');
    }    
  }
<\/script>
`,
      code4: `<template>
    <lb-clip-image @finish="finish" :slice="false"></lb-clip-image>
    <img :src="imgList" alt="" style="display:block;">
</template>

<script>
  methods: {
    finish(fileList){
      this.imgList = fileList[0];
    }    
  }
<\/script>
`,
    };
  },
  methods: {
    finish(fileList){
      this.imgList = fileList;
      console.log(fileList,'返回的base64数据');
    },
    finish1(fileList){
      this.imgList1 = fileList;
    },
    finish2(fileList){
      console.log(fileList,'返回的file数据');
    },
    finish3(fileList){
      this.imgList3 = fileList[0]
    },
  }
};
</script>
