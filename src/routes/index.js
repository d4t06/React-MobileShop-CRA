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
      path: "/:category/:key",
      component: DetailPage,
   },
   {
      path: "/search/:key",
      component: SearchResultPage,
   },
];

export { publicRoutes };
