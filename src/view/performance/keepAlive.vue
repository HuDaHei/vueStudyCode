<template>
  <div>
    <button @click="toggleComponet">test-one</button>
    <button @click="toggleComponet2">test-two</button>
    <div>
      <!-- <keep-alive> -->
        <component :is="componentId"></component>
      <!-- </keep-alive>S -->
    </div>
  </div>
</template>
<script>
export default {
  name: "keepAlives",
  data() {
    return {
      componentId: "test-data"
    };
  },
  components: {
    "test-two": () => import("./keepPageTwo"),
    "test-one": () => import("./keepPageOne")
  },
  methods: {
    toggleComponet() {
      this.componentId = "test-one";
    },
    toggleComponet2() {
      this.componentId = "test-two";
    }
  }
};
</script>
