import classNames from 'classnames/bind';
import { cloneElement, useEffect, useState } from 'react';
import styles from '../ProductFilter.module.scss';

const cx = classNames.bind(styles);
const filterContiments = {
   brand: [
      {
         id: 1,
         value: 'Tất cả',
      },
      {
         id: 2,
         value: 'Apple',
      },
      {
         id: 3,
         value: 'Samsung',
      },
      {
         id: 4,
         value: 'Oppo',
      },
      {
         id: 5,
         value: 'Xiaomi',
      },
      {
         id: 6,
         value: 'Vivo',
      },
   ],
   price: [
      {
         id: 1,
         value: 'Tất cả',
      },
      {
         id: 2,
         value: 'Dưới 3 triệu',
      },
      {
         id: 3,
         value: 'Từ 3 - 7 triệu',
      },
      {
         id: 4,
         value: 'Từ 7 - 13 triệu',
      },
      {
         id: 5,
         value: 'Trên 13 triệu',
      },
   ],
   feature: [
      {
         id: 1,
         value: 'Bảo mật vân tay',
      },
      {
         id: 2,
         value: 'Chống nước',
      },
      {
         id: 3,
         value: 'Hổ trợ 5G',
      },
      {
         id: 4,
         value: 'Sạc nhanh',
      },
   ],
};

function Checkbox({ item, handleFilter }) {
   const [checked, setChecked] = useState([]);

   const handleToggle = (value) => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) newChecked.push(value);
      else newChecked.splice(currentIndex, 1);

      setChecked(newChecked);
      handleFilter(newChecked);
   };

   return (
      <>
         <div className={cx('filter-item')}>
            <a to={'/ddtd'}>
               <input
                  type="checkbox"
                  checked={checked.indexOf(item.id) === -1 ? false : true}
               //    checked={false}
                  onChange={() => handleToggle(item.id)}
               />
               <span className={cx('label')}>{item.value}</span>
            </a>
         </div>
      </>
   )

}

export default Checkbox;
