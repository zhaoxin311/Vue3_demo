<template>
  <div id="jichu">
    <router-link to="/jieshao">介绍</router-link> |
    <router-link to="/yingyong">应用and组件实例</router-link> |
    <router-link to="/muban">模板语法</router-link> |
    <router-link to="/jisuan">计算属性和侦听器</router-link> |
    <router-link to="/class">条件渲染</router-link> |
    <router-link to="/dataProperty">列表渲染</router-link> |
    <router-link to="/shijian">事件处理</router-link> |
    <router-link to="/biaodan">表单输入绑定</router-link> |
    <router-link to="/zujian">组件基础</router-link> |
  </div>
  <router-view />
</template>
<script>
export default {
  name: "Jichu",
  components: {},
};
</script>
<style lang="scss" scoped>
#jichu {
  padding: 10px;
  border: 1px solid #42b983;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
