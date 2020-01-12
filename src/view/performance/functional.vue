<template>
  <div>
    我是function
    <cl-func test="test"></cl-func>
  </div>
</template>
<script>
import func from './func'
export default {
  name: 'functionalll',
  components:{
    'cl-func': func,
  }
}
</script>