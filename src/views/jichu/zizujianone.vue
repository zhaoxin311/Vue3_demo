<template>
  <div class="zizujianone">
    <h3>{{ title }}</h3>
    <button @click="da()">字体变大</button>
    <button @click="xiao()">字体变小</button>
    <slot></slot>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Zizujianone",
  components: {},
  props: ["title"],
  setup() {
    const count = ref(1);
    return {
      count,
    };
  },
  methods: {
    da() {
      this.$emit("enlargetextda", this.count++);
    },
    xiao() {
      this.$emit("enlargetextxiao", this.count++);
    },
  },
};
</script>
