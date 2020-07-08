<template>
  <div style="display:flex">
    <vue-tree :data="list"
    @check="checkChange"
    show-checkbox
    @node-click="nodeClick"
    icon-class="xx"
    ref="tree"
    node-key="id"
    style="width:200px"></vue-tree>
    <el-checkbox-group v-model="temp" @change="checkboxChange" style="display:flex;flex-direction:column;text-aligin:center">
        <template v-for="item in children">
            <el-checkbox style="margin-right:0" :key="item.id" :label="item.id">{{item.label}}</el-checkbox>
        </template>
    </el-checkbox-group>
  </div>
</template>

<script>
import vueTree from './tree/src/tree';
export default {
  components: {
    'vue-tree': vueTree
  },
  data () {
    return {
      list: [
        {
          label: '一级 1',
          id: 1,
          showChild: true,
          children: [
            {
              label: '二级 1-1',
              id: 2,

              showChild: false, // 说明他的子项不出现 出现在右侧
              children: [
                {
                  id: 3,
                  right: true, // 说明该项是放在右边的
                  label: '三级 1-1-2'
                },
                {
                  id: 33,
                  right: true,
                  label: '三级 1-1-3'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          id: 4,

          showChild: true,
          children: [
            {
              label: '二级 2-1',
              id: 5,

              showChild: true,
              children: [
                {
                  showChild: true,
                  id: 6,

                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              id: 7,

              children: [
                {
                  id: 8,

                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          id: 9,

          showChild: true,
          children: [
            {
              id: 10,

              label: '二级 3-1',
              children: [
                {
                  id: 11,

                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              id: 12,

              children: [
                {
                  id: 13,

                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      children: [],
      temp: []
    };
  },
  methods: {
    nodeClick (data, node, x) {
      const { data: datas } = node;
      this.children = Reflect.get(datas, 'children');
    },
    checkboxChange (e) {
      console.log(e, 'e');
      this.$refs.tree.setCheckedKeys(e);
    },
    checkChange (data, {checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys}) {
      if (checkedKeys.length) {
        const tempc = [];
        checkedNodes.forEach(c => {
          const { right = false, id } = c;
          if (right) {
            tempc.push(id);
          }
          console.log(tempc, 'tempcv')
          this.temp = tempc;
        });
      } else {
        this.temp = [];
      }
    //   const temp = this.$refs.tree.getCheckedKeys();
    //   this.temp = temp;
    }
  }
};
</script>

<style></style>
