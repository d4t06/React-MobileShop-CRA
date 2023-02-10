import useFetch from "../../hooks/useFetch";
import ProductItem from "../../components/ProductItem";
import { useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import Pagination from "../../components/Pagination";
const cx = classNames.bind(styles);

function Home() {
   // const search = useLocation().search;
   // const page = new URLSearchParams(search).get("_page") || 1;
   const {category} = useParams();

   // console.log(products);

   const { data, loading, error } = useFetch("http://localhost:3000/products/" + category);
   // return <h1>Home</h1>;
   return (
      // <div className="row">

      <>
         <div className={cx("product-header")}>
            <p>Tất cả sản phẩm</p>
         </div>
         {data && <ProductItem data={data} category={category}/>}
         {/* <Pagination totalPage={3} /> */}
      </>
      // </div>
   );
}

export default Home;
