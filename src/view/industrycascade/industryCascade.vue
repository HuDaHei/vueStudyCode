<template>
  <section class="cascade-single_check">
    <!-- 搜索 -->
    <section>
      <el-input v-model="search"  prefix-icon="el-icon-search" placeholder="请输入行业名称"></el-input>
    </section>
    <!-- body -->
    <section class="cascade-single_body">
      <!-- 一级 -->
      <section class="cascade-single_body_left">
        <h4>一级</h4>
        <el-scrollbar style="height:238px">
          <section ref="cascadeLeft">
            <template v-for="item in this.list">
              <section
                :key="item.id"
                @click="handlerFirstClick($event, item)"
                class="casade-single_type"
                :class="[item.parentId === current.parentId? 'cascade_background_color':'']"
              >
                <span>{{ item.name }}</span>
                <i class="el-icon-arrow-right" style="color:#A5A5A5"></i>
              </section>
            </template>
          </section>
        </el-scrollbar>
      </section>
      <!-- 二级 -->
      <section class="cascade-single_body_right">
        <h4>二级</h4>
        <el-scrollbar style="height:238px">
          <section v-if="children.length">
            <el-radio-group v-model="currentCheckId">
              <template v-for="item in children">
                <el-radio :key="item.id" :label="item.id">{{
                  item.name
                }}</el-radio>
              </template>
            </el-radio-group>
          </section>
          <section v-else>
            暂无数据
          </section>
        </el-scrollbar>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'casadeSingCheck',
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            name: '综合电商平台',
            parentId: 123132,
            level: 1,
            children: [
              {
                id: 12,
                name: '服装1',
                parentId: 123132,
                level: 2
              },
              {
                id: 13,
                name: '服装1',
                parentId: 123132,
                level: 2
              },
              {
                id: 14,
                name: '服装1',
                parentId: 123132,
                level: 2
              },
              {
                id: 15,
                name: '服装1',
                parentId: 123132,
                level: 2
              }
            ]
          },
          {
            id: 112,
            name: '招商加盟服务',
            parentId: 1212,
            level: 1,
            children: [
              {
                id: 132,
                name: 'kk',
                parentId: 1212,
                level: 2
              },
              {
                id: 133,
                name: 'sk',
                parentId: 1212,
                level: 2
              },
              {
                id: 134,
                name: 'xks',
                parentId: 1212,
                level: 2
              },
              {
                id: 1353,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 1352,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 1235,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 13335,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 133353,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 122351,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 12123123,
                name: '服装1',
                parentId: 1212,
                level: 2
              }, {
                id: 12235,
                name: '服装1',
                parentId: 1212,
                level: 2
              }
            ]
          }
        ];
      }
    },
    defaultParentCheckId: {
      type: Number | String
    },
    checkID: {
      type: Number | String
    }
  },
  data () {
    return {
      children: [],
      search: '',
      leftTypeDom: null,
      current: {}
    };
  },
  watch: {
    search (v) {
      const { children = [] } = this.current;
      this.children = this.filterChildren(v, children);
    }
  },
  computed: {
    allChildren () {
      return this.getAllChildren(this.list);
    },
    currentCheckId: {
      get () {
        return this.checkID;
      },
      set (v) {
        this.$emit('update:checkID', v);
        const temp = this.allChildren.find(a => {
          return a.id === v;
        });
        this.$emit('update:defaultParentCheckId', temp.parentId);
      }
    }
  },
  mounted () {
    if (this.defaultParentCheckId) {
      this.initForEdit();
    } else {
      this.init();
    }
  },
  methods: {
    handlerFirstClick (el, data) {
      const { children = [] } = data;
      this.children = this.filterChildren(this.search, children);
      this.current = data;
      this.leftTypeDom = this.leftFatherDom || Object.freeze([...this.$refs.cascadeLeft.childNodes]);
      // this.addBackColor(el.target, this.leftTypeDom);
    },
    getAllChildren (list = []) {
      let allChildren = [];
      const len = list.length - 1;
      for (let i = len; i >= 0; i--) {
        const children = Reflect.get(list[i], 'children');
        allChildren = allChildren.concat(...children);
      }
      return allChildren;
    },
    filterChildren (value = '', data = []) {
      if (value.length) {
        return data.filter(d => {
          return d.name.indexOf(value) !== -1;
        });
      } else {
        return data;
      }
    },
    // 添加背景色
    addBackColor (el, peerDomArr = []) {
      peerDomArr.forEach(element => {
        element.classList.remove('cascade_background_color');
      });
      el.classList.add('cascade_background_color');
    },
    init () {
      const [initCurrent] = this.list;
      const { children } = initCurrent;
      this.current = initCurrent;
      this.children = children;
    },
    initForEdit () {
      this.list.forEach(l => {
        if (l.parentId === this.defaultParentCheckId) {
          this.current = l;
        }
      });
      const { children = [] } = this.current;
      this.children = this.filterChildren('', children);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
h4 {
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: left;
  color: #999999;
}
.cascade-single_check {
  width: 500px;
  height: 320px;
  font-size: 12px;
  margin: 0 auto;
}
.cascade-single_body {
  display: flex;
}
.cascade-single_body_right,
.cascade-single_body_left {
  flex: 1;
  border-bottom: 1px solid #ECECEC;
  color: #333;
}
.cascade-single_body_left {
  border-left: 1px solid #ECECEC;
  border-right: 1px solid #ECECEC;
}
.cascade-single_body_right {
  border-right: 1px solid #ECECEC;
}
.casade-single_type,
h4 {
  padding-left: 18px;
  padding-right: 6px;
}
.casade-single_type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
}
.casade-single_type:hover {
  background-color: #F6F8F9;
}
.el-radio-group {
  display: flex;
  flex-direction: column;
}
.el-radio {
  margin-right: 0;
  padding-left: 18px;
  text-align: left;
  line-height: 38px;
}
.is-checked {
  background-color: #F6F8F9;
}
.cascade_background_color{
  background-color: #F6F8F9;
}
.el-input__inner{
  border-radius: unset;
  border-color: #ECECEC;
  font-size: 12px;
}
.el-radio__input{
  font-size: 12px;
}
.el-radio__label{
  font-size: 12px;
}
</style>
