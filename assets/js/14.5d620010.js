(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{987:function(e,t,n){"use strict";n.r(t);var l={data:function(){return{value:3.5,value1:3,value3:3.3,value4:5.6,code1:'<template>\n  <lb-rate v-model="value"></lb-rate>\n</template>\n\n<script>\n  data() {\n    return{\n      value:3.5\n    } \n  }\n<\/script>\n',code2:'<template>\n  <lb-rate v-model="value" disable></lb-rate>\n</template>\n\n<script>\n  data() {\n    return{\n      value:3\n    } \n  }\n<\/script>\n',code3:'<template>\n  <lb-rate v-model="value" showText></lb-rate>\n</template>\n\n<script>\n  data() {\n    return{\n      value:3.3\n    } \n  }\n<\/script>\n',code4:'<template>\n  <lb-rate v-model="value" :max="10"></lb-rate>\n</template>\n\n<script>\n  data() {\n    return{\n      value:5.6\n    } \n  }\n<\/script>\n'}},methods:{nodeClick:function(e,t){console.log(e,t)}}},a=n(2),u=Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("demo",{attrs:{code:e.code1},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("基础用法")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("预览 默认满分五星")]},proxy:!0}])},[e._v(" "),e._v(" "),n("div",{staticClass:"test-value"},[e._v("value："+e._s(e.value))]),e._v(" "),n("lb-rate",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("demo",{attrs:{code:e.code2},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("禁用修改")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("使用 disable属性禁止修改数值")]},proxy:!0}])},[e._v(" "),e._v(" "),n("lb-rate",{attrs:{disable:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),n("demo",{attrs:{code:e.code3},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("评分文字")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("使用 showText属性显示评分对应文字")]},proxy:!0}])},[e._v(" "),e._v(" "),n("div",{staticClass:"test-value"},[e._v("value："+e._s(e.value3))]),e._v(" "),n("lb-rate",{attrs:{showText:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),n("demo",{attrs:{code:e.code4},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("评分范围")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("使用 max属性限定评分范围")]},proxy:!0}])},[e._v(" "),e._v(" "),n("div",{staticClass:"test-value"},[e._v("value："+e._s(e.value4))]),e._v(" "),n("lb-rate",{attrs:{max:10},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)}),[],!1,null,null,null);t.default=u.exports}}]);