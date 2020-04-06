<template functional>
<div>
  <div>{{props.test}} 我是props</div>
  <template v-for="(item, index) in children">
    <div :key="index">item</div>
  </template>
  <!-- <slot name="one"/>
  <slot name="two"/> -->
</div>
</template>