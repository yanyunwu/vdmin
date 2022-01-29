<template>
  <v-app id="inspire">
    <v-system-bar dark color="primary" app>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app :width="200">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>管理中心</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <subnav></subnav>
    </v-navigation-drawer>

    <v-app-bar app :height="56" :elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span>{{ value }}</span>
      <template v-slot:extension>
        <v-tabs v-model="value" @change="change">
          <v-tab value="123">Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import subnav from "../components/layout/subnav.vue";
export default {
  data: () => ({
    value: "",
    drawer: true
  }),
  components: {
    subnav
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
</script>

<style></style>
