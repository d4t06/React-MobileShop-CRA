import classNames from 'classnames/bind';
import { cloneElement, useEffect, useState } from 'react';
import styles from '../ProductFilter.module.scss';

const cx = classNames.bind(styles);

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
   );
}

export default Checkbox;
