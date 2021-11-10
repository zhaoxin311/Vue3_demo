<template>
  <div class="zujian">
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Zujian",
  components: {},
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
