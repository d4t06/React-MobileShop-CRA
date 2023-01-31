import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   const defaultImage = require("../../assets/images/avatar.jpg");
   return (
      <div className={cx("header")}>
         <div className={cx("nav")}>
            <Link className={cx("brand")} to={"/"}>
               <p>HD Shop</p>
            </Link>
            <Link to={"/products"}>Sản phẩm</Link>
            <Link to={"/login"}>Đăng nhập</Link>
         </div>
         <div className={cx("user-cta")}>
            <div className={cx("image-frame")}>
               <img className={cx("user-image")} src={defaultImage} alt="" />
            </div>
         </div>
      </div>
   );
}
export default Header;
