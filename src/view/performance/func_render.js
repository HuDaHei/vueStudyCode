export default {
    functional: true,
    render: function (createElement, context) {
      // 完全透传任何 attribute、事件监听器、子节点等。
      console.log(context)
      return createElement('div', context.data, context.children)
    }
}