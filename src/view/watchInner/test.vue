<template>
  <div>
      test
      {{ name }}
     <div> {{ test }}</div>
      <button @click="handlerSetMuation">mutation</button>
  </div>
</template>

<script>
import { store, mutaiton } from '@/observableStore';
export default {
  name: 'watch-innner-test',
  data () {
    return {
      name: 'init'
    };
  },
  computed: {
    test () {
      return store.test;
    }
  },
  beforeMount () {
    this.$on('hook:updated', () => {
      console.log('update - on - mounted', new Date().getTime());
    });
  },
  mounted () {
    this.name = 'mounted';
    setTimeout(() => {
      this.name = 'setTimeout';
    }, 2000);
    console.log(this, 'mounted');
    // this.$on('hook:updated', () => {
    //   console.log('update - on - mounted', new Date().getTime());
    // });
  },
  beforeUpdate () {
    this.name = 'beforeUpdate'; // 不会重新触发beforeUpdate生命周期
    console.log('beforeUpdate');
  },
  // updated () {
  //   // this.name = 'update'; // 会重新触发生命周期
  //   console.log('update', new Date().getTime());
  // }
  methods: {
    handlerSetMuation () {
      mutaiton.setTest('handlerSetMuation');
    }
  }
};
</script>
