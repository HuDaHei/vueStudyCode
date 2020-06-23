<template>
  <div style="display:flex">
    <div style="width:400px;">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" show-checkbox>
        <span slot-scope="{ node ,data}">
          <span class="dy-append" :class="data.calssName">{{ node.label }}</span>
        </span>
      </el-tree>
    </div>
    <div style="border:1px solid red;flex:1;height:300px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                },
                {
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data, "data");
      const appendData = [
        {
          label: "三级 1-2-2",
          calssName: "addpend-people"
        },
        {
          label: "三级 1-2-3",
          calssName: "addpend-people"
        }
      ];
      appendData.forEach(ap => {
          data.children.push(ap)
      })
    },
    // 给包含 addpend-people className的全部移动到 右侧
    // el-tree-node
    removeTreeNode() {}
  }
};
</script>
<style  scoped>
</style>