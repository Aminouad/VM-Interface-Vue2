import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import UserAuthentication from "@/views/UserAuthentication.vue";
import CompaniesView from "@/views/Companies/CompaniesView.vue";
import AddCompany from "@/views/Companies/AddCompany.vue";
import VisitsView from "@/views/Visits/VisitsView.vue";
import AddVisit from "@/views/Visits/AddVisit.vue";
import HomeView from "@/views/HomeView.vue";

Vue.use(Router);

const routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "companies",
        name: "Companies",
        component: CompaniesView,
      },
      {
        path: "addCompany",
        name: "AddCompany",
        component: AddCompany,
      },
      {
        path: "addVisit",
        name: "AddVisit",
        component: AddVisit,
      },
      {
        path: "visits",
        name: "Visits",
        component: VisitsView,
      },
    ],
  },
  {
    path: "/authentication",
    name: "authentication",
    component: UserAuthentication,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
