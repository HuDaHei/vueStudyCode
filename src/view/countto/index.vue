<template>
  <div>
      <template v-for="(item, index) in list">
          <vue-count-to :startVal="0" :endVal="item.value" :key="index" :duration="3000"></vue-count-to>
      </template>
  </div>
</template>

<script>
import vueCountTo from 'vue-count-to';
export default {
  name: 'test-count',
  components: {
    'vue-count-to': vueCountTo
  },
  data () {
    return {
      list: [
        {
          value: 562349
        }, {
          value: 85692
        }, {
          value: 85234
        }, {
          value: 89234
        }, {
          value: 85623
        }
      ]
    };
  }
};
</script>

<style>
span{
    color: red;
    font-size: 18px;
    font-weight: bold;
}
</style>
