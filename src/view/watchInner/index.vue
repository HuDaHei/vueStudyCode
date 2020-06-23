<template>
  <div>
    {{test}}
    <div>kkkk</div>
    <test-c @hook:updated="testUpdate" />
  </div>
</template>

<script>
import { store } from '@/observableStore';
export default {
  components: {
    'test-c': () => import('./test')
  },
  computed: {
    test () {
      return store.test;
    }
  },
  methods: {
    testUpdate () {
      console.log('outerMethods');
    }
  }
};
</script>
