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
    <v-spacer></v-spacer>
    <v-btn icon large><v-icon>mdi-magnify</v-icon></v-btn>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on"><v-avatar color="primary" size="36"></v-avatar><span class="pl-2">管理员</span></v-btn>
      </template>
      <v-list dense class="pa-0 py-1">
        <v-list-item class="pa-0 justify-center">
          <v-btn text class="body-2"><v-icon size="24">mdi-account</v-icon>个人信息</v-btn>
        </v-list-item>
        <v-list-item class="pa-0 justify-center">
          <v-btn text class="body-2"><v-icon size="24">mdi-lock</v-icon>修改密码</v-btn>
        </v-list-item>
        <v-list-item class="pa-0 justify-center">
          <v-btn text class="body-2"><v-icon size="24">mdi-logout</v-icon>退出登录</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
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
