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
        },
        {
          path: '/customevent',
          name: '自定义事件'
        },
        {
          path: '/daynamiccom',
          name: '动态组件'
        },
        {
          path: '/customTable',
          name: '自定义表格'
        },
        {
          path: '/video',
          name: 'video'
        },
        {
          path: '/performanceData',
          name: '性能测试Freeze'
        },
        {
          path: '/performanceKeep', 
          name: '性能测试KeepAlive'
        },
        {
          path: '/performanceLazy',
          name: '性能测试KeepALazy'
        },
        {
          path: '/function',
          name: '性能测试functional'
        },
        {
          path: '/date',
          name: '日历'
        }
        // }
      ]
    };
  }
};
</script>
