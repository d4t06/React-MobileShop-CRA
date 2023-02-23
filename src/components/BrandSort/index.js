import useStore from '../../hooks/useStore';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import DemandItem from './demandItem';

const cx = classNames.bind(styles);

const logos = {
   dtdd : `https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png*and*
      https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png*and*
      https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg*and*
      https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png*and*
      https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png*and*
      https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg*and*
      https://cdn.tgdd.vn/Brand/1/tcl-logo-lon-220x48.jpg*and*`,
   laptop: `https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png*and*
      https://cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png*and*`
}

const laptopDemandLogos = `
https://cdn.tgdd.vn/ValueIcons/laptop-gaming.png*and*
https://cdn.tgdd.vn/ValueIcons/laptop-hoc-tap-van-phong.png*and*
https://cdn.tgdd.vn/ValueIcons/laptop-do-hoa.png*and*
https://cdn.tgdd.vn/ValueIcons/laptop-mong-nhe.png*and*
https://cdn.tgdd.vn/ValueIcons/laptop-cao-cap-sang-trong.png*and*`


function BrandSort({ category }) {
   const [state, dispatch] = useStore()
   const demands = laptopDemandLogos.slice(0, laptopDemandLogos.length - 5).split('*and*');
   const brandImages = logos[category].slice(0, logos[category].length - 5).split('*and*');

   return (
      <>
         <div className={cx('brand-sort')}>
            {category === 'dtdd' ? <h1>Điện thoại</h1> : <h1>Laptop</h1>}
            <ul className={cx('brand-list')}>
               {brandImages &&
                  brandImages.map((item, index) => {

                     return (
                        <DemandItem key={index} imageOnly category={category} image={item} index={index}/>
                     );
                  })}
            </ul>
         </div>
         <div className={cx('demand-sort')}>
            {category === 'dtdd' ? (
               <h1>Điện thoại theo nhu cầu </h1>
            ) : (
               <h1>Laptop theo nhu cầu</h1>
            )}
            <ul className={cx('demand-list')}>
               {demands &&
                  demands.map((item, index) => {
                     // console.log(item);
                     return (
                        item && (
                           <DemandItem key={index} demand index={index} image={category == 'laptop' ? item : ''} category={category}/>
                        )
                     );
                  })}
            </ul>
         </div>
      </>
   );
}

export default BrandSort;
