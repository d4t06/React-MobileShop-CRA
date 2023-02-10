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
      path: "/:category",
      component: Products,
   },
   {
      path: "/:category/:key",
      component: Products,
   },
   {
      path: "/products/:key",
      component: DetailPage,
   },
   {
      path: "/product?_page=",
      component: Products,
   },

   
];

export { publicRoutes };
