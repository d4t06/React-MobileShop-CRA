import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import products from "src/assets/products";
import styles from "./DetailPage.module.scss";
import ProductDetailItem from "../../components/DetailProductItem";

const cx = classNames.bind(styles);

function DetailPage() {
   const { key } = useParams();
   const product = products.find((item) => item.data.key == key);
   // console.log(product);

   return product && <ProductDetailItem data={product} />;
}
export default DetailPage;
