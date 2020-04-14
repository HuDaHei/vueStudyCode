export default {
    functional: true,
    inject:['test'],
    render: function (createElement, context) {
      // 完全透传任何 attribute、事件监听器、子节点等。
      const {scopedSlots}= context;
      console.log(scopedSlots.item(),"scopedSlots")
      console.log(context,"context")
      return createElement('div', context.data, context.children)
    }
}