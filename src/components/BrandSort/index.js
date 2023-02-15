import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import { Link } from 'react-router-dom';
import { laptopDemad } from '../../assets/data/images';
import DemandItem from './demandItem';

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

function BrandSort({ category }) {
   const brands = category == 'dtdd' ? mobileBrands : laptopBrands;
   const demands = laptopDemad.slice(0, brands.length - 5).split('*and*');
   const brandImages = brands.slice(0, brands.length - 5).split('*and*');

   return (
      <>
         <div className={cx('brand-sort')}>
            {category == 'dtdd' ? <h1>Điện thoại</h1> : <h1>Laptop</h1>}
            <ul className={cx('brand-list')}>
               {brandImages &&
                  brandImages.map((item, index) => {

                     return (
                        <DemandItem imageOnly category={category} image={item} index={index}/>
                     );
                  })}
            </ul>
         </div>
         <div className={cx('demand-sort')}>
            {category == 'dtdd' ? (
               <h1>Điện thoại theo nhu cầu </h1>
            ) : (
               <h1>Laptop theo nhu cầu</h1>
            )}
            <ul className={cx('demand-list')}>
               {demands &&
                  demands.map((item, index) => {
                     console.log(item);
                     return (
                        item && (
                           <DemandItem demand index={index} image={category == 'laptop' ? item : ''} category={category}/>
                        )
                     );
                  })}
            </ul>
         </div>
      </>
   );
}

export default BrandSort;
