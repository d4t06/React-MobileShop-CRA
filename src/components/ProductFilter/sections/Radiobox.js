import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../ProductFilter.module.scss';
// import Continents from './Continents'
import useStore from '../../../hooks/useStore';
const cx = classNames.bind(styles);


function Radiobox({ handleFilter, data }) {
   const [state, dispatch] = useStore()
   const [checked, setChecked] = useState(state.filters.price || '');

   console.log("checked radio = ", checked)

   const handleToggle = (array, e) => {
      if (JSON.stringify(array) ==  JSON.stringify(checked)) return
      // const newChecked = array
      // if (state.status == 'loading') {
      //    e.preventDefault()
      // };
      setChecked(array)
      handleFilter(array);
   };

   return (
      <>
         {data.map((item, index) => {
            return (
               <div key={index} className={cx('filter-item')}>
                  <a to={'/ddtd'}>
                     <input
                        type="radio"
                        name="price"
                        checked={JSON.stringify(checked) == JSON.stringify(item.array) ? true : false}
                        onChange={(e) => handleToggle(item.array, e)}
                     />
                     <span className={cx('label')}>{item.text}</span>
                  </a>
               </div>
            );
         })}
      </>
   );
}

export default Radiobox;
