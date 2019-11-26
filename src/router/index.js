import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/view/list/index.vue'], resolve)
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customevent',
      name: 'customevent',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/customEvent/index.vue')
    },
    {
      path: '/daynamiccom',
      name: 'daynamiccom',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/dynamicCom/index.vue')
    },
    {
      path: '/customTable',
      name: 'customTable',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/customTable/custom.vue')
    },
    {
      path: '/performanceData',
      name: 'performanceData',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/performance/testData.vue')
    },
    {
      path: '/performanceKeep',
      name: 'performanceKeep',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/performance/keepAlive.vue')
    },
    {
      path: '/performanceLazy',
      name: '/performanceLazy',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/performance/lazyCom.vue')
    }
  ]
});
