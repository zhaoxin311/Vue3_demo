<template>
  <div class="zujian">
    <strong>子组件的复用</strong>
    <p>
      当点击按钮时，每个组件都会各自独立维护它的
      count。因为你每用一次组件，就会有一个它的新实例被创建。
    </p>
    <Zizujian></Zizujian>
    <Zizujian></Zizujian>
    <Zizujian></Zizujian>
    <hr />
    <strong>通过 Prop 向子组件传递数据</strong><br />
    在父组件中进行输入：<input type="text" name="" id="" v-model="contact" />
    <p>在父组件中输入的内容为：{{ contact }}</p>
    <Zizujiantwo :contact="contact"></Zizujiantwo>
  </div>
</template>
<script>
import Zizujian from "./zizujian.vue";
import Zizujiantwo from "./zizujiantwo.vue";
import { ref } from "vue";
export default {
  name: "Zujian",
  components: { Zizujian, Zizujiantwo },
  setup() {
    const contact = ref("");
    return {
      contact,
    };
  },
};
</script>
