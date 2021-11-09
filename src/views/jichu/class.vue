<template>
  <div class="class">
    <div>
      <strong>v-if vs v-show</strong><br />
      <p>
        v-if
        是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建。
      </p>
      <p>
        v-if 也是惰性的：初始渲染为假，直到条件第一次为真的时候才会渲染条件块
      </p>
      <p>
        v-show 不管初始条件是什么，元素总是会被渲染。只是简单的给予CSS进行切换
      </p>
      <p>
        v-if
        有更高的切换开销，v-show有更高的初始渲染开销。如果需要频繁地切换用v-show
        较好。运行条件很少改变，用v-if比较好
      </p>
    </div>
    <strong>当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级</strong>
    <hr />
  </div>
</template>
<script>
export default {
  name: "Class",
  components: {},
  setup() {
    return {};
  },
};
</script>
