import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import AIGC from "./components/AIGC.vue";
import Rank from "./components/Rank.vue";
import Talk from "./components/Talk.vue";
import News from "./components/News.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/aigc", component: AIGC },
    { path: "/RANK", component: Rank },
    { path: "/Talk", component: Talk },
    { path: "/news", component: News },
    { path: "/Login", component: Login },
    { path: "/Register", component: Register },

  ],
});
export default router;
