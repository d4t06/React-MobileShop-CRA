import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../ProductFilter.module.scss';
// import Continents from './Continents'
import useStore from '../../../hooks/useStore';

const cx = classNames.bind(styles);

function Checkbox({ handleFilter, data }) {
   const [checked, setChecked] = useState([]);
   const [state, dispatch]  = useStore()

   const handleToggle = (value) => {
      if (state.status == 'loading') return
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) newChecked.push(value);
      else newChecked.splice(currentIndex, 1);

      setChecked(newChecked);
      handleFilter(newChecked);
   };

   return (
      <>
         {data && data.map((item, index) => {
            return (
               <div key={index} className={cx('filter-item')}>
                  <a to={'/ddtd'}>
                     <input
                        type="checkbox"
                        checked={checked.indexOf(item.href) === -1 ? false : true}
                        // item.array la cho filter by price
                        onChange={() => handleToggle(item.href)}
                     />
                     <span className={cx('label')}>{item.text}</span>
                  </a>
               </div>
            );
         })}
      </>
   );
}

export default Checkbox;
