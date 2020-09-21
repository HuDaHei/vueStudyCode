<template>
  <div>
    <table class="long-table" border="1" border-co>
      <thead>
        <tr>
          <th>kkeeeekkkeeeekkkeeeekkkeeeek</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
          <th>kksk</th>
        </tr>
      </thead>
      <tbody class="long-table_tbody">
        <template v-for="item in test ">
          <tr :key="item.id">
            <template v-for="(key, index) in keys">
              <td :key="index">{{ item[key] }}</td>
            </template>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">kk</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import test from './data'
export default {
  name: "longList",
  data() {
    return {
      keys: ["name", "age", "sex", "email", "address"],
      test: Object.freeze(test)
    };
  },
  methods: {
    name() {
      Reflect;
    },
  },
};
</script>

<style>
thead,tbody{
    display: block;
}
.long-table{
    border-collapse: collapse;
}
.long-table_tbody{
    height: 100px;
    overflow: overlay;
}
</style>