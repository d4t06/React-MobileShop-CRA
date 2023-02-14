import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);


const mobileBrands = `https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png*and*
   https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png*and*
   https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg*and*
   https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png*and*
   https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png*and*
   https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg*and*
   https://cdn.tgdd.vn/Brand/1/tcl-logo-lon-220x48.jpg*and*`;

const laptopBrands = `https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png*and*`;

function BrandSort({category}) {
const data = category == 'dtdd' ? mobileBrands : laptopBrands
   const images = data.slice(0, data.length - 5).split('*and*');
   const mobileIndex = ["iphone", "samsung", "oppo", "xiaomi", "realme", "nokia", "tcl"]
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
   )
}

export default BrandSort;