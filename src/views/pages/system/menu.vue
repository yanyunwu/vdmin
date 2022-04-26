<template>
  <v-card class="ma-1" flat>
    <v-row class="ma-0" align="center">
      <v-col cols="2">
        <v-text-field solo label="Prepend" dense hide-details prepend-inner-icon="mdi-map-marker"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field solo label="Prepend" dense hide-details prepend-inner-icon="mdi-map-marker"></v-text-field>
      </v-col>
      <v-btn text color="blue" @click="show = !show">高级搜索</v-btn>
    </v-row>
    <v-scroll-y-transition hide-on-leave>
      <v-row class="ma-0" align="center" v-if="show">
        <v-col cols="2">
          <v-text-field solo label="Prepend" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field solo label="Prepend" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field solo label="Prepend" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field solo label="Prepend" dense hide-details></v-text-field>
        </v-col>
      </v-row>
    </v-scroll-y-transition>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      :single-expand="false"
      :expanded.sync="expanded"
      show-expand
      item-key="path"
    >
      <template v-slot:top>
        <div class="pa-1">
          <v-btn color="success" small outlined class="mx-1"><v-icon dense left>mdi-plus</v-icon> 新增 </v-btn>
          <v-btn color="primary" small outlined class="mx-1"><v-icon dense left>mdi-delete</v-icon> 删除 </v-btn>
          <v-btn color="error" small outlined class="mx-1"><v-icon dense left>mdi-arrow-expand-all</v-icon> 展开/折叠 </v-btn>
        </div>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>
      <template slot="item.status" slot-scope="{ item }">
        <v-switch :input-value="getStatus(item.status)" color="success" hide-details></v-switch>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      expanded: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "", value: "data-table-expand" },
        { text: "菜单名称", value: "name" },
        { text: "路由地址", value: "path" },
        { text: "组件位置", value: "component" },
        { text: "状态", value: "status" },
        { text: "排序", value: "sort", sortable: true }
      ],
      desserts: [
        {
          name: "系统设置",
          path: "/sys",
          component: "system/menu",
          status: 1,
          sort: 1
        },
        {
          name: "其他设置",
          path: "/sysother",
          component: "system/menu",
          status: 1,
          sort: 2
        }
      ]
    };
  },
  methods: {
    getStatus(status) {
      if (status === 1) return true;
      else return false;
    }
  }
};
</script>

<style scoped></style>
