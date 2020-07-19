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
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "group-video" */ '@/view/video/video.vue')
    }, {
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
    },
    {
      path: '/function',
      name: '/function',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/performance/functional.vue')
    },
    {
      path: '/date',
      name: '/date',
      component: () => import(/* webpackChunkName: "group-custome" */ '@/view/date/index.vue')
    }, {
      path: '/drag',
      component: () => import('@/view/drage/drage.vue')
    },
    {
      path: '/first',
      component: () => import('@/view/routerLink/first.vue'),
      children: [{
        path: 'seconde',
        component: () => import('@/view/routerLink/seconde.vue'),
        children: [
          {
            path: 'three',
            component: () => import('@/view/routerLink/three')
          }
        ]
      }]
    },
    {
      path: '/tree',
      component: () => import('@/view/tree')
    },
    {
      path: '/watchInner',
      component: () => import('@/view/watchInner')
    },
    {
      path: '/countto',
      component: () => import('@/view/countto')
    },
    {
      path: '/operateTree',
      component: () => import('@/view/operateTree/index.vue')
    },
    {
      path: '/cascade',
      component: () => import('@/view/industrycascade/index.vue')
    }
  ]
});
