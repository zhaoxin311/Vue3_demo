<template>
  <div class="yingyong">
    <h3>
      不要在选项 property 或回调上使用箭头函数，<br />
      比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue =>
      this.myMethod())。<br />
      因为箭头函数并没有 this，this
      会作为变量一直向上级词法作用域查找，直至找到为止，<br />
      经常导致 Uncaught TypeError: Cannot read property of undefined <br />
      或 Uncaught TypeError: this.myMethod is not a function 之类的错误。
    </h3>
  </div>
</template>
<script>
export default {
  name: "Yingyong",
  components: {},
};
</script>
