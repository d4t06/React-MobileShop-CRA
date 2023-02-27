import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Products from "../pages/Products";
import Login from "../pages/Login";
import SearchResultPage from '../pages/SearchResultPage'


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
      path: "/search/:key",
      component: SearchResultPage,
   },
   {
      path: "/:category/:key",
      component: DetailPage,
   },

];

export { publicRoutes };
