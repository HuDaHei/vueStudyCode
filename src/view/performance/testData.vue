<template>
  <div>
    <ul>eee</ul>
  </div>
</template>
<script>
export default {
  name: 'testData',
  data () {
    return {
      list: []
    };
  },
  mounted () {
    const nums = 100000000;
    const temp = [];
    for (let i = 0; i < nums; i++) {
      temp.push(i);
    }
    console.time();
    // this.list = temp;
    this.list = Object.freeze(temp);
    console.timeEnd();
  }
};
</script>
