import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import moneyFormat from '../../utils/moneyFormat.js';
import Context from '../../store/Context';
import ProductSort from '../ProductSort';

const cx = classNames.bind(styles);
function ProductItem({ data: products, searchResultPage }) {
   // const [state, dispatch] = useContext(Context);
   // const nagative = useNavigate();

   // const handleDetailPage = (e, params) => {
   //    e.preventDefault();
   //    dispatch({
   //       type: 'GET_ONE',
   //       category: params.category,
   //       href: params.href,
   //    });
   //    nagative(`/${params.category}/${params.href}`);
   // };

   return (
      <>
         <ProductSort />
         <div className="row">
            {products ? (
               products.map((item, index) => {
                  const feature = item.feature
                     .slice(0, item.feature.length - 5)
                     .split('*and*');
                  return (
                     <div
                        key={index}
                        className={cx(
                           'col',
                           searchResultPage ? 'col-3' : 'col-4'
                        )}
                     >
                        <div className={cx('product-item')}>
                           <Link
                              to={`/${item.category}/${item.href}`}
                              className={cx('product-item-frame')}
                              // onClick={(e) =>
                              //    handleDetailPage(e, {
                              //       href: item.href,
                              //       category: item.category,
                              //    })
                              // }
                           >
                              <img
                                 className={cx('product-item-image')}
                                 src={item.image}
                              />
                              {!!item.product_label && (
                                 <img
                                    className={cx('product-item-label')}
                                    src={item.product_label}
                                 />
                              )}
                           </Link>
                           <div className={cx('product-item-event')}>
                              {item.label && (
                                 <span className={cx('event-label')}>
                                    {item.label}
                                 </span>
                              )
                           }
                           </div>
                          {item.intallment && <div className={cx("product-item-installment")}>
                              <span>Trả góp 0%</span>
                           </div>}
                           <div className={cx('product-item-body')}>
                              <h4 className={cx('product-item_name')}>
                                 {item.name}
                              </h4>

                              <div className={cx('product-item_tags')}>
                                 {feature.map((tag, index) => (
                                    <p key={index} className={cx('tag')}>
                                       {tag}
                                    </p>
                                 ))}
                              </div>
                              {item.category === 'dtdd' && (
                                 <div className={cx('product-item-memory')}>
                                    <button
                                       className={cx('memory-item', 'active')}
                                    >
                                       64GB
                                    </button>
                                    <button className={cx('memory-item')}>
                                       128GB
                                    </button>
                                 </div>
                              )}
                              <div className={cx('gift')}>
                                 {!!item.gift && <span>{item.gift}</span>}
                              </div>
                              <div className={cx('product-item_price')}>
                                 {item.old_price && (
                                    <div>
                                       <span
                                          className={cx(
                                             'product-item_price--old'
                                          )}
                                       >
                                          {moneyFormat(item.old_price)}₫
                                       </span>
                                       <span className={cx('discount-percent')}>
                                          -
                                          {(
                                             (item.old_price - item.cur_price) /
                                             item.old_price
                                          ).toFixed(0)}
                                          %
                                       </span>
                                    </div>
                                 )}
                                 <span
                                    className={cx(
                                       'product-item_price--current'
                                    )}
                                 >
                                    {moneyFormat(item.cur_price)}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })
            ) : (
               <h1>IWhduawhdu</h1>
            )}
         </div>
      </>
   );
}

export default ProductItem;
