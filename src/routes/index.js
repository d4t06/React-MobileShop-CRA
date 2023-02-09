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
      path: "/dtdd",
      component: Products,
   },
   {
      path: "/laptop",
      component: Products,
   },
   {
      path: "/phukien",
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

   {
      path: "/login",
      component: Login,
   },
];

export { publicRoutes };
