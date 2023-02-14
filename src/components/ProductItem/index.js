import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import moneyFormat from '../../utils/moneyFormat.js';
// import products from "src/assets/products";
const cx = classNames.bind(styles);

function ProductItem({ data: products, category }) {
   return (
      <>
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
                           <Link to={`/products/${item.href}`} className={cx('product-item-frame')}>
                              <img className={cx('product-item-image')} src={item.image} />
                              {!!item.product_label && (
                                 <img className={cx('product-item-label')} src={item.product_label} />
                              )}
                           </Link>
                           <div className={cx('product-item-event')}>
                              {item.label != '0' && <span className={cx('event-label')}>{item.label}</span>}
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
                              {category == 'dtdd' && (
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
                                          -{(((item.old_price - item.cur_price) / item.old_price) * 100).toFixed(0)}%
                                       </span>
                                    </div>
                                 )}
                                 <span className={cx('product-item_price--current')}>
                                    {moneyFormat(item.cur_price)}₫
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
