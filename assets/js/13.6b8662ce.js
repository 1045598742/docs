(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{979:function(t,e,n){"use strict";n.r(e);n(195),n(87);var a=n(125);var i=n(224),o=n(225);function p(t){return function(t){if(Array.isArray(t))return t}(t)||Object(i.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g={data:function(){return{pageIndex:1,limit:10,total:100,pageIndex1:1,limit1:10,total1:100,pageLayout:["limit","prev","page","next","go","total"],code1:'<template>\n  <lb-pagination\n    :total="total"\n    :pageLimit.sync="limit"\n    :pageIndex.sync="pageIndex"\n    @pageIndexChange="pageIndexChange"\n    @pageLimitChange="pageLimitChange"\n  ></lb-pagination>\n</template>\n\n<script>\n  data() {\n    return {\n      pageIndex: 1,\n      limit: 10,\n      total: 100\n    }\n  },\n  methods:{\n    pageIndexChange(pageIndex) {\n      console.log(pageIndex,\'这是页码\')\n    },\n    pageLimitChange(pageLimit) {\n      console.log(pageLimit,\'这是每页条数\')\n    }\n  }\n<\/script>\n',code2:'<template>\n  <div class="test-value">当前布局：[ {{pageLayout.toString()}} ]</div>\n  <lb-button type="success" @click="pageLayoutChange">切换分页布局</lb-button>\n  <lb-button type="success" @click="pageLayoutdelete">删除布局第一项</lb-button>\n  <lb-button type="success" @click="pageLayoutReset">重置布局</lb-button>\n  <lb-pagination\n    :total="total"\n    :pageLimit.sync="limit"\n    :pageIndex.sync="pageIndex"\n    :layout="pageLayout"\n  ></lb-pagination>\n</template>\n\n<script>\n  data() {\n    return {\n      pageIndex: 1,\n      limit: 10,\n      total: 100,\n      pageLayout:["limit", "prev", "page", "next", "go", "total"]\n    }\n  },\n  methods:{\n    pageLayoutChange() {\n      let [first,...other] = this.pageLayout;\n      this.pageLayout = [...other,first]\n    },\n    pageLayoutdelete() {\n      if(this.pageLayout.length){\n        this.pageLayout.shift();\n      }\n    },\n    pageLayoutReset() {\n      this.pageLayout = this.$options.data().pageLayout;\n    }\n  }\n<\/script>\n'}},methods:{pageIndexChange:function(t){console.log(t,"这是页码")},pageLimitChange:function(t){console.log(t,"这是每页条数")},pageLayoutChange:function(){var t=p(this.pageLayout),e=t[0],n=t.slice(1);this.pageLayout=[].concat(Object(a.a)(n),[e])},pageLayoutdelete:function(){this.pageLayout.length&&this.pageLayout.shift()},pageLayoutReset:function(){this.pageLayout=this.$options.data().pageLayout}}},u=n(2),l=Object(u.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo",{attrs:{code:t.code1},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("基础用法")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("预览")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[t._v("pageLimit:"+t._s(t.limit)+"     pageIndex:"+t._s(t.pageIndex)+"     事件监听请看控制台")]),t._v(" "),n("lb-pagination",{attrs:{total:t.total,pageLimit:t.limit,pageIndex:t.pageIndex},on:{"update:pageLimit":function(e){t.limit=e},"update:page-limit":function(e){t.limit=e},"update:pageIndex":function(e){t.pageIndex=e},"update:page-index":function(e){t.pageIndex=e},pageIndexChange:t.pageIndexChange,pageLimitChange:t.pageLimitChange}})],1),t._v(" "),n("demo",{attrs:{code:t.code2},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("分页模块布局")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("通过 layout属性操作分页布局和开启或关闭所需板块（默认全部开启）")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"test-value"},[n("div",{staticClass:"test-value"},[t._v("当前布局：[ "+t._s(t.pageLayout.toString())+" ]")]),t._v(" "),n("lb-button",{attrs:{type:"success"},on:{click:t.pageLayoutChange}},[t._v("切换分页布局")]),t._v(" "),n("lb-button",{attrs:{type:"success"},on:{click:t.pageLayoutdelete}},[t._v("删除布局第一项")]),t._v(" "),n("lb-button",{attrs:{type:"success"},on:{click:t.pageLayoutReset}},[t._v("重置布局")])],1),t._v(" "),n("lb-pagination",{attrs:{total:t.total1,pageLimit:t.limit1,pageIndex:t.pageIndex1,layout:t.pageLayout},on:{"update:pageLimit":function(e){t.limit1=e},"update:page-limit":function(e){t.limit1=e},"update:pageIndex":function(e){t.pageIndex1=e},"update:page-index":function(e){t.pageIndex1=e}}})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);