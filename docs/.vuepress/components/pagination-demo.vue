<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览</template>
      <div class="test-value">pageLimit:{{ limit }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pageIndex:{{ pageIndex}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事件监听请看控制台</div>
      <lb-pagination
        :total="total"
        :pageLimit.sync="limit"
        :pageIndex.sync="pageIndex"
        @pageIndexChange="pageIndexChange"
        @pageLimitChange="pageLimitChange"
      ></lb-pagination>
    </demo>
    <demo :code="code2">
      <template #title>分页模块布局</template>
      <template #subtitle>通过 layout属性操作分页布局和开启或关闭所需板块（默认全部开启）</template>
      <div class="test-value">
         <div class="test-value">当前布局：[ {{pageLayout.toString()}} ]</div>
          <lb-button type="success" @click="pageLayoutChange">切换分页布局</lb-button>
           <lb-button type="success" @click="pageLayoutdelete">删除布局第一项</lb-button>
          <lb-button type="success" @click="pageLayoutReset">重置布局</lb-button>
      </div>
      <lb-pagination
        :total="total1"
        :pageLimit.sync="limit1"
        :pageIndex.sync="pageIndex1"
        :layout="pageLayout"
      ></lb-pagination>
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageIndex: 1,
      limit: 10,
      total: 100,
      pageIndex1: 1,
      limit1: 10,
      total1: 100,
      pageLayout:["limit", "prev", "page", "next", "go", "total"],
      code1: `<template>
  <lb-pagination
    :total="total"
    :pageLimit.sync="limit"
    :pageIndex.sync="pageIndex"
    @pageIndexChange="pageIndexChange"
    @pageLimitChange="pageLimitChange"
  ></lb-pagination>
</template>

<script>
  data() {
    return {
      pageIndex: 1,
      limit: 10,
      total: 100
    }
  },
  methods:{
    pageIndexChange(pageIndex) {
      console.log(pageIndex,'这是页码')
    },
    pageLimitChange(pageLimit) {
      console.log(pageLimit,'这是每页条数')
    }
  }
<\/script>
`,
      code2: `<template>
  <div class="test-value">当前布局：[ {{pageLayout.toString()}} ]</div>
  <lb-button type="success" @click="pageLayoutChange">切换分页布局</lb-button>
  <lb-button type="success" @click="pageLayoutdelete">删除布局第一项</lb-button>
  <lb-button type="success" @click="pageLayoutReset">重置布局</lb-button>
  <lb-pagination
    :total="total"
    :pageLimit.sync="limit"
    :pageIndex.sync="pageIndex"
    :layout="pageLayout"
  ></lb-pagination>
</template>

<script>
  data() {
    return {
      pageIndex: 1,
      limit: 10,
      total: 100,
      pageLayout:["limit", "prev", "page", "next", "go", "total"]
    }
  },
  methods:{
    pageLayoutChange() {
      let [first,...other] = this.pageLayout;
      this.pageLayout = [...other,first]
    },
    pageLayoutdelete() {
      if(this.pageLayout.length){
        this.pageLayout.shift();
      }
    },
    pageLayoutReset() {
      this.pageLayout = this.$options.data().pageLayout;
    }
  }
<\/script>
`,

    };
  },
  methods: {
        pageIndexChange(pageIndex){
        console.log(pageIndex,'这是页码')
      },
      pageLimitChange(pageLimit){
        console.log(pageLimit,'这是每页条数')
      },
      pageLayoutChange(){
        let [first,...other] = this.pageLayout;
        this.pageLayout = [...other,first]
      },
      pageLayoutdelete(){
        if(this.pageLayout.length){
          this.pageLayout.shift();
        }
      },
      pageLayoutReset(){
        this.pageLayout = this.$options.data().pageLayout;
      }
    }
  
};
</script>
