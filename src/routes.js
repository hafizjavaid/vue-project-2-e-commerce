import ProductList from "./components/ProductList.vue";
import Details from "./components/Details.vue";
import Cart from "./components/Cart/Cart.vue";
import Default from "./components/Default.vue";

export const routes = [
  {
    path: "/",
    component: ProductList
  },
  {
    path: "/details",
    component: Details
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "*",
    component: Default
  }
];
