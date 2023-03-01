import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

// import { useState } from 'react';
// import useStore from '../../hooks/useStore';
// import {getAll} from '../../store/actions'


const cx = classNames.bind(styles);

function DemandItem({ data, handleFilter, demand = false }) {
   // const [checked, setChecked] = useState([])

   const handleToggle = (string) => {
      // const newChecked = [...checked]
      // const index = newChecked.indexOf(string)

      // if (index < 0) {
      //    newChecked.push(string)
      // } else {
      //    newChecked.splice(index, 1)
      // }

      // setChecked(newChecked)
      handleFilter([string])
   }

   return (
      <>
         {data &&
            data.map((item, index) => {
               return (
                  <Link
                     to={`#`}
                     key={index}
                     // className={cx('sort-item', checked.indexOf(item.href) != -1 ? "active" : '')}
                     className={cx('sort-item')}
                     onClick={() => handleToggle(item.href)}
                  >
                     {demand ? item.text : <img src={item.image} alt="" />}
                  </Link>
               );
            })}
      </>
   );
}

export default DemandItem;
