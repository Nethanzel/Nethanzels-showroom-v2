import Vue from "vue";
import VueRouter from "vue-router";

import Timeline from "../views/Timeline.vue";
import Market from "../views/Market.vue";
import notFound from "../views/notFound.vue";
import Home from "../views/Mixer.vue";
import projectsAll from "../views/projectsAll.vue";
import Contact from "../components/Contact.vue";
import projectsOne from "../views/projectsOne.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  },
  {
    path: "/market",
    name: "Market",
    component: Market
  },
  {
    path: "/projects",
    name: "Projects",
    component: projectsAll
  },
  {
    path: "/projects/:query",
    name: "Project",
    component: projectsOne
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "*",
    name: "notFound",
    component: notFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth"
      };
    }
  }
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  // ================================================================================
  if (to.hash == "#about" || to.hash == "#projects" || to.hash == "#skills") {
    return next();
  } else {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
  // ================================================================================
  next();
});

export default router;
