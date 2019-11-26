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
      repeat: [1,2,3,4,5,6,7,8,9,99,999,98,78]
    }
  },
  mounted() {
    console.log('我初始化了')
  }
}
</script>