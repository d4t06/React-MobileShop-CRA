import { useEffect, useState } from 'react';
// import useStore from '../../hooks/useStore';

import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';

import DemandItem from './demandItem';
import SelectedSort from './SelectedSort';
import { brand, demand } from '../../assets/data/brands';

import { getAll } from '../../store/actions';

import { useDispatch, useSelector } from 'react-redux';
import { selectedAllStore } from '../../store/productsSlice';

const cx = classNames.bind(styles);

function BrandSort({ category, count }) {
   // const [state, dispatch] = useStore();
   const store = useSelector(selectedAllStore)
   const dispatchRedux = useDispatch()
   const [Filters, setFilters] = useState('');

   const showFilteredResults = (filters) => {
      const { products, ...rest } = store;
      getAll(dispatchRedux, { ...rest, filters: filters });
   };

   const handleFilter = (filters, by) => {
      let newFilters = { ...Filters };
      // console.log("old brandsort filters = ", newFilters) ;
      // console.log('brandsort filter = ', filters, by);

      // nêu bấm nút clear filter
      if (by === 'clear') {
         newFilters = '';
      }

      // nếu chọn tất cả
      if (!filters) {
         delete newFilters[by];
      } else newFilters[by] = filters;

      // nếu không có filter gì cả
      if (!newFilters.price && !newFilters.brand) newFilters = '';

      // console.log("new brandsort filters =", newFilters);
      setFilters(newFilters);
      showFilteredResults(newFilters);
   };

   const isFiltered =
      (JSON.stringify(store.filters) !== '{}' && store?.filters?.brand) ||
      store?.filters?.price;

   useEffect(() => {
      // console.log("state filter useEffect = ", Filters);
      // if (!Filters) return
      // console.log("useEffect");
      setFilters(store.filters);
   }, [store]);

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
                     category={category}
                     data={Filters}
                     handleFilter={(filter, by) => handleFilter(filter, by)}
                  />
               ) : (
                  <DemandItem
                     category={category}
                     data={brand[category]}
                     handleFilter={(filter, by) => handleFilter(filter, by)}
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
