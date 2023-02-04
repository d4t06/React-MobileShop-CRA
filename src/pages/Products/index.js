import useFetch from "../../hooks/useFetch";
import ProductItem from "../../components/ProductItem";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import products from "src/assets/products";
const cx = classNames.bind(styles);

function Home() {
   const search = useLocation().search;
   const page = new URLSearchParams(search).get("_page") || 1;
   // console.log(products);

   // const { data, loading, error } = useFetch("http://localhost:3000/api/products?_page=" + page);
   // return <h1>Home</h1>;
   return (
      // <div className="row">

      <>
         <div className={cx("product-header")}>
            <p>Tất cả sản phẩm</p>
         </div>
         {products && <ProductItem products={products} page={page} />}
      </>
      // </div>
   );
}

export default Home;
