<template>
  <div>
    <div v-for="item in routerList" :key="item.path">
        <router-link  :to="item.path">{{item.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerList: [
        { path: '/', name: '首页' },
        {
          path: '/HelloWorld',
          name: '生命周期顺序'
        }
      ]
    }
  }
}
</script>
