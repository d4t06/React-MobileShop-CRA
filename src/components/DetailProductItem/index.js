import classNames from "classnames/bind";
import styles from "./DetailProductItem.module.scss";
const cx = classNames.bind(styles);

function DetailProductItem({ data }) {
   //    console.log(data);
   return (
      <>
         <div className="col-large col-7 box_left">
            <h1>{data.name}</h1>
            <div className={cx("image-slider")}>
               <img src={data.data.images[0]} alt="" />
            </div>
         </div>
         <div className="col-large col-5 box_right">
            <h1>Left content</h1>
         </div>
      </>
   );
}

export default DetailProductItem;
