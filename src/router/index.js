import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/programs",
  //   name: "Programs",
  //   component: () => import("../views/Programs.vue"),
  // },
  // {
  //   path: "/programs/:subject",
  //   name: "ProgramSubject",
  //   component: () => import("../views/ProgramSubject.vue"),
  //   props: true,
  // },
  // {
  //   path: "/faq",
  //   name: "FAQ",
  //   component: () => import("../views/FAQ.vue"),
  // },
  // {
  //   path: "/tutors/:id",
  //   name: "TutorProfile",
  //   component: () => import("../views/TutorProfile.vue"),
  //   props: true,
  // },
  // {
  //   path: "/tutors",
  //   name: "Tutors",
  //   component: () => import("../views/Tutors.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
