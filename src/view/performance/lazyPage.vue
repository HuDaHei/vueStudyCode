<template>
  <div>
    <template v-for="item of repeat">
      <p :key="item">嘻嘻</p>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repeat: []
    }
  },
  mounted() {
    for(let i = 0;i< 200;i++) {
      this.repeat.push(i)
    }
    console.log('我初始化了')

  }
}
</script>