
// import 'lb-vue-ui/Lb-vueUi.css'
// import LbVueUi from 'lb-vue-ui'
import 'babel-polyfill'
import './public/packages/cssstyle/index.scss';
import LbVueUi from './public/packages/index'
import '../../src/index.scss'
import '../../src/demo-box.scss'
import demo from '../../src/demo.vue'

import Vue from 'vue'

import hljs from 'highlight.js' //代码高亮文件引入
import 'highlight.js/styles/color-brewer.css' 
Vue.config.silent = true
Vue.component('demo',demo)
Vue.use(LbVueUi);
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})