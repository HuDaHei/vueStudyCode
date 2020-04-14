<template functional>
<div>
  <div id="porp">{{props.test}} 我是props</div>
  <div @click="listeners.click">{{data.attrs.kk}}kk</div>
  <template v-for="(item, index) in children">
    <div :key="index">item</div>
  </template>
  <slot name="one"/>
  <slot name="two"/>
  <div>father</div>
  <div>{{parent.styles}}</div>
  <div>father end</div>
  <div>provide</div>
  <div>{{injections.test}}</div>
  <div>proviede end</div>
</div>
</template>
<script>
console.log("我是函数式组件");
console.log(document.querySelector("#porp")) //null
export default {
  inject: ['test']
}
</script>