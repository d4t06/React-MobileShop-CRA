import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../ProductFilter.module.scss';
import Continents from './Continents'
import useStore from '../../../hooks/useStore';

const cx = classNames.bind(styles);

function Checkbox({ handleFilter, category }) {
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
         {Continents[category].map((item) => {
            return (
               <div key={item.id} className={cx('filter-item')}>
                  <a to={'/ddtd'}>
                     <input
                        type="checkbox"
                        checked={checked.indexOf(item.value) === -1 ? false : true}
                        //    checked={false}
                        onChange={() => handleToggle(item.array ? item.array : item.value)}
                     />
                     <span className={cx('label')}>{item.value}</span>
                  </a>
               </div>
            );
         })}
      </>
   );
}

export default Checkbox;
