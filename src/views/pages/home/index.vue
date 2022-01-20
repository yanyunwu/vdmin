<template>
  <div>首页</div>
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
    }
  }
};
</script>

<style></style>
