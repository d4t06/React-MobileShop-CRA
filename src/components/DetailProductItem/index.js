import classNames from "classnames/bind";
import moneyFormat from "src/utils/moneyFormat";
import styles from "./DetailProductItem.module.scss";
const cx = classNames.bind(styles);

function DetailProductItem({ data }) {
   return (
      <>
         <div className={cx("product-header")}>
            <p>Điện thoại {data.name}</p>
            <div className={cx("header-box")}>
               <span>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star black"></i>
               </span>
               <span className={cx("rate-count")}>49 đánh giá</span>
            </div>
         </div>
         <div className={cx("row", "main-contain")}>
            <div className="col-large col-7 box_left">
               <div className={cx("image-slider")}>
                  <img src={data.data.images[0]} alt="" />
               </div>
            </div>
            <div className="col-large col-5 box_right">
               <div className={cx("product-price")}>
                  <span className={cx("cur-price")}>{moneyFormat(data.cur_price)}₫</span>
                  <span className={cx("old-price")}>{moneyFormat(data.old_price)}₫</span>
                  <span className={cx("vat-tag")}>| Đã bao gồm 10% VAT</span>
               </div>
               <div className={cx("product-cta")}>
                  <button className={cx("buy-now", "col-full")}>Mua Ngay</button>
               </div>
               <div className={cx("product-policy")}>
                  <h3 className={cx("policy-title")}>Chính sách bảo hành</h3>
                  <ul>
                     <li>
                        <span>Hư gì đổi nấy 12 tháng tại 3384 siêu thị toàn quốc </span>
                     </li>
                     <li>
                        <span>Bảo hành chính hãng điện thoại 12 tháng tại các trung tâm bảo hành hãng</span>
                     </li>
                     <li>
                        <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>
                     </li>
                  </ul>
               </div>
               <div className={cx("product-params")}>
                  <h1>Thông số {data.name}</h1>
                  <table className={cx("params-table")}>
                     <tr>
                        <th style={{ width: "30%" }}></th>
                        <th></th>
                     </tr>
                     <tr>
                        <td>Màn Hình</td>
                        <td>{data.data.params.screen}</td>
                     </tr>
                     <tr>
                        <td>Hệ điều hành</td>
                        <td>{data.data.params.os}</td>
                     </tr>
                     <tr>
                        <td>Camera sau</td>
                        <td>{data.data.params.back_camera}</td>
                     </tr>
                     <tr>
                        <td>Camera trước</td>
                        <td>{data.data.params.font_camera}</td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
}

export default DetailProductItem;
