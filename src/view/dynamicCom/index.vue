<template>
  <div>
    <button @click="switchcom('one-com')">one</button>
    <button @click="switchcom('two-com')">two</button>
    异步组件
    <div>
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import one from './component/one';
import two from './component/two';
export default {
  name: 'dynamiccom',
  components: {
    'one-com': one,
    'two-com': two
  },
  data () {
    return {
      comName: 'on'
    };
  },
  methods: {
    switchcom (com) {
      this.comName = com;
    }
  }
};
</script>
