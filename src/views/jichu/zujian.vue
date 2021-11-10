<template>
  <div class="zujian">
    <strong>子组件的复用</strong>
    <p>
      当点击按钮时，每个组件都会各自独立维护它的
      count。因为你每用一次组件，就会有一个它的新实例被创建。
    </p>
    <Zizujianzero></Zizujianzero>
    <Zizujianzero></Zizujianzero>
    <Zizujianzero></Zizujianzero>
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
      <strong>动态组件</strong>
      <p>不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：</p>
      <p>
        currentTabComponent 可以包括 已注册组件的名字（第一个例子），或
        一个组件的选项对象（第二个例子 但是未实现 看官网）
      </p>
      <div class="demo">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </div>
      <hr />
      <hr />
      <div class="demo">
        <p>还没有实现</p>
        <button
          v-for="tabs in tabss"
          :key="tabs"
          :class="['tab-button', { active: currentTabs === tabs }]"
          @click="currentTabs = tabs"
        >
          {{ tabs.name }}
        </button>
        <component v-bind:is="currentTabs.component" class="tab"></component>
      </div>
    </div>
  </div>
</template>
<script>
import Zizujianzero from "./zizujianzero.vue";
import Zizujiantwo from "./zizujiantwo.vue";
import Zizujianone from "./zizujianone.vue";
import { ref } from "vue";
export default {
  name: "Zujian",
  components: { Zizujianzero, Zizujiantwo, Zizujianone },
  setup() {
    const contact = ref("");
    const postFontSize = ref(1);
    // const number = ref(0);
    const currentTab = ref("zero");
    const currentTabs = ref("");
    return {
      contact,
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize,
      // number,
      tabs: ["zero", "one", "two"],
      currentTab,
      tabss: [
        {
          name: "Home",
          component: {
            template: `<div class="demo-tab">Home component</div>`,
          },
        },
        {
          name: "Posts",
          component: {
            template: `<div class="demo-tab">P我问问osts component</div>`,
          },
        },
        {
          name: "Archive",
          component: {
            template: `<div class="demo-tab">Archive component</div>`,
          },
        },
      ],
      currentTabs,
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
  computed: {
    currentTabComponent() {
      return "Zizujian" + this.currentTab;
    },
  },
};
</script>
<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
