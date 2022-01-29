<template>
  <v-list dense>
    <template v-for="item in routeList">
      <!-- 父级路由 -->
      <template v-if="item.children && item.children.length">
        <v-list-group :key="item.meta.title">
          <template v-slot:prependIcon>
            <v-icon v-text="item.meta.icon" small></v-icon>
          </template>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-slot:appendIcon>
            <v-icon small>fas fa-sort-down</v-icon>
          </template>

          <v-list-item v-for="child in item.children" :key="child.meta.title" link>
            <v-list-item-icon>
              <v-icon v-text="child.meta.icon" small></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="child.meta.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>

      <!-- 非父级路由 -->
      <template v-else>
        <v-list-item :key="item.meta.title" link>
          <v-list-item-icon>
            <v-icon small>{{ item.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  computed: {
    routeList() {
      return this.$store.state.routeList.routeList;
    }
  }
};
</script>

<style></style>
