import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

const cx = classNames.bind(styles);

function SelectedSort({ data, handleFilter }) {
   const handleToggle = (string) => {

      let newChecked = data.brand;
      const index = data.brand.indexOf(string);
      newChecked.splice(index, 1);

      if (!newChecked.length) newChecked = ''
      // console.log("newChecked = ", newChecked)

      handleFilter(newChecked, 'brand');
   };
   // console.log('data selected sord = ', data);
   return (
      <>
     
               <h2>Bộ lọc:</h2>
               {data?.brand &&
                  data?.brand?.map((item, index) => {
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
               {data?.price && (
                  <span
                     onClick={() => handleFilter('', 'price')}
                     className={cx('filter-item')}
                  >
                     {data.price[0]} triệu - {data.price[1]} triệu{' '}
                     <strong>X</strong>
                  </span>
               )}
               {(data?.brand?.length > 1 ||
                  (data?.brand?.length > 0 && data.price)) && (
                     <button
                        className={cx('clear-filter')}
                        onClick={() => handleFilter('','clear')}
                     >
                        <span>
                           <FontAwesomeIcon icon={faDeleteLeft}/>
                        </span>
                     </button>
                  )}
         
      </>
   );
}

export default SelectedSort;
