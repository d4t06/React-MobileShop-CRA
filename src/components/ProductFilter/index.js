import classNames from 'classnames/bind';
import styles from './ProductFilter.module.scss';
import { a } from 'react-router-dom';
import Checkbox from './sections/Checkbox';
import { useState } from 'react';
import * as productServices from '../../services/productServices'

const cx = classNames.bind(styles);
const filterContiments = {
   brand: [
      {
         id: 1,
         value: 'Tất cả',
      },
      {
         id: 2,
         value: 'Apple',
      },
      {
         id: 3,
         value: 'Samsung',
      },
      {
         id: 4,
         value: 'Oppo',
      },
      {
         id: 5,
         value: 'Xiaomi',
      },
      {
         id: 6,
         value: 'Vivo',
      },
   ],
   price: [
      {
         id: 1,
         value: 'Tất cả',
      },
      {
         id: 2,
         value: 'Dưới 3 triệu',
      },
      {
         id: 3,
         value: 'Từ 3 - 7 triệu',
      },
      {
         id: 4,
         value: 'Từ 7 - 13 triệu',
      },
      {
         id: 5,
         value: 'Trên 13 triệu',
      },
   ],
   feature: [
      {
         id: 1,
         value: 'Bảo mật vân tay',
      },
      {
         id: 2,
         value: 'Chống nước',
      },
      {
         id: 3,
         value: 'Hổ trợ 5G',
      },
      {
         id: 4,
         value: 'Sạc nhanh',
      },
   ],
};

function ProductFilter() {

   const [Filters, setFilters] = useState({
      brand: [],
      price: [],
      feature: [],
   });

   const showFilteredResults = (filters) => {

      const params = {
         skip: 0,
         limit: 6,
         filters,
      }
      // console.log(params)
      // productServices.getProducts(params)

   }
   const handleFilter = (filters, category) => {
      const newFilters = { ...Filters };
      newFilters[category]= filters;
      console.log(category, newFilters);

      if (category === 'price') {

      }

      showFilteredResults(newFilters)
      setFilters(newFilters)

   };
   return (
      <div className={cx('col', 'col-3')}>
         <div className={cx('product-filter')}>
            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Hãng sản xuất</h2>
               <div className={cx('filter-list')}>
                  {filterContiments.brand.map((item, index) => {
                     return (
                        <Checkbox
                           key={index}
                           item={item}
                           handleFilter={(filters) =>
                              handleFilter(filters, 'brand')
                           }
                        />
                     );
                  })}
               </div>
            </div>

            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Mức giá</h2>
               <div className={cx('filter-list')}>
                  {filterContiments.price.map((item, index) => {
                     return (
                        <Checkbox
                           key={index}
                           item={item}
                           handleFilter={(filter) =>
                              handleFilter(filter, 'price')
                           }
                        />
                     );
                  })}
               </div>
            </div>

            <div className={cx('filter-section')}>
               <h2 className={cx('filter-title')}>Tính năng đặc biệt</h2>
               <div className={cx('filter-list')}>
                  {filterContiments.feature.map((item, index) => {
                     return <Checkbox key={index} item={item}
                     handleFilter={(filter) =>
                        handleFilter(filter, 'feature')
                     }
                     />
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductFilter;
