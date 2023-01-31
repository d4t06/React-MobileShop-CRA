import classNames from "classnames/bind";
import style from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ProductItem({ data }) {
   console.log(data);
   const { count, rows: products } = data;
   return (
      <>
         <div className="row">
            {products &&
               products.map((item) => {
                  // const { id, attributes: info } = item;
                  return (
                     <div key={item.id} className={cx("col-2-4")}>
                        <div className={cx("product-item")}>
                           <Link
                              to={"/product/" + item.id}
                              className={cx("product-item_img")}
                              style={{
                                 backgroundImage: `url(${item.image})`,
                                 color: "red",
                              }}
                           ></Link>
                           <div className={cx("product-item-body")}>
                              <h4 className={cx("product-item_name")}>{item.name}</h4>

                              <div className={cx("product-item_tag")}>
                                 <span className={cx("product-item_tag-special")}>#ShopDacBiet</span>
                              </div>
                              <div className={cx("product-item_price")}>
                                 <span className={cx("product-item_price--old")}>{item.old_price}</span>
                                 <span className={cx("product-item_price--current")}>{item.cur_price}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
         </div>

         <div className={cx("pagination")}>
            <ul className={cx("pagination-list")}>
               <li className={cx("pagination-item")}>
                  <Link className={cx("pagination-item_link")} to={"/products?_page=1"}>
                     1
                  </Link>
               </li>
               <li className={cx("pagination-item")}>
                  <Link className={cx("pagination-item_link")} to={"/products?_page=2"}>
                     2
                  </Link>
               </li>
               <li className={cx("pagination-item")}>
                  <Link className={cx("pagination-item_link")} to={"/products?_page=3"}>
                     3
                  </Link>
               </li>
            </ul>
         </div>
      </>
   );
}

export default ProductItem;
