import classNames from 'classnames/bind';
import styles from './ProductFilter.module.scss';
import { a } from 'react-router-dom';
import Checkbox from './sections/Checkbox';
import { useState } from 'react';

const cx = classNames.bind(styles);

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

   }
   const handleFilter = (filters, category) => {
      const newFilters = {...Filters}; // lay tu state
      newFilters[category] = filters; // cap nhap

      if (category === 'price') {

      }

      showFilteredResults(newFilters)
      setFilters(newFilters) // set lai state

   };
   return (
      <div className={ cx('col', 'col-3') }>
        <div className={ cx('product-filter') }>
          <div className={ cx('filter-section') }>
            <h2 className={ cx('filter-title') }>Hãng sản xuất</h2>
            <div className={ cx('filter-list') }>
              { /* {filterContiments.brand.map((item, index) => {}) */ }
              { /* phai render data lay ra tu checkbox component */ }
              { /* tại vì mỗi checkbook có một state riêng, state lấy dữ liệu từ nhiều item, nhưng không thể render nhiều checkbox */ }
              { /* ban đầu render nhiều checkbox */ }
              { /* fix: chỉ có mỗi checkbox nhưng trong checkbox có nhiều item */ }
              <Checkbox handleFilter={ (filters) => handleFilter(filters, 'brand') } category={ 'brand' } />
              {/* truyền handleFilter vào cop Checkbox, chực hiện sau trể về đối số là filter sau đó tt*/}
            </div>
          </div>
          <div className={ cx('filter-section') }>
            <h2 className={ cx('filter-title') }>Mức giá</h2>
            <div className={ cx('filter-list') }>
              <Checkbox handleFilter={ (filter) => handleFilter(filter, 'price') } category={ "price" } />
            </div>
          </div>
          <div className={ cx('filter-section') }>
            <h2 className={ cx('filter-title') }>Tính năng đặc biệt</h2>
            <div className={ cx('filter-list') }>
              <Checkbox handleFilter={ (filter) => handleFilter(filter, 'feature') } category={ "feature" } />
            </div>
          </div>
        </div>
      </div>
   );
}

export default ProductFilter;
