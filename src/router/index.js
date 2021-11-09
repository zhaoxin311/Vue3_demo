import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/jichu",
    name: "Jichu",
    component: () => import("../views/Jichu.vue"),
    children: [
      {
        path: "/jieshao", //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: "Jieshao",
        component: () => import("../views/jichu/jieshao.vue"),
      },
      {
        path: "/yingyong",
        name: "Yingyong",
        component: () => import("../views/jichu/yingyong.vue"),
      },
      {
        path: "/dataProperty",
        name: "DataProperty",
        component: () => import("../views/jichu/dataProperty.vue"),
      },
      {
        path: "/jisuan",
        name: "Jisuan",
        component: () => import("../views/jichu/jisuan.vue"),
      },
      {
        path: "/class",
        name: "Class",
        component: () => import("../views/jichu/class.vue"),
      },
      {
        path: "/muban",
        name: "Muban",
        component: () => import("../views/jichu/muban.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
