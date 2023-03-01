import { useState } from 'react';
import useStore from '../../hooks/useStore';

import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

import DemandItem from './demandItem';
import SelectedSort from './SelectedSort';
import {brand, demand} from '../../assets/data/brands'

import { getAll } from '../../store/actions';

const cx = classNames.bind(styles);

function BrandSort({ category }) {
   const [state, dispatch] = useStore()
   const [Filters, setFilters] = useState({})


   const showFilteredResults = (filters) => {
      const {data, status, ...rest} = state
      getAll(dispatch, {...rest ,filters:filters})
   }

    const handleFilter = (filters, by) => {
      const newFilters = {...Filters}; // lay tu state
      newFilters[by] = filters; // cap nhap

      setFilters(newFilters) // set lai state
      showFilteredResults(newFilters)
   };

   return (
      <>
         <div className={cx('brand-sort')}>
            {category === 'dtdd' ? <h1>Điện thoại</h1> : <h1>Laptop</h1>}
            <div className={cx('container')}>
               {/* selected sort luon thay dổi mỗi khi state thay dổi */}
               {state.filters?.brand?.length ? <SelectedSort data={state.filters.brand} handleFilter={handleFilter}/> :<DemandItem
               category={category}
               data = {brand[category]}
               handleFilter={ (filter) => handleFilter(filter, 'brand') }
               />}
            </div>
         </div>
         <div className={cx('demand-sort')}>
            {category === 'dtdd' ? (
               <h1>Điện thoại theo nhu cầu </h1>
            ) : (
               <h1>Laptop theo nhu cầu</h1>
            )}
            <div className={cx('container')}>
               <DemandItem
                  demand
                  data={demand[category]}
                  handleFilter={ (filter) => handleFilter(filter, 'price') }
               />
            </div>
         </div>
      </>
   );
}

export default BrandSort;
