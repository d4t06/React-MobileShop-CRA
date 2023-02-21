import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

const cx = classNames.bind(styles);

const demandHrefs = {
   mobile: ['choi-game', 'quay-phim-chup-anh', 'mong-nhe', 'nho-gon'],
   laptop: [
      'gaming',
      'hoc-tap-van-phong',
      'do-hoa-ky-thuat',
      'mong-nhe',
      'cao-cap-sang-trong',
   ],
};

const brandHrefs = {
   mobile: ['iphone', 'samsung', 'oppo', 'xiaomi', 'realme', 'nokia', 'tcl'],
   laptop: [
      'macbook',
      'asus',
      'hp',
      'lenovo',
      'acer',
      'dell',
      'msi',
      'surface',
   ],
};

const textDemads = {
   laptop: [
      'Gaming',
      'Học Tập - Văn phòng',
      'Đồ họa - Kỹ thuật',
      'Mỏng nhẹ',
      'Cao cấp - Sang trọng',
   ],
   mobile: [
      'Chơi game - Cấu hình cao',
      'Chụp ảnh - Quay phim',
      'Mỏng nhẹ',
      'Nhỏ gọn'
   ]
};

function DemandItem({ category, index, image, imageOnly = false, demand = false }) {
   if (category)
      return (
         <Link
            to={`/${category}/${
               demand
                  ? demandHrefs[category][index]
                  : brandHrefs[category][index]
            }`}
            key={index}
            className={cx('sort-item')}
         >
            {image && <img src={image} alt="" />}
            {!imageOnly && textDemads[category][index]}
         </Link>
      );
}

export default DemandItem;
