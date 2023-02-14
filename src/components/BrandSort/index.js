import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);


const mobileBrands = `https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png*and*
   https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png*and*
   https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg*and*
   https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png*and*`;

const laptopBrands = `https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/4/637769104385571970_Macbook-Apple@2x.jpg*and*
   https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/22/637732077455069770_Asus@2x.jpg*and*
   https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/15/637619564183327279_HP@2x.png*and*
   https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494668267616_Lenovo@2x.jpg*and*`;

function BrandSort({category}) {
console.log("category= ", category)
const data = category == 'dtdd' ? mobileBrands : laptopBrands
   const images = data.slice(0, data.length - 5).split('*and*');
   const mobileIndex = ["iphone", "samsung", "oppo", "xiaomi", "iphone", "samsung", "oppo", "xiaomi", "iphone", "samsung", "oppo", "xiaomi"]
   const laptopIndex = ["macbook", "asus", "hp", "msi", "iphone", "samsung", "oppo", "xiaomi", "iphone", "samsung", "oppo", "xiaomi"]
   return (
      <div className={ cx("brand-sort") }>
        { category == "dtdd" ? <h1>Hãng điện thoại</h1> : <h1>Hãng laptop</h1> }
        <ul className={ cx('brand-list') }>
          { images &&
            images.map((item, index) => {
               return ( <Link to={ `/${category}/${mobileIndex[index]}` } key={ index }>
                          <img src={ item } alt='' />
                        </Link>
               );
            }) }
        </ul>
      </div>
   );
}

export default BrandSort;