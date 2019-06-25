<template>
  <div>
    <div>{{add}}</div>
    <button @click="adds">one</button>
  </div>
</template>
<script>
export default {
  name: 'onechildren',
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
