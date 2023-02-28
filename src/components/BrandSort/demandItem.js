import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DemandItem({ data, category, demand = false }) {
   const [checked, setChecked] = useState([])

   // const handleFilter = () => {
   //    const {data, status, href, ...rest} = state
   //       getAll(dispatch, {...rest ,filters:filters})
   // }

   const handleToggle = (string) => {
      const newChecked = [...checked]
      const index = newChecked.indexOf(string)

      if (index < 0) {
         // chua co trong list
         newChecked.push(string)
      } else {
         newChecked.splice(index, 1)
      }

      // console.log(newChecked)
      setChecked(newChecked)
      console.log(newChecked)
   }

   return (
      <>
         {data &&
            data.map((item, index) => {
               return (
                  <Link
                     to={`#`}
                     key={index}
                     className={cx('sort-item', checked.indexOf(item.href) != -1 ? "active" : '')}
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
