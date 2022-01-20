import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/pages/home/index.vue";

Vue.use(VueRouter);

const staticRoutes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/pages/login/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: staticRoutes
});

export default router;
