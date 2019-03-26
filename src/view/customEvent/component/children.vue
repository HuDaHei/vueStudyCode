<template>
  <div>
    子组件
    <button @click="send">向父组件发送数据</button>
  </div>
</template>
<script>
export default {
  name: 'custome-children',
  model: {
    prop: 'title',
    event: 'update'
  },
  props: {
    'title': {
      'type': Object
    }
  },
  methods: {
    // 发送数据到父组件
    send () {
      console.log('开始发送数据');
      this.$emit('update:title', { name: 'hanjun', age: 14 });
      console.log('发送数据结束');
    }
  }
};
</script>
