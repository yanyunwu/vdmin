<template>
  <div id="app">
    <component :is="layout">
      <!-- 这里的router-view会被作为默认插槽 因此在layout中用默认插槽安放即可-->
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "no-layout";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
