import classNames from 'classnames/bind';
import styles from './ProductFilter.module.scss';
import { a } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductFilter() {
   return (
      <div className={cx('col', 'col-3')}>
         <div className={cx('product-filter')}>
            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Hãng sản xuất</h2>
               <div className={cx('filter-list')}>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Tất cả</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Apple</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Samsung</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Oppo</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>xiaomi</span>
                     </a>
                  </div>
               </div>
            </div>

            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Mức giá</h2>
               <div className={cx('filter-list')}>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Tất cả</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Dưới 3 triệu</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Từ 3 - 7 triệu</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Từ 7 - 13 triệu</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Trên 13 triệu</span>
                     </a>
                  </div>
               </div>
            </div>

            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Tính năng đặc biệt</h2>
               <div className={cx('filter-list')}>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Bảo mật vân tay</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Chống nước</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Hổ trợ 5G</span>
                     </a>
                  </div>
                  <div className={cx('filter-item')}>
                     <a to={'/ddtd'}>
                        <input type="checkbox" />
                        <span className={cx('label')}>Sạc nhanh</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductFilter;
