

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      tree: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 2",
              children: [
                {
                  label: "三级 3",
                  children: []
                },
                {
                  label: "三级 4",
                  children: []
                }
              ]
            }
          ]
        },
        {
          label: "一级 4",
          children: [
            {
              label: "二级 5",
              children: [
                {
                  label: "三级 6",
                  children: []
                }
              ]
            }
          ]
        }
      ],
      tempDom: null
    };
  },
  render() {
    const treeStruct = (tree = []) => {
      return (
        <div>
          {tree.map(item => {
            return (
              <transition>
              <div
                onClick={this.handerShow}
                draggable="true"
                onDrop={this.drop}
                onDragstart={this.dragstart}
                onDragover={this.dragover}
              >
                {
                  <div>
                    {
                      <div
                        style="padding-left:10px;"
                        data-index={item.label}
                        draggable="true"
                        onDragstart={this.dragstart}
                        onDragover={this.dragover}
                      >
                        {item.label}
                        {item.children.length
                          ? treeStruct(item.children)
                          : null}
                      </div>
                    }
                  </div>
                }
              </div>
              </transition>
            );
          })}
        </div>
      );
    };
    const result = treeStruct(this.tree);
    return <div>{result}</div>;
  },
  methods: {
    drop(ev) {
      ev.target.appendChild(this.tempDom);
    },
    dragstart(ev) {
      this.tempDom = ev.target;
    },
    dragover(ev) {
      ev.preventDefault();
    },
    handerShow(ev) {
      console.log(ev, "click");
    }
  }
};
</script>

<style>
</style>