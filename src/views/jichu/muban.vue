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
    <div>
      <strong>指令---参数</strong><br />
      <p>
        一个例子是：v-bind 指令可以用于响应式地更新 HTML attribute：
        {{ bindHtml }}
        href是参数，告知v-bind 指令将该元素的href与表达式URL的值绑定
      </p>
      <p>
        另一个例子是：v-on 指令，它用于监听 DOM 事件：
        {{ onHtml }}在这里的参数是监听的事件名。
      </p>
    </div>
    <hr />
    <div>
      <strong>指令---动态参数</strong><br />
      <p>可以在指令参数中使用JavaScript表达式，方法是用方括号括起来</p>
      <p>{{ dongCan }}</p>
      <p>
        attributeName 会被作为一个 JavaScript
        表达式进行动态求值，求得的值将会作为最终的参数来使用
      </p>
    </div>
    <hr />
    <div>
      <strong>指令---修饰符</strong><br />
      <p>
        修饰符 (modifier) 是以半角句号 .
        指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
      </p>
      <p>
        .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
      </p>
    </div>
    <hr />
    <div>
      <strong>缩写</strong><br />
      <p>v-bind缩写为 ：冒号</p>
      <p>v-on缩写为 @ 符号</p>
    </div>
    <hr />
    <div>
      <strong>缩写</strong><br />
      <p></p>
      <p></p>
    </div>
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
      bindHtml: '<a v-bind:href="url"> ... </a>',
      onHtml: '<a v-on:click="doSomething"> ... </a>',
      dongCan:
        '<a v-bind:[attributeName]="url"> ... </a><a v-on:[eventName]="doSomething"> ... </a>',
    };
  },
};
</script>
