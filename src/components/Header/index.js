import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHeadphones,
   faLaptop,
   faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {getAll} from '../../store/actions'
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "../Search";
import useStore from "../../hooks/useStore"

const cx = classNames.bind(styles);

function Header() {
   const [state, dispatch] = useStore()
   const [show, setShow] = useState(false)
   const defaultImage = require("../../assets/images/avatar.jpg");
   const navigate = useNavigate()

   const handleGetAll = async(e, category) => {
      e.preventDefault()
      await getAll(dispatch, {category: category, page: 1})
      navigate(`/${category}`)
   }

   return (
      <>
         <div className={cx("header")}>
            <div className={cx("header-banner")}>
               <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/02/banner/1200-44-1200x44-8.png" alt="" />
            </div>
            <div className={cx("header-top")}>
               <div className={cx("container", "header-top-wrap")}>
                  <a className={cx("brand")} href="/">
                     HD Shop
                  </a>
               <Search setShowOverlay={setShow}/>
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
                     
                        <a href={"/dtdd"}
                        onClick={(e) => handleGetAll(e, "dtdd")}
                     
                        >
                        <span>
                           <FontAwesomeIcon icon={faMobileScreen} />
                        </span>
                           Điện thoại</a>
                     </li>
                     <li className={cx("nav-item")}>
                        <a href={"/laptop"} 
                           onClick={(e) => handleGetAll(e, "laptop")}
                        >
                        <span>
                           <FontAwesomeIcon icon={faLaptop} />
                        </span>
                           Laptop</a>
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
         <div className={cx("overlay", show ? "on" : "")} onClick={() => setShow(false)}></div>
      </>
   );
}
export default Header;
