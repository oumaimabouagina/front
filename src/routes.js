import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    
    
    routes: [
      {
        // vue ==> app.vue
        path: "/",
        name: "home",
        component: Home,
        props: true
      },
  
     
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/About.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/projet",
        name: "projet",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Projet.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/contact",
        name: "contact",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Contact.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/categorie",
        name: "categorie",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Categorie.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/medical",
        name: "medical",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Medical.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/design",
        name: "design",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Design.vue"),
        // meta: { requiresAuth: true }
      },

      {
        path: "/education",
        name: "education",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Education.vue"),
        // meta: { requiresAuth: true }
      },
    
      {
        path: "/technologie",
        name: "technologie",
        component: () =>
          import(/* webpackChunkName: "User" */ "./components/Technologie.vue"),
        // meta: { requiresAuth: true }
      },
    
     
     
      {
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () =>
          import(/* webpackChunkName: "NotFound" */
          "./components/NotFoud.vue")
      }
    ]
  });

  export default router;