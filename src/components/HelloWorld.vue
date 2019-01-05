<template>
<div>{{com}} 周期阶段{{msg}}</div>
</template>

<script>
console.log('start')
export default {
  name: 'HelloWorld',
  data () {
    console.log("data")
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    com() {
      console.log("computed");
      return "computed"
    }
  },
  watch: {
    msg () {
      console.log("watch")
    }
  },
  beforeCreate () {
     console.log("beforeCreate")
  },
  created () {
    this.msg = "createWatch"
    console.log("created")
  },
  beforeMount () {
     console.log("beforeMount")   
  },
  mounted () {
      console.log("mounted");
      setTimeout(()=>{
        this.msg = "更新";
      }, 3000)
   
  },
  updated() {
    console.log("update")
  }
}
</script>
