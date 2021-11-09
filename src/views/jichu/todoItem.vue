<template>
  <div>
    <li>
      {{ title }}
      <button @click="$emit('remove')">移除</button>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    title: [String, Number],
  },
  emits: ["remove"],
};
</script>
