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
    }
  ]
});
