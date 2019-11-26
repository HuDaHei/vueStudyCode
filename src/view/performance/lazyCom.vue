<template>
  <div>
    <button @click="lazyCom">lazyCom</button>
    <component :is="componentsId"></component>
  </div>
</template>
<script>
// import lazyPage from './lazyPage'
export default {
  components:{
    'lazy-page': () => import('./lazyPage')
  },
  data() {
    return {
      componentsId: ''
    }
  },
  methods: {
    lazyCom() {
      this.componentsId = 'lazy-page'
    }
  }
}
</script>