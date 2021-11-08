<template>
  <div class="home">
    <div class="text1">
      <h4>新特性：响应式数据、methods、watch 和 computed</h4>
      <p>
        要先引入 ref 方法，然后使用它来声明响应式变量。 <br />
        重要的是，这些操作需要在 setup 函数中进行，而且添加 methods，watch 和
        computed 都需要在 setup 中进行。 <br />
        这就跟在vue2中有很大的不同，vue2中我们是使用选项的方式来创建
        data、methods、watch 和 computed 的。
      </p>
    </div>

    <hr />
    <strong>reactive 和 ref</strong>
    <p>
      reactive接受一个普通对象，返回该对象的响应式代理，等同于2.x中的vue.observable()
    </p>
    <p>
      ref 也是接收一个参数并返回一个响应式且可改变的 ref
      对象，一般参数是基础类型，比如数值或字符串等。 <br />
      如果传入的参数是一个对象，将会调用reactive方法进行深层相应转换。 <br />
      ref 对象拥有一个指向内部值的单一属性 .value，即当你要访问它的值时，需要
      .value 拿到它的值。<br />ref 对象拥有一个指向内部值的单一属性
      .value，即当你要访问它的值时，需要 .value 拿到它的值。
    </p>
    <hr />
    <p>count: {{ count }}</p>
    <p>str: {{ str }}</p>
    <p>count2: {{ state.count2 }}</p>
    <p>str2: {{ state.str2 }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="add">增加</button>
    <div class="time">
      <span :title="message"> 鼠标悬停几秒钟查看此处动态绑定的提示信息！ </span>
    </div>
    <div class="time">
      <span>{{ messreverse }}</span>
      <button @click="reverseMessage">翻转</button>
    </div>
    <div class="time">
      <p>v-model 指令能轻松实现表单输入和应用状态之间的双向绑定。</p>
      <span>{{ messageinput }}</span>
      <input type="text" v-model="messageinput" />
    </div>
    <div class="time">
      <p v-if="seen">现在你能看见我了</p>
      <button @click="onShow">{{ show }}</button>
    </div>
    <div class="time">
      <ol>
        <li v-for="todo in todos" :key="todo">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, reactive } from "vue";
// import { getCurrentInstance } from "vue";
// 直接在setup函数中进行定义方法，然后return出去即可。
// 方法里访问count是使用的是.value 方法访问，
// 强调一下，在 setup 中访问已声明的响应式变量时，需要使用 .value 方式访问，包括在 watch 和 computed 中。
export default {
  setup() {
    const count = ref(0); // 声明 count 变量，初始值为 0
    const str = ref("hello"); // 声明 str 变量，初始值为 'hello'

    //引入reactive，同时定义多个变量
    const state = reactive({
      count2: 0,
      str2: "hello world!!",
    });

    // 定义 add 方法
    const add = () => {
      count.value++;
      // state.count.value++ // 报错误
      // state.count2++; // reactive定义的变量，访问变量时不能使用 .value 方式访问。
    };
    // 定义 watch，需要手动引入 watch 方法
    // watch方法有两个参数都是函数。
    // 第一个函数是要监听的值，第二个函数是回调函数。分别表示新值和旧值
    watch(
      () => count.value,
      (val, oldVal) => {
        console.log(`new count: ${val}，old count: ${oldVal}`);
      }
    );
    // 定义computed，同样需要手动引入 computed 方法
    // computed 方法返回计算过的值，最后需要return出去。
    const doubleCount = computed(() => count.value * 2);

    function reverseMessage() {
      console.log(this.messreverse, "mess");
      this.messreverse = this.messreverse.split("").reverse().join("");
    }
    function onShow() {
      console.log(this.seen);
      this.seen === true ? (this.seen = false) : (this.seen = true);
      this.seen === true ? (this.show = "隐藏") : (this.show = "显示");
    }

    return {
      count,
      str,
      state,
      add,
      reverseMessage,
      doubleCount,

      seen: true,
      show: "隐藏",
      onShow,

      messreverse: "Hello Vue.js!",
      messageinput: "messageinput输入框信息",
      message: "You loaded this page on " + new Date().toLocaleString(), //toLocaleString() 方法返回该日期对象的字符串

      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
  created() {
    // `this` 指向 vm 实例
    console.log("count is: " + this.count); // => "count is: 1"
  },
  mounted() {
    setInterval(() => {
      this.state.count2++;
    }, 1000);
  },
};
</script>
<style scoped lang="scss">
.text1 {
  height: 200px;
  width: 800px;
  border: 1px solid red;
  margin: 10px auto;
  p {
    font-weight: bold; //bold：加粗；bloder：深度加粗；lighter：细体；
    font-size: 20px;
    font-style: italic; //italic：斜体；  normal：正常
    color: black;
    opacity: 0.5; //1：默认样式；0：全透明
    text-align: left;
    line-height: 20px;
    border: 1px solid #444;
    margin: 10px;
  }
}
.time {
  width: 90%;
  height: 100px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  border: 5px solid blanchedalmond;
  span {
    font-weight: bold;
    font-size: 18px;
    border: 1px solid red;
    margin: 0px auto;
  }
}
</style>
