<template>
  <div class="biaodan">
    <strong>文本(Text)</strong>
    <input v-model="text" placeholder="edit me" />
    <p>Message:{{ text }}</p>
    <hr />
    <strong>多行文本(Textarea)</strong>
    <p>在文本区域插值不起作用，应该使用 v-model 来代替。</p>
    <span>message is : {{ Textarea }}</span
    ><br />
    <textarea v-model="Textarea" cols="20" rows="3"></textarea>
    <hr />
    <strong>复选框(Checkbox)</strong>
    <input type="checkbox" id="checkbox" v-model="checkbox" />
    <label for="">{{ checkbox }}</label>
    <hr />
    <strong> <i style="color: red">值绑定</i> --复选框(Checkbox)</strong>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkbox1"
      true-value="yes"
      false-value="no"
    />
    <label for="">{{ checkbox1 }}</label>
    <hr />
    <strong>多个复选框，绑定同一个数组</strong>
    <input type="checkbox" id="Jack" value="Jack" v-model="checkboxnames" />
    <label for="Jack">Jack</label>
    <input type="checkbox" id="John" value="John" v-model="checkboxnames" />
    <label for="John">John</label>
    <input type="checkbox" id="Mike" value="Mike" v-model="checkboxnames" />
    <label for="Mike">Mike</label>
    <br />
    <p>Checked names: {{ checkboxnames }}</p>
    <hr />
    <strong>单选框(Radio)</strong>
    <input type="radio" id="nan" value="男" v-model="sex" />
    <label for="nan">男</label>
    <input type="radio" id="nv" value="女" v-model="sex" />
    <label for="nv">女</label>
    <p>Checked sex : {{ sex }}</p>
    <hr />
    <strong>选择框(Select)</strong>
    <select name="" id="" v-model="select">
      <option disabled value="">Please select one</option>
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option>
    </select>
    <span>Checked option : {{ select }}</span>
    <hr />
    <strong>选择框(Select),多选时绑定一个数组</strong>
    <select name="" id="" v-model="selected" multiple>
      <option disabled value="">Please select one</option>
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option>
    </select>
    <span>Checked option : {{ selected }}</span>
    <hr />
    <strong>用v-for渲染的动态选项</strong>
    <select name="" id="" v-model="selectfor">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.text }}
      </option>
    </select>
    <span>selected option :{{ selectfor }}</span>
    <hr />
    <strong>修饰符 (.lazy)</strong>
    <p>在“change”时而非“input”时更新 按回车键或者离开input时触发</p>
    <input v-model.lazy="msg" />
    <span>输入的文本为{{ msg }}</span>
    <hr />
    <strong>修饰符 (.number)</strong>
    <p>
      自动将用户的输入值转为数值类型 <br />
      在 type="number" 时，HTML 输入元素的值也总会返回字符串。
    </p>
    <input v-model.number="age" type="number" />
    <span>输入的内容为：{{ age }}</span>
    <hr />
    <strong>修饰符 (.trim)</strong>
    <p>自动过滤用户输入的首尾空白字符</p>
    <input v-model.trim="message" />
    <span>输入的内容为：{{ message }}</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Biaodan",
  components: {},
  setup() {
    const text = ref("text");
    const Textarea = ref("textarea");
    const checkbox = ref("false");
    const checkbox1 = ref("no");
    const checkboxnames = ref([]);
    const sex = ref("");
    const select = ref("");
    const selected = ref([]);
    const selectfor = ref("");
    const msg = ref("");
    const age = ref("");
    const message = ref("");
    return {
      text,
      Textarea,
      checkbox,
      checkbox1,
      checkboxnames,
      sex,
      select,
      selected,
      selectfor,
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      msg,
      age,
      message,
    };
  },
};
</script>
