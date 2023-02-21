import classNames from 'classnames/bind';
import moneyFormat from '../../utils/moneyFormat.js';
import styles from './DetailProductItem.module.scss';
import {ImageSlider, ProductRate, ProductItem} from '../../components';
import { useEffect, useState, Fragment } from 'react';

const cx = classNames.bind(styles);

function DetailProductItem({ data }) {

   console.log("data DetailProductItem = ", data);
   // return <h1>Detai page</h1>
   // const [isExpand, setIsExpand] = useState(false)
   const paramsIndex = [
      'Màn hình',
      'Hệ điều hành',
      'Camera sau',
      'Camera trước',
      'CPU',
      'Bộ nhớ Ram',
      'Dung lượng',
      'Sim',
      'Pin',
   ];
   let params = data ? data.data.params : '';
   params = params
      .slice(0, params.length - 5)
      .replaceAll('//', ', ')
      .split('*and*');

   // useEffect(() => {
   //    const contentEl = document.querySelector(`.${cx('content')}`);
   //    const moreContentBtn = document.querySelector(`.${cx('more-detail-btn')}`);
   //    let isExpand = false;
   //    moreContentBtn.addEventListener('click', () => {
   //       contentEl.classList.toggle('expand');
   //       isExpand = !isExpand;
   //       moreContentBtn.innerText = isExpand ? 'Thu gọn' : 'Mở rộng';
   //       // moreContentBtn.scrollIntoView({behavior: "smooth", block: "center"})
   //    });
   // }, []);
   return (
         <>
      { data && 
      <>
            <div className={cx('product-header')}>
               <p>
                  Điện thoại
                  {}
               </p>
               <div className={cx('header-box')}>
                  <span>
                     <i className="fa-solid fa-star star"></i> <i className="fa-solid fa-star star"></i>{' '}
                     <i className="fa-solid fa-star star"></i> <i className="fa-solid fa-star star"></i>{' '}
                     <i className="fa-solid fa-star star black"></i>
                  </span>
                  <span className={cx('rate-count')}>49 đánh giá</span>
               </div>
            </div>
            <div className={cx('row', 'main-contain')}>
               <div className={cx('col-large col-7', 'box_left')}>
                  {<ImageSlider data={data.data.images} />} 
                  <div className={cx('detail-image')}>
                  <img src={`${data.data.param_image}`} alt="" /> 
                  </div>
               </div>
               <div className={cx('col-large col-5', 'box_right')}>
                  <div className={cx('product-price')}>
                     <span className={cx('cur-price')}>{moneyFormat(data?.cur_price)}₫</span>
                     <span className={cx('old-price')}>{moneyFormat(data?.old_price)}₫</span>
                     <span className={cx('vat-tag')}>| Đã bao gồm 10% VAT</span>
                  </div>
                  <div className={cx('product-options')}>
                     <div className={cx('option-group')}>
                        <div className={cx('option', 'active')}>
                           <p>64GB</p>
                           <span>+ 0₫</span>
                        </div>{' '}
                        <div className={cx('option')}>
                           <p>128GB</p>
                           <span>+ 1.600.000₫</span>
                        </div>
                     </div>
                     <div className={cx('option-group')}>
                        <div className={cx('option', 'active')}>
                           <p>Đen</p>
                           <span>+ 0₫</span>
                        </div>{' '}
                        <div className={cx('option')}>
                           <p>Trắng</p>
                           <span>+ 200.000₫</span>
                        </div>
                        <div className={cx('option')}>
                           <p>Xanh lá</p>
                           <span>+ 200.000₫</span>
                        </div>
                     </div>
                  </div>
                  <div className={cx('product-cta')}>
                     <button className={cx('buy-now', 'col-full')}>Mua Ngay</button>
                  </div>
                  <div className={cx('product-policy')}>
                     <h1 className={cx('policy-title')}>Chính Sách Bảo Hành</h1>
                     <ul>
                        <li>
                           <div className={cx('icon-frame')}>
                              <div className={cx('policy-icon', 'icon-doimoi')}></div>
                           </div>
                           <span>Hư gì đổi nấy 12 tháng tại 3384 siêu thị toàn quốc</span>
                        </li>
                        <li>
                           <div className={cx('icon-frame')}>
                              <div className={cx('policy-icon', 'icon-baohanh')}></div>
                           </div>
                           <span>Bảo hành chính hãng điện thoại 12 tháng tại các trung tâm bảo hành hãng</span>
                        </li>
                        <li>
                           <div className={cx('icon-frame')}>
                              <div className={cx('policy-icon', 'icon-box')}></div>
                           </div>
                           <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>
                        </li>
                     </ul>
                  </div>
                  <div className={cx('product-params')}>
                     <h1>Thông số {data?.name}</h1>
                     <table className={cx('params-table')}>
                        <tbody>
                           <tr>
                              <th
                                 style={{
                                    width: '30%',
                                 }}
                              ></th>
                              <th></th>
                           </tr>
                           {params.map((item, index) => {
                              return (
                                 <tr>
                                    <td>{paramsIndex[index]}:</td>
                                    <td>{item.slice(0, -2)}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className={cx('row')}>
               <div className={cx('product-detail')}>
                  <div className={cx('col-full', 'content')}>
                     <p className={cx('content-title')}>
                        Thông tin điện thoại
                        {data?.name}
                     </p>
                     <p className={cx('content-text')}>
                        Được xem là một trong những phiên bản iPhone "giá rẻ" của bộ 3 iPhone 11 series nhưng iPhone 11
                        128GB vẫn sở hữu cho mình rất nhiều ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu Được
                        xem là một trong những phiên bản iPhone "giá rẻ" của bộ 3 iPhone 11 series nhưng iPhone 11 128GB
                        vẫn sở hữu cho mình rất nhiều ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu Được xem là
                        một trong những phiên bản iPhone "giá rẻ" của bộ 3 iPhone 11 series nhưng iPhone 11 128GB vẫn sở
                        hữu cho mình rất nhiều ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu Được xem là một
                        trong những phiên bản iPhone "giá rẻ" của bộ 3 iPhone 11 series nhưng iPhone 11 128GB vẫn sở hữu
                        cho mình rất nhiều ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu
                     </p>
                     <div className={cx('image-frame', 'content-image')}>
                        <img src={`${data?.data.param_image}`} alt="" />
                     </div>
                  </div>
                  <button className={cx('more-detail-btn')}>Xem chi tiết</button>
               </div>
            </div>
            <div className="row">
               {/* <ProductRate /> */}
            </div>
            <div className={cx('row')}>
               <div className={cx('product-suggest')}>
                  <h1 className={cx('suggest-title')}>Xem thêm điện thoại khác</h1>
                  {/* <ProductItem products={products} /> */}
               </div>
            </div>
            <div className={cx('product-footer')}>
               <h1>Hết, mua hay không mua nói một câu thôi !!!</h1>
            </div>
            </>
      }
         </>
   );
}

export default DetailProductItem;
