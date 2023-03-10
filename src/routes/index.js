import SearchResultPage from '../pages/SearchResultPage'
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from '../pages/Register'


const publicRoutes = [
   {
      path: "/",
      component: Home,
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
      component: <h1>Account page</h1>
   },
   {
      path:'/create',
      component: <h1>Create page</h1>
   }
]
export { publicRoutes, privateRoutes };
