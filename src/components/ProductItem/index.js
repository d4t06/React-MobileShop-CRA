import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import moneyFormat from "src/utils/moneyFormat";

const cx = classNames.bind(styles);

function ProductItem({ products, page }) {
   const totalPage = 3;

   // const { products, totalPage } = data;

   var pagesNumElement = [];
   for (var i = 1; i <= totalPage; i++) {
      pagesNumElement.push(
         <li key={i} className={cx("pagination-item")}>
            <Link
               className={i == page ? cx("pagination-item_link", "active") : cx("pagination-item_link")}
               to={"/products?_page=" + i}
            >
               {i}
            </Link>
         </li>
      );
   }
   // console.log(products);
   // return <h1>item</h1>;
   return (
      <>
         <div className="row">
            {products &&
               products.map((item, index) => {
                  // const { id, attributes: info } = item;
                  return (
                     <Link to={item.data.key} key={index} className="col col-2-4">
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

                              <div className={cx("product-item_tag")}>
                                 <span className={cx("product-item_tag-special")}>#ShopDacBiet</span>
                              </div>
                              <div className={cx("product-item_price")}>
                                 <span className={cx("product-item_price--old")}>{moneyFormat(item.old_price)}</span>
                                 <span className={cx("product-item_price--current")}>
                                    {moneyFormat(item.cur_price)}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </Link>
                  );
               })}
         </div>

         <div className={cx("pagination")}>
            <ul className={cx("pagination-list")}>{pagesNumElement}</ul>
         </div>
      </>
   );
}

export default ProductItem;
