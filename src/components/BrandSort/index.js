import { useState } from 'react';
import useStore from '../../hooks/useStore';

import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

import DemandItem from './demandItem';
import SelectedSort from './SelectedSort';
import { brand, demand } from '../../assets/data/brands';

import { getAll } from '../../store/actions';

const cx = classNames.bind(styles);

function BrandSort({ category, count }) {
   const [state, dispatch] = useStore();
   const [Filters, setFilters] = useState({});

   const showFilteredResults = (filters) => {
      const { data, status, ...rest } = state;
      getAll(dispatch, { ...rest, filters: filters });
   };

   const handleFilter = (filters, by) => {
      const newFilters = { ...Filters }; // lay tu state
      newFilters[by] = filters; // cap nhap

      setFilters(newFilters); // set lai state
      showFilteredResults(newFilters);
   };

   const isFiltered = JSON.stringify(state.filters) !== '{}' && state?.filters?.brand || state?.filters?.price

   console.log("isFiltered =", !!isFiltered)

   return (
      <>
         <div className={cx('brand-sort')}>
            {category === 'dtdd' ? (
               <h1>
                  Điện thoại {`( `}
                  <span style={{ color: '#cd1818' }}>{count}</span>
                  {` )`} sản phẩm
               </h1>
            ) : (
               <h1>
                  Laptop {`( `}
                  <span style={{ color: '#cd1818' }}>{count}</span>
                  {` )`} sản phẩm
               </h1>
            )}
            {/* <h1 className={cx('count')}>{`(${count}) Sản phẩm`}</h1> */}
            <div className={cx('container')}>
               {/* selected sort luon thay dổi mỗi khi state thay dổi */}
               {isFiltered ? (
                  <SelectedSort
                     data={state.filters}
                     handleFilter={(filter) => handleFilter(filter, 'brand')}
                  />
               ) : (
                  <DemandItem
                     category={category}
                     data={brand[category]}
                     handleFilter={(filter) => handleFilter(filter, 'brand')}
                  />
               )}
            </div>
         </div>
         {/* <div className={cx('demand-sort')}>
          <h1>Nhu cầu</h1>
            <div className={cx('container')}>
               <DemandItem
                  demand
                  data={demand[category]}
                  handleFilter={ (filter) => handleFilter(filter, 'price') }
               />
            </div>
         </div> */}
      </>
   );
}

export default BrandSort;
