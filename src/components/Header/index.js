import { headPhoneIcons, laptopIcon, mobileIcons } from '../../assets/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Modal } from '../../components';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
   const [showModal, setShowModal] = useState(false);
   const defaultImage = require('../../assets/images/avatar.jpg');

   return (
      <>
         <div className={cx('header')}>
            <div className={cx('header-banner')}>
               <img
                  src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/02/banner/1200-44-1200x44-8.png"
                  alt=""
               />
            </div>
            <div className={cx('header-top')}>
               <div className={cx('container', 'header-top-wrap')}>
                  <Link className={cx('brand')} to="/">
                     HD Shop
                  </Link>
                  <Search setShowModal={setShowModal} />
                  <div className={cx('user-cta')}>
                     <span className={cx('user-name')}>Nguyễn Hữu Đạt</span>
                     <div className={cx('image-frame')}>
                        <img
                           className={cx('user-image')}
                           src={defaultImage}
                           alt=""
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={cx('header-nav')}>
               <div className={cx('container', 'header-nav-wrap')}>
                  <ul className={cx('nav-list')}>
                     <li className={cx('nav-item')}>
                        <Link to={'/dtdd'}>
                           {mobileIcons}
                           <p className={cx('nav-text')}>Điện thoại</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/laptop'}>
                           {laptopIcon}
                           <p className={cx('nav-text')}>Laptop</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/laptop'}>

                           {headPhoneIcons}
                           <p className={cx('nav-text')}>Phụ kiện</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/login'}>
                           <p className={cx('nav-text')}>Đăng nhập</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/account'}>
                           <p className={cx('nav-text')}>Tài khoản</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/create'}>
                           <p className={cx('nav-text')}>Đăng sản phẩm</p>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         {showModal && (
            <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
         )}
      </>
   );
}
export default Header;
