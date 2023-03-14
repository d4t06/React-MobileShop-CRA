import { headPhoneIcons, laptopIcon, mobileIcons } from '../../assets/icons';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Modal } from '../../components';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
   const [auth] = useAuth();
   const [showModal, setShowModal] = useState(false);
   const defaultImage = require('../../assets/images/avatar.jpg');

   // console.log(auth)

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
                     {auth?.username && (
                        <>
                           <span className={cx('user-name')}>
                             { auth.displayname || auth.username }
                           </span>
                           <Link to="/account" className={cx('image-frame')}>
                              <img
                                 className={cx('user-image')}
                                 src={auth.avatar || defaultImage}
                                 alt=""
                              />
                           </Link>
                        </>
                     )}
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
                        <Link to={'/admin'}>
                           {headPhoneIcons}
                           <p className={cx('nav-text')}>admin</p>
                        </Link>
                     </li>
                     <li className={cx('nav-item')}>
                        <Link to={'/create'}>
                           {headPhoneIcons}
                           <p className={cx('nav-text')}>create</p>
                        </Link>
                     </li>
                  </ul>
                  {!auth?.username && (
                     <ul className={cx('nav-list', 'left-nav-list')}>
                        <li className={cx('nav-item')}>
                           <Link to={'/login'}>
                              <p className={cx('nav-text')}>Đăng nhập</p>
                           </Link>
                        </li>
                        <li className={cx('nav-item')}>
                           <Link to={'/register'}>
                              <p className={cx('nav-text')}>Đăng Ký</p>
                           </Link>
                        </li>
                     </ul>
                  )}
                  {auth.role === 'R1' && (
                     <ul className={cx('nav-list')}>
                        <li className={cx('nav-item')}>
                           <Link to={'/create'}>
                              {mobileIcons}
                              <p className={cx('nav-text')}>Thêm sản phẩm</p>
                           </Link>
                        </li>
                        <li className={cx('nav-item')}>
                           <Link to={'/admin'}>
                              {mobileIcons}
                              <p className={cx('nav-text')}>Trang quản lí</p>
                           </Link>
                        </li>
                     </ul>
                  )}
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
