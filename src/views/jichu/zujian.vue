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
    <hr />
    <strong>控制文本字体大小</strong>
    <p>{一共点击多少次} 是通过插槽分发内容</p>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <Zizujianone
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :number="number"
        @enlargetextda="da"
        @enlargetextxiao="xiao"
        >一共点击{{ number }}次</Zizujianone
      >
      <hr />
    </div>
  </div>
</template>
<script>
import Zizujian from "./zizujian.vue";
import Zizujiantwo from "./zizujiantwo.vue";
import Zizujianone from "./zizujianone.vue";
import { ref } from "vue";
export default {
  name: "Zujian",
  components: { Zizujian, Zizujiantwo, Zizujianone },
  setup() {
    const contact = ref("");
    const postFontSize = ref(1);
    // const number = ref(0);
    return {
      contact,
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize,
      // number,
    };
  },
  methods: {
    da(data) {
      this.number = data;
      this.postFontSize += 0.1;
    },
    xiao(data) {
      this.number = data;
      this.postFontSize -= 0.1;
    },
  },
};
</script>
