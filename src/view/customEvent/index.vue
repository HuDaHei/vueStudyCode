<template>
  <div>
     自定义事件之 sync的使用
    <my-children :title.sync="childrenData"></my-children>
    <p>
      {{childrenData}}
    </p>
  </div>
</template>
<script>
import Children from './component/children';
export default {
  name: 'customEvent',
  components: {
    'my-children': Children
  },
  data () {
    return {
      childrenData: {
        name: 'hudahei',
        age: 18
      }
    };
  },
  methods: {

  }
};
</script>
