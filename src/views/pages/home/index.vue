<template>
  <div>
    <v-container>
      <v-row>首页</v-row>
      <v-row>
        <v-btn color="primary" @click="setColor">按钮</v-btn>
      </v-row>
      <v-row>
        <v-btn color="primary" @click="setColor">按钮</v-btn>
      </v-row>
      <v-row>
        <v-btn color="primary" @click="setColor">按钮</v-btn>
      </v-row>
      <v-row>
        <v-btn color="primary" @click="setColor">按钮</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getRoutes } from "@/api/router";
export default {
  created() {
    this.getRouteList();
  },
  methods: {
    getRouteList() {
      getRoutes()
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setColor() {
      this.$vuetify.theme.themes.light.primary = "#4caf50";
    }
  }
};
</script>

<style></style>
