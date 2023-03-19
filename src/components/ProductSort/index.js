import { useState, useEffect } from 'react';

import { selectedAllStore } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './ProductSort.module.scss';

import { getAll, getSearchPage } from '../../store/actions';
const cx = classNames.bind(styles);

const contiments = [
   {
      id: 1,
      value: 'Mới nhất',
      column: '',
      type: '',
   },
   {
      id: 2,
      value: 'Giá thấp',
      column: 'cur_price',
      type: 'asc',
   },
   {
      id: 3,
      value: 'Giá cao',
      column: 'cur_price',
      type: 'desc',
   },
   {
      id: 4,
      value: 'Trả góp 0%',
      column: 'intallment',
      type: true,
   },
];

function ProductSort({category}) {
   // const [state, dispatch] = useStore();
   const store = useSelector(selectedAllStore)
   const dispatchRedux = useDispatch()
   const [checked, setChecked] = useState(1);

   const {status, products, page,  ...rest} = store

   useEffect(() => {
      if (checked ===  1) return;
      setChecked(1)
   }, [category])

   const handleSort = (id) => {
      // console.log("sort state ", state)
      if (id) {
         let sort = {
            column: contiments[id - 1].column,
            type: contiments[id - 1].type,
         };

         // nếu là tất cả
         if (!sort.column) sort = '';

         // nếu sort ở search page
         if (category.includes('search')) {
            getSearchPage(dispatchRedux,{ category, page, sort });
         } else getAll(dispatchRedux, { ...rest, sort });
      }
   };

   const handleToggle = (id) => {
      console.log(id);
      if (id !== checked) {
         handleSort(id);
         setChecked(id);
      }
   };

   return (
      <div className={cx('product-sort')}>
         <h1>Xem theo</h1>
         <ul className={cx('btn-group')}>
            {contiments.map((item) => {
               return (
                  <li
                     className={cx(
                        'sort-btn',
                        checked === item.id ? 'active' : ''
                     )}
                     key={item.id}
                     onClick={() => handleToggle(item.id)}
                  >
                     {item.value}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default ProductSort;
