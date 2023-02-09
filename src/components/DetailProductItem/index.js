import classNames from "classnames/bind";
import moneyFormat from "src/utils/moneyFormat";
import styles from "./DetailProductItem.module.scss";
import ImageSlider from "../ImageSlider";
import ProductItem from "../ProductItem";
import products from "src/assets/products";

const cx = classNames.bind(styles);

function DetailProductItem({ data }) {
   const paramsIndex = [
      "Màn hình",
      "Hệ điều hành",
      "Camera sau",
      "Camera trước",
      "CPU",
      "Bộ nhớ Ram",
      "Dung lượng",
      "Sim",
      "Pin",
   ];
   let params = data.data.params;
   params = params
      .slice(0, params.length - 4)
      .replaceAll("-", ", ")
      .split("and");
   return (
      <>
         <div className={cx("product-header")}>
            <p>Điện thoại {}</p>
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
            <div className={cx("col-large col-7", "box_left")}>
               {<ImageSlider data={data.data.images} />}
               <div className={cx("detail-image")}>
                  <img src={`${data.data.param_image}`} alt="" />
               </div>
            </div>
            <div className={cx("col-large col-5", "box_right")}>
               <div className={cx("product-price")}>
                  <span className={cx("cur-price")}>{moneyFormat(data.cur_price)}₫</span>
                  <span className={cx("old-price")}>{moneyFormat(data.old_price)}₫</span>
                  <span className={cx("vat-tag")}>| Đã bao gồm 10% VAT</span>
               </div>
               <div className={cx("product-options")}>
                  <div className={cx("option-group")}>
                     <div className={cx("option", "active")}>
                        <p>64GB</p>
                        <span>+ 0₫</span>
                     </div>{" "}
                     <div className={cx("option")}>
                        <p>128GB</p>
                        <span>+ 1.600.000₫</span>
                     </div>
                  </div>
                  <div className={cx("option-group")}>
                     <div className={cx("option", "active")}>
                        <p>Đen</p>
                        <span>+ 0₫</span>
                     </div>{" "}
                     <div className={cx("option")}>
                        <p>Trắng</p>
                        <span>+ 200.000₫</span>
                     </div>
                     <div className={cx("option")}>
                        <p>Xanh lá</p>
                        <span>+ 200.000₫</span>
                     </div>
                  </div>
               </div>
               <div className={cx("product-cta")}>
                  <button className={cx("buy-now", "col-full")}>Mua Ngay</button>
               </div>
               <div className={cx("product-policy")}>
                  <h1 className={cx("policy-title")}>Chính Sách Bảo Hành</h1>
                  <ul>
                     <li>
                        <div className={cx("icon-frame")}>
                           <div className={cx("policy-icon", "icon-doimoi")}></div>
                        </div>
                        <span>Hư gì đổi nấy 12 tháng tại 3384 siêu thị toàn quốc </span>
                     </li>
                     <li>
                        <div className={cx("icon-frame")}>
                           <div className={cx("policy-icon", "icon-baohanh")}></div>
                        </div>
                        <span>Bảo hành chính hãng điện thoại 12 tháng tại các trung tâm bảo hành hãng</span>
                     </li>
                     <li>
                        <div className={cx("icon-frame")}>
                           <div className={cx("policy-icon", "icon-box")}></div>
                        </div>

                        <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>
                     </li>
                  </ul>
               </div>
               <div className={cx("product-params")}>
                  <h1>Thông số {data.name}</h1>
                  <table className={cx("params-table")}>
                     <tbody>
                        <tr>
                           <th style={{ width: "30%" }}></th>
                           <th></th>
                        </tr>
                        {params.map((item, index) => {
                           return (
                              <tr>
                                 <td>{paramsIndex[index]}:</td>
                                 <td>{item}</td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
               <div className={cx("product-params")}>
                  <h1>Thông số {data.name}</h1>
                  <table className={cx("params-table")}>
                     <tbody>
                        <tr>
                           <th style={{ width: "30%" }}></th>
                           <th></th>
                        </tr>
                        {params.map((item, index) => {
                           return (
                              <tr>
                                 <td>{paramsIndex[index]}:</td>
                                 <td>{item}</td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
               <div className={cx("product-params")}>
                  <h1>Thông số {data.name}</h1>
                  <table className={cx("params-table")}>
                     <tbody>
                        <tr>
                           <th style={{ width: "30%" }}></th>
                           <th></th>
                        </tr>
                        {params.map((item, index) => {
                           return (
                              <tr>
                                 <td>{paramsIndex[index]}:</td>
                                 <td>{item}</td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div className={cx("row")}>
            <div className={cx("product-detail")}>
               <div className="col-full">
                  <div className={cx("content")}>
                     <p className={cx("content-title")}>Thông tin điện thoại {data.name}</p>
                     <p className={cx("content-text")}>
                        Được xem là một trong những phiên bản iPhone "giá rẻ" của bộ 3 iPhone 11 series nhưng iPhone 11
                        128GB vẫn sở hữu cho mình rất nhiều ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu
                     </p>
                     <div className={cx("image-frame", "content-image")}>
                        <img src={`${data.data.images[0]}`} alt="" />
                     </div>
                     <p className={cx("more-detail")}>Xem chi tiết</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="row">
            <div className={cx("col-full", "product-rate")}>
               <div className={cx("rate-container")}>
                  <h1>Đánh giá điện thoại {data.name}</h1>
                  <div className={cx("rate-body")}>
                     <div className={cx("rate-left", "col-5")}>
                        <div className={cx("header-box", "rate-top")}>
                           <p className={cx("star", "point")}>4.4</p>
                           <span>
                              <i className="fa-solid fa-star star"></i>
                              <i className="fa-solid fa-star star"></i>
                              <i className="fa-solid fa-star star"></i>
                              <i className="fa-solid fa-star star"></i>
                              <i className="fa-solid fa-star star black"></i>
                           </span>
                           <span className={cx("rate-count")}>49 đánh giá</span>
                        </div>

                        <ul className={cx("rating-list")}>
                           <li>
                              <div className={cx("number-star")}>
                                 <span className={cx("number")}>5</span>
                                 <span>
                                    <i className="fa-solid fa-star star"></i>
                                 </span>
                              </div>
                              <div className={cx("holderbar-star")}>
                                 <div className={cx("cur-bar")}></div>
                              </div>
                              <span className={cx("percent-star")}>49%</span>
                           </li>
                           <li>
                              <div className={cx("number-star")}>
                                 <span className={cx("number")}>4</span>
                                 <span>
                                    <i className="fa-solid fa-star star"></i>
                                 </span>
                              </div>
                              <div className={cx("holderbar-star")}>
                                 <div className={cx("cur-bar")}></div>
                              </div>
                              <span className={cx("percent-star")}>49%</span>
                           </li>
                           <li>
                              <div className={cx("number-star")}>
                                 <span className={cx("number")}>3</span>
                                 <span>
                                    <i className="fa-solid fa-star star"></i>
                                 </span>
                              </div>
                              <div className={cx("holderbar-star")}>
                                 <div className={cx("cur-bar")}></div>
                              </div>
                              <span className={cx("percent-star")}>49%</span>
                           </li>
                           <li>
                              <div className={cx("number-star")}>
                                 <span className={cx("number")}>2</span>
                                 <span>
                                    <i className="fa-solid fa-star star"></i>
                                 </span>
                              </div>
                              <div className={cx("holderbar-star")}>
                                 <div className={cx("cur-bar")}></div>
                              </div>
                              <span className={cx("percent-star")}>49%</span>
                           </li>
                           <li>
                              <div className={cx("number-star")}>
                                 <span className={cx("number")}>1</span>
                                 <span>
                                    <i className="fa-solid fa-star star"></i>
                                 </span>
                              </div>
                              <div className={cx("holderbar-star")}>
                                 <div className={cx("cur-bar")}></div>
                              </div>
                              <span className={cx("percent-star")}>49%</span>
                           </li>
                        </ul>
                     </div>
                     <div className={cx("rate-rigth", "col-half")}>
                        <div className="row">
                           <div className={cx("col-full", "rate-images")}>
                              <div className={cx("rate-image-frame")}>
                                 <img
                                    src="https://cdn.tgdd.vn/comment/52456871/received_440062338145774WW3X7.jpeg"
                                    alt=""
                                 />
                              </div>
                              <div className={cx("rate-image-frame")}>
                                 <img
                                    src="https://cdn.tgdd.vn/comment/52456871/received_440062338145774WW3X7.jpeg"
                                    alt=""
                                 />
                              </div>
                              <div className={cx("rate-image-frame")}>
                                 <img
                                    src="https://cdn.tgdd.vn/comment/52456871/received_440062338145774WW3X7.jpeg"
                                    alt=""
                                 />
                              </div>

                              <div className={cx("rate-image-frame")}>
                                 <img src="https://cdn.tgdd.vn/comment/53191068/20221129_185705GVIUK.jpg" alt="" />
                              </div>
                              <div className={cx("rate-image-frame")}>
                                 <img src="https://cdn.tgdd.vn/comment/51834367/20220617_0712040E81D.jpg" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={cx("customer-comments")}>
                     <ul>
                        <li>
                           <div className={cx("comment-top")}>
                              <span className={cx("customer-name")}>Nguyễn Hữu Đạt</span>
                              <span className={cx("customer-buy")}>
                                 <i className="fa-solid fa-check"></i>
                                 Đã mua tại TGDĐ
                              </span>
                           </div>
                           <div className={cx("comment-body")}>
                              <span className={cx("customer-rate-star")}>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                              </span>
                              <p className={cx("customer-rate-content")}>Hài lòng !</p>
                              <div className={cx("customer-cta")}></div>
                           </div>
                        </li>
                        <li>
                           <div className={cx("comment-top")}>
                              <span className={cx("customer-name")}>Nguyễn Hữu Đạt</span>
                              <span className={cx("customer-buy")}>
                                 <i className="fa-solid fa-check"></i>
                                 Đã mua tại TGDĐ
                              </span>
                           </div>
                           <div className={cx("comment-body")}>
                              <span className={cx("customer-rate-star")}>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                              </span>
                              <p className={cx("customer-rate-content")}>Hài lòng !</p>
                              <div className={cx("customer-cta")}></div>
                           </div>
                        </li>
                        <li>
                           <div className={cx("comment-top")}>
                              <span className={cx("customer-name")}>Nguyễn Hữu Đạt</span>
                              <span className={cx("customer-buy")}>
                                 <i className="fa-solid fa-check"></i>
                                 Đã mua tại TGDĐ
                              </span>
                           </div>
                           <div className={cx("comment-body")}>
                              <span className={cx("customer-rate-star")}>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                                 <i className="fa-solid fa-star star"></i>
                              </span>
                              <p className={cx("customer-rate-content")}>Hài lòng !</p>
                              {/* <div className={cx("customer-cta")}></div> */}
                           </div>
                        </li>
                        <li className={cx("comment-cta")}>
                           <button className={cx("write-comment")}>Viết đánh giá</button>
                           <button className={cx("see-more-comment")}>Xem thêm 77 đánh giá</button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className={cx("row")}>
            <div className={cx("product-suggest")}>
               <h1 className={cx("suggest-title")}>Xem thêm điện thoại khác</h1>
               {/* <div className={cx("products-item-container")}></div> */}
               <ProductItem products={products} />
            </div>
         </div>
         <div className={cx("product-footer")}>
            <h1>Hết, mua hay không mua nói một câu thôi !!!</h1>
         </div>
      </>
   );
}

export default DetailProductItem;
