import SearchResultPage from '../pages/SearchResultPage'
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from '../pages/Register'
import Unauthorized from '../pages/UnauthorizedPage';

const publicRoutes = [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/unauthorized",
      component: Unauthorized,
   },
   {
      path: "/login",
      component: Login,
   },
   {
      path: "/register",
      component: Register,
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


const privateRoutes = [
   {
      path:'/account',
      role: "R2"
   },
   {
      path:'/create',
      role: "R1"
   }
]
export { publicRoutes, privateRoutes };
