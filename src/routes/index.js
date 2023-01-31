import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Products from "../pages/Products";
import Login from "../pages/Login";

const publicRoutes = [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/products",
      component: Products,
   },
   {
      path: "/product?_page=",
      component: Products,
   },
   {
      path: "/login",
      component: Login,
   },

   // {
   //    path: "/products/:id",
   //    component: DetailPage,
   // },
];

export { publicRoutes };
