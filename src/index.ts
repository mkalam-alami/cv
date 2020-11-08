import Vue from "vue";
import VueRouter from "vue-router";

import Portfolio from "./portfolio";
import Parcours from "./parcours";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Portfolio },
  { path: '/parcours', component: Parcours }
]

const router = new VueRouter({
  routes
})

const vue = new Vue({
  router
});

vue.$mount('#app');
