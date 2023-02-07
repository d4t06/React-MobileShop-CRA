import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import moneyFormat from "src/utils/moneyFormat";
const cx = classNames.bind(styles);

function ProductItem({ products }) {
   // const { products, totalPage } = data;

   // console.log(products);
   // return <h1>item</h1>;
   return (
      <>
         <div className="row">
            {products &&
               products.map((item, index) => {
                  // const { id, attributes: info } = item;
                  return (
                     <a href={`/products/${item.data.key}`} key={index} className="col col-2-4">
                        <div className={cx("product-item")}>
                           <div className={cx("product-item-header")}>
                              {item.data.tra_gop && <span className={cx("label")}>Trả góp 0%</span>}
                           </div>
                           <div className={cx("product-item-frame")}>
                              <img className={cx("product-item-image")} src={item.image} />
                              {item.data.image_label && (
                                 <img className={cx("product-item-label")} src={item.data.image_label} />
                              )}
                           </div>
                           <div className={cx("product-item-event")}>
                              {item.data.event && <span className={cx("event-label")}>{item.data.event}</span>}
                           </div>
                           <div className={cx("product-item-body")}>
                              <h4 className={cx("product-item_name")}>{item.name}</h4>

                              <div className={cx("product-item_tags")}>
                                 {item.special.map((tag) => (
                                    <p className={cx("tag")}>{tag}</p>
                                 ))}
                                 {/* <span className={cx("product-item_tag-special")}></span> */}
                              </div>
                              <div className={cx("product-item_price")}>
                                 <span className={cx("product-item_price--old")}>{moneyFormat(item.old_price)}₫</span>
                                 <span className={cx("product-item_price--current")}>
                                    {moneyFormat(item.cur_price)}₫
                                 </span>
                              </div>
                           </div>
                        </div>
                     </a>
                  );
               })}
         </div>
      </>
   );
}

export default ProductItem;
