import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CategoryPage from "../components/Category/CategoryPage.vue";
import ProductPage from "../components/Product/ProductPage.vue";
import CatelogPage from "../components/Catelog/CatelogPage.vue";
import SearchPage from "../views/SearchPage.vue";
import TestT from "../components/Category/Test/TestT.vue";
import SupplierForm from '../views/SupplierForm.vue';


const routes = [
  {
    path: "/TestT",
    name: "TestT",
    component: TestT,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/CategoryPage",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/ProductPage/:productId",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/CatelogPage",
    name: "CatelogPage",
    component: CatelogPage,
  },
  {
    path: "/SearchPage",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/SupplierForm",
    name: "SupplierForm",
    component: SupplierForm,
  },
  
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
