<template>
  <v-app-bar app :height="56" color="cyan" dark flat>
    <v-app-bar-nav-icon @click="$emit('setdrawer')" color="white"></v-app-bar-nav-icon>
    <v-breadcrumbs :items="breadcrumbList" divider="-" class="font-weight-medium"></v-breadcrumbs>
    <template v-slot:extension>
      <v-tabs v-model="selectedTab" color="white" align-with-title>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab class="pa-0" :value="item.path" v-for="item in tabs" :key="item.path" :to="item.path">
          <v-chip close label class="transparent bg-hover-none" @click:close="deleteTab(item)"> {{ item.title }} </v-chip>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    selectedTab: ""
  }),
  methods: {
    ...mapMutations(["deleteTab"])
  },
  computed: {
    tabs() {
      return this.$store.state.routeList.TheNavTabs;
    },
    breadcrumbList() {
      return this.$store.state.routeList.breadcrumbList;
    }
  }
};
</script>
