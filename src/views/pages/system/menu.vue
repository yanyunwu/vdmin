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
          <v-text-field solo label="菜单名称" dense hide-details></v-text-field>
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
      :loading="loading"
      loading-text="312312"
    >
      <template v-slot:top>
        <div class="pa-1">
          <v-btn color="success" small outlined class="mx-1" @click="dialog = true"><v-icon dense left>mdi-plus</v-icon> 新增 </v-btn>
          <v-btn color="primary" small outlined class="mx-1"><v-icon dense left>mdi-delete</v-icon> 删除 </v-btn>
          <v-btn color="error" small outlined class="mx-1"><v-icon dense left>mdi-arrow-expand-all</v-icon> 展开/折叠 </v-btn>
        </div>
      </template>
      <template v-slot:expanded-item="{}">
        <td></td>
        <td>
          <div>123</div>
          <div>11</div>
        </td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </template>

      <template slot="item.status" slot-scope="{ item }">
        <v-switch :input-value="getStatus(item.status)" color="success" hide-details></v-switch>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <menu-add @close-dialog="dialog = false"></menu-add>
    </v-dialog>
  </v-card>
</template>

<script>
import menuAdd from "./modules/menu-add.vue";
export default {
  data() {
    return {
      loading: false,
      show: false,
      expanded: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "", value: "data-table-expand", width: 50 },
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
      ],
      dialog: false
    };
  },
  methods: {
    getStatus(status) {
      if (status === 1) return true;
      else return false;
    }
  },
  created() {
    this.loading = true;
    let timer = setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: {
    menuAdd
  }
};
</script>

<style scoped></style>
