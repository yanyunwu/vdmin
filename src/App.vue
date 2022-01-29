<template>
  <v-app>
    <component :is="layout">
      <keep-alive><router-view /></keep-alive>
      <!-- 这里的router-view会被作为默认插槽 因此在layout中用默认插槽安放即可-->
    </component>
  </v-app>
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
