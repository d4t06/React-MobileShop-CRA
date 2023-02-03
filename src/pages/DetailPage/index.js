import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./DetailPage.module.scss";
import ProductDetailItem from "../../components/DetailProductItem";
const cx = classNames.bind(styles);

function DetailPage() {
   const { key } = useParams();
   const product = {
      name: "Samsung Galaxy Z Flip4 5G",
      image: "https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(12).jpg",
      special: ['Chính 6.7" & Phụ 1.9"', "Full HD+"],
      old_price: "23990000",
      cur_price: "18490000",
      productEvent: { tra_gop: true, image_label: null, event: "GIẢM RỰC CHÁY" },
      data: {
         key: "galaxy-z-flip-4",
         title: "Điện thoại Samsung Galaxy Z Flip4 128GB",
         images: [
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/samsung-galaxy-z-flip4-thumb-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(1).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(2).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(3).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(5).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(6).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(4).jpg",
            "https://cdn.tgdd.vn/Products/Images/42/258047/Slider/vi-vn-samsung-galaxy-z-flip4--(7).jpg",
         ],
         paramImage: "//cdn.tgdd.vn/Products/Images/42/258047/Kit/samsung-galaxy-z-flip4-note-1-1.jpg",
         params: [
            'Chính: Dynamic AMOLED 2X, Phụ: Super AMOLEDChính 6.7" & Phụ 1.9"Full HD+',
            "Android 12",
            "2 camera 12 MP",
            "10 MP",
            "Snapdragon 8+ Gen 1",
            "8 GB",
            "128 GB",
            "1 Nano SIM & 1 eSIMHỗ trợ 5G",
            "3700 mAh25 W",
         ],
      },
   };
   return <div className="row">{<ProductDetailItem data={product} />}</div>;
}
export default DetailPage;
