<template>
  <div>
      我是第一层
      <div @click="handerTurn">我要去第二层</div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        handerTurn() {
            this.$router.push({path:'seconde'})
        }
    }
}
</script>

<style>

</style>