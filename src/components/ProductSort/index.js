import classNames from 'classnames/bind';
import styles from './ProductSort.module.scss';
import { useState } from 'react';
import { getAll, getSearchPage } from '../../store/actions';
import useStore from '../../hooks/useStore';
const cx = classNames.bind(styles);

const contiments = [
   {
      id: 1,
      value: 'Bán chạy nhất',
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

function ProductSort() {
   const [state, dispatch] = useStore();
   const [checked, setChecked] = useState(1);

   const handleFilter = (id) => {
      if (id) {
         const sort = {
            column: contiments[id - 1].column,
            type: contiments[id - 1].type,
         };
         const { href, data, status, ...rest } = state;
         if (state.category.includes('search')) {
            getSearchPage({ ...rest, sort: sort });
         } else getAll(dispatch, { ...rest, sort: sort });
      }
      // newSort[]
   };

   const handleToggle = (id) => {
      console.log(id);
      if (id !== checked) {
         handleFilter(id);
         setChecked(id);
      }
   };
   console.log('sort checked re-render ', checked);

   // console.log("checked = ", checked)
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
