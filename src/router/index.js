import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";
import Address from "../views/StepsForm/Address.vue";
import Delivery from "../views/StepsForm/Delivery.vue";
import Payment from "../views/StepsForm/Payment.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/checkout",
    component: Home,
  },
  {
    path: "/checkout",
    name: "checkout",
    // redirect: "/checkout/address",
    component: Checkout,
    children: [
      {
        path: "",
        redirect: "/checkout/address",
        component: Address,
      },
      {
        path: "address",
        component: Address,
      },
      {
        path: "delivery",
        component: Delivery,
      },
      {
        path: "payment",
        component: Payment,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
