import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./DetailPage.module.scss";
import ProductDetailItem from "../../components/DetailProductItem";

const cx = classNames.bind(styles);

function DetailPage() {
   const { key } = useParams();

   const product = ''; // products.find((item) => item.data.key == key);
   // console.log(product);

   return <h1>Detail product item</h1>;
}
export default DetailPage;
