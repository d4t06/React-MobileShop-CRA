import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Pagination({ totalPage, page = 1 }) {
   var pagesNumElement = [];
   for (var i = 1; i <= totalPage; i++) {
      pagesNumElement.push(
         <li key={i} className={cx("pagination-item")}>
            <Link
               className={i == page ? cx("pagination-item_link", "active") : cx("pagination-item_link")}
               to={"/products?_page=" + i}
            >
               {i}
            </Link>
         </li>
      );
   }
   return (
      <div className={cx("pagination")}>
         <ul className={cx("pagination-list")}>{pagesNumElement}</ul>
      </div>
   );
}

export default Pagination;
