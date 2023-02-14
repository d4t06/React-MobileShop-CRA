import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);



function Pagination({ totalPage, page = 1 }) {   
   return (
      <div className={cx("pagination")}>
         <button className={cx("see-more-product")}>Xem thêm sản phẩm {totalPage}</button>
      </div>
   );
}

export default Pagination;
