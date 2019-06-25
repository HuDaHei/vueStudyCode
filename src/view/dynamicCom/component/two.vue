<template>
  <div>
    <div>{{add}}</div>
    <button @click="adds">two</button>
  </div>
</template>
<script>
export default {
  name: 'twochildren',
  data () {
    return {
      add: 2
    };
  },
  methods: {
    adds () {
      this.add++;
    }
  }
};
</script>
