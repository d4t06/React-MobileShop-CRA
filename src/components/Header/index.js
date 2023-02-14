import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleCheck,
   faHeadphones,
   faLaptop,
   faMobile,
   faMobileAndroid,
   faMobileScreen,
   faSearch,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   const defaultImage = require("../../assets/images/avatar.jpg");
   return (
      <div className={cx("header")}>
         <div className={cx("header-top")}>
            <div className={cx("container", "header-top-wrap")}>
               <a className={cx("brand")} href="/">
                  HD Shop
               </a>
               <div className={cx("search-wrap")}>
                  <form action="#" className={cx("search-form")}>
                     <input className={cx("search-input")} type="text" placeholder="Hôm nay bạn muốn tìm gì..." />
                     <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faSearch} />
                     </button>
                  </form>
               </div>
               <div className={cx("user-cta")}>
                  <span className={cx("user-name")}>Nguyễn Hữu Đạt</span>
                  <div className={cx("image-frame")}>
                     <img className={cx("user-image")} src={defaultImage} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className={cx("header-nav")}>
            <div className={cx("container", "header-nav-wrap")}>
               <ul className={cx("nav-list")}>
                  <li className={cx("nav-item")}>
                   
                     <a href={"/dtdd"}>
                     <span>
                        <FontAwesomeIcon icon={faMobileScreen} />
                     </span>
                        Điện thoại</a>
                  </li>
                  <li className={cx("nav-item")}>
                     <a href={"/laptop"}>
                     <span>
                        <FontAwesomeIcon icon={faLaptop} />
                     </span>
                        Laptop</a>
                  </li>
                  <li className={cx("nav-item")}>
                     <a href={"/phukien"}>
                     <span>
                        <FontAwesomeIcon icon={faHeadphones} />
                     </span>
                        Phụ kiện</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Header;
