import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeViews.vue";
import JobsViews from "../views/JobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobView from "../views/JobView.vue";
import AddJobView from "../views/AddJobView.vue";
// import EditJobView from "../views/EditJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsViews,
  },
  {
    path: "/jobs/:id",
    name: "job",
    component: JobView,
  },
  {
    path: "/jobs/add",
    name: "add-Job",
    component: AddJobView,
  },
  {
    path: "/jobs/edit/:id",
    name: "edit-Job",
    component: EditJobView,
  },

  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
