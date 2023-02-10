import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

const cx = classNames.bind(styles);

function BrandSort({ data }) {
   const images = data.slice(0, data.length - 5).split('*and*');
   // console.log(images)

   return (
      <ul className={cx('brand-list')}>
         {images &&
            images.map((item, index) => {
               return (
                  <li key={index}>
                     <img src={item} alt="" />
                  </li>
               );
            })}
      </ul>
   );
}

export default BrandSort;
