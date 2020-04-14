<template>
  <div>
    我是function
    <cl-func test="test" kk="color:red" @click="handlerClick" @kk="handlerClick">
      <template v-slot:one="slotScope">
        <p>one1</p>
        <p>{{slotScope.name}}99</p>
        <p>two2</p>
      </template>
      <p>three</p>
      <template v-slot:two>
        <p>five</p>
        <p>six</p>
      </template>
    </cl-func>
    <func-render kk="kkk" @click="handlerClick">
      <template v-slot:item="slotScope">
        <p>one</p>
        <p>{{slotScope.name}}</p>
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
  provide: {
    test: 'provideTest'
  },
  components: {
    "cl-func": func,
    'func-render': funcRender
  },
  data() {
    return {
      styles: {
        color: "red"
      },
      slotScope: {
        name: 'slotScope'
      },
      faScope: {
        name: 'faScope'
      }
    };
  },
  methods: {
    handlerClick(){
      console.log(this.styles)
    }
  }
};
</script>