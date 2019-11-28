  <template>
  <el-table :data="tableData.data" style="width: 100%;" :span-method="objectSpanMethod">
    <template v-for="item in tableData.header">
      <el-table-column :prop="item.prop" :label="item.label" :key="item.prop"></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  data () {
    return {};
  },
  props: {
    tableData: {
      type: Object
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex < row.row) {
        if (rowIndex % 5 === 0) {
          return {
            rowspan: 5,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      } else if (row.col.includes(columnIndex)) {
        if (row.merge === 'down') {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else if (row.merge === 'com') {
          return {
            rowspan: 1,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
        /// ///////////
        // if (rowIndex === 0 || rowIndex===3) {
        //   return {
        //     rowspan: 2,
        //     colspan: 1
        //   };
        // } else if (rowIndex === 2) {
        //   return {
        //     rowspan: 1,
        //     colspan: 1
        //   };
        // } else {
        //   return {
        //     rowspan: 0,
        //     colspan: 0
        //   };
        // }
        /// //////////////
        // } else {
        //   return {
        //     rowspan: 0,
        //     colspan:0
        //   };
        // }
        /// ////////////
        // if (rowIndex % 2 === 0) {
        //   return {
        //     rowspan: 2,
        //     colspan: 1
        //   };
        // } else {
        //   return {
        //     rowspan: 0,
        //     colspan: 0
        //   };
        // }
      }
    }
  }
};
</script>
