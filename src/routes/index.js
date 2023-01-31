import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";

const publicRoutes = [
   {
      path: "products",
      component: Home,
   },
   {
      path: "/product?_page",
      component: Home,
   },
];

export { publicRoutes };
