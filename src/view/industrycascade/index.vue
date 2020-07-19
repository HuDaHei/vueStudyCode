<template>
  <div>
      <industry-cascade :defaultParentCheckId.sync="defaultParentCheckId" :checkID.sync="checkID"></industry-cascade>
  </div>
</template>

<script>
import industryCascade from './industryCascade';
export default {
  components: {
    industryCascade
  },
  data () {
    return {
      defaultParentCheckId: 1212,
      checkID: 135
    };
  }
};
</script>

<style>

</style>
