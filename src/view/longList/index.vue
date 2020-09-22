<template>
  <div>
    <button @click="handlerAddData">add</button>
    <table class="long-table" border="1">
      <thead>
        <tr>
          <td>23</td>
        </tr>
      </thead>
    </table>
    <div class="long_table_tbody" @scroll="hanlderScroll">
      <table class="long-table" border="1">
        <tbody class="long-table_tbody" id="long_table_tbody" :style="tbodyHeight">
          <template v-for="item in tableData ">
            <tr :key="item.id">
              <template v-for="(key, index) in keys">
                <td :key="index">{{ item[key] }}</td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import test from "./data";
export default {
  name: "longList",
  data() {
    return {
      keys: ["name", "age", "sex", "email", "address"],
      test: test,
      tableData: [],
      startDivIndex:0,
      endDivIndex: 0
    };
  },
  computed:{
    tbodyHeight() {
      return {
        height: `${this.test.length * 21}px`
      }
    }
  },
  mounted() {
    this.watchDomSizeChange();
    this.init();
  },
  methods: {
    name() {
      Reflect;
    },
    init(){
      this.endDivIndex = Math.ceil(200 / 21);
      const test = JSON.parse(JSON.stringify(this.test));
      this.tableData = test.splice(0, this.endDivIndex)
    },
    handlerAddData() {
      const temp = {
        name: Math.random(),
        age: "kkk",
        sex: "kkk",
        email: "kkk",
        address: "kkk",
        id: Math.random(),
      };
      this.test.push(temp);
    },
    watchDomSizeChange() {
      const resize = new ResizeObserver((entry) => {
        console.log(entry, "entrt");
      });
      resize.observe(document.querySelector("#long_table_tbody"));
    },//
    hanlderScroll(e){
      const target = e.target;
      const scrollTop = target.scrollTop;
      const showDataCount = Math.ceil(scrollTop / 21);
      const test = JSON.parse(JSON.stringify(this.test));
      const data = test.splice(this.endDivIndex, showDataCount);
      this.endDivIndex = this.endDivIndex+showDataCount;
      let  oldData = JSON.parse(JSON.stringify(this.tableData));
      // oldData.splice(0,showDataCount)
      this.tableData = [...oldData, ...data]
    },//
  },
};
</script>

<style>
.long-table {
  border-collapse: collapse;
}
.long_table_tbody {
  height: 200px;
  display: inline-block;
  overflow: auto;
}
.long-table_tbody {
  display: inline-block;
}
</style>