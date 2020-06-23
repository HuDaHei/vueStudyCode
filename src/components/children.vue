<template>
  <div>
      我是子组件
      {{name}}
  </div>
</template>

<script>
console.log("child---第一步")
export default {
    name: 'children',
    data() {
        return {
            name: 'child'
        }
    },
    beforeCreate() {
        console.log('beforeCreate--child')
    },
    created() {
        console.log('created--child')
    },
    beforeMount() {
        console.log('beforeMount--child')
    },
    mounted(){
        console.log('mounted---child')
    },
    beforeUpdate(){
        console.log('beforeUpdate---child')
    },
    updated(){
        console.log('updated---child')
    },
    beforeDestroy(){
        console.log('beforeDestroy---child')
    },
    destroyed(){
        console.log('destroyed---child')
    }

}
</script>

<style>

</style>