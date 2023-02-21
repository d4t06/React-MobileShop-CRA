import { Link, useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import moneyFormat from '../../utils/moneyFormat.js';
import Context from '../../store/Context'
import {getProducts, getOne} from '../../store/actions'

const cx = classNames.bind(styles);
function ProductItem({ data: products, category }) {
   const [state, dispatch] = useContext(Context);
   const nagative = useNavigate();

   // console.log(state)
   const handleDetailPage = (e, params) => {
      e.preventDefault();
      // getOne(dispatch, {category: params.category ,href: params.href});
      dispatch({type: 'GET_ONE', category: params.category ,href: params.href})
      nagative(`/${params.category}/${params.href}`)

   }


   return (
      <>
         <div className={cx("product-sort")}>
            <h1>Xem theo</h1>
            <ul className={cx("btn-group")}>
               <li className={cx("sort-btn", "active")}>
                  <Link to={''} >Bán chạy nhất</Link>
               </li>
               <li className={cx("sort-btn")}>
                  <Link to={''} >Giá thấp</Link>
               </li>
               <li className={cx("sort-btn")}>
                  <Link to={''} >Giá cao</Link>
               </li>
               <li className={cx("sort-btn")}>
                  <Link to={''} >Trả góp 0%</Link>
               </li>
            </ul>
         </div>
         <div className="row">
            {products &&
               products.map((item, index) => {
                  const feature = item.feature.slice(0, item.feature.length - 1).split('&');
                  return (
                     <div key={index} className="col col-4">
                        <div className={cx('product-item')}>
                           <div className={cx('product-item-header')}>
                              {!!item.intallment && <span className={cx('label')}>Trả góp 0%</span>}
                           </div>
                           <a href={`/dtdd/${item.href}`} className={cx('product-item-frame')}
                              onClick={(e) => handleDetailPage(e, {href: item.href, category: category})}
                           >
                              <img className={cx('product-item-image')} src={item.image} />
                              {!!item.product_label && (
                                 <img className={cx('product-item-label')} src={item.product_label} />
                              )}
                           </a>
                           <div className={cx('product-item-event')}>
                              {item.label !== '0' && <span className={cx('event-label')}>{item.label}</span>}
                           </div>
                           <div className={cx('product-item-body')}>
                              <h4 className={cx('product-item_name')}>{item.name}</h4>

                              <div className={cx('product-item_tags')}>
                                 {feature.map((tag, index) => (
                                    <p key={index} className={cx('tag')}>
                                       {tag}
                                    </p>
                                 ))}
                              </div>
                              {category === 'dtdd' && (
                                 <div className={cx('product-item-memory')}>
                                    <button className={cx('memory-item', 'active')}>64GB</button>
                                    <button className={cx('memory-item')}>128GB</button>
                                 </div>
                              )}
                              <div className={cx('gift')}>{!!item.gift && <span>{item.gift}</span>}</div>
                              <div className={cx('product-item_price')}>
                                 {item.old_price && (
                                    <div>
                                       <span className={cx('product-item_price--old')}>
                                          {moneyFormat(item.old_price)}₫
                                       </span>
                                       <span className={cx('discount-percent')}>
                                          -{((item.old_price - item.cur_price) / item.old_price).toFixed(0)}%
                                       </span>
                                    </div>
                                 )}
                                 <span className={cx('product-item_price--current')}>
                                    {moneyFormat(item.cur_price)}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
         </div>
      </>
   );
}

export default ProductItem;
