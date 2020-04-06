<template>
  <div>
    我是function
    <cl-func test="test" kk="color:red">
      <template v-slot:one>
        <p>one</p>
        <p>two</p>
      </template>
      <p>three</p>
      <template v-slot:two>
        <p>five</p>
        <p>six</p>
      </template>
    </cl-func>
    <func-render>
      <template v-slot:onefunc>
        <p>one</p>
        <p>two</p>
      </template>
      <div>renderfunc</div>
    </func-render>
  </div>
</template>
<script>
import func from "./func";
import funcRender from './func_render'
export default {
  name: "functionalll",
  components: {
    "cl-func": func,
    'func-render': funcRender
  },
  data() {
    return {
      styles: {
        color: "red"
      }
    };
  }
};
</script>