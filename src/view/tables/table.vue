<template>
  <el-h-table :tableData="table"></el-h-table>
</template>
<script>
import Table from "./table2";
export default {
  data() {
    return {
      table: {
        data: [
          {
            date: "2016-05-03",
            name: "马鞍山",
            type: "收货公司",
            company: "马鞍山有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2,
            merge: "down"
          },
          {
            date: "2016-05-02",
            name: "马鞍山",
            type: "收货公司",
            company: "马鞍山有限公司",
            charge: "船泊费",
            rate: "34.5",
            col: [2,3,6], // 几列合并 2 3 合并
            reconciliation: "2018-9-12",
            row: 2,
            merge: false
          },
          {
            date: "2016-05-02",
            name: "马鞍山",
            type: "发货方",
            company: "芜湖有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            row: 2, //前几列合并,
            col: [2,3,6], // 几列合并 例如2 3 6列会合并,
            merge: "com" // 是否向下合并 down 是向下合并 com是当前行合并

          },
          {
            date: "2016-05-02",
            name: "马鞍山",
            type: "船公司",
            company: "南京有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2,
            merge: "down" // 是否向下合并 down 是向下合并 com是当前行合并
          },
          {
            date: "2016-05-02",
            name: "马鞍山",
            type: "船公司",
            company: "南京有限公司",
            charge: "船泊费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2
          },
          // 合肥
          {
            date: "2016-05-02",
            name: "合肥",
            type: "收货公司",
            company: "合肥有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2,
            merge: "down"

          },          {
            date: "2016-05-02",
            name: "合肥",
            type: "收货公司",
            company: "合肥有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2
          },          {
            date: "2016-05-02",
            name: "安庆",
            type: "收货公司",
            company: "安庆有限公司",
            charge: "船泊费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            merge: "com",
            row: 2,

          },          {
            date: "2016-05-02",
            name: "南京",
            type: "发货方",
            company: "江宁有限公司",
            charge: "船运费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2,
            merge: "down"

          },          {
            date: "2016-05-02",
            name: "南京",
            type: "发货方",
            company: "江宁有限公司",
            charge: "船泊费",
            rate: "34.5",
            reconciliation: "2018-9-12",
            col: [2,3,6], // 几列合并 2 3 合并
            row: 2
          },
        ],
        header: [
          {
            prop: "date",
            label: "装货日"
          },
          {
            prop: "name",
            label: "收货码头"
          },
          {
            prop: "type",
            label: "类型"
          },
          {
            prop: "company",
            label: "公司名"
          },
          {
            prop: "charge",
            label: "费用类型"
          },
          {
            prop: "rate",
            label: "费率"
          },
          {
            prop: "reconciliation",
            label: "对账日期"
          }
        ]
      }
    };
  },
  components: {
    "el-h-table": Table
  }
};
</script>
