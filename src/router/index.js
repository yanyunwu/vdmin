import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { getRoutes } from "../api/router";

Vue.use(VueRouter);

const staticRoutes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home"
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
// 获取路由列表
const routeList = store.state.routeList.routeList;

// 加载路由组件
const loadview = (component) => {
  if (!component) return () => import(`@/views/components/noComponent.vue`);
  // return () => import(`@/views/pages/${component}`);
  return () => Promise.resolve(require(`@/views/pages/${component}`).default);
};

// 处理路由信息
const handleRoute = (route) => {
  if (route.meta && !route.meta.layout) route.meta.layout = "base-layout";
  route.component = loadview(route.component);
  return route;
};

// 添加路由
const addRoutes = () => {
  for (let item of routeList) {
    if (item.children) {
      item.children.forEach((item) => {
        router.addRoute(handleRoute(item));
      });
    } else {
      router.addRoute(handleRoute(item));
    }
  }
};

addRoutes();

router.beforeEach((to, from, next) => {
  if (!routeList.length) {
    addRoutes();
  }
  next();
});

export default router;
