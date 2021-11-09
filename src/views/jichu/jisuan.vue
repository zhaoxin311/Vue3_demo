<template>
  <div class="jisuan">
    <div>
      <strong>计算属性</strong><br />
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span
      ><br />
      <strong>计算属性缓存 vs 方法</strong>
      <p>
        计算属性和方法的最终结果是完全相同的，计算属性是基于他们之间的响应式以来进行缓存的。
        只有在响应式依赖发生改变时才会重新请求，方法总会再次执行函数。
      </p>
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  name: "Jisuan",
  components: {},
  setup() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    //计算属性的getter
    publishedBooksMessage() {
      //'this'指向 VM 实例
      return this.author.books.length > 4 ? "yes" : "no";
    },
  },
};
</script>
