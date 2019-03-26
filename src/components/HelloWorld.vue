<template>
<div>{{com}} 周期阶段{{msg}}</div>
</template>

<script>
console.log('start 生命周期 -----------第一步');
export default {
  name: 'HelloWorld',
  data () {
    console.log('data-----------第二步');
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    com () {
      console.log('computed -----------第三步');
      return 'computed';
    }
  },
  watch: {
    msg () {
      console.log('watch-----------第四步');
    }
  },
  beforeCreate () {
    console.log('beforeCreate-----------第五步');
  },
  created () {
    this.msg = 'createWatch';
    console.log('created-----------第六步');
  },
  beforeMount () {
    console.log('beforeMount-----------第七步');
  },
  mounted () {
    console.log('mounted-----------第八步');
    setTimeout(() => {
      this.msg = '更新';
    }, 3000);
  },
  updated () {
    console.log('update-----------第九步');
  }
};
</script>
