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
  </div>
</template>
<script>
import func from "./func";
export default {
  name: "functionalll",
  components: {
    "cl-func": func
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