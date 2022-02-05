<template>
  <v-navigation-drawer :value="value" @input="$emit('input', $event)" app :width="200">
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/women/15.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>管理中心</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <subNavbar></subNavbar>
  </v-navigation-drawer>
</template>

<script>
import subNavbar from "./subNavbar.vue";
export default {
  props: ["value"],
  components: { subNavbar }
};
</script>

<style></style>
