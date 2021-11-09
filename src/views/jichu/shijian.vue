<template>
  <div class="shijian">
    <div>
      <strong>多事件处理器</strong>
      <p>事件处理程序中可以有多个方法，这些方法由逗号运算符分隔：</p>
      <!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
      <button @click="one($event), two($event)">Submit</button>
    </div>
    <hr />
    <div>
      <strong>事件修饰符</strong>
      <p>
        使用修饰符时，顺序很重要； 相应的代码会以同样的顺序产生。<br />
        因此，用 v-on:click.prevent.self 会阻止所有的点击，<br />
        而 v-on:click.self.prevent 只会阻止对元素自身的点击。
      </p>
      <!-- 阻止单击事件继续传播 -->
      <a @click.stop="doThis"></a>

      <!-- 提交事件不再重载页面 -->
      <form @submit.prevent="onSubmit"></form>

      <!-- 修饰符可以串联 -->
      <a @click.stop.prevent="doThat"></a>

      <!-- 只有修饰符 -->
      <form @submit.prevent></form>

      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
      <div @click.capture="doThis">...</div>

      <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
      <!-- 即事件不是从内部元素触发的 -->
      <div @click.self="doThat">...</div>
      <!-- 点击事件将只会触发一次 -->
      <a @click.once="doThis"></a>
      <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发   -->
      <!-- 而不会等待 `onScroll` 完成                   -->
      <!-- 这其中包含 `event.preventDefault()` 的情况   -->
      <div @scroll.passive="onScroll">
        这个 .passive 修饰符尤其能够提升移动端的性能。
      </div>
      <p>
        不要把 .passive 和 .prevent 一起使用，因为 .prevent
        将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive
        会告诉浏览器你不想阻止事件的默认行为。
      </p>
    </div>
    <hr />
    <div>
      <strong>按键修饰符</strong>
      <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
      <input @keyup.enter="submit" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Shijian",
  components: {},
  setup() {
    return {};
  },
  methods: {
    one(event) {
      // 第一个事件处理器逻辑...
      alert(event + "one");
    },
    two(event) {
      // 第二个事件处理器逻辑...
      alert(event + "two");
    },
  },
};
</script>
