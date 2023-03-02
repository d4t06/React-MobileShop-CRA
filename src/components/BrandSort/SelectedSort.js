import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

const cx = classNames.bind(styles);

function SelectedSort({ data, handleFilter }) {
   const handleToggle = (string) => {

      console.log('click')
      const index = data.brand.indexOf(string);
      const newChecked = data.brand
      newChecked.splice(index, 1);
      // console.log("newChecked = ", newChecked)

      handleFilter(newChecked);
   };
   console.log(data);
   return (
      <>
         <h2>Bộ lọc:</h2>
         {data &&
            data.brand.map((item, index) => {
               return (
                  <span
                     onClick={() => handleToggle(item)}
                     className={cx('filter-item')}
                     key={index}
                  >
                     {item} <strong>X</strong>
                  </span>
               );
            })}
         {
            data.price && (
               <span
                  // onClick={() => handleToggle(item)}
                  className={cx('filter-item')}
               >
                  {data.price[0]} triệu - {data.price[1]} triệu <strong>X</strong>
               </span>
            )
         }
        {data.brand.length > 1 && <button
            className={cx('clear-filter')}
            onClick={() => handleFilter([], 'brand')}
         >
            Xóa tất cả
         </button>}
      </>
   );
}

export default SelectedSort;
