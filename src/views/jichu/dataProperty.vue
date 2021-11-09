<template>
  <div class="dataProperty">
    <div>
      <strong>用 v-for 把一个数组对应为一组元素</strong><br />
      <ul>
        <li v-for="(item, index) of items" :key="item">
          {{ parentMessage }}-{{ index }}--{{ item.message }}
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="(value, name, index) in myObject" :key="value">
          {{ index }}、{{ name }}：{{ value }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <strong>数组变更方法</strong>
      <p>push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。</p>
      <p>
        pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
      </p>
      <p>
        shift()
        方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
      </p>
      <p>
        unshift()
        方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
      </p>
      <p>
        plice()
        方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
      </p>
      <p>sort() 方法用原地算法对数组的元素进行排序，并返回数组</p>
      <p>reverse() 方法将数组中元素的位置颠倒，并返回该数组。</p>
    </div>
    <hr />
    <div>
      <strong>显示过滤/排序后的结果</strong><br />
      <span v-for="n in 10" :key="n">{{ n }} </span><br />
      过滤/排序前：
      <p>{{ numbers }}</p>
      过滤/排序后：
      <span v-for="n in evenNumbers" :key="n">{{ n }}、</span>
      <hr />
      <strong>v-for双层嵌套 二维数组</strong>
      <ul v-for="numbers in sets" :key="numbers">
        <li v-for="n in event(numbers)" :key="n">
          {{ n }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <strong>在 template中使用 v-for</strong>
      <ul>
        <template v-for="item in items" :key="item.message">
          <li>{{ item.message }}</li>
          <li class="divider" role="presentation">{{ item.message }}</li>
        </template>
      </ul>
    </div>

    <hr />
    <div>
      <form @submit.prevent="addNewTodo">
        <label for="new-todo">添加TODO列表</label>
        <input
          v-model="newTodoContent"
          type="text"
          id="new-todo"
          placeholder="请输入列表内容"
        />
        <button>添加</button>
      </form>
      <ul>
        <li>
          <todoItem
            v-for="(todo, index) in todos"
            :key="todo.id"
            :title="todo.title"
            @remove="todos.splice(index, 1)"
          >
          </todoItem>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import todoItem from "./todoItem.vue";
export default {
  name: "dataProperty",
  components: { todoItem },
  setup() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],

      //todo
      newTodoContent: "",
      todos: [
        { id: 1, title: "吃饭饭" },
        { id: 2, title: "睡觉觉" },
        { id: 3, title: "打豆豆" },
      ],
      nextTodoId: 4,
    };
  },
  //计算属性
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
  methods: {
    event(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoContent,
      });
      this.newTodoContent = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.divider {
  width: 100px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
