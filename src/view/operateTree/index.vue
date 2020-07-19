<template>
<div class="variation-tree_container">
  <el-input></el-input>
  <div class="variation-tree_checkBox">
    <div class="variation-tree_left">
      <h4>客户列表</h4>
      <el-scrollbar style="height:190px">
        <vue-tree
          :data="list"
          @check="checkChange"
          show-checkbox
          @node-click="nodeClick"
          icon-class="xx"
          default-expand-all
          ref="tree"
          node-key="id"
          style="width:200px"
        ></vue-tree>
      </el-scrollbar>
    </div>
    <div class="variation-tree_right">
      <h4>账户列表</h4>
      <el-scrollbar style="height:190px">
        <el-checkbox-group
          v-model="temp"
          @change="checkboxChange"
          style="display:flex;flex-direction:column;text-aligin:center"
        >
          <template v-for="item in children">
            <div  :key="item.id">
             <el-checkbox
              style="margin-right:0"
              :label="item.id"
              >{{ item.label }}</el-checkbox
            >
            <p style="font-size:12px">kkk</p>
            </div>
          </template>
        </el-checkbox-group>
      </el-scrollbar>
    </div>
  </div>
   <footer>
     <div>
       <el-button>取消</el-button>
       <el-button type="success" >确认</el-button>
     </div>
   </footer>
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
      list: Object.freeze([
        {
          label: '全部',
          id: -1,
          showChild: true, // 说明他的子项不出现 出现在右侧
          children: [
            {
              label: '二级 1-1',
              id: 2,
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
                },
                {
                  id: 333,
                  right: true,
                  label: '三级 1-1-333'
                }, {
                  id: 3333,
                  right: true,
                  label: '三级 1-1-333'
                }
              ]
            },
            {
              label: '二级 2-1',
              id: 5,
              children: [
                {
                  id: 6,
                  right: true,
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
                  right: true,
                  label: '三级 2-2-1'
                }
              ]
            }, {
              label: '二级 22-2',
              id: 73,
              children: [
                {
                  id: 83,
                  right: true,
                  label: '三级 2-2-21'
                }
              ]
            }, {
              label: '二级 2-22',
              id: 722,
              children: [
                {
                  id: 822,
                  right: true,
                  label: '三级 2-2-12'
                }
              ]
            },{
              label: '二级 2-d22',
              id: 7222,
              children: [
                {
                  id: 8222,
                  right: true,
                  label: '三级 2w-2-12'
                }
              ]
            }
          ]
        }
      ]),
      children: [],
      temp: []
    };
  },
  mounted () {
    this.children = this.allChildren;
  },
  computed: {
    allChildren () {
      const [first] = this.list;
      const { children } = first;
      return Object.freeze(this.getChildrens(children));
    }
  },
  methods: {
    nodeClick (datas, node, x) {
      const { data } = node;
      const { id, children = [] } = data;
      // id === -1 说明是点击了全部
      if (id < 0) {
        const diffAll = this.diffArray(this.allChildren, this.children);
        if (diffAll) {
          this.children = this.allChildren;
        }
      } else {
        const diff = this.diffArray(this.children, children);
        if (diff) {
          this.children = children;
        }
      }
    },
    checkboxChange (e) {
      this.$refs.tree.setCheckedKeys(e);
    },
    checkChange (
      data,
      { checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys }
    ) {
      if (checkedKeys.length) {
        const tempc = [];
        checkedNodes.forEach(c => {
          const { right = false, id } = c;
          if (right) {
            tempc.push(id);
          }
          console.log(tempc, 'tempcv');
          this.temp = tempc;
        });
      } else {
        this.temp = [];
      }
      //   const temp = this.$refs.tree.getCheckedKeys();
      //   this.temp = temp;
    },
    // 获取全部子项 下面的子项 含有right的属性的子项
    getChildrens (list) {
      const tempChildren = [];
      function getChildrens (list) {
        list.forEach(l => {
          const { right = false, children = [] } = l;
          if (right) {
            tempChildren.push(l);
          }
          if (children.length) {
            getChildrens(children);
          }
        });
      }
      getChildrens(list);
      return Object.freeze(tempChildren);
    },
    // 对比数组是否一致 通过id对比
    diffArray (va = [], na = []) {
      let isDiff = true; // 默认是不一致的
      const valen = va.length;
      let aid = [];
      // 长度对比
      if (valen === na.length) {
        // 长度一致 对比ID是否一致
        [...va, ...na].forEach(v => {
          const { id } = v;
          aid.push(id);
        });
        const idSet = new Set(aid);
        if (idSet.size === valen) {
          isDiff = false; // 前后数据无变化
        }
      }
      return isDiff;
    }
  }
};
</script>
<style>
p{
    padding: 0;
  margin: 0;
}
h4{
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  padding-top: 18px;
  padding-bottom: 8px;
  color: #999999;
}
.variation-tree_container{
  padding: 9px;
  height: 315px;
  width: 450px;
  background-color: #F4F4F4;

}
.variation-tree_checkBox {
  display: flex;
  height: 220px;
  text-align:left;
  border-left: 1px solid #ECECEC;
  border-bottom: 1px solid #ECECEC;
  border-right: 1px solid #ECECEC;
}
.variation-tree_left {
  flex: 1;
  height: 190px;
  overflow: hidden;
  background-color: #fff;
  padding-left: 12px;
  border-right: 1px solid #ECECEC;

}
.variation-tree_right {
  flex: 1;
  height: 190px;
  padding-left: 12px;
  overflow: hidden;
  background-color: #fff;

}
footer{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 14px;
}
</style>
