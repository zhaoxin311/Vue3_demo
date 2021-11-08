<template>
  <div class="muban">
    <div>
      <strong>插值---文本</strong><br />
      <input type="text" v-model="msg" /><br />
      <span>Message会更新: {{ msg }}</span
      ><br />
      <span v-once>使用了 v-once 的Message不更新: {{ msg }}</span>
      <p>
        使用 v-once
        指令，能执行一次性插值，当数据发生改变时，插值初的内容不会更新
      </p>
    </div>
    <hr />
    <div>
      <strong>插值---原始HTML</strong><br />
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
    <hr />
    <div><strong>指令---参数</strong><br /></div>
    <hr />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("hello");
    // const rawHtml = ref("hello");
    return {
      msg,
      rawHtml: '<span style="color: red">This should be red.</span>',
    };
  },
};
</script>
