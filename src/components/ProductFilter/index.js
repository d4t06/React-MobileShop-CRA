import { useState } from 'react';
import useStore from '../../hooks/useStore'

import classNames from 'classnames/bind';
import styles from './ProductFilter.module.scss';

import Checkbox from './sections/Checkbox';
import Radiobox from './sections/Radiobox';

import { brand, price } from '../../assets/data';
import {getAll} from '../../store/actions'
// import {handleFilter} from '../../utils/handleFilter';

const cx = classNames.bind(styles);

function ProductFilter({category}) {
  const [state, dispatch] = useStore()
   const [Filters, setFilters] = useState(state.filters || {});

   const showFilteredResults = (filters) => {
      const {data, status, href, ...rest} = state
      getAll(dispatch, {...rest ,filters:filters})
   }

    const handleFilter = (filters, by) => {

      console.log("filters = ", filters)
      const newFilters = {...Filters}; // lay tu stat

      newFilters[by] = filters; // cap nhap

  

      showFilteredResults(newFilters)
      setFilters(newFilters)
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
              <Checkbox data={brand[category]} handleFilter={ (filters) => handleFilter(filters, 'brand') } />
              {/* truyền handleFilter vào cop Checkbox, chực hiện sau trể về đối số là filter sau đó tt*/}
            </div>
          </div>
          <div className={ cx('filter-section') }>
            <h2 className={ cx('filter-title') }>Mức giá</h2>
            <div className={ cx('filter-list', 'price') }>
              <Radiobox data={price[category]} handleFilter={ (filter) => handleFilter(filter, 'price') } />
            </div>
          </div>
          {/* <div className={ cx('filter-section') }>
            <h2 className={ cx('filter-title') }>Tính năng đặc biệt</h2>
            <div className={ cx('filter-list') }>
              <Checkbox handleFilter={ (filter) => handleFilter(filter, 'feature') } by={'feature'} category={ "feature" } />
            </div>
          </div> */}
        </div>
      </div>
   );
}

export default ProductFilter;
