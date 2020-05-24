<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览 open为弹窗开启事件回调和 close为弹窗关闭事件回调</template>
      <div class="test-value">
        <lb-button type="success" @click="showDialog">点击显示弹窗</lb-button>
      </div>
      <lb-dialog :visible.sync="visible" @close="close" @open="open">
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <template #footer>
          <lb-button style="margin-bottom:0" type="success" @click="closeDialog">关闭弹窗</lb-button>
        </template>
      </lb-dialog>
    </demo>
    <demo :code="code2">
      <template #title>关闭事件</template>
      <template #subtitle>使用 escClose属性 和 modeClickClose属性增加关闭模态框事件</template>
      <div class="test-value">
        <lb-button type="success" @click="showDialog1">点击显示弹窗</lb-button>
      </div>
      <lb-dialog :visible.sync="visible1" escClose modeClickClose>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <template #footer>
          <lb-button style="margin-bottom:0" type="success" @click="closeDialog1">关闭弹窗</lb-button>
        </template>
      </lb-dialog>
    </demo>
    <demo :code="code3">
      <template #title>样式设置</template>
      <template #subtitle>添加 width属性 和 headerShow属性设置弹窗宽度和是否需要显示弹窗头部</template>
      <div class="test-value">
        <lb-button type="success" @click="showDialog2">点击显示弹窗</lb-button>
      </div>
      <lb-dialog :visible.sync="visible2" width="50%" :headerShow="false">
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <div>这是一段占位显示文字</div>
        <template #footer>
          <lb-button style="margin-bottom:0" type="success" @click="closeDialog2">关闭弹窗</lb-button>
        </template>
      </lb-dialog>
    </demo>
    <demo :code="code4">
      <template #title>拖拽dialog</template>
      <template #subtitle>添加 drop属性可拖拽dialog头部进行拖拽</template>
      <div class="test-value">
        <lb-button type="success" @click="showDialog3">点击显示弹窗</lb-button>
      </div>
      <lb-dialog :visible.sync="visible3" drop>
        <div>这是一个可以拖拽的dialog</div>
        <div>这是一个可以拖拽的dialog</div>
        <div>这是一个可以拖拽的dialog</div>
        <div>这是一个可以拖拽的dialog</div>
        <div>这是一个可以拖拽的dialog</div>
        <div>这是一个可以拖拽的dialog</div>
        <template #footer>
          <lb-button style="margin-bottom:0" type="success" @click="closeDialog3">关闭弹窗</lb-button>
        </template>
      </lb-dialog>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible:false,
      visible1:false,
      visible2:false,
      visible3:false,
      code1: `<template>
  <lb-dialog :visible.sync="visible" @close="close" @open="open">
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <template #footer>
      <lb-button type="success" @click="closeDialog">关闭弹窗</lb-button>
    </template>
  </lb-dialog>
</template>

<script>
  data() {
    return{
      visible:false,
    } 
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    closeDialog() {
      this.visible = false;
    },
    open(){
      console.log('open');
    },    
    close(){
      console.log('close');
    },    
  }
<\/script>
`,
      code2: `<template>
  <lb-dialog :visible.sync="visible" escClose modeClickClose>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <template #footer>
      <lb-button type="success" @click="closeDialog">关闭弹窗</lb-button>
    </template>
  </lb-dialog>
</template>

<script>
  data() {
    return{
      visible:false,
    } 
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    closeDialog() {
      this.visible = false;
    }    
  }
<\/script>
`,
      code3: `<template>
  <lb-dialog :visible.sync="visible" width="50%" :headerShow="false">
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <div>这是一段占位显示文字</div>
    <template #footer>
      <lb-button type="success" @click="closeDialog">关闭弹窗</lb-button>
    </template>
  </lb-dialog>
</template>

<script>
  data() {
    return{
      visible:false,
    } 
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    closeDialog() {
      this.visible = false;
    }   
  }
<\/script>
`,
      code4: `<template>
  <lb-dialog :visible.sync="visible" drop >
    <div>这是一个可以拖拽的dialog</div>
    <div>这是一个可以拖拽的dialog</div>
    <div>这是一个可以拖拽的dialog</div>
    <div>这是一个可以拖拽的dialog</div>
    <div>这是一个可以拖拽的dialog</div>
    <div>这是一个可以拖拽的dialog</div>
    <template #footer>
      <lb-button type="success" @click="closeDialog">关闭弹窗</lb-button>
    </template>
  </lb-dialog>
</template>

<script>
  data() {
    return{
      visible:false,
    } 
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    closeDialog() {
      this.visible = false;
    }   
  }
<\/script>
`,

    };
  },
  methods: {
    showDialog(){
      this.visible = true;
    },
    showDialog1(){
      this.visible1 = true;
    },
    showDialog2(){
      this.visible2 = true;
    },
    showDialog3(){
      this.visible3 = true;
    },
    closeDialog(){
      this.visible = false;
    },
    closeDialog1(){
      this.visible1 = false;
    },
    closeDialog2(){
      this.visible2 = false;
    },
    closeDialog3(){
      this.visible3 = false;
    },
    close(){
      console.log('close');
    },
    open(){
      console.log('open');
    }
  }
};
</script>
