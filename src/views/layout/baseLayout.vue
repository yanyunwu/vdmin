<template>
  <v-app id="inspire">
    <v-system-bar dark color="primary" app>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <sub-drawer v-model="drawer"></sub-drawer>
    <navbar @setdrawer="drawer = !drawer"></navbar>

    <v-main>
      <v-scroll-x-transition leave-absolute>
        <slot></slot>
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "../components/layout/navbar.vue";
import subDrawer from "../components/layout/subDrawer.vue";
export default {
  data: () => ({
    drawer: true
  }),
  components: {
    navbar,
    subDrawer
  }
};
</script>

<style></style>
