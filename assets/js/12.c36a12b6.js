(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{985:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{value:"",value1:"",value2:"这是一个只读的输入框",value3:"我是两种类型的输入框",value4:"带图标的输入框",code1:'<template>\n  <div>value: {{value}}</div>\n  <lb-input type="text" v-model="value" style="width:400px"></lb-input>\n</template>\n\n<script>\n  data(){\n    return{\n      value:\'\'\n    }\n  }\n<\/script>\n',code2:'<template>\n  <div>value: {{value}}</div>\n  <lb-input type="text" v-model="value" style="width:400px" clearable></lb-input>\n</template>\n\n<script>\n  data(){\n    return{\n      value:\'\'\n    }\n  }\n<\/script>\n',code3:'<template>\n  <div>value: {{value}}</div>\n  <lb-input type="text" v-model="value" style="width:400px" readonly></lb-input>\n</template>\n\n<script>\n  data(){\n    return{\n      value:\'\'\n    }\n  }\n<\/script>\n',code4:'<template>\n  <div>value: {{value}}</div>\n  <lb-input type="text" v-model="value" style="width:400px"></lb-input>\n  <lb-input type="textarea" v-model="value" style="width:400px"></lb-input>\n</template>\n\n<script>\n  data(){\n    return{\n      value:\'\'\n    }\n  }\n<\/script>\n',code5:'<template>\n  <lb-input\n    type="text"\n    prevIcon="lb-icon-houtui"\n    nextIcon="lb-icon-qianjin"\n    v-model="value4"\n    style="width:400px;margin-bottom:20px"\n  ></lb-input>\n</template>\n\n<script>\n  data(){\n    return{\n      value:\'\'\n    }\n  }\n<\/script>\n'}}},a=n(2),u=Object(a.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo",{attrs:{code:t.code1},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("基础用法")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("预览")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[t._v("value: "+t._s(t.value))]),t._v(" "),n("lb-input",{staticStyle:{width:"400px"},attrs:{type:"text"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("demo",{attrs:{code:t.code2},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("使用清除按钮")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("添加 clearable属性 使用清除按钮")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[t._v("value: "+t._s(t.value1))]),t._v(" "),n("lb-input",{staticStyle:{width:"400px"},attrs:{type:"text",clearable:""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),n("demo",{attrs:{code:t.code3},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("使用只读选项")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("添加 readonly属性禁止输入")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[t._v("value: "+t._s(t.value2))]),t._v(" "),n("lb-input",{staticStyle:{width:"400px"},attrs:{type:"text",readonly:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),n("demo",{attrs:{code:t.code4},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("切换输入框类型")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("改变 type属性 进行修改输入框类型")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[t._v("value: "+t._s(t.value3))]),t._v(" "),n("lb-input",{staticStyle:{width:"400px","margin-bottom":"20px"},attrs:{type:"text"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),t._v(" "),n("lb-input",{staticStyle:{width:"400px"},attrs:{type:"textarea"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),t._v(" "),n("demo",{attrs:{code:t.code5},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("使用输入框前后的图标")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("prevIcon属性添加前图标 nextIcon属性添加后图标 属性值都是class类名")]},proxy:!0}])},[t._v(" "),t._v(" "),n("lb-input",{staticStyle:{width:"400px","margin-bottom":"20px"},attrs:{type:"text",prevIcon:"lb-icon-houtui",nextIcon:"lb-icon-qianjin"},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);