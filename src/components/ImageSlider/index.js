import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./ImageSlider.module.scss";

const cx = classNames.bind(styles);

function ImageSlider({ data }) {
   //    console.log(data);
   const [curIndex, setCurIndex] = useState(0);

   const nextImage = () => setCurIndex((curIndex) => (curIndex == data.length - 1 ? 1 : curIndex + 1));

   const previousImage = () => setCurIndex((curIndex) => (curIndex == 0 ? data.length - 1 : curIndex - 1));
   return (
      <div className={cx("image-slider")}>
         <div className={cx("left-arrow", "slider-control")} onClick={() => previousImage()}>
            <i className="fa-solid fa-chevron-left"></i>
         </div>
         <div className={cx("right-arrow", "slider-control")} onClick={() => nextImage()}>
            <i className="fa-solid fa-chevron-right"></i>
         </div>
         <div className={cx("slider-index")}>
            <span>{curIndex}</span> / <span>{data.length - 1}</span>
         </div>
         <div className={cx("slider-item")}>{data && <img src={`${data[curIndex]}`} alt="" />}</div>
      </div>
   );
}

export default ImageSlider;
