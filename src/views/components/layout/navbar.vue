<template>
  <v-app-bar app :height="56" :elevation="1">
    <v-app-bar-nav-icon @click="$emit('setdrawer')"></v-app-bar-nav-icon>
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>

    <template v-slot:extension>
      <v-tabs v-model="value">
        <v-tab value="123">Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ]
  })
};
</script>

<style></style>
