import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHeadphones,
   faLaptop,
   faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {getAll} from '../../store/actions'
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "../Search";
import useStore from "../../hooks/useStore"

const cx = classNames.bind(styles);

function Header() {
   const [state, dispatch] = useStore()
   const defaultImage = require("../../assets/images/avatar.jpg");
   return (
      <div className={cx("header")}>
         <div className={cx("header-top")}>
            <div className={cx("container", "header-top-wrap")}>
               <a className={cx("brand")} href="/">
                  HD Shop
               </a>
              <Search />
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
                   
                     <Link to={"/dtdd"}
                     onClick={() => getAll(dispatch, {category: 'dtdd', page: 1})
                  }
                     >
                     <span>
                        <FontAwesomeIcon icon={faMobileScreen} />
                     </span>
                        Điện thoại</Link>
                  </li>
                  <li className={cx("nav-item")}>
                     <Link to={"/laptop"} 
                         onClick={() => getAll(dispatch, {category: 'laptop', page: 1})}
                     >
                     <span>
                        <FontAwesomeIcon icon={faLaptop} />
                     </span>
                        Laptop</Link>
                  </li>
                  <li className={cx("nav-item")}>
                     <a to={"/phukien"}>
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
