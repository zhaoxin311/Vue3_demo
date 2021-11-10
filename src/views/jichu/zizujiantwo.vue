<template>
  <div class="zujian">
    在子组件中展示的内容为：
    <span>{{ contact }}</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Zujian",
  components: {},
  // props: {
  //   contact: String,
  // },  //两种写法均可
  props: ["contact"],
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
