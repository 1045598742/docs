<template>
  <div>
    <demo :code="code1">
      <template #title>基础用法</template>
      <template #subtitle>预览 目前的树组件每组数据必须有id字段，后期扩展自定义字段</template>
      <div class="test-value">nodeClick事件请看控制台 第一个参数的当前节点信息，第二个参数是树的上下依赖关系，详情看参数说明</div>
      <lb-tree :data="treeData" :option="option" @node-click="nodeClick" />
    </demo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
        {
          id: 0,
          name: "手机",
          children: [
            {
              id: 1,
              name: "华为"
            },
            {
              id: 2,
              name: "苹果",
              children: [
                {
                  id: 5,
                  name: "苹果11"
                },
                {
                  id: 6,
                  name: "苹果10"
                }
              ]
            },
            {
              id: 3,
              name: "小米"
            },
            {
              id: 4,
              name: "一加"
            }
          ]
        }
      ],
      option: { label: "name", children: "children" },
      code1: `<template>
  <lb-tree :data="treeData" :option="option" @node-click="nodeClick" />
</template>

<script>
data(){
  return{
    treeData: [
      {
        id: 0,
        name: "手机",
        children: [
          {
            id: 1,
            name: "华为"
          },
          {
            id: 2,
            name: "苹果",
            children: [
              {
                id: 5,
                name: "苹果11"
              },
              {
                id: 6,
                name: "苹果10"
              }
            ]
          },
          {
            id: 3,
            name: "小米"
          },
          {
            id: 4,
            name: "一加"
          }
        ]
      }
    ],
    option: { label: "name", children: "children" },
  },
  methods: {
    nodeClick(data,node){
      console.log(data,node);
    }
  }  
}
<\/script>
`,
    };
  },
  methods: {
    nodeClick(data,node){
      console.log(data,node);
    }
  }
};
</script>
