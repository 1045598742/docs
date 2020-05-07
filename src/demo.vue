<template>
  <div class="demo-box">
    <div class="demo-case_box">
      <h2>基础用法</h2>
      <p class="subtitle">预览</p>
      <div class="case-main">
        <slot></slot>
      </div>
      <transition
        name="fade"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
        @beforLeave="beforLeave"
        @leave="leave"
        @afterLeave="afterLeave"
      >
        <div class="code-pre" v-show="showCode">
          <div class="code-inner" v-highlight> <pre class="pre"><code class="html">{{code}}</code></pre></div>
        </div>
      </transition>

      <div class="code-button">
        <span @click="showCode=!showCode">
          <span class="button-title">{{showCode?'隐藏':'显示'}}代码</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
      code:{
        type:String,
        defuault:''
      }
    },
  data() {
    return {
      showCode: false,
    };
  },
  computed: {
    codeStr(){
      return code.replace(/^ {8}/gm, '').trim()
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    afterEnter(el) {
      el.style.overflow = "";
    },
    beforLeave(el) {},
    leave(el) {
      el.style.overflow = "hidden";
      el.style.height = 0;
    },
    afterLeave(el) {
      el.style.overflow = "";
      el.style.height = "";
    }
  }
};
</script>
