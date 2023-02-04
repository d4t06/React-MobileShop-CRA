import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import products from "src/assets/products";
import styles from "./DetailPage.module.scss";
import ProductDetailItem from "../../components/DetailProductItem";

const cx = classNames.bind(styles);

function DetailPage() {
   const { key } = useParams();
   const product = products.filter((item) => item.data.key == key);

   return product && <ProductDetailItem data={product[0]} />;
}
export default DetailPage;
