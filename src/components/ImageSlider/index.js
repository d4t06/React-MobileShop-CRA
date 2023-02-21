import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./ImageSlider.module.scss";

const cx = classNames.bind(styles);

const banners = {
   dtdd : `https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/7/638113890324216138_F-C1_1200x300.png*and*
     https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638108014497018540_F-C1_1200x300-1.jpg*and*
     https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/9/638115328693245687_F-C1_1200x300@2x.png*and*
     https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638108014497018540_F-C1_1200x300-1.jpg*and*`,

   laptop : `https://cdn.tgdd.vn/2023/01/banner/acer-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/laptop-gaming-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/01/banner/Mac-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/Lenovo-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/HP-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/Laptop-ASUS-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/DELL-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2023/02/banner/MSI-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2022/10/banner/lapevo-800-200-800x200.png*and*
     https://cdn.tgdd.vn/2022/10/banner/800-200-800x200-142.png*and*`,
}

function ImageSlider({category, data}) {
  let images;
  if (category) {
    images = banners[category].slice(0, banners[category].length - 5).split("*and*");
  } else {
    images = data.slice(0, data.length - 5).split("*and*");
  }
  const [curIndex, setCurIndex] = useState(0);

  const nextImage = () => setCurIndex((curIndex) => (curIndex == images.length - 1 ? 0 : curIndex + 1));

  const previousImage = () => setCurIndex((curIndex) => (curIndex == 0 ? images.length - 1 : curIndex - 1));

  return (
    <div className={ cx("image-slider") }>
      <div className={ cx("left-arrow", "slider-control") }
        onClick={ () => previousImage() }>
        <i className='fa-solid fa-chevron-left'></i>
      </div>
      <div className={ cx("right-arrow", "slider-control") }
        onClick={ () => nextImage() }>
        <i className='fa-solid fa-chevron-right'></i>
      </div>
      <div className={ cx("slider-index") }>
        <span>{ curIndex + 1 }</span> / <span>{ images.length }</span>
      </div>
      <div className={ cx("slider-item") }>
        { images && <img src={ `${images[curIndex]}` }
                      alt='' /> }
      </div>
    </div>
  );
}

export default ImageSlider;